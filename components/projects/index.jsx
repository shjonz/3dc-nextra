import Disclaimer from "../home/Disclaimer";
import Newsletter from "../home/Newsletter";
import ProjectHeader from "./Header";
import Showcase from "./Showcase";
import { ShowcaseCard } from "./Showcase";

export default function Projects() {
  return (
    <>
      <div>
        <ProjectHeader />
        <h1 className="px-4 pt-10 font-bold text-3xl">Upcoming</h1>
        <Showcase />

        <h1 className="px-4 pt-10 font-bold text-3xl">Past</h1>
        <Showcase />

        <Newsletter />
        <Disclaimer />
      </div>
    </>
  );
}
