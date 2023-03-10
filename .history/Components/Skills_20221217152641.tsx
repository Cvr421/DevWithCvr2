import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duraion: 1.5 }}

      className="flex relative flex-col text-center md:text-left xl:flex-row md:max-w-[2000px]   md:xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
   Hover over a skill for Current proficiency
   </h3> */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">

        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill}/>
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}




      </div>
    </ motion.div>
  )
}

export default Skills