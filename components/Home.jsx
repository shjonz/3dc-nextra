import { Button } from '@material-tailwind/react';
import ClubLogo from './ClubLogo';
import CategoryCards from './CategoryCards';

function Home() {
  return (
    <>
      <div className="hero">
        <div className="w-3/4 h-3/4 my-auto ">
          <ClubLogo />
        </div>
      </div>
      <CategoryCards />
    </>
  );
}

export default Home;
