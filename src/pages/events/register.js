import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FaCircle, FaFacebookSquare } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineEvent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineEventAvailable } from "react-icons/md";
import HeaderLogo from "../../images/SAA-Badge-Dates.png";
import AirShowCover from "../../images/event-covers/airshow.png";
import SportsCover from "../../images/event-covers/sports-event.png";
import CarCover from "../../images/event-covers/carshow.png";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { DateInput, TimeInput } from "@heroui/react";
import { useDateFormatter } from "@react-aria/i18n";
import {
  parseDate,
  parseAbsoluteToLocal,
  CalendarDate,
  Time,
} from "@internationalized/date";

import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Affiliate",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$19",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Partner",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Signature",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];

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
    tier: "Signature",
  },
  {
    name: "Lightning vs. Avalanche",
    location: "Lead Security Associate",
    eventType: "Sporting Event",
    email: "codyfisher@example.com",
    telephone: "+1-202-555-0114",
    imageUrl: SportsCover,
    tier: "Affiliate",
  },
  {
    name: "SEMA Pre Show",
    location: "Assurance Administrator",
    email: "estherhoward@example.com",
    telephone: "+1-202-555-0143",
    eventType: "Car Show",
    imageUrl: CarCover,
    tier: "Partner",
  },
];

const features = [
  {
    name: "Air Show or Aviation Event",
    description:
      "Military or civilian air shows or fly-ins with flyovers, jet teams, and aircraft displays",
    icon: MdAirplaneTicket,
  },
  {
    name: "Music Festival or Concert",
    description:
      "Live concerts, music events, or multi-act music festivals with patriotic themes or moments",
    icon: IoMusicalNotesSharp,
  },
  {
    name: "Sporting Event or Race",
    description:
      "Football, baseball, basketball, hockey games or races that include a patriotic salute",
    icon: GiAmericanFootballHelmet,
  },
  {
    name: "Patriotic or Historic Event",
    description:
      "Patriotic holiday celebrations, parades, reenactments, or events honoring U.S. history",
    icon: LiaFlagUsaSolid,
  },
];

