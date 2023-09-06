import React, { useEffect, useState } from "react";
import {MdDateRange,MdLocationOn} from "react-icons/md";
import { motion } from "framer-motion";



export function ShowcaseCard(props) {
  const { title, description, image_link, href, date, project_cat} = props;
  var shortdesc = ''
  if (description.length < 120){shortdesc = description}
  else {shortdesc = description.slice(0,90)+"..."}
  var shorttitle = ''
  if (title.length < 36){shorttitle = title}
  else {shorttitle = title.slice(0,36)+"..."}

  return (
    <a href={props.href}><div className="bg-white border border-gray-200 hover:-translate-y-1 overflow-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-60 h-full">
      
      <img className="rounded-t-lg object-cover h-40 w-60 aspect-video" src={props.image_link} alt=""/>
      
      
      <p className="px-5 pt-3 text-xs text-gray-400 font-bold">{props.project_cat}</p>

      
      <h5 className= "px-5 pt-3 text-xl font-bold tracking-tight text-gray-900">
        {shorttitle}
        {/* {props.name} */}
      </h5>
      <div className="px-5 py-3">
        <div className="flex"><MdDateRange/> <p className="px-2 text-sm"> {props.date}</p></div>
      </div>
      
      <p className="px-5 pb-5 text-gray-700">
        {shortdesc}
      </p>

    </div></a>


  );
}


export default function Showcase() {
  const [projects,setProject] = useState([])

  useEffect(() => {
    const getProjects= async () => {
      const res = await fetch('https://3dc-nextra-phi.vercel.app/api/projects/get')
      const json = await res.json();
      setProject(json);
    };

    getProjects();


  },[projects])

  //RYAN data.map() is how u make ur data displayed.
  return (
      // <div className="px-4 py-4 grid sm:grid-cols-1 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="px-4 py-4 flex gap-4 overflow-auto">
        {projects.map((project) => (
          <ShowcaseCard {...project} href="/sample" />
        ))}
      </div>
  );
}
