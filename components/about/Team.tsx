import React from "react";
import { useState, useEffect } from 'react';
import { ExcoCards } from "./ExcoCard";

//supposed to be the database
const members = [
  {
    name: 'Joshua Pacheco',
    role: 'President',
    description: 'Just a man who likes to create stuff',
    github: 'www.google.com',
    linkedin: 'https://www.linkedin.com/in/markjoshuapacheco/',
    email: '1007190@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/pache.jpg",
    href: 'www.google.com'
  },

  {
    name: 'Ng Wei Hao',
    role: 'Vice President - Tech',
    description: 'HELLO WORLD!',
    github: 'www.google.com',
    linkedin: 'https://www.linkedin.com/in/wei-hao-ng-4a02751a1/',
    email: '1006977@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/ry.jpg",
    href: 'www.google.com'
  },

  {
    name: 'Asyraf Omar',
    role: 'Vice President - Projects',
    description: 'No matter how devastated you may be by your own weakness or uselessness… set your heart ablaze',
    github: 'Thinktank 13 2.307',
    linkedin: 'Project',
    email: '1006938@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/asyraf.png",
    href: 'www.google.com'
  },

  {
    name: 'Fushia Virtucio',
    role: 'Marketing Head',
    description: "TODAY'S GOOD MOOD IS SPONSORED BY COFFEE.",
    github: 'Thinktank 13 2.307',
    linkedin: 'Workshop',
    email: '1007179@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/fushia.jpg",
    href: 'www.google.com'
  },

  {
    name: 'Pankti Shah',
    role: 'Secretary',
    description: 'An absolute joy to have around.',
    github: 'Thinktank 13 2.307',
    linkedin: 'https://www.linkedin.com/in/pankti-shah-6bb104221/',
    email: '1007130@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/pankti.jpg",
    href: 'www.google.com'
  },

  {
    name: 'Hun Chong Tan',
    role: 'Treasurer',
    description: 'Technology is best when it brings people together.',
    github: 'Thinktank 13 2.307',
    linkedin: 'https://www.linkedin.com/in/tanhunchong/',
    email: '1006643@mymail.sutd.edu.sg',
    telegram:'www.google.com',
    image: "exco/hunch.jpg",
    href: 'www.google.com'
  },
];

export default function Team() {
  function ExcoMemberCard() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  }
  
  return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-left pb-12">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    Exco
                </h1>
            </div>

                {/* tq for fixing it */}
                <div className="px-4 py-4 overflow-auto grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                  {members.map((member, key) => (
                    <ExcoCards key={key} {...member} />
                  ))}
                </div>
        </section>
  );
}