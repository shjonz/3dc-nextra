import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  CommandLineIcon,
} from "@heroicons/react/20/solid";
import EventCard from './EventCard';
import { Reveal } from "./Reveal";
import {LeftSide, RightSide} from "./OnScroll"
import {ExcoCards } from "../about/ExcoCard";
import { Team } from "../about/Team";

const features = [
  {
    name: "Workshops.",
    description:
      "We conduct workshops on various topics like Web Development, App Development, Competitive Programming, Machine Learning.",
    icon: AcademicCapIcon,
  },
  {
    name: "Events.",
    description:
      "Interested in hackathons, competitions, and other events? Stay up to date with events and find teammates here.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Projects.",
    description:
      "What better way to learn than to build something? Join exciting projects or start your own!",
    icon: CommandLineIcon,
  },
];

const exco = [
  {
    name: 'Asyraff',
    role: 'Vice President',
    description: 'i llike pie',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: 'john@gmail.com',
    telegram:'www.google.com',
    href: 'www.google.com'
  },
  {
    name: 'Ryan',
    role: 'Vice President',
    description: 'i llike pie',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: 'john@gmail.com',
    telegram:'www.google.com',
    href: 'www.google.com'
  },
  {
    name: 'john doe',
    role: 'President',
    description: 'i llike pie',
    github: 'www.google.com',
    linkedin: 'www.google.com',
    email: 'john@gmail.com',
    telegram:'www.google.com',
    href: 'www.google.com'
  },
  // Add more event objects as needed
  //sm md lg xl 2xl 
];

export default function About() {
  return (
    <div className=" snap-center flex-shrink-0  lg:py-20 sm:py-32" id="about">
      <div className="mx-auto lg:px-40 lg:py-40 md:px-10  ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2  ">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="lg:max-w-lg ">
              <h2 className="text-base font-semibold leading-5 text-indigo-600">
                Hello
              </h2>

              <LeftSide>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade " >
                Welcome to 3DC 
              </p>
              {/* <img src="imgs\logos\GDSC.webp"/> */}
              </LeftSide>
              
              

              <Reveal>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Digital Design & Development Club (3DC) is an official Fifth-Row
                club affiliated with ISTD Pillar at SUTD. We are also a{" "}
                  <a
                  href="https://gdsc.community.dev/chapters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                  >
                  Developer Student Club (DSC)
                  </a>{" "}
                supported by Google.
                </p>
              </Reveal>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>


            </div>
          </div>

          <RightSide >
          <div className=" md:h-max lg:h-max xl:h-max ">
              {/* <iframe
                src="https://www.youtube.com/embed/DcN_hcHXR_0"
                title="YouTube video"
                allowfullscreen
              ></iframe> "ratio ratio-16x9 " */}
            <div className="exco-profilecard  lg:px-4 lg:pt-40 flex gap-4 overflow-auto">
              {exco.map((event, index) => (
                <ExcoCards key={index}
                name={event.name}
                role={event.role}
                description={event.description}
                github={event.github}
                linkedin={event.linkedin}
                email={event.email}
                telegram={event.telegram}  />
              ) )}
            </div>
          </div>
          </RightSide>
        </div>
      </div>
    </div>
  );
}
