import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
import './skills.css'
import { IoLogoJavascript } from 'react-icons/io'
import { SiDjango, SiExpress, SiFastapi, SiFlask, SiMysql, SiTypescript } from 'react-icons/si'
import SkillItem from './SkillItem'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'


export function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='skills-container'>
        <h3 className='skills-title'>Skills</h3>

        <div
          className="decorator"
          style={{ top: "20rem", left: "10rem", filter: 'blur(100px)'}}
        ></div>


        <div
          className="decorator"
          style={{ top: "20rem", right: "calc(50% - 6rem)", filter: 'blur(100px)'}}
        ></div>


        <div
          className="decorator"
          style={{ top: "20rem", right: "10rem", filter: 'blur(100px)'}}
        ></div>

        

        <div className="grid-skills ">


          <SkillItem Icons={FaHtml5}/>
          <SkillItem Icons={FaCss3Alt}/>
          <SkillItem Icons={RiTailwindCssFill}/>
          <SkillItem Icons={FaBootstrap}/>
          

          <SkillItem Icons={IoLogoJavascript}/>
          <SkillItem Icons={SiTypescript}/>
          <SkillItem Icons={FaReact}/>

          <SkillItem Icons={FaNodeJs}/>
          <SkillItem Icons={SiExpress}/>


          <SkillItem Icons={FaPython}/>
          <SkillItem Icons={SiFlask}/>
          <SkillItem Icons={SiDjango}/>
          <SkillItem Icons={SiFastapi} />
          


          <SkillItem Icons={SiMysql}/>
          <SkillItem Icons={BiLogoPostgresql} />
          
        </div>
      </div>
    </div>
  )
}

