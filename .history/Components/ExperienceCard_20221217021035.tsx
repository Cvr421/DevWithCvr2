import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image"
import { Experience } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-[450px] h-[450px] md:w-[600px] md:h-[650px] xl:w-[900px] snap-center bg-[#F7AB0A] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    
    
    ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,

        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-20 h-20 md:w-32 md:h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        // src={urlFor(experience?.companyImage).url()}
        src={urlFor(experience?.companyImage).url()}
        alt="picsss"
      />
      <div className="px-0 md:px-10">
        <h4 className=" text-lg md:text-2xl text-left ml-2 text-black md:text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-left ml-2 text-lg md:text-2xl mt-0 md:mt-1 pt-3">DevWithCvr</p>
        <div className="flex space-x-2 my-2 object-center ml-2">

          {experience.technologies?.map((technology) => (
            <img
              className="h-10 w-10 rounded-full "
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="pic"

            />
          ))}

          {/* 
              {
                
              experience.technologies.map((technology)=>(
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full"
                  src={urlFor(technology.image).url()}

                 />

              ))} */}

          {/* <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCg8JqsAywWcx9yXjTjj7b-E-nPKbASsjpg&usqp=CAU " alt=""/> */}


        </div>
        {/* <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p> */}
        {/* h-80 overflow-y-scroll   //to add scrollbar*/}
        <div>
        <ul className="list-disc space-y-1 md:space-y-3 ml:-2 md:ml-5 text-xs md:text-lg  h-80 overflow-y-scroll pr-2 md:pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 text-black pt-3">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        </div>
      </div>

    </article>
  )
}