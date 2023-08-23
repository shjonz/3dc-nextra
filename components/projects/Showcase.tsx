import React from "react";
import {MdDateRange,MdLocationOn} from "react-icons/md";

const projects = [
  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },
  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'workshop',
    href: '',
  },

];

function ShowcaseCard(props) {
  const { name, description, href, date, venue, type} = props;
  var shortdesc = ''
  if (description.length < 120){shortdesc = description}
  else {shortdesc = description.slice(0,90)+"..."}
  var shorttitle = ''
  if (name.length < 24){shorttitle = name}
  else {shorttitle = name.slice(0,24)+"..."}

  return (
    <a href={props.href}><div className="bg-white border border-gray-200 overflow-auto rounded-lg shadow md:w-60 md:h-80 sm:w-full sm:h-60">
      <img className="rounded-t-lg" src="/about.jpg" alt="" />
      <h5 className= "px-5 pt-3 text-xl font-bold tracking-tight text-gray-900">
        {shorttitle}
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
  return (
      <div className="px-4 py-4 grid sm:grid-cols-1 sm:gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ShowcaseCard {...project} />
        ))}
      </div>
  );
}