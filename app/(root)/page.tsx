import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import {getInterviewById, getLatestInterviews } from '@/lib/actions/general.actions'

const page = async () => {
  const user = await getCurrentUser();
  const [ userInterviews, latestInterviews] = await Promise.all([
    getInterviewById(user?.id!),
    getLatestInterviews({userId: user?.id!})
  ])
  const hasPastInterviews = !!userInterviews && userInterviews.length > 0;
  const hasUpcommingInterviews = !!latestInterviews && latestInterviews?.length > 0;
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview Ready with AI-Powered Interview Prep</h2>
          <p className='text-lg'>
              Practice on real Interview questions and get feedback from AI.
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>

        <Image src='/robot.png' alt="robo-dude" width={400} height={400} className='max-sm:hidden'/>

      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          { hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} interviewId={interview.id} key={interview.id}/>
            ))
          ) : (  
            <p>Your have'nt given interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
        { hasUpcommingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} interviewId={interview.id} key={interview.id}/>
            ))
          ) : (  
            <p>There are no interviews avaliable</p>
          )}
        </div>
      </section>
    </>
  )
}

export default page