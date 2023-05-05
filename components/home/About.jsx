import {
  AcademicCapIcon,
  CalendarDaysIcon,
  CommandLineIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Workshops.',
    description:
      'We conduct workshops on various topics like Web Development, App Development, Competitive Programming, Machine Learning.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Events.',
    description:
      'Interested in hackathons, competitions, and other events? Stay up to date with events and find teammates here.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Projects.',
    description:
      'What better way to learn than to build something? Join exciting projects or start your own!',
    icon: CommandLineIcon,
  },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                SUTD 3DC
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Digital Design & Development Club (3DC) is an official Fifth-Row
                club affiliated with ISTD Pillar at SUTD. We are also a
                Developer Student Club (DSC) supported by Google.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="about.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
