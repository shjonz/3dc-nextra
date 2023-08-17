export default function Events() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="font-bold">Events</h2>
          <h3>Upcoming</h3>
          <p className="text-lg text-gray-600">
            Interested in hackathons, competitions, and other events? Stay up to
            date with events and find teammates here.
          </p>
          <div className="hidden md:flex">
            <img
              className="rounded-md object-cover"
              alt="feature image"
              src="/home/events.jpg"
              width="250"
              height="250"
            />
            <img
              className="rounded-md object-cover"
              alt="feature image"
              src="/home/events.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="flex">
            <a href="/events" className="">
              Show More
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
        <div className="flex">
          <a href="/events" className="">
            Show More
          </a>
        </div>
      </div>
    </div>
  );
}
