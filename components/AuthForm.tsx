"use client"

import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { toast } from 'sonner';
import FormField from '@/components/FormField';
import { useRouter } from 'next/navigation';
 

const authFormSchema = (type : FormType) => {
    return z.object({
        name: type==='sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}
const AuthForm = ({type} : {type: FormType}) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        try
        {   
            if(type === 'sign-up')
            {
                toast.success(`Account created successfully`);  
                router.push('/sign-in');          
                console.log(values);
            } else {
                toast.success(`Account logged in successfully`);  
                router.push('/');          
                console.log(values);
            }
            console.log(values);
        }
        catch(error)
        {
            console.log(error);
            toast.error(`There was an error: ${error}`);
        }
      }

      const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[556px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" width={38} height={32}/>
                <h2 className='text-primary-100'>Prepview</h2>
            </div>
            <h3>Practice Job Interviews with AI</h3>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full y-6 space-y-6 mt-4 form">
        {!isSignIn && (
           <FormField
           control={form.control}
           name="name"
           label="Name"
           placeholder="Your Name"
           type="text"
            />
        )}
       <FormField
           control={form.control}
           name="email"
           label="Email"
           placeholder="Your Email Address"
           type="email"
            />
           <FormField
           control={form.control}
           name="password"
           label="Password"
           placeholder="Your Password"
           type="password"
            />
        <Button className='btn' type="submit">{isSignIn ? "Sign In" : "Create an Account"}</Button>
      </form>
    </Form>

    <p>{isSignIn ? "Don't have an account?" : "Already have an account?"}
        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className='font-bold text-user-primary ml-1'>
        {!isSignIn ? "Sign Up" : "Sign In"}
        </Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm
