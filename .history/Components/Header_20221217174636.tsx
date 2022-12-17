import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion";
import Link from 'next/link';
import {Social} from "../typings";
type Props = {
  socials:Social[]
}

export default function Header({socials}: Props) {
  return (
    // sticky : this will let the component stick to the top with 0 margin 
    // flex-start : this will make the components inline 
    // justify-between: this will make both components in equal space sapareted between 
    // mx-auto :  this will make the equal spacing from the both side of both the components
   // using frmer motion for effect 
    <header className="sticky top-5  p-2 md:p-5 flex items-start justify-between m-2 max-w-7xl mx-auto z-20 xl:items-center">
    <motion.div 
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1

    }}
    transition={{
      duration:1.5,
    }}
    
    
    className="flex flex-row items-center">

       {/*Social icons*/}
       {socials.map((social)=>(
         
         <SocialIcon
             key={social._id}
           url={social.url}
           fgColor="gray"
           bgColor="transparent"
         />



       ))}

      
       
    </motion.div> 
    <Link legacyBehavior href="#contactme" >
    <motion.div 
     initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1

    }}
    transition={{
      duration:1.5,
    }}
     className="flex flex-row items-center text=grau=300 cursor-pointer">
    <SocialIcon
         className="cursor-pointer"
         network="email"
         fgColor="gray"
         bgColor="transparent"
       
         />
  <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch </p>
    </motion.div>
    </Link>
    </header>
  )
} 