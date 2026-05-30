import type { Metadata } from 'next'
import AuthForm from '@/components/AuthForm'

export const metadata: Metadata = {
  title: "Sign In | Prepview AI",
  description: "Sign in to your Prepview AI account to continue with your interview preparation.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <AuthForm type="sign-in"/>
}

export default page