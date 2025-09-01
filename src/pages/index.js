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
import AirShowCover from "../images/event-covers/airshow.png";
import SportsCover from "../images/event-covers/sports-event.png";
import CarCover from "../images/event-covers/carshow.png";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Spectators", href: "#" },
];

const footerNavigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieOpen, setcookieOpen] = useState(true);

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
        <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-saluteTan/30 to-transparent backdrop-blur-sm">
          <nav
            aria-label="Global"
            className="flex items-center font-body font-semibold uppercase justify-between p-8 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={HeaderLogo}
                  className="h-16 w-auto hover:saturate-0"
                />
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
                  className="text-lg/6 uppercase duration-300 ease-in-out text-white hover:underline hover:text-saluteBlue  p-3 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-6 py-2.5 text-lg/6 text-white hover:underline hover:bg-saluteTan hover:text-saluteRed"
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
            Upcoming Signature Events
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
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white ring-1 ring-blue-700/10"
              >
                <a
                  href=""
                  className="duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-lg group"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="relative isolate overflow-hidden rounded-lg py-12">
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
                    <dd className="mt-4">
                      <dt className="sr-only">eventType</dt>
                      <span className="inline-flex items-center rounded-md bg-teal-50 px-5 py-1.5 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                        {event.eventType}
                      </span>
                    </dd>
                    <h3 className="py-3 text-2xl font-primary font-medium text-gray-900">
                      {event.name}
                    </h3>
                    <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
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
                        {event.location}
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
                          href={`tel:${event.telephone}`}
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
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2">
            <div className="">
              {" "}
              <dl className="font-body mt-10 space-y-4 text-sm/7 tracking-wide text-saluteTan">
                <div className="flex justify-end gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <HiMiniDevicePhoneMobile
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+1 (555) 234-5678"
                      className="hover:text-white"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex justify-end gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <IoIosMailOpen
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@saluteacrossamerica250.com"
                      className="hover:text-white"
                    >
                      info@saluteacrossamerica250.com
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="flex justify-end gap-x-4 mt-5">
                {footerNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-saluteTan hover:text-white"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={HeaderLogo}
                className="h-20 mx-auto w-auto hover:saturate-0"
              />
            </a>
            <p className="mt-8 text-center text-sm/6 text-saluteTan md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} SAA 250, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      <div
        className={`cookie ${
          cookieOpen === false ? "hidden" : ""
        } font-body mx-10 fixed inset-x-0 bottom-5 flex flex-col justify-between rounded-3xl gap-x-8 gap-y-4 border-t border-gray-900/10 bg-white p-10 shadow-lg md:flex-row md:items-center lg:px-8`}
      >
        <p className="max-w-4xl text-sm/6 text-gray-900">
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
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 hover:underline"
          >
            Reject all
          </button>
        </div>
      </div>
    </>
  );
}
