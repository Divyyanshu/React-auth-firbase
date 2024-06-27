import { Link } from "react-router-dom"
import LoginForm from "../../components/molecules/loginForm"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card"


const login = () => {
  return (
    <main className='flex flex-col h-screen justify-center items-center gap-3'>
    <h1 className='text-4xl font-bold'>Login</h1>
    <Card className='w-1/3'>
  <CardHeader>
    <CardTitle>Hello Users</CardTitle>
  </CardHeader>
  <CardContent>
    <LoginForm></LoginForm>
  </CardContent>
  <CardFooter>
    <Link to={"/register"}> <u>New Here ? Create an Acoount</u> </Link>
  </CardFooter>
</Card>
</main>
  )
}

export default login