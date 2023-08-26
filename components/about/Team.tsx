import React from "react";
import { useState, useEffect } from 'react';
import { ExcoCards } from "./ExcoCard";

//supposed to be the database
const members = [
  {
    name: 'martha stuward',
    role: 'coffee getter',
    description: 'does some work and drinks coffee',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: '',
    telegram:'www.google.com',
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg",
    href: 'www.google.com'
  },

  {
    name: 'john doe',
    role: 'watcher',
    description: 'i llike pie',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: 'john@gmail.com',
    telegram:'www.google.com',
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg",
    href: 'www.google.com'
  },
  {
    name: 'jane doe',
    role: 'doer',
    description: 'fafwafwaf afwawfaf awffw f fw aaf',
    github: 'Thinktank 13 2.307',
    linkedin: 'Project',
    email: 'doe@gmail.com',
    telegram:'www.google.com',
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg",
    href: 'www.google.com'
  },

  {
    name: 'prince harry',
    role: 'the prince',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.',
    github: 'Thinktank 13 2.307',
    linkedin: 'Workshop',
    email: 'harry@gmail.com',
    telegram:'www.google.com',
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg",
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