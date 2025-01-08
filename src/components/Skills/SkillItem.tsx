import { IconType } from 'react-icons';
import './SkillItem.css'
function SkillItem({ Icons } : { Icons: IconType } ) {
  return (
    <div className='skills-item blur-bg'>
      <Icons /> 
    </div>
  )
}

export default SkillItem