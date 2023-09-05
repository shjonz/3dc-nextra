import { useState } from "react";
import ClubLogo from "../ClubLogo";
import { Reveal } from "./Reveal";
import { Shapes } from "./OnScroll";
import { motion } from "framer-motion";
// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="HeroContainer snap-center flex-shrink-0 bg-white align-middle">
      <div className=" relative isolate px-6 ">

      
        {/* <Shapes/> sm md lg xl 2xl  */}

        {/* first yellow ball */}
        <div className=" hidden xl:block 2xl:block lg:block relative top-60" >
        <motion.div
        
        style={{
          height: "50px",
          width: "50px",
          background: "yellow",
        }}
        animate={{
          x: [100, 200, 400, 150],
          y: [100, 200, -300, 150],
            scale: [1, 1.2, 1.4, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      ></motion.div>
      </div>



        
        <div className="mx-auto max-w-2xl py-8 sm:py-18 lg:py-26   align-middle">
          <div className="text-center">
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Data to enrich your online business
              </h1> */}
            {/* <ClubLogo /> */}
            <Reveal>
              <img className=" " src="logo.png" alt="" />
            </Reveal>
            
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <Reveal>
                <div className= "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                I Am a...{" "}
                {/*<a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Join Us <span aria-hidden="true">&rarr;</span>
                </a> */}
              </div>
              </Reveal>
              
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <h2 className="text-center">Student</h2>
              <a className=" relative rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
               hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               href="">
                Join us
              </a>
              <h3>Collaborator</h3>
              <a className="relative rounded-full px-4 py-2 bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Work with us
              </a>
            </div>
          </div>
        </div>

        {/* red ball */}
        <div className=" hidden xl:block 2xl:block lg:block absolute bottom-80 right-60">
          <motion.div
            style={{
              height: "50px",
              width: "50px",
              background: "red",
            }}
            animate={{
            //x: [100, 200, 400, 150],
            //y: [100, 200, -300, 150],
            x: [-300, 150, 100, 200],
            y: [400,150,100,200],
            scale: [1, 1.2, 1.4, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
            },
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          ></motion.div>
        </div>
        {/* <Shapes/> */}
      </div>
    </div>
  );
}
