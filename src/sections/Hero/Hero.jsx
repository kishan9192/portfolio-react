import styles from './Herostyle.module.css' 
import heroImage from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

 const Hero = () => {
    const {theme, toggleTheme} =  useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const themeLinkedIn = theme === 'light' ? linkedInLight : linkedInDark
    const themeGithub = theme === 'light' ? githubLight : githubDark
    

   return (
     <section id = "hero" className={styles.container}>
     <div className={styles.colorModeContainer}> 
        <img className={styles.hero} src={heroImage} alt = 'Profile picture of Kishan Mishra'/>
        <img src={themeIcon} className={styles.colorMode} onClick={toggleTheme} alt = 'Toggle mode'/>
     </div>
     <div className={styles.info}>
        <h1>Kishan<br/>Mishra</h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href = "https://www.linkedin.com/in/kishanmishraa/" target = "_blank">
                <img src={themeLinkedIn} alt="LinkedIn"/>
            </a>
            <a href = "https://www.github.com/kishan9192" target = "_blank">
                <img src={themeGithub} alt="Github"/>
            </a>
        </span>
        <p className={styles.description}>Profile summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary </p>
        <a href = {CV} download>
            <button className='hover'> Resume </button>
        </a>
     </div>
     </section>
   )
 }
 
 export default Hero