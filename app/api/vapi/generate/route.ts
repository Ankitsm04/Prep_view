import { db } from '@/firebase/admin';
import { getRandomInterviewCover } from '@/lib/utils';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const DAILY_LIMIT = 5;

export async function POST(req: Request) {
  const { type, role, level, techstack, amount, userid } = await req.json();

  try {
    // 🔹 1. RATE LIMITING (per user per day)
    const today = new Date().toISOString().split('T')[0];

    const existingToday = await db
      .collection('interviews')
      .where('userId', '==', userid)
      .where('createdAt', '>=', today)
      .get();

    if (existingToday.size >= DAILY_LIMIT) {
      return Response.json(
        { success: false, message: 'Daily limit reached' },
        { status: 429 }
      );
    }

    // 🔹 2. CACHING (avoid duplicate Gemini calls)
    const cacheQuery = await db
      .collection('interviews')
      .where('role', '==', role)
      .where('level', '==', level)
      .where('type', '==', type)
      .limit(1)
      .get();

    if (!cacheQuery.empty) {
      return Response.json({
        success: true,
        data: cacheQuery.docs[0].data(),
        cached: true,
      });
    }

    // 🔹 3. OPTIMIZED PROMPT (short + structured)
    const prompt = `
Generate ${amount} ${type} interview questions for:
Role: ${role}
Level: ${level}
Tech: ${techstack}

Rules:
- Return ONLY JSON array
- No special characters
- Format: ["Q1", "Q2"]
`;

    // 🔹 4. GEMINI CALL (updated model)
    const { text } = await generateText({
      model: google('gemini-2.5-flash-lite'), // ✅ updated
      prompt,
      temperature: 0.7,
    });

    // 🔹 5. SAFE PARSING
    let questions;
    try {
      questions = JSON.parse(text);
    } catch {
      questions = text
        .split('\n')
        .filter((q) => q.trim().length > 0);
    }

    // 🔹 6. SAVE TO DB
    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(','),
      questions,
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection('interviews').add(interview);

    return Response.json({ success: true, data: interview });

  } catch (err) {
    console.error(err);

    // 🔹 7. FALLBACK (VERY IMPORTANT)
    const fallback = [
      "Tell me about yourself",
      "Explain a challenging project you worked on",
      "What are your strengths and weaknesses?",
      "Explain a core concept in your tech stack",
    ];

    return Response.json(
      { success: true, fallback: true, data: fallback },
      { status: 200 }
    );
  }
}