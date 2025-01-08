import ProjectItem from './ProjectItem'
import './projects.css'

export function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects-container'>
        <h2 className='projects-title'>Projects</h2>

        <div className="grid-projects">
          <ProjectItem img='/img/mugishop.png' title='MugiShop' github='https://github.com/LemuDev/MugiShop-Back' languages={['Python', 'Flask',  'Flask-Marshmellow', 'SqlALchemy', 'Javascript', 'React', 'Css', 'Zod']}/> 
        </div>
      </div>
  </div>
  )
}

