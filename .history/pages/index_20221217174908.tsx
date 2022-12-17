import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head"
import About from "../Components/About";
import ContactMe from "../Components/ContactMe";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Experiences from "../Components/Experiences";
import Skills from "../Components/Skills";
import Image from "next/image"


import { Experience,PageInfo,Skill,Social } from "../typings";


import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { urlFor } from "../sanity";
type Props={
  pageInfo:PageInfo;
  experiences:Experience[];
  skills:Skill[];
  socials:Social[];

}
export default function Home({pageInfo,experiences,skills,socials}:Props) {

  
  return (
    <div className="bg-[rgb(15,15,15)] text-white h-auto  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>DevWithCvr</title>
       </Head>
       
      
    {/*Header */}
    
      <Header  socials={socials}/>
    {/*Hero*/}
    {/* here we are using the type react typewritter library */}
     <section id="hero" className="snap-start">
      <Hero pageInfo={pageInfo}/>
     </section>
    {/*About*/}
      <section id="About" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
    {/*Experience*/}
      <section id="experience" className="snap-center">
        <Experiences experiences={experiences} />
      </section>
    {/*skills*/}
     <section id="skills" className="snap-center">
      <Skills skills={skills} />
     </section>
    {/*Project */}

    {/*Contact Me */}
     <section id="contactme"  className="snap-center">
      <ContactMe />
     </section>
  <Link href="#hero">
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <img 
        
        src={urlFor(pageInfo?.heroImage).url()}
         alt="picture"  
         className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"  />
      </div>
    </footer>
  </Link>
    </div>
  )
}


export const getStaticProps:GetStaticProps=async()=>{
  const pageInfo: PageInfo = await fetchPageInfo();


  const experiences: Experience[]=await fetchExperiences();
  const skills: Skill[]=await fetchSkills();
  const socials: Social[]=await fetchSocial();
  


  return {
    props:{
      pageInfo,
      experiences,
      skills,
      socials,
    },

    //Next.js will attempt to re-generate the page 
    // -when a request comes in 
    // -At most once every 10 seconds
    revalidate:10,
  };
};