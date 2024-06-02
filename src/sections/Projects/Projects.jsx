import styles from './ProjectsStyle.module.css'
import viberr from '../../assets/viberr.png'
import hipster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'
import freshburger from '../../assets/fresh-burger.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src = {viberr} title='Viberr' description='Streaming app' link={"https://github.com/kishan9192/Expense-Tracker---React"
}/>
            <ProjectCard src={freshburger} title='Project 2' description='Expense tracker app' link = "https://github.com/kishan9192/Expense-Tracker---React"/>
            <ProjectCard src = {hipster} title='Hipster' description='Hipster app' link={"https://github.com/kishan9192/Expense-Tracker---React"
}/>
            <ProjectCard src={fitlift} title='Fit Lift' description='Fit lift app' link = "https://github.com/kishan9192/Expense-Tracker---React"/>
        </div>
    </section>
  )
}

export default Projects