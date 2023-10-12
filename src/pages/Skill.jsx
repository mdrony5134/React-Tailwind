import img1 from '../image/html-5.png'
import img2 from '../image/css (1).png'
import img3 from '../image/javascript.png'
import img4 from '../image/react.png'
// import '../components/css/skill.css'
import { useParams } from 'react-router-dom'

const Skill = () => {
  const {skillName} = useParams()

  return (
    <div>
     <div className='container'>
        <h2 className='text-xl'>Tech Stack : {skillName}</h2>
          <div className='tech-stack flex'>
            <img className='w-28' src={img1}/>
            <img className='w-28' src={img2}/>
            <img className='w-28' src={img3}/>
            <img className='w-28' src={img4}/>
          
          </div>
     </div>
    </div>
  )
}

export default Skill