import type { Metadata } from 'next'
import AuthForm from '@/components/AuthForm'

export const metadata: Metadata = {
  title: "Sign Up | Prepview AI",
  description: "Create your Prepview AI account to start preparing for your interviews with AI-powered interview prep.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <AuthForm type="sign-up"/>
}

export default page