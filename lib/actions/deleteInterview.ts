'use server'

import { deleteInterviewById } from './general.actions'
import { revalidatePath } from 'next/cache'

export async function handleInterviewDelete(formData: FormData) {
  const interviewId = formData.get('interviewId') as string
  if (!interviewId) return

  await deleteInterviewById(interviewId)
  revalidatePath('/') 
}
