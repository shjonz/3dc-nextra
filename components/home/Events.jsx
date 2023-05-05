export default function Events() {
  return (
    <div className="max-w-5xl py-12 px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Events</h2>
          <p className="text-lg text-gray-600">
            Interested in hackathons, competitions, and other events? Stay up to
            date with events and find teammates here.
          </p>
          <div className="flex">
            <a href="/events" className="">
              Learn More →
            </a>
          </div>
        </div>
        <div className="hidden md:flex">
          <img
            className="rounded-md object-cover"
            alt="feature image"
            src="/home/events.jpg"
          />
        </div>

        <div className="flex md:hidden">
          <img
            className="rounded-md object-cover"
            alt="feature image"
            src="/home/events.jpg"
          />
        </div>
      </div>
    </div>
  );
}
