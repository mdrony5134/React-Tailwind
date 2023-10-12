import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import '../components/css/login.css'

const LoginPage = () => {
  const [data , setData] = useState({email:'', password: ''})

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handelLogin = () =>{
    // const storedUser = JSON.parse(localStorage.getItem('user'))
    let userList = localStorage.getItem('userList')
    userList= userList?JSON.parse(userList):[]
    let checkUser = userList.some(({email, password})=> (email === data.email && password === data.password))
    if(checkUser){
      localStorage.setItem("user", JSON.stringify(data))
      navigate("/")
    }else{
      alert("User not registered!")
      navigate("/singUp")
    }

    // if(storedUser && storedUser.email === email && storedUser.password === password){
    //   localStorage.setItem("LoggedIn", "true")
    //   navigate("/skill")
    // }else{
    //   alert("email or password invalid")
    // }
    
  }
  return (
    <div>
      <div className="containers max-w-[400px] bg-[#fff] p-5 m-auto rounded-md">
      <h3 className="" >Login</h3>
      <input className="w-full border-solid border-gray-50 border-1 mb-5 p-[10px] text-lg rounded-md"
      type="email" 
      placeholder="Enter Your Email" 
      // value={email}
      onChange={(e)=>setData(pre=>{return{...pre,email:e.target.value}})}
      />

      <input  className="w-full  border-solid border-gray-50 border-2 mb-5 p-[10px] text-lg rounded-md"
      type="password" 
      placeholder="Enter Your Password" 
      // value={password}
      onChange={(e)=>setData(pre=>{return{...pre,email:e.target.value}})}
      />
      <button className="bg-green-600 w-full" onClick={handelLogin}>Login</button>
      <p>Don't have an account? <Link to="/SingUp">Click here</Link> </p>
      </div>
    </div>
  )
}

export default LoginPage