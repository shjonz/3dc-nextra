import Disclaimer from "../home/Disclaimer";
import Newsletter from "../home/Newsletter";
import ProjectHeader from "./Header";
import Showcase from "./Showcase";

export default function Projects() {
  return (
    <>
      <div>
        <ProjectHeader />
        <Showcase />
        <Newsletter />
        <Disclaimer />
      </div>
    </>
  );
}
