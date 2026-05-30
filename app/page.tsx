import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Prepview AI - Master Technical Interviews with AI',
  description: 'Practice technical interviews with AI-powered feedback. Get instant analysis on coding, communication, and problem-solving skills. Sign up free today.',
  keywords: ['interview prep', 'coding interview', 'AI interview', 'technical interview', 'interview practice', 'job interview'],
  openGraph: {
    title: 'Prepview AI - Master Technical Interviews with AI',
    description: 'Practice technical interviews with AI-powered feedback. Get instant analysis on your performance.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prepview AI - Master Technical Interviews with AI',
    description: 'Practice technical interviews with AI-powered feedback.',
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-dark-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Prepview AI logo" width={38} height={32} />
          <span className="text-2xl font-bold text-white">Prepview AI</span>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="ghost">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Master Technical Interviews with AI
            </h1>
            <p className="text-xl text-gray-300">
              Practice real interview questions, get instant AI feedback, and ace your next job interview with confidence.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/sign-up">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400">No credit card required. Start practicing in seconds.</p>
          </div>

          <div className="relative h-96 md:h-full">
            <Image
              src="/robot.png"
              alt="AI Interview Coach"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-dark-200 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Prepview AI?</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to prepare for your technical interviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Feedback</h3>
              <p className="text-gray-400">
                Get real-time analysis on your coding skills, communication, and problem-solving approach from our advanced AI coach.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real Questions</h3>
              <p className="text-gray-400">
                Practice with questions from top tech companies. Cover coding, system design, behavioral, and technical topics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Tracking</h3>
              <p className="text-gray-400">
                Track your progress over time. See detailed breakdowns of strengths and areas for improvement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Results</h3>
              <p className="text-gray-400">
                Get feedback immediately after your interview. No waiting for human review, practice as much as you want.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multiple Tech Stacks</h3>
              <p className="text-gray-400">
                Choose from 20+ programming languages and tech stacks. Practice in the language you're interviewing for.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-dark-100 p-8 rounded-lg border border-primary-200 border-opacity-20">
              <div className="w-12 h-12 bg-primary-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Role-Specific Prep</h3>
              <p className="text-gray-400">
                Practice for frontend, backend, full-stack, DevOps, and other specialized roles with tailored questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">
            Three simple steps to better interview preparation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Choose Your Role',
              description: 'Select the position, tech stack, and difficulty level you want to practice for.',
            },
            {
              step: 2,
              title: 'Practice Interview',
              description: 'Answer real interview questions with voice interaction powered by our AI coach.',
            },
            {
              step: 3,
              title: 'Get Feedback',
              description: 'Receive detailed feedback on your performance with actionable improvement suggestions.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-200 bg-opacity-20 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary-200">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-dark-200 bg-opacity-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is Prepview AI free?',
                a: 'Yes! You can start practicing for free. We offer a free tier with limited interviews per month, and premium plans for unlimited access.',
              },
              {
                q: 'What programming languages are supported?',
                a: 'We support 20+ programming languages including Python, JavaScript, Java, C++, Go, Rust, and many more.',
              },
              {
                q: 'How realistic is the interview practice?',
                a: 'Our interviews use real questions from top tech companies like Google, Amazon, Meta, and Microsoft. The AI feedback simulates real interviewer evaluation.',
              },
              {
                q: 'Can I practice any time?',
                a: 'Yes! Practice 24/7 at your own pace. No scheduling required. Get instant feedback on every interview.',
              },
              {
                q: 'How does the AI provide feedback?',
                a: 'Our AI analyzes your code quality, communication clarity, problem-solving approach, and overall performance to provide comprehensive feedback.',
              },
              {
                q: 'Do you track progress?',
                a: 'Yes! Your dashboard shows detailed statistics including past interviews, score trends, and areas for improvement.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-dark-100 p-6 rounded-lg border border-primary-200 border-opacity-10">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary-200 from-opacity-20 to-primary-100 to-opacity-10 border border-primary-200 border-opacity-30 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Ace Your Interview?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Start practicing today and get instant feedback from our AI coach. No credit card required.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 bg-dark-200 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.svg" alt="Prepview AI" width={32} height={32} />
                <span className="font-bold text-white">Prepview AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Master technical interviews with AI-powered feedback.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/sign-up" className="hover:text-primary-200 transition">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-primary-200 transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-primary-200 transition">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-primary-200 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-primary-200 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-200 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#privacy" className="hover:text-primary-200 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-primary-200 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Prepview AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
