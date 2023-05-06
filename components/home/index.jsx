import { Button } from "@material-tailwind/react";
import ClubLogo from "../ClubLogo";
import CategoryCards from "../CategoryCards";
import Feature from "../Feature";
import Hero from "./Hero";
import About from "./About";
import Newsletter from "./Newsletter";
import Team from "./Team";
import Workshops from "./Workshops";
import Events from "./Events";
import Projects from "./Projects";

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
      </div> */}
      <div>
        <Hero />
        <About />
        {/*<Team >*/}
        <Workshops />
        <Events />
        <Projects />
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
