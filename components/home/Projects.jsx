export default function Projects() {
  return (
    <div className="max-w-5xl py-12 px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="hidden md:flex">
          <img
            className="rounded-md object-cover"
            alt="feature image"
            src="/home/workshops.jpg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-lg text-gray-600">
            Looking to start a new project but not sure where to begin? Join 3DC
            to find your next project partner or get help from our seniors.
            Whether you have a project idea that you need help with or just want
            to code and be a part of our projects, 3DC has a place for you.
            <br />
            <br />
            Check out our past projects to see what we have been up to!
          </p>
          <div className="flex">
            <a href="/projects" className="">
              View Projects →
            </a>
          </div>
        </div>
        <div className="flex md:hidden">
          <img
            className="rounded-md object-cover"
            alt="feature image"
            src="/home/projects.jpg"
          />
        </div>
      </div>
    </div>
  );
}
