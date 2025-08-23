import React, { useState, useEffect } from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineEvent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderLogo from "../images/SAA-Badge-Dates.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Events", href: "#" },
  { name: "Spectators", href: "#" },
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
              className="flex items-center gap-2 duration-700 ease-in-out bg-gradient-to-r from-saluteRed to-red-700 rounded-b-xl px-6 py-2.5 text-lg/6 text-white hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteRed"
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
              <div className="font-primary relative px-3 py-1 text-white hover:ring-gray-900/20">
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
                    <span className="hidden pl-6">
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
                Get ready for a once-in-a-generation celebration—America's 250th
                anniversary is almost here! Over 365 days, we’ll unite for
                thousands of events honoring our shared history, diverse
                stories, and bold future. Join millions of people in
                commemorating the spirit of a nation{" "}
                <span className="font-script">250</span> years in the making.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className="flex items-center gap-2 duration-700 ease-in-out bg-blue-800 rounded-b-xl px-6 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-blue-800"
                >
                  View All Events{" "}
                  <MdOutlineEvent aria-hidden="true" className="size-7" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 duration-700 ease-in-out bg-saluteNavy rounded-b-xl px-6 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-gradient-to-r hover:from-saluteTan hover:to-saluteTan hover:text-saluteNavy"
                >
                  Spectator Tickets{" "}
                  <IoTicketSharp aria-hidden="true" className="size-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
