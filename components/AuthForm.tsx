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
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/client';
import { signIn, signUp } from '@/lib/actions/auth.action';
 

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
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
        try
        {   
            if(type === 'sign-up')
            {
                const {name , email, password} = values;
                const userCredientials = await createUserWithEmailAndPassword(auth, email, password);
                const result = await signUp({
                    uid : userCredientials.user.uid,
                    name: name!,
                    email,
                    password,
                })
                if(!result?.success){
                    toast.error(result?.message);
                    return;
                }
                toast.success(`Account created successfully, Please Login!`);  
                router.push('/sign-in');          
                console.log(values);
            } else {
                const{ email, password} = values;
                const userCredientials = await signInWithEmailAndPassword(auth, email, password);
                const idToken = await userCredientials.user.getIdToken();
                if(!idToken){
                    toast.error('Failed to sign in');
                    return;
                }
                await signIn({email, idToken});
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
        {!isSignIn ? "Sign In" : "Sign Up"}
        </Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm
