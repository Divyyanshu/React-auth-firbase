import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home  from "./lib/pages/home"
import  Login  from "./lib/pages/login"
import  Register  from "./lib/pages/register"


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route index Component = {Home}></Route>
        <Route path="/login" Component = {Login}></Route>
        <Route path="/register" Component = {Register}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
