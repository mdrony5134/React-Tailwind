import { Link, useNavigate } from "react-router-dom"
// import "../components/css/singup.css"
import {  useState } from "react"



const SingUp = () => {
  const [data , setData] = useState({email:'', password: ''})
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handelSingUp = () =>{
    // if(email && password){
    //   setData((prev)=>[{...prev, email, password}])
     
    //   // navigate('/login')

    // }

    let userList = localStorage.getItem("userList")
    userList = userList?JSON.parse(userList):[]
    let checkUser = userList.some(({email})=>(email === data.email))
    if(checkUser)alert("User is already exists!")
    if(!checkUser){
      localStorage.setItem("userList", JSON.stringify([...userList, data]))
      localStorage.setItem("user", JSON.stringify(data))
      navigate("/")

    // }
    // setEmail('')
    // setPassword('')
  }
}

  // useEffect(()=>{
  //   localStorage.setItem("data",JSON.stringify(data))
  // },[data])
  // navigate("/login")

  return (
    <div>

       <div className="containers">
       <div><h3>Sign Up</h3></div>

        <input 
      type="email" 
      placeholder="Enter Your Email" 
      // value={email}
      onChange={(e)=>setData(pre=>{return{...pre,email:e.target.value}})}
      />

      <input 
      type="password" 
      placeholder="Enter Your Password" 
      // value={password}
      onChange={(e)=>setData(pre=>{return{...pre, password: e.target.value}})}
      />
      <button onClick={handelSingUp}>SingUp</button>
      
       </div>
    </div>
  )
}

export default SingUp