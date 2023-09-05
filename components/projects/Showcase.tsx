import React, { useEffect, useState } from "react";
import {MdDateRange,MdLocationOn} from "react-icons/md";
import { motion } from "framer-motion";


const projects = [
  {
    title: 'Literacy in AI workshop',
    description: 'AISG',
    date: '26/07/23 3.30pm - 5.30pm',
    venue: 'LT 4 2.404',
    type: 'Workshop',
    href: '/sample',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  },

  {
    title: '3DC Android Dev',
    description: 'Android Studio, Java, Firebase',
    date: '12/06/23 2.30pm - 4.30pm',
    venue: 'i3 lab 1.605',
    type: 'Workshop',
    href: '/sample',
    image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
  },

  {
    title: 'How to Git gud',
    description: 'Git, Github desktop',
    date: '29/05/23 2.00pm - 4.30pm',
    venue: 'i3 lab 1.605',
    type: 'Workshop',
    href: '/sample',
    image:'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
  },

  {
    title: 'Women in Code',
    description: 'Networking for careers in Tech',
    date: '08/03/23 4.00pm - 5.30pm',
    venue: 'Thinktank 13 2.307',
    type: 'Event',
    href: '/sample',
    image:'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX',
  },

  {
    title: "Automation : There's Gotta Be a Better Way! ",
    description: 'PowerQuery, Excel',
    date: '15/02/23 3.00pm - 4.30pm',
    venue: 'Thinktank 13 2.307',
    type: 'Workshop',
    href: '/sample',
    image:'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX'
  },  

  {
    title: 'Intro to HTML and CSS',
    description: '',
    date: '19/01/23 1.00pm - 3.00pm',
    venue: 'i3 1.605',
    type: 'Project',
    href: '/sample',
    image_link:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },

  {
    title: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Project',
    href: '/sample',
    image_link:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },

  {
    title: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Project',
    href: '/sample',
    image_link:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },

];

export function ShowcaseCard(props) {
  const { title, description, image_link, href, date, venue, type} = props;
  var shortdesc = ''
  if (description.length < 120){shortdesc = description}
  else {shortdesc = description.slice(0,90)+"..."}
  var shorttitle = ''
  if (title.length < 36){shorttitle = title}
  else {shorttitle = title.slice(0,36)+"..."}

  return (
    <a href={props.href}><div className="bg-white border border-gray-200 hover:-translate-y-1 overflow-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-60 h-full">
      
      <img className="rounded-t-lg object-cover h-40 w-60 aspect-video" src={props.image_link} alt=""/>
      
      
      <p className="px-5 pt-3 text-xs text-gray-400 font-bold">{props.type}</p>

      
      <h5 className= "px-5 pt-3 text-xl font-bold tracking-tight text-gray-900">
        {shorttitle}
        {/* {props.name} */}
      </h5>
      <div className="px-5 py-3">
        <div className="flex"><MdDateRange/> <p className="px-2 text-sm"> {props.date}</p></div>
        <div className="flex"><MdLocationOn/><p className="px-2 text-sm">{props.venue}</p></div>
      </div>
      
      <p className="px-5 pb-5 text-gray-700">
        {shortdesc}
      </p>

    </div></a>


  );
}


export default function Showcase() {
  const [ data, setData ] = useState([]);
  useEffect( () =>{
    const data = getData();
    console.log('get data here ', JSON.stringify(data[0]));
  }, [])


  //RYAN this is how to call backend from front end
  const getData = async () => {
    //to test ur data, type this link http://localhost:3000/api/projects/get inside ur browser. you will either get
    //empty array or some data.
    
    const res = await fetch(`http://localhost:3000/api/projects/get`, {
      cache: "no-store",
    }).then(
      response => response.json()
    ).then(data => {
      console.log('data ', data);
      setData(data);
    });
  
  };

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
