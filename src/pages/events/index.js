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
const people = [
  "All Events",
  "Air Show",
  "Music Festival",
  "Sporting Event",
  "Patriotic Event",
  "State Festival",
  "Car/Rv/Boat Show",
  "Military Event",
  "Educational Event",
  "Other",
];

export default function EventsHome() {
  if (typeof window === "undefined") {
    var urlParams = new URLSearchParams({ f: "bar", l: "bar" });
  } else {
    var urlParams = new URLSearchParams(window.location.search);
  }

  const paramOrder = urlParams.get("o") || null;
  console.log(paramOrder);
  //
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const targetDate = new Date("January 1, 2026 00:00:00");

  useEffect(() => {
    if (paramOrder === null) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

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

      <div className="relative py-32">
        <img
          alt=""
          src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
          className="absolute inset-0 -z-10 opacity-60 size-full object-cover scale-x-[-1]"
        />

        <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteTan text-xl font-primary font-extrabold uppercase">
            SAA <span className="font-script text-[1.2em] text-white">250</span>
            Tour
          </p>
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteTan sm:text-7xl">
            All{" "}
            <span className="font-script text-[1.2em] text-white">2026</span>{" "}
            Events
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
            <a
              href="#"
              className="font-body uppercase font-semibold border-t-2 border-yellow-100 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-14 py-2.5 text-lg/6 text-saluteBlue hover:underline hover:bg-saluteBlue  hover:text-white"
            >
              Spectators{" "}
              <IoMdNotifications aria-hidden="true" className="size-7" />
            </a>
          </div>
          <div className="pt-6 pb-8 border-t border-b border-gray-600 mt-10">
            <div className="pb-8 flex gap-x-4">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="flex items-center gap-x-1 font-body bg-white px-10 py-4 text-md text-saluteRed font-medium rounded-full hover:bg-saluteRed hover:text-white focus-visible:outline-saluteBlue">
                    <span className="">
                      {selected ? selected : "Event Tier"}
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-3xl bg-white py-4 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    <ListboxOption
                      value="Signature Event"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Signature
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Partner Event"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Partner
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Affiliate Event"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Affiliate
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Event Tier"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-600 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold underline">
                        Clear
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>

              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="flex items-center gap-x-1 font-body bg-white px-10 py-4 text-md text-saluteRed font-medium rounded-full hover:bg-saluteRed hover:text-white focus-visible:outline-saluteBlue">
                    <span className="">
                      {selected ? selected : "Event Type"}
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-3xl bg-white py-4 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    {people.map((person) => (
                      <ListboxOption
                        key={person}
                        value={person}
                        className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                      >
                        <span className="block truncate font-normal group-data-[selected]:font-semibold">
                          {person}
                        </span>
                      </ListboxOption>
                    ))}
                    <ListboxOption
                      value="Event Tier"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-600 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold underline">
                        Clear
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>

              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="flex items-center gap-x-1 font-body bg-white px-10 py-4 text-md text-saluteRed font-medium rounded-full hover:bg-saluteRed hover:text-white focus-visible:outline-saluteBlue">
                    <span className="">
                      {selected ? selected : "Event Name"}
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-3xl bg-white py-4 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    <ListboxOption
                      value="ASC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Ascending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="DESC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Descending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Event Tier"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-600 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold underline">
                        Clear
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>

              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="flex items-center gap-x-1 font-body bg-white px-10 py-4 text-md text-saluteRed font-medium rounded-full hover:bg-saluteRed hover:text-white focus-visible:outline-saluteBlue">
                    <span className="">
                      {selected ? selected : "Start Date"}
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-3xl bg-white py-4 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    <ListboxOption
                      value="ASC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Ascending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="DESC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Descending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Event Tier"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-600 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold underline">
                        Clear
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>

              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="flex items-center gap-x-1 font-body bg-white px-10 py-4 text-md text-saluteRed font-medium rounded-full hover:bg-saluteRed hover:text-white focus-visible:outline-saluteBlue">
                    <span className="">{selected ? selected : "Price"}</span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 w-full overflow-auto rounded-3xl bg-white py-4 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                  >
                    <ListboxOption
                      value="ASC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Ascending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="DESC"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Descending
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Free"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-700 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                        Free
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value="Event Tier"
                      className="group relative cursor-default select-none py-2 pl-4 pr-4 text-gray-600 data-[focus]:bg-saluteRed data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold underline">
                        Clear
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
            <ul
              role="list"
              className="tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
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
                          {event.tier === "Signature" ? (
                            <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                              <MdOutlineStar
                                aria-hidden="true"
                                className="size-4"
                              />

                              {event.tier}
                            </span>
                          ) : (
                            <></>
                          )}
                          {event.tier === "Partner" ? (
                            <span className="inline-flex gap-x-1 items-center rounded-md bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                              <MdStarBorder
                                aria-hidden="true"
                                className="size-4"
                              />
                              {event.tier}
                            </span>
                          ) : (
                            <></>
                          )}
                          {event.tier === "Affiliate" ? (
                            <span className="inline-flex gap-x-1 items-center rounded-md bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                              <FaCircle aria-hidden="true" className="size-2" />
                              {event.tier}
                            </span>
                          ) : (
                            <></>
                          )}
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
