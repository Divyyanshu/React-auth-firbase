import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../lib/firebase"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  email : z.string(),
  password: z.string().min(6,{
    message : "At least using 6 character"
  }).max(15),
  confirmPassword : z.string().min(6,{
    message : "At least using 6 character"
  }).max(15),
})

const RegisterForm = () => {
  
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email : "",
      password : "",
      confirmPassword :"",
    },
  })

   async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUserWithEmailAndPassword(auth,values.email,values.password)
    console.log(values.email,values.password,values.confirmPassword)
    navigate("/login")
    alert("Registration is successfull")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder=""type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}

export default RegisterForm