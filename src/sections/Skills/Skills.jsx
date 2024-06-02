import styles from "./SkillStyle.module.css";
import checkmarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={"sectionTitle"}>Skills</h1>
      <div className={styles.skillList}>
        <SkillList title="HTML" icon={checkmarkIcon} />
        <SkillList title="CSS" icon={checkmarkIcon} />
        <SkillList title="React" icon={checkmarkIcon} />
        <SkillList title="Javascript" icon={checkmarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList title="Redux" icon={checkmarkIcon} />
        <SkillList title="Typescript" icon={checkmarkIcon} />
        <SkillList title="Python" icon={checkmarkIcon} />
        <SkillList title="Django" icon={checkmarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList title="MongoDB" icon={checkmarkIcon} />
        <SkillList title="Data-Structures" icon={checkmarkIcon} />
        <SkillList title="Jest" icon={checkmarkIcon} />
        <SkillList title="Playwright" icon={checkmarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList title="Cypress" icon={checkmarkIcon} />
        <SkillList title="React-Native" icon={checkmarkIcon} />
        <SkillList title="C++" icon={checkmarkIcon} />
        <SkillList title="Problem Solving" icon={checkmarkIcon} />
        <SkillList title="Git" icon={checkmarkIcon} />
      </div>
    </section>
  );
};

export default Skills;
