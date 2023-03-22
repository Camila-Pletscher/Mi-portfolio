import React from "react";
import SkillItem from "./SkillItem";
import Marquee from 'react-fast-marquee';

function SkillList(props) {
  return (
    <Marquee pauseOnHover={true} speed={40}>
      {props.skills.map((skill) => (
        <SkillItem key={skill.id} icon={skill.icon} title={skill.title} />
      ))}
    </Marquee>
  );
}

export default SkillList;
