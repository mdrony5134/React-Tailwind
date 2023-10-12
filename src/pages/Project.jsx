import project1 from '../image/Product Generator.png'
// import "../components/css/project.css"
const Project = () => {
  return (
    <div>
      <div className="container projects-page">
        <div className="projects">
          <div className='projects-details'>
            <img src={project1} alt="project1" />
           <div>
           <h3>Product Card Generator</h3>
            <p>The CardGenerator React component enables users to create product cards with image upload, form validation, and dynamic card generation. Categorized into Men's T-shirt, Men's Pant, and Kid's Dress sections, it offers real-time error handling, state management, and form reset functionality, ensuring a seamless user experience for designing custom product cards.</p>
            <div className='projects-link'>
            <a href="https://mdrony5134.github.io/Product-Card-Generator/" target='blank'>Live Demo</a>
            <a href="https://github.com/mdrony5134/Product-Card-Generator" target='blank'>GitHub</a>
           </div>
           </div>
          </div>
      </div>

      <div className="projects">
          <div className='projects-details'>
           <div>
           <h3>Product Card Generator</h3>
            <p>The CardGenerator React component enables users to create product cards with image upload, form validation, and dynamic card generation. Categorized into Men's T-shirt, Men's Pant, and Kid's Dress sections, it offers real-time error handling, state management, and form reset functionality, ensuring a seamless user experience for designing custom product cards.</p>
            <div className='projects-link'>
            <a href="https://mdrony5134.github.io/Product-Card-Generator/" target='blank'>Live Demo</a>
            <a href="https://github.com/mdrony5134/Product-Card-Generator" target='blank'>GitHub</a>
           </div>
           </div>
           <img src={project1} alt="project1" />
          </div>
      </div>
        </div>
    </div>
  )
}

export default Project