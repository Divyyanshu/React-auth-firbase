import RegisterForm from "../../components/molecules/registerForm"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"


const register = () => {
  return (
    <main className='flex flex-col h-screen justify-center items-center gap-3'>
    <h1 className='text-4xl font-bold'>Register</h1>
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

export default register