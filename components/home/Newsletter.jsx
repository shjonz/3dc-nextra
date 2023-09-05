import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
/* import { SiTwitter } from "@react-icons/si"; */
export default function Newsletter() {
  return (
    <div className="snap-center flex-shrink-0 relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Interested in internships, latest tech news, and other events?
              Subscribe to our newsletter and don't miss out!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-gray/5 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-gray/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-gray">Follow us</dt>
              {/*<dd className="mt-2 leading-7 text-gray-700">
                We cover the latest technologies with each issue being a guide
                for a particular stream in tech.
                </dd> */}
              <div className="flex gap-x-2 mt-2">
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-gray">Contact us</dt>
              {/*<dd className="mt-2 leading-7 text-gray-700">
                We cover the latest technologies with each issue being a guide
                for a particular stream in tech.
                </dd> */}
              <div className="flex gap-x-2 mt-2">
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
                <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-gray"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-gray"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray">Contact us</dt>
              </div> */}
            {/* <div className="rounded-md bg-gray/5 p-2 ring-1 ring-gray/10">
              <SiTwitter className="h-6 w-6 text-gray" aria-hidden="true" />
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  );
}
