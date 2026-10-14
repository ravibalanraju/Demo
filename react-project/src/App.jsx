import { useState } from "react"
import Course from "./Course"
import Navbar from "./Navbar"
function App() {
  const[isloggedin,setlogin]=useState(false)
  return (
    <>
    <div>
      {isloggedin ? (
        <h1>Welcome</h1>
      ):(
        <h1>Please Login</h1>
      )}
      <button onClick={()=>setlogin(false)}>Login</button>
      
    </div>
    <Navbar></Navbar>
    </>
  )
}

export default App
