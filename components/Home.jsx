import { Button } from '@material-tailwind/react';
import ClubLogo from './ClubLogo';
import CategoryCards from './CategoryCards';
import Feature from './Feature';
import Hero from './home/Hero';
import About from './home/About';
import Newsletter from './home/Newsletter';

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
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
