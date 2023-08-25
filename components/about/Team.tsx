import React from "react";
import { useState, useEffect } from 'react';
import { Reveal } from "../home/Reveal";

const members = [
  {
    name: 'martha stuward',
    role: 'coffee getter',
    description: 'does some work and drinks coffee',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: '',
    telegram:'www.google.com',
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
    href: 'www.google.com'
  },
  {
    name: 'jane doe',
    role: 'doer',
    description: 'fafwafwaf afwawfaf awffw f fw afwfawfwa awffwafwaff awfwfwaf',
    github: 'Thinktank 13 2.307',
    linkedin: 'Project',
    email: 'doe@gmail.com',
    telegram:'www.google.com',
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
    href: 'www.google.com'
  },
];





const GitHubButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
    );
  };

const LinkedinButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
          />
        </svg>
      </a>
    );
  };

const EmailButton = ({ emailAddress }) => {
    const mailToLink = `mailto:${emailAddress}`;
  
    return (
      <a href={mailToLink} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M21.802 18.38l-8.882-7.103a2.31 2.31 0 0 0-2.84 0l-8.882 7.103c-.62.496-1.12.223-1.12-.56V5.6c0-.782.499-1.057 1.12-.56l8.882 7.102c.363.29.85.29 1.213 0l8.882-7.102c.62-.497 1.12-.222 1.12.56v12.222c0 .782-.499 1.056-1.12.56z"
          />
        </svg>
      </a>
    );
  };

const TelegramButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.949c-6.246 0-11.308-5.058-11.308-11.309 0-2.272.682-4.405 1.866-6.21l-.004.006 1.808 1.823 4.471 4.494a.698.698 0 0 0 .994.014l.03-.029 7.019-7.065 1.864 1.853c.447.438.653 1.042.594 1.645-.087 1.19-1.516 2.095-2.997 2.375l-.137.028-2.019-.756-4.047 3.854a6.042 6.042 0 0 1-2.726 1.268 5.9 5.9 0 0 1-3.832-1.392c-.18-.149-.366-.367-.295-.671l.839-3.104-.139.126a3.996 3.996 0 0 1-.903.365 3.724 3.724 0 0 1-1.04-.024 4.01 4.01 0 0 1-2.755-2.655c-.083-.226-.16-.46-.129-.688l.49-3.019a1.868 1.868 0 0 1 2.16-1.67c.03.008.059.02.089.03a2.048 2.048 0 0 1 1.227 1.31c.095.356.43.587.837.587.03 0 .06-.001.089-.003a.758.758 0 0 0 .582-.29l2.567-3.176 1.707 1.344a2.3 2.3 0 0 0 3.066.137c.394-.338.533-.872.398-1.394l-.873-3.667 3.063.303a1.717 1.717 0 0 1 .98.284c.241.162.433.4.56.687l2.716 7.433a.594.594 0 0 1-.242.725 1.224 1.224 0 0 1-.75.225z"
          />
        </svg>
      </a>
    );
  };

export const ExcoCard = ({name, role, description, github, linkedin, email, telegram, href}) => {
  return (
    <div className="">
      <div className="mb-24 md:mb-0 py-20">
          <div
              className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex justify-center">
                  <div className="flex justify-center -mt-[75px]">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                      className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                  </div>
              </div>

              <div className="p-6">
                  <h5 className="mb-1 text-lg font-bold">{name}</h5>
                  <p className="mb-6">{role}</p>
                  <p className="mb-6">{description}</p>
                  <ul className="mx-auto flex list-inside justify-center">

                  <GitHubButton profileUrl={github}/>
                  <LinkedinButton profileUrl={linkedin}/>
                  <EmailButton emailAddress={email}/>
                  <TelegramButton profileUrl={telegram}/>

                  </ul>
              </div>
          </div>
      </div>
    </div>


  );
}
  

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

            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">

                {/* meant to make the cards dynamic but has hydration issues currently */}
                <div className="px-4 py-4 flex gap-4 overflow-auto">
                  {members.map((project, key) => (
                    <ExcoCard {...project}  />
                  ))}
                </div>


                {/* card */}

                
                
                {/* <div className="mb-24 md:mb-0 py-20">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex justify-center">
                            <div className="flex justify-center -mt-[75px]">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>

                        <div className="p-6">
                           <Reveal>
                            <h5 className="mb-1 text-lg font-bold">Marta Smith</h5>
                            
                            <p className="mb-6">Frontend Developer</p>
                            </Reveal>
                            <Reveal>
                            <p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                           </Reveal> 
                            <ul className="mx-auto flex list-inside justify-center">

                            <GitHubButton profileUrl={'www.google.com'}/>
                            <LinkedinButton profileUrl={'www.google.com'}/>
                            <EmailButton emailAddress={'hello@gmail.com'}/>
                            <TelegramButton profileUrl={'www.google.com'}/>

                            </ul>                           
                        </div>
                    </div>
                </div>
                

                <div className="mb-24 md:mb-0 py-20">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex justify-center">
                            <div className="flex justify-center -mt-[75px]">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>

                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-bold">Marta Smith</h5>
                            <p className="mb-6">Frontend Developer</p>
                            <ul className="mx-auto flex list-inside justify-center">

                            <GitHubButton profileUrl={'www.google.com'}/>
                            <LinkedinButton profileUrl={'www.google.com'}/>
                            <EmailButton emailAddress={'hello@gmail.com'}/>
                            <TelegramButton profileUrl={'www.google.com'}/>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-24 md:mb-0 py-20">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex justify-center">
                            <div className="flex justify-center -mt-[75px]">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>

                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-bold">Marta Smith</h5>
                            <p className="mb-6">Frontend Developer</p>
                            <ul className="mx-auto flex list-inside justify-center">

                            <GitHubButton profileUrl={'www.google.com'}/>
                            <LinkedinButton profileUrl={'www.google.com'}/>
                            <EmailButton emailAddress={'hello@gmail.com'}/>
                            <TelegramButton profileUrl={'www.google.com'}/>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-24 md:mb-0 py-20">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex justify-center">
                            <div className="flex justify-center -mt-[75px]">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                                className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>

                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-bold">Marta Smith</h5>
                            <p className="mb-6">Frontend Developer</p>
                            <ul className="mx-auto flex list-inside justify-center">

                            <GitHubButton profileUrl={'www.google.com'}/>
                            <LinkedinButton profileUrl={'www.google.com'}/>
                            <EmailButton emailAddress={'hello@gmail.com'}/>
                            <TelegramButton profileUrl={'www.google.com'}/>

                            </ul>
                        </div>
                    </div>
                </div> */}

              </div>
        </section>
  );
}