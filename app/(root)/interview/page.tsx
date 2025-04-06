import React from 'react'
import Agent from '@/components/Agent'

const page = () => {
    const api_key = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
    console.log(api_key);
  return (
    <>
        <h3>Interview Generation</h3>
        <Agent userName="You" userId="user1" type="generate"/>
    </>
  )
}

export default page
