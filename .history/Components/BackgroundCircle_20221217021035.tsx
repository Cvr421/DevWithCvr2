import React from 'react'
import {motion} from "framer-motion";
type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div  
     initial={{
      opacity:0,
     }}
     animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"],
     }}
    transition={{duration:2.5,}}
    
    
    className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[100px]  w-[100px]  md:h-[200px] md:w-[200px] mt-40 md:mt-52 animate-ping"  />
      <div className="rounded-full border border-[#333333] h-[200px]  w-[200px] mt-40 md:h-[300px] md:w-[300px] absolute md:mt-52" />
      <div className="rounded-full border border-[#2B65EC] h-[300px]  w-[300px] mt-40 md:h-[500px] md:w-[500px] absolute md:mt-52 animate-pulse"/>
      <div className="rounded-full border border-[#F7AB0A] opacity-20  h-[400px] mt-40 w-[400px] md:h-[650px] md:w-[650px] absolute md:mt-52 animate-pulse"/>
      {/* <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52"/> */}
    {/* <div className="rounded-full border border-[#F7AB0A]  opacity-20 h-[650px] w-[650-px] absolute mt-52 animate-pulse"/> */} 
      {/* <div className="rounded-full border border-[#333333]   h-[800px] w-[800-px] absolute" /> */}
    </motion.div>
  )
}