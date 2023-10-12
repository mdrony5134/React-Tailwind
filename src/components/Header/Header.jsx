import { Link, useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div>
        <nav className="nav-bar mb-8">
           <div className="nav-item flex list-none gap-4 shadow-xl bg-[#dee1dd] w-full  py-5 text-xl items-center justify-center">
            <li> <Link className="link"  to='/'>Home</Link> </li>
            <li><Link  className="link" to='/about'>About</Link></li>
            <li><Link  className="link" to='/skill'>Skill</Link></li>
            <li><Link  className="link" to='/project'>Project</Link></li>


            <button style={{width: "100px"}} onClick={()=>{localStorage.removeItem("user"), navigate("/login")}}>Logout</button>

           </div>
        </nav>
       </div>
    </div>
  )
}

export default Header