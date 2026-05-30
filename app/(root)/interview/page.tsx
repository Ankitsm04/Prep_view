import React from 'react'
import type { Metadata } from 'next'
import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'

export const metadata: Metadata = {
  title: "Generate Interview | Prepview AI",
  description: "Generate and practice interview questions tailored to your skills.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = async () => {
  const user = await getCurrentUser();

  return (
    <main>
        <h1>Interview Generation</h1>
        <Agent userName={user?.name!} userId={user?.id} type="generate"/>
    </main>
  )
}

export default page;
