import React, { useState, useEffect } from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineEvent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineEventAvailable } from "react-icons/md";
import HeaderLogo from "../images/SAA-Badge-Dates.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Spectators", href: "#" },
];

const people = [
  {
    name: "Tampa Bay Aviation Show",
    location: "Raymond James Stadium",
    eventType: "Air Show",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    location: "Lead Security Associate",
    eventType: "Sporting Event",
    email: "codyfisher@example.com",
    telephone: "+1-202-555-0114",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    location: "Assurance Administrator",
    email: "estherhoward@example.com",
    telephone: "+1-202-555-0143",
    eventType: "Car Show",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const targetDate = new Date("January 1, 2026 00:00:00");

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function TimeBlock({ label, value }) {
    return (
      <div>
        <div className="text-4xl font-bold">
          {String(value).padStart(2, "0")}
        </div>
        <div className="mt-2 text-sm">{label}</div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center font-body font-semibold uppercase justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={HeaderLogo} className="h-16 w-auto" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg/6 uppercase duration-300 ease-in-out text-white hover:underline hover:text-saluteTan"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="border-t-2 border-red-500 flex items-center gap-2 duration-700 ease-in-out bg-gradient-to-r from-saluteRed to-red-700 rounded-b-xl px-6 py-2.5 text-lg/6 text-white hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteRed"
              >
                Contact Us{" "}
                <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate overflow-hidden">
          <img
            alt=""
            // src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
            // src="https://www.shutterstock.com/shutterstock/photos/760198318/display_1500/stock-photo-american-flag-background-760198318.jpg"
            // src="https://www.shutterstock.com/shutterstock/photos/785215165/display_1500/stock-photo-american-flag-background-785215165.jpg"
            src="https://www.shutterstock.com/shutterstock/photos/321307532/display_1500/stock-photo-american-flag-on-dark-background-321307532.jpg"
            className="absolute inset-0 -z-10 size-full object-cover scale-x-[-1]"
          />

          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f1437] to-[#223172] opacity-80 mix-blend-multiply" /> */}

          <div className="relative max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl py-32 sm:py-40">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div className="font-primary relative px-3 py-1 text-gray-300 hover:ring-gray-900/20">
                  {timeLeft.expired ? (
                    <p className="text-3xl">Happy 250 Anniversary!</p>
                  ) : (
                    <div className="mt-5 flex justify-center gap-6 text-center divide-x divide-gray-500 font-body">
                      <TimeBlock label="Days" value={timeLeft.days} />
                      <span className="pl-6">
                        {" "}
                        <TimeBlock label="Hrs" value={timeLeft.hours} />
                      </span>
                      <span className="pl-6">
                        {" "}
                        <TimeBlock label="Mins" value={timeLeft.minutes} />
                      </span>
                      <span className="pl-6 text-left">
                        <TimeBlock label="Secs" value={timeLeft.seconds} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <h1 className="text-balance text-saluteTan text-5xl font-primary font-extrabold uppercase sm:text-8xl">
                  Salute Across America{" "}
                  <span className="font-script  text-[1.2em] text-saluteRed">
                    250
                  </span>
                </h1>

                <p className="mt-3 text-pretty text-lg font-body text-white sm:text-xl/8">
                  Get ready for a once-in-a-generation celebration—America's
                  250th anniversary is almost here! Over 365 days, we’ll unite
                  for thousands of events honoring our shared history, diverse
                  stories, and bold future. Join millions of people in
                  commemorating the spirit of a nation{" "}
                  <span className="font-script">250</span> years in the making.
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    href="#"
                    className="border-t-2 border-blue-500 flex items-center gap-2 duration-700 ease-in-out bg-blue-800 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-blue-800"
                  >
                    View All Events{" "}
                    <MdOutlineEvent aria-hidden="true" className="size-7" />
                  </a>
                  <a
                    href="#"
                    className="border-t-2 border-teal-800 flex items-center gap-2 duration-700 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteNavy"
                  >
                    Spectators{" "}
                    <IoTicketSharp aria-hidden="true" className="size-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="bg-gradient-to-r from-saluteRed to-red-700 h-3" />
        <div className="bg-white h-2" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-3" />
      </div>

      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-blue-800 text-xl font-primary font-extrabold uppercase">
            SAA{" "}
            <span className="font-script text-[1.2em] text-saluteRed">250</span>
            Tour
          </p>
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-gray-800 sm:text-7xl">
            Upcoming Signature Events
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="border-t-2 border-blue-500 flex items-center gap-2 duration-700 ease-in-out bg-blue-800 rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-blue-800"
            >
              View All Events{" "}
              <MdOutlineEvent aria-hidden="true" className="size-7" />
            </a>
            <a
              href="#"
              className="border-t-2 border-red-500 flex items-center gap-2 duration-700 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
          </div>
          <ul
            role="list"
            className="py-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white ring-1 ring-blue-700/10"
              >
                <a
                  href=""
                  className="duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-lg group"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="shrink-0 rounded-lg h-48"
                    />
                    <dd className="mt-4">
                      <dt className="sr-only">eventType</dt>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.eventType}
                      </span>
                    </dd>
                    <h3 className="mt-2 text-lg font-body font-medium text-gray-900">
                      {person.name}
                    </h3>
                    <dl className="border-t pt-2 mt-2 mt-1 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-500 flex items-start gap-2">
                        <IoTicketSharp
                          aria-hidden="true"
                          className="size-5 text-blue-700"
                        />{" "}
                        Free
                      </dd>

                      <dt className="sr-only">eventType</dt>
                    </dl>
                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-500 flex items-start gap-2">
                        <MdLocationPin
                          aria-hidden="true"
                          className="size-5 text-blue-700"
                        />{" "}
                        {person.location}
                      </dd>

                      <dd className="pl-7 text-sm text-gray-500 flex items-start gap-2">
                        Street Address
                      </dd>
                      <dd className="pl-7 text-sm text-gray-500 flex items-start gap-2">
                        City, Florida 3333
                      </dd>
                    </dl>
                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-500 flex items-center gap-2">
                        <FaClock
                          aria-hidden="true"
                          className="size-4 text-blue-700"
                        />{" "}
                        Jan 20, 2026, 11:30AM - 7:00PM ET
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="duration-300 ease-in-out font-body -mt-px flex divide-x divide-gray-200 bg-blue-700 group-hover:opacity-80 rounded-b-lg">
                      <div className="border-t border-gray-200 flex w-0 flex-1">
                        <a
                          href={`tel:${person.telephone}`}
                          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white group-hover:underline"
                        >
                          <IoTicketSharp
                            aria-hidden="true"
                            className="size-5 text-saluteTan"
                          />
                          Event Details
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-saluteBlue py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-white sm:text-7xl">
            About SAA{" "}
            <span className="font-script text-[1.2em] text-saluteRed">250</span>
          </p>

          <div className="font-body mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg/7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget.
                Ultricies tellus felis id dignissim eget. Est augue maecenas
                risus nulla ultrices congue nunc tortor.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-white sm:text-5xl">
              Current Sponsors
            </p>

            <div className="mt-10 -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-xl md:grid-cols-3">
              <div className="bg-saluteTan p-8 sm:p-10">
                <img
                  alt="Transistor"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
              <div className="bg-saluteTan p-6 sm:p-10">
                <img
                  alt="Reform"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
              <div className="bg-saluteTan p-6 sm:p-10">
                <img
                  alt="Tuple"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
              <div className="bg-saluteTan p-6 sm:p-10">
                <img
                  alt="Laravel"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
              <div className="bg-saluteTan p-6 sm:p-10">
                <img
                  alt="SavvyCal"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
              <div className="bg-saluteTan p-6 sm:p-10">
                <img
                  alt="Statamic"
                  src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            className="size-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2  lg:pr-0">
            <p className="font-primary mt-2 text-4xl font-semibold tracking-tight text-gray-800 sm:text-6xl">
              Questions?
            </p>
            <p className="mt-6 font-body text-lg/7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8 flex">
              <a
                href="#"
                className="font-body uppercase font-semibold border-t-2 border-red-500 flex items-center gap-2 duration-700 ease-in-out bg-gradient-to-r from-saluteRed to-red-700 rounded-b-xl px-14 py-2.5 text-lg/6 text-white hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteRed"
              >
                Contact Us{" "}
                <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
