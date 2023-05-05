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
            Have a project idea but don't know where to start? Join 3DC to find
            your next project partner or get help from our seniors!
            <br />
            Have the skills but not great at ideas? Just wanna code? Join 3DC
            and be a part of our projects!
            <br />
            Check out our past projects and see what we have been up to!
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
