import RegisterForm from "../../components/molecules/registerForm"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"


const login = () => {
  return (
    <main className='flex flex-col h-screen justify-center items-center gap-3'>
    <h1 className='text-4xl font-bold'>Login Form</h1>
    <p>Enter your email address in this fields</p>
    <Card className='w-1/3'>
  <CardHeader>
    <CardTitle>Hello Users</CardTitle>
  </CardHeader>
  <CardContent>
    <RegisterForm></RegisterForm>
  </CardContent>
</Card>
</main>
  )
}

export default login