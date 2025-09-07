import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineEvent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import AirShowCover from "../images/event-covers/airshow.png";
import SportsCover from "../images/event-covers/sports-event.png";
import CarCover from "../images/event-covers/carshow.png";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";

const modalShareIcons = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookSquare,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },
  {
    name: "Linkedin",
    href: "#",
    icon: FaLinkedinIn,
  },
];

const event = [
  {
    name: "Tampa Bay Aviation Show",
    location: "Raymond James Stadium",
    eventType: "Air Show",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: AirShowCover,
  },
  {
    name: "Lightning vs. Avalanche",
    location: "Lead Security Associate",
    eventType: "Sporting Event",
    email: "codyfisher@example.com",
    telephone: "+1-202-555-0114",
    imageUrl: SportsCover,
  },
  {
    name: "SEMA Pre Show",
    location: "Assurance Administrator",
    email: "estherhoward@example.com",
    telephone: "+1-202-555-0143",
    eventType: "Car Show",
    imageUrl: CarCover,
  },
];

export default function HomePage() {
  const [cookieOpen, setcookieOpen] = useState(true);
  const [open, setOpen] = useState(false);

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
        <div className="text-4xl font-bold font-primary">
          {String(value).padStart(2, "0")}
        </div>
        <div className="mt-2 text-sm">{label}</div>
      </div>
    );
  }

  return (
    <Layout>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-800/90 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200">
                  <MdAirplaneTicket
                    aria-hidden="true"
                    className="size-6 text-blue-600"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-3xl font-scriptText tracking-[0.5px] text-saluteRed">
                    Signature Event
                  </p>
                  <h3 className="text-3xl font-primary font-medium text-gray-700">
                    {event[0].name}
                  </h3>
                  <h4 className="text-sm pt-1 font-body text-gray-600">
                    Sunday, Jan 13, 2026 |{" "}
                    <span className="text-saluteBlue/90 font-medium">
                      3PM - 7PM
                    </span>
                  </h4>{" "}
                </div>
                <div className="mt-3 relative isolate overflow-hidden rounded-2xl">
                  <img
                    alt=""
                    src="https://www.ilpost.it/wp-content/uploads/2016/07/google.jpg"
                    className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                  />

                  <div className="py-20 relative flex justify-center" />
                </div>

                <div className="flex items-center justify-center gap-x-4 font-body">
                  <div className="flex items-center justify-center gap-x-2">
                    <MdLocationPin
                      aria-hidden="true"
                      className="size-5 text-blue-700"
                    />
                    <dd className="text-sm text-gray-600 py-3 text-center gap-2">
                      Street Address, City, Florida 33333
                    </dd>
                  </div>
                  <p className="text-sm text-gray-600 flex items-start gap-x-2">
                    <IoTicketSharp
                      aria-hidden="true"
                      className="size-5 text-blue-700"
                    />{" "}
                    Free
                  </p>
                </div>

                <div className="">
                  <div className="border border-gray-100 bg-gray-50 rounded-2xl p-3 font-body justify-center">
                    <div className="py-2">
                      <p className="text-sm text-gray-700 gap-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed orci libero, mattis sed orci ut, sagittis ultrices
                        neque. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas. Donec at
                        varius lacus. Pellentesque eget varius sapien. Cras vel
                        gravida diam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-x-4 mt-5">
                {modalShareIcons.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-saluteTan hover:text-white"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon
                      aria-hidden="true"
                      className="text-saluteRed hover:opacity-80 size-7"
                    />
                  </a>
                ))}
              </div>
              <div className="flex justify-center mt-5 sm:mt-6 gap-x-2 text-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="pointer-events-none w-full justify-center opacity-30 border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
                >
                  Buy Tickets
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="hidden w-full justify-center border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
                >
                  Buy Tickets
                </button>
                <a
                  href="/events"
                  className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                >
                  View all Events
                </a>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <img
            alt=""
            // src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
            // src="https://www.shutterstock.com/shutterstock/photos/760198318/display_1500/stock-photo-american-flag-background-760198318.jpg"
            // src="https://www.shutterstock.com/shutterstock/photos/785215165/display_1500/stock-photo-american-flag-background-785215165.jpg"
            // src="https://www.shutterstock.com/shutterstock/photos/321307532/display_1500/stock-photo-american-flag-on-dark-background-321307532.jpg"
            src="https://www.shutterstock.com/shutterstock/photos/1010693263/display_1500/stock-photo-closeup-ruffled-american-flag-isolated-on-white-background-1010693263.jpg"
            className="absolute inset-0 -z-10 size-full object-cover scale-x-[-1]"
          />

          <div className="absolute inset-0 bg-saluteTan opacity-70 mix-blend-multiply" />

          <div className="relative max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl py-32 sm:py-40">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div className="font-primary relative px-3 py-1 text-gray-700 hover:ring-gray-900/20">
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
                <h1 className="text-balance text-saluteBlue text-5xl font-primary font-extrabold uppercase sm:text-8xl">
                  Salute Across America{" "}
                  <span className="font-script  text-[1.2em] text-saluteRed">
                    250
                  </span>
                </h1>

                <p className="mt-3 text-pretty text-lg font-body text-gray-700 sm:text-xl/8">
                  Get ready for a once-in-a-generation celebration—America's{" "}
                  <span className="font-script">250</span>th anniversary is
                  almost here! Over 365 days, we’ll unite for thousands of
                  events honoring our shared history, diverse stories, and bold
                  future. Join millions of event in commemorating the spirit of
                  a nation <span className="font-script">250</span> years in the
                  making.
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    href="#"
                    className="border-t-2 border-blue-500 flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
                  >
                    View All Events{" "}
                    <MdOutlineEvent aria-hidden="true" className="size-7" />
                  </a>
                  <a
                    href="#"
                    className="border-t-2 border-teal-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
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
            Upcoming{" "}
            <span className="font-scriptText tracking-[0.5px] text-[1.2em] text-saluteRed">
              Signature
            </span>{" "}
            Events
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="border-t-2 border-blue-500 flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
            >
              View All Events{" "}
              <MdOutlineEvent aria-hidden="true" className="size-7" />
            </a>
            <a
              href="#"
              className="border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
          </div>
          <ul
            role="list"
            className="py-20 tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          >
            {event.map((event) => (
              <li
                key={event.email}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white ring-1 ring-blue-700/10"
              >
                <button
                  onClick={() => setOpen(true)}
                  className="text-left duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-2xl group"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="relative isolate overflow-hidden rounded-2xl py-12">
                      <img
                        alt=""
                        src={event.imageUrl}
                        className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                      />

                      <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply duration-300 ease-in-out group-hover:saturate-0" />
                      <div className="relative flex justify-center duration-300 opacity-90 group-hover:blur-[2px] ease-in-out group-hover:opacity-60">
                        {event.eventType === "Air Show" ? (
                          <MdAirplaneTicket
                            aria-hidden="true"
                            className="size-24 text-white"
                          />
                        ) : (
                          <></>
                        )}
                        {event.eventType === "Sporting Event" ? (
                          <GiAmericanFootballHelmet
                            aria-hidden="true"
                            className="size-24 text-white"
                          />
                        ) : (
                          <></>
                        )}
                        {event.eventType === "Car Show" ? (
                          <IoCarSportSharp
                            aria-hidden="true"
                            className="size-24 text-white"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <dd className="mt-4 font-body">
                      <dt className="sr-only">eventType</dt>
                      <div className="flex gap-x-2">
                        <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                          <MdOutlineStar
                            aria-hidden="true"
                            className="size-4"
                          />
                          Signature
                        </span>
                        <span className="inline-flex items-center rounded-md bg-teal-50 px-5 py-1.5 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                          {event.eventType}
                        </span>
                      </div>
                    </dd>
                    <h3 className="py-3 text-2xl font-primary font-medium text-gray-700">
                      {event.name}
                    </h3>
                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-600 flex items-center gap-2">
                        <FaClock
                          aria-hidden="true"
                          className="size-4 text-blue-700"
                        />{" "}
                        Jan 20, 2026, 11:30AM - 7:00PM ET
                      </dd>
                    </dl>

                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-600 flex items-start gap-2">
                        <MdLocationPin
                          aria-hidden="true"
                          className="size-5 text-blue-700"
                        />{" "}
                        {event.location}
                      </dd>

                      <dd className="pl-7 text-sm text-gray-600 flex items-start gap-2">
                        Street Address
                      </dd>
                      <dd className="pl-7 text-sm text-gray-600 flex items-start gap-2">
                        City, Florida 3333
                      </dd>
                    </dl>
                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-600 flex items-start gap-2">
                        <IoTicketSharp
                          aria-hidden="true"
                          className="size-5 text-blue-700"
                        />{" "}
                        Free
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="duration-300 ease-in-out font-body -mt-px flex divide-x divide-gray-200 bg-blue-700 group-hover:opacity-80 rounded-b-2xl">
                      <div className="border-t border-gray-200 flex w-0 flex-1">
                        <a
                          href={`tel:${event.telephone}`}
                          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent py-4 text-sm font-semibold text-white group-hover:underline"
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
                </button>
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
      <div className="bg-gray-900">
        <div className="relative isolate overflow-hidden">
          <img
            alt=""
            src="https://www.shutterstock.com/shutterstock/photos/54087580/display_1500/stock-photo-a-sky-diver-carries-an-american-flag-as-he-descends-down-through-the-clouds-54087580.jpg"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-32">
              <div className="text-center">
                <h1 className="font-primary text-balance text-5xl font-semibold tracking-tight text-saluteTan sm:text-7xl">
                  Subscribe Today
                </h1>
                <h3 className="mt-2 font-body text-balance text-3xl font-semibold tracking-tight text-saluteTan">
                  Be Part of America’s <span className="font-script">250</span>
                  th Find Events Near You
                </h3>
                <p className="font-body mt-4 text-pretty text-lg font-medium text-white sm:text-xl/8">
                  From air shows to parades, concerts to commemorations —
                  patriotic events are happening across the nation for America’s
                  250th birthday in 2026.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="font-body uppercase font-semibold border-t-2 border-yellow-100 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-14 py-2.5 text-lg/6 text-saluteBlue hover:underline hover:bg-saluteBlue  hover:text-white"
                  >
                    Spectators{" "}
                    <IoMdNotifications aria-hidden="true" className="size-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt=""
            src="https://www.shutterstock.com/shutterstock/photos/2452273295/display_1500/stock-photo-woman-patriot-with-american-flag-on-the-beach-at-sunset-usa-celebrate-th-of-july-independence-2452273295.jpg"
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
                className="font-body uppercase font-semibold border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-14 py-2.5 text-lg/6 text-white hover:underline hover:bg-saluteTan hover:text-saluteRed"
              >
                Contact Us{" "}
                <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`cookie ${
          cookieOpen === false ? "hidden" : ""
        } font-body mx-10 fixed inset-x-0 bottom-5 flex flex-col justify-between rounded-3xl gap-x-8 gap-y-4 border-t border-gray-900/10 bg-white p-10 shadow-lg md:flex-row md:items-center lg:px-8`}
      >
        <p className="max-w-4xl text-sm/6 text-gray-700">
          This website uses cookies to supplement a balanced diet and provide a
          much deserved reward to the senses after consuming bland but
          nutritious meals. Accepting our cookies is optional but recommended,
          as they are delicious. See our{" "}
          <a href="#" className="font-semibold text-saluteRed hover:underline">
            cookie policy
          </a>
          .
        </p>
        <div className="flex flex-none items-center gap-x-5">
          <button
            type="button"
            onClick={() => setcookieOpen(false)}
            className="rounded-full bg-blue-700 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => setcookieOpen(false)}
            className="text-sm/6 font-semibold text-gray-700 hover:text-gray-700 hover:underline"
          >
            Reject all
          </button>
        </div>
      </div>
    </Layout>
  );
}
