

import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion";
import profileimage2 from "../images/profile2.jpg"
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';
type Props = {
  pageInfo:PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
    //   className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center">
     <h3 className="absolute top-[-10px] md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl ">
        About
      </h3>
       <motion.img
        initial={{
            x:-200,
            opacity:0,

        }}
        transition={{
            duration:1.2,

        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        
        src={urlFor(pageInfo?.profilePic).url()}
       className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40  rounded-full object-cover  md:w-60 md:h-60  md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
    />
    
    <div className="space-y-10 pt-5 px-0 md:px-10">
          <h4 className="  text-2xl pt-10   md:text-4xl  font-semibold">
            Here is a  Little  Background
            {/* <span className="decoration-[#F7AB0A]/50">Little</span>{" "} */}
          
         </h4> 
        {/* <div className="text-base">
        {pageInfo?.backgroundInfo} */}
        {/* **change made */}
        <p className="  text-xs  md:text-xl font-bold text-gray-500">{pageInfo?.backgroundInfo}</p>

        {/* </div> */}
        <p className=" uppercase text-xs md:text-sm tracking-[5px] md:tracking-[10px]">For Five most Best Web Development Website for Free <Link className="pl-4 text-2xl text-[#F7AB0A] animate-pulse" href={"https://discord.gg/DPJXyP3Q"}>Join Discord</Link></p>
      </div>
      
  
      
      </motion.div> 
  )
}