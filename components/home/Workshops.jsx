export default function Workshops() {
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
          <h2 className="text-3xl font-bold">Workshops</h2>
          <p className="text-lg text-gray-600">
            Our workshops are designed to be beginner-friendly and are open to
            all SUTDents. Learn the basics of development from peers and
            seniors!
          </p>
          <div className="flex">
            <a href="/workshops" className="">
              Learn More →
            </a>
          </div>
        </div>
        <div className="flex md:hidden">
          <img
            className="rounded-md object-cover"
            alt="feature image"
            src="/home/workshops.jpg"
          />
        </div>
      </div>
    </div>
  );
}
