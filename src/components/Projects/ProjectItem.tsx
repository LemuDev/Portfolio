import './ProjectItem.css'

function ProjectItem({ title, img, languages, github }: { title: string, img: string, languages: string[], github: string }) {
  return (
    <div className='blur-bg card-projects'>
      <img src={img} alt="" />
      <div>
        <h3 className='card-projects-title'>{title}</h3>
  
        <div className='card-projects-languages-container'>
          {
            languages.map((l)=> (
              <span className='card-projects-languages'>{l}</span>
            ))
          }

        </div>
  
        <div className='btn-container'>
          <a className="btn-github" href={github} target='_blank'>
            <i className="fa-brands fa-github"></i>
              see github
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectItem