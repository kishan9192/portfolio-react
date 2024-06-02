/* eslint-disable react/prop-types */

const SkillList = ({ title, icon }) => {
  return (
    <span>
      <img src={icon} alt="checkmark icon" />
      <p>{title}</p>
    </span>
  );
};

export default SkillList;
