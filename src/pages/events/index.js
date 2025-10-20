import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import EventModal from "../../components/EventModal";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FaCircle } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineFestival } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
///Covers
import AirShowCover from "../../images/event-covers/airshow.png";
import SportsCover from "../../images/event-covers/sports-event.png";
import MusicCover from "../../images/event-covers/musicfest.png";
import CarCover from "../../images/event-covers/carshow.png";
import LocalCover from "../../images/event-covers/local.png";
import SchoolCover from "../../images/event-covers/school.png";
import MilitaryCover from "../../images/event-covers/military.png";
import PatrioticCover from "../../images/event-covers/patriotic.png";
import OtherCover from "../../images/event-covers/other.png";
///
import CTA from "../../images/girl-cta.jpg";
import Favicon from "../../images/favicon.png";
import OGFB from "../../images/og-image.jpg";
import { Helmet } from "react-helmet";
import { IoMusicalNotesSharp } from "react-icons/io5";
import FlagBg from "../../images/flag-bg.jpg";

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
  //
  const [openEvent, setOpenEvent] = useState(false);
  const [selected, setSelected] = useState(null);

  //
  // For share link if we use it
  //
  // useEffect(() => {
  //   var params = new URLSearchParams(window.location.search);
  //   const paramOrder = params.get("o") || null;
  //   if (paramOrder === null) {
  //     setOpenEvent(false);
  //   } else {
  //     setOpenEvent(true);
  //   }
  // }, []);

  const [allEvents, setAllEvents] = useState(null);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullApprovedEvents",
      {
        method: "POST",
      }
    );

    const events = await response.json();

    setAllEvents(events);
  };
  //
  //
  function convertTo12Hour(time24) {
    const [hourStr, minuteStr] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    var minute = minuteStr;
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12; // Convert 0 to 12

    if (minute === "0") {
      var minute = "00";
    }

    return `${hour}:${minute} ${ampm}`;
  }
  //
  //
  //
  //
  const handleOpenEvent = (eventId) => {
    setOpenEvent(eventId);
  };
  //
  //
  const handleCloseEvent = () => {
    setOpenEvent(null);
  };
  //
  //
  //
  //

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>All Events || Salute Across America 250</title>
        <meta name="title" content="Salute Across America 250" />
        <meta
          name="description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta name="keywords" content="America, 250, America 250th" />
        <meta name="author" content="Salute Across America 250" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saluteacrossamerica250.com/" />
        <meta property="og:title" content="Salute Across America 250" />
        <meta
          property="og:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta property="og:image" content={OGFB} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://saluteacrossamerica250.com/"
        />
        <meta name="twitter:title" content="Salute Across America 250" />
        <meta
          name="twitter:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta name="twitter:image" content={Favicon} />

        {/* Favicons */}
        <link rel="icon" href={Favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={Favicon} />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://saluteacrossamerica250.com/" />

        {/* Theme and Mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Helmet>
      <div>
        <EventModal openEvent={openEvent} setOpenEvent={setOpenEvent} />
      </div>
      <div className="bg-white"></div>
      <div className="divider">
        <div className="bg-gradient-to-r from-saluteRed to-red-700 h-2.5" />
        <div className="bg-white h-1.5" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-2.5" />
      </div>

      <div className="relative py-32">
        <img
          alt=""
          src={FlagBg}
          className="absolute inset-0 -z-10 opacity-70 size-full object-cover scale-x-[-1]"
        />

        <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteTan text-xl font-primary font-extrabold uppercase">
            SAA <span className="font-script text-[1.2em] text-white">250</span>
          </p>
          <h1 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteTan sm:text-7xl">
            All{" "}
            <span className="font-script text-[1.2em] text-white">2026</span>{" "}
            Events
          </h1>
          <div className="mt-8 lg:flex items-center justify-center gap-x-6">
            <a
              href="register"
              className="w-full justify-center border-t-2 border-red-500 lg:w-auto flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
            <a
              href="/spectators/"
              className="mt-5 w-full justify-center font-body uppercase font-semibold border-t-2 border-yellow-100 lg:w-auto lg:mt-0 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-14 py-2.5 text-lg/6 text-saluteBlue hover:underline hover:bg-saluteBlue hover:text-white"
            >
              Spectators{" "}
              <IoMdNotifications aria-hidden="true" className="size-7" />
            </a>
          </div>
          <div className="pt-6 pb-8 border-t border-b border-gray-600 mt-10">
            <div className="hidden pb-8 flex justify-center gap-x-4">
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
            {allEvents === null ? (
              <ul
                role="list"
                className="tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3"
              >
                <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
                <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
                <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
              </ul>
            ) : (
              <ul
                role="list"
                className="tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3"
              >
                {allEvents
                  .slice() // optional: avoid mutating the original array
                  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
                  .map((event) => (
                    <>
                      {openEvent === event.id && (
                        <EventModal
                          event={event}
                          open={openEvent === event.id}
                          onClose={handleCloseEvent}
                          convertTo12Hour={convertTo12Hour}
                        />
                      )}
                      <li
                        key={event.email}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 "
                      >
                        <button
                          onClick={() => handleOpenEvent(event.id)}
                          className="text-left duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-2xl group"
                        >
                          <div className="rounded-t-2xl bg-white ring-1 ring-blue-700/10 flex flex-1 flex-col p-6">
                            <div className="relative isolate overflow-hidden rounded-2xl py-12">
                              {event.eventType === "Air Show" ? (
                                <img
                                  alt=""
                                  src={AirShowCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Sports" ? (
                                <img
                                  alt=""
                                  src={SportsCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Car/RV/Boat" ? (
                                <img
                                  alt=""
                                  src={CarCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Patriotic/Historic" ? (
                                <img
                                  alt=""
                                  src={PatrioticCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Music Festival" ? (
                                <img
                                  alt=""
                                  src={MusicCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "State/Local" ? (
                                <img
                                  alt=""
                                  src={LocalCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Military/Tribute" ? (
                                <img
                                  alt=""
                                  src={MilitaryCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Educational/STEM" ? (
                                <img
                                  alt=""
                                  src={SchoolCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}
                              {event.eventType === "Other" ? (
                                <img
                                  alt=""
                                  src={OtherCover}
                                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                                />
                              ) : (
                                <></>
                              )}

                              <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply duration-300 ease-in-out group-hover:saturate-0" />
                              <div className="relative flex justify-center duration-300 opacity-90 group-hover:blur-[2px] ease-in-out group-hover:opacity-60">
                                {event.eventType === "Air Show" ? (
                                  <MdAirplaneTicket
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Air Show"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Sports" ? (
                                  <GiAmericanFootballHelmet
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Sporting Event"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Car/RV/Boat" ? (
                                  <IoCarSportSharp
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Car/RV/Boat Show"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Music Festival" ? (
                                  <IoMusicalNotesSharp
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Music Festival"
                                  />
                                ) : (
                                  <></>
                                )}

                                {event.eventType === "Patriotic/Historic" ? (
                                  <LiaFlagUsaSolid
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Patriotic/Historic Event"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "State/Local" ? (
                                  <MdOutlineFestival
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="State/Local Event"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Military/Tribute" ? (
                                  <FaPersonMilitaryRifle
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Military/Tribute Event"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Educational/STEM" ? (
                                  <RiSchoolFill
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Educational/STEM Event"
                                  />
                                ) : (
                                  <></>
                                )}
                                {event.eventType === "Other" ? (
                                  <BsPatchQuestionFill
                                    aria-hidden="true"
                                    className="size-24 text-white"
                                    title="Other"
                                  />
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                            <dd className="mt-4 font-body">
                              <dt className="sr-only">eventType</dt>
                              <div className="flex gap-x-2">
                                {event.eventTier === "Signature" ? (
                                  <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                                    <MdOutlineStar
                                      aria-hidden="true"
                                      className="size-4"
                                    />

                                    {event.eventTier}
                                  </span>
                                ) : (
                                  <></>
                                )}
                                {event.eventTier === "Partner" ? (
                                  <span className="inline-flex gap-x-1 items-center rounded-md bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                                    <MdStarBorder
                                      aria-hidden="true"
                                      className="size-4"
                                    />
                                    {event.eventTier}
                                  </span>
                                ) : (
                                  <></>
                                )}
                                {event.eventTier === "Affiliate" ? (
                                  <span className="inline-flex gap-x-1 items-center rounded-md bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                                    <FaCircle
                                      aria-hidden="true"
                                      className="size-2"
                                    />
                                    {event.eventTier}
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
                              <dt className="sr-only">Date</dt>
                              {event.startDate === "12/12/9999" ? (
                                <dd className="text-sm text-gray-600 flex items-center gap-2">
                                  <FaClock
                                    aria-hidden="true"
                                    className="size-4 text-blue-700"
                                  />{" "}
                                  <span className="text-gray-400">TBA</span>
                                </dd>
                              ) : (
                                <dd className="text-sm text-gray-600 flex items-center gap-2">
                                  <FaClock
                                    aria-hidden="true"
                                    className="size-4 text-blue-700"
                                  />{" "}
                                  <span className="text-blue-600">
                                    {" "}
                                    {event.startDate === event.endDate ? (
                                      new Date(
                                        event.startDate
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short", // 'short' gives you "Dec"
                                        day: "numeric",
                                      })
                                    ) : (
                                      <></>
                                    )}
                                    {event.startDate !== event.endDate ? (
                                      <>
                                        {new Date(
                                          event.startDate
                                        ).toLocaleDateString("en-US", {
                                          month: "short", // 'short' gives you "Dec"
                                          day: "numeric",
                                        })}
                                        -{new Date(event.endDate).getDate()},{" "}
                                        {new Date(
                                          event.endDate
                                        ).toLocaleDateString("en-US", {
                                          year: "numeric",
                                        })}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </span>
                                  {"|"} {convertTo12Hour(event.startTime)} -{" "}
                                  {convertTo12Hour(event.endTime)}
                                </dd>
                              )}
                            </dl>

                            <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                              <dt className="sr-only">Address</dt>
                              {event.venue === undefined ? (
                                <dd className="text-sm text-gray-600 flex items-start gap-2">
                                  <MdLocationPin
                                    aria-hidden="true"
                                    className="size-5 text-blue-700"
                                  />{" "}
                                  {event.address.slice(0, -5)}
                                </dd>
                              ) : (
                                <>
                                  <dd className="text-sm text-gray-600 flex items-start gap-2">
                                    <MdLocationPin
                                      aria-hidden="true"
                                      className="size-5 text-blue-700"
                                    />{" "}
                                    {event.address.slice(0, -5)}
                                  </dd>
                                </>
                              )}
                            </dl>
                            {event.price === undefined ? (
                              <>
                                {event.website === undefined ? (
                                  <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                                    <dt className="sr-only">Price</dt>
                                    <dd className="text-sm text-gray-600 flex items-start gap-2">
                                      <IoTicketSharp
                                        aria-hidden="true"
                                        className="size-5 text-blue-700"
                                      />{" "}
                                      <span className="text-gray-400">
                                        {" "}
                                        TBA
                                      </span>
                                    </dd>
                                  </dl>
                                ) : (
                                  <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                                    <dt className="sr-only">Price</dt>
                                    <dd className="text-sm text-gray-600 flex items-start gap-2">
                                      <IoTicketSharp
                                        aria-hidden="true"
                                        className="size-5 text-blue-700"
                                      />{" "}
                                      <span className="text-gray-400">
                                        {" "}
                                        Check Event Website
                                      </span>
                                    </dd>
                                  </dl>
                                )}
                              </>
                            ) : (
                              <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                                <dt className="sr-only">Price</dt>
                                <dd className="text-sm text-gray-600 flex items-start gap-2">
                                  <IoTicketSharp
                                    aria-hidden="true"
                                    className="size-5 text-blue-700"
                                  />{" "}
                                  {event.price}
                                </dd>
                              </dl>
                            )}
                          </div>
                          <div>
                            <div className="duration-300 ease-in-out font-body -mt-px flex divide-x divide-gray-200 bg-blue-700 group-hover:opacity-80 rounded-b-2xl">
                              <div className="border-t border-gray-200 flex w-0 flex-1">
                                <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent py-4 text-sm font-semibold text-white group-hover:underline">
                                  <IoTicketSharp
                                    aria-hidden="true"
                                    className="size-5 text-saluteTan"
                                  />
                                  Event Details
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </li>
                    </>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-indigo-600 lg:absolute lg:left-0 lg:h-full lg:w-1/3 lg:w-1/2">
          <img alt="" src={CTA} className="size-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 lg:ml-auto lg:w-2/3 lg:pl-16 lg:w-1/2  lg:pr-0">
            <h3 className="font-primary mt-2 text-4xl font-semibold tracking-tight text-gray-800 sm:text-6xl">
              Have Questions About <span className="text-blue-800">SAA</span>{" "}
              <span className="font-script text-[1.2em] text-saluteRed">
                250?
              </span>
            </h3>
            <p className="mt-6 font-body text-lg/7 text-gray-600">
              Learn what Salute Across America 250 is all about, how you can
              take part in the celebration, and where to find the latest list of
              upcoming events. If you represent an event, you’ll also discover
              how to apply to be part of SAA250, and explore opportunities for
              sponsors and partners to get involved. All of this can be found on
              our dedicated Facts & Questions page, giving you quick answers
              without the need to call.
            </p>
            <div className="mt-8 flex">
              <a
                href="../contact/"
                className="font-body uppercase font-semibold border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-14 py-2.5 text-lg/6 text-white hover:underline hover:bg-saluteTan hover:text-saluteRed"
              >
                Contact Us{" "}
                <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
