import React from 'react';
import EventCard from './EventCard';
import { LeftSide } from './OnScroll';

const events = [
  {
    title: 'Music Festival',
    date: 'July 10, 2023',
    description: 'Join us for a day of live music and fun!',
  },
  {
    title: 'Art Exhibition',
    date: 'August 15, 2023',
    description: 'Explore beautiful artworks from local artists.',
  },
  // Add more event objects as needed
];

export default function Events() {
  return (
    <div className="snap-center flex-shrink-0 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <LeftSide>
          <h2 className="font-bold">Events</h2>
          </LeftSide>
          
          <h3>Upcoming</h3>
          <p className="text-lg text-gray-600">
            Interested in hackathons, competitions, and other events? Stay up to
            date with events and find teammates here.
          </p>
          <div className="event-list">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
              />
              
            ))}
          </div>
          {/* <div className="hidden md:flex">
            
            <img
              className="rounded-md object-cover"
              alt="feature image"
              src="/home/events.jpg"
              width="250"
              height="250"
            />
          </div> */}
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
