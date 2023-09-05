import { Button } from "@material-tailwind/react";
import ClubLogo from "../ClubLogo";
import CategoryCards from "../CategoryCards";
import Feature from "../Feature";
import Hero from "./Hero";
import About from "./About";
import Newsletter from "./Newsletter";
import Disclaimer from "./Disclaimer";
import Events from "./Events";
import Example from "@components/Footer";
import React, { useEffect, useRef, useState} from "react";
import { Reveal } from "./Reveal";
import Box from "./ScrollAnimationTrigger";
import {Shapes} from "./OnScroll";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};


function Home() {

  

  

  return (
    <>
      {/* <div className="hero">
        <div className="w-3/4 h-3/4 my-auto ">
          <ClubLogo />
        </div>
      </div>
      <CategoryCards />
      <div className="mx-4">
        <Feature />
      </div>  */}
      <div className=" lg:snap-y lg:snap-mandatory lg:h-screen lg:w-screen lg:overflow-auto lg:flex-col
      xl:snap-y xl:snap-mandatory xl:h-screen xl:w-screen xl:overflow-auto xl:flex-col
      2xl:snap-y 2xl:snap-mandatory 2xl:h-screen 2xl:w-screen 2xl:overflow-auto 2xl:flex-col">
        <Hero/>
        <About/>
        <Events/>
        <Newsletter/>
        <Disclaimer/>
        {/* <Example /> */}

        

      </div>
    </>
  );
}

export default Home;