export default function EventsHome() {
  //
  //
  //
  const today = new Date();

  const yyyy = today.getFullYear();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based

  const formattedDate = `${yyyy}-${dd}-${mm}`;
  //
  //
  const [startDateValue, setStartDateValue] = useState(
    parseDate(formattedDate)
  );

  const [startTime, setStartTime] = useState(
    parseAbsoluteToLocal("2024-04-08T18:45:22Z")
  );

  console.log(startDateValue);
  console.log(startTime);

  //
  //

  //
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed orci libero, mattis sed orci ut, sagittis
                          ultrices neque. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Donec at varius lacus. Pellentesque eget
                          varius sapien. Cras vel gravida diam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-x-4 mt-5">
                  {footerNavigation.map((item) => (
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
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                  >
                    Back to Events
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50 ">
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
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
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
                  className="text-lg/6 uppercase duration-300 ease-in-out text-white hover:underline hover:text-saluteTan p-3 rounded-md"
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
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=saluteBluede=600"
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
                        className="-mx-3 block rounded-2xl px-3 py-2 text-base/7 font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-2xl px-3 py-2.5 text-base/7 font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
      <div className="divider">
        <div className="bg-gradient-to-r from-saluteRed to-red-700 h-2.5" />
        <div className="bg-white h-1.5" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-2.5" />
      </div>
      <div className="bg-gray-50 relative pt-32">
        <img
          alt=""
          src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
          className="hidden absolute inset-0 -z-10 opacity-10 size-full object-cover scale-x-[-1]"
        />

        {/* <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" /> */}
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteTan text-xl font-primary font-extrabold uppercase">
            SAA{" "}
            <span className="font-script text-[1.2em] text-saluteBlue">
              250
            </span>
            Tour
          </p>
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteBlue sm:text-7xl">
            Register Your <span className="text-saluteBlue">Salute Across</span>
          </p>
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteBlue sm:text-7xl">
            <span className="text-saluteBlue">America</span>
            <span className="font-script text-[1.2em] text-saluteRed">
              250
            </span>{" "}
            Event
          </p>
          <div className="font-body py-2 text-center">
            <p className="text-lg text-gray-700 gap-2">
              Join a growing list of events nationwide proudly commemorating
              America’s 250th anniversary in 2026.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-10 py-2.5 text-lg/6 text-saluteBlue font-body font-semibold uppercase hover:underline hover:bg-saluteBlue hover:text-white"
            >
              Skip Information and Register{" "}
              <FaRegArrowAltCircleDown aria-hidden="true" className="size-7" />
            </a>
          </div>

          <div className="pt-6 pb-8 border-t border-gray-600 mt-10 py-20 sm:pt-14">
            <div className="">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-center font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
                  Event Tiers
                </p>
                <div className="pt-10 isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div className="lg:mt-12 -mr-px lg:rounded-r-none flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-gray-900 text-4xl/8 font-primary font-semibold">
                          Affiliate{" "}
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteBlue">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:mt-6 -mr-px lg:rounded-r-none lg:rounded-bl-none flex flex-col justify-between rounded-3xl bg-saluteTan/40 p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-gray-900 flex items-center gap-x-2 text-4xl/8 font-primary font-semibold">
                          Partner{" "}
                          <MdStarBorder aria-hidden="true" className="size-8" />
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteBlue">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="-mr-px lg:rounded-bl-none flex flex-col justify-between rounded-3xl bg-saluteBlue p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-white flex items-center gap-x-2 text-4xl/8 font-primary font-semibold">
                          Signature{" "}
                          <MdOutlineStar
                            aria-hidden="true"
                            className="animate-pulse text-saluteTan size-8"
                          />
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-200 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-saluteTan"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-white"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-100 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteTan">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-saluteTan"
                      >
                        {tiers[0].features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-white"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20 mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
              <p className="text-center font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
                Event Types
              </p>
              <dl className="pt-16 font-body grid grid-cols-1 gap-16 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className="flex size-14 items-center justify-center rounded-lg bg-saluteBlue text-white">
                        <feature.icon aria-hidden="true" className="size-8" />
                      </div>
                      <p className="mt-6 text-lg/8 font-semibold tracking-tight text-saluteBlue">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-saluteTan/50 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className=" text-center font-primary text-4xl font-semibold tracking-tight text-saluteBlue sm:text-6xl">
            Register Your Event
          </h3>
          <p className="py-8 font-body text-lg text-gray-700 gap-2 text-center max-w-3xl mx-auto">
            Complete the form below to share your event with us. All submissions
            are reviewed to ensure they align with the patriotic spirit of
            Salute Across America 250. Once approved, you’ll receive
            confirmation and next steps by email.
          </p>
          <form className="border-t border-saluteBlue pt-8 font-body">
            <div className="space-y-12 sm:space-y-16">
              <div>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Profile
                </h2>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>

                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="username"
                      className="block text-sm/6 font-medium sm:pt-1.5 text-red-600"
                    >
                      Event Name*
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                        <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                          workcation.com/
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="janesmith"
                          className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Event Start Date and Time
                    </label>
                    <div className="mt-2 flex gap-x-4 sm:mt-0">
                      <div className="font-body block w-1/2 rounded-md bg-white py-1.5 text-base text-gray-900 tracking-[1px] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6">
                        <DateInput
                          aria-label="Start Date"
                          onChange={setStartDateValue}
                          placeholderValue={new CalendarDate(1995, 11, 6)}
                        />
                      </div>
                      <div className="font-body block w-1/2 rounded-md bg-white py-1.5 text-base text-gray-900 tracking-[1px] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6">
                        <TimeInput
                          aria-label="Start Time"
                          onChange={setStartTime}
                          defaultValue={new Time(12, 0)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Event End Date and Time
                    </label>
                    <div className="mt-2 flex gap-x-4 sm:mt-0">
                      <div className="font-body block w-1/2 rounded-md bg-white py-1.5 text-base text-gray-900 tracking-[1px] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6">
                        <DateInput
                          aria-label="Start Date"
                          onChange={setStartDateValue}
                          placeholderValue={new CalendarDate(1995, 11, 6)}
                        />
                      </div>
                      <div className="font-body block w-1/2 rounded-md bg-white py-1.5 text-base text-gray-900 tracking-[1px] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6">
                        <TimeInput
                          aria-label="Start Time"
                          onChange={setStartTime}
                          defaultValue={new Time(12, 0)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                    >
                      Requested Event Tier*
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="grid grid-cols-1 sm:max-w-xs">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                        >
                          <option>Affiliate</option>
                          <option>Partner</option>
                          <option>Signature</option>
                        </select>
                        <FaRegArrowAltCircleDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                    >
                      Event Type*
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="grid grid-cols-1 sm:max-w-xs">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                        <FaRegArrowAltCircleDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                    >
                      Event/Venue Address*
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                        <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                          workcation.com/
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="janesmith"
                          className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      About
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-2xl sm:text-sm/6"
                        defaultValue={""}
                      />
                      <p className="mt-3 text-sm/6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Cover photo
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      First name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Last name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Email address
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-md sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="country"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Country
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="grid grid-cols-1 sm:max-w-xs">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                        <FaRegArrowAltCircleDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      Street address
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xl sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      City
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="region"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      State / Province
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Notifications
                </h2>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </p>

                <div className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                  <fieldset>
                    <legend className="sr-only">By email</legend>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                      <div
                        aria-hidden="true"
                        className="text-sm/6 font-semibold text-gray-900"
                      >
                        By email
                      </div>
                      <div className="mt-4 sm:col-span-2 sm:mt-0">
                        <div className="max-w-lg space-y-6">
                          <div className="flex gap-3">
                            <div className="flex h-6 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultChecked
                                  id="comments"
                                  name="comments"
                                  type="checkbox"
                                  aria-describedby="comments-description"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-saluteBlue checked:bg-saluteBlue indeterminate:border-saluteBlue indeterminate:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-sm/6">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-900"
                              >
                                Comments
                              </label>
                              <p
                                id="comments-description"
                                className="text-gray-500"
                              >
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex h-6 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  aria-describedby="candidates-description"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-saluteBlue checked:bg-saluteBlue indeterminate:border-saluteBlue indeterminate:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-sm/6">
                              <label
                                htmlFor="candidates"
                                className="font-medium text-gray-900"
                              >
                                Candidates
                              </label>
                              <p
                                id="candidates-description"
                                className="text-gray-500"
                              >
                                Get notified when a candidate applies for a job.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex h-6 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  aria-describedby="offers-description"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-saluteBlue checked:bg-saluteBlue indeterminate:border-saluteBlue indeterminate:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="text-sm/6">
                              <label
                                htmlFor="offers"
                                className="font-medium text-gray-900"
                              >
                                Offers
                              </label>
                              <p
                                id="offers-description"
                                className="text-gray-500"
                              >
                                Get notified when a candidate accepts or rejects
                                an offer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="sr-only">Push notifications</legend>
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                      <div
                        aria-hidden="true"
                        className="text-sm/6 font-semibold text-gray-900"
                      >
                        Push notifications
                      </div>
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <div className="max-w-lg">
                          <p className="text-sm/6 text-gray-600">
                            These are delivered via SMS to your mobile phone.
                          </p>
                          <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                              <input
                                defaultChecked
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-saluteBlue checked:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                              />
                              <label
                                htmlFor="push-everything"
                                className="block text-sm/6 font-medium text-gray-900"
                              >
                                Everything
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-saluteBlue checked:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                              />
                              <label
                                htmlFor="push-email"
                                className="block text-sm/6 font-medium text-gray-900"
                              >
                                Same as email
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-saluteBlue checked:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                              />
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm/6 font-medium text-gray-900"
                              >
                                No push notifications
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-saluteBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-saluteBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saluteBlue"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-saluteBlue md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
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
                    <item.icon
                      aria-hidden="true"
                      className="text-white hover:opacity-80 size-6"
                    />
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
    </>
  );
}
