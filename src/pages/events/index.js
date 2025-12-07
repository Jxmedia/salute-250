import React, { useState, useEffect, useMemo } from "react";
import Layout from "../../components/Layout";
import EventModal from "../../components/EventModal";
import EventMap from "../../components/Map";
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
import { MdLocationPin, MdLocationCity } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
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
import ParadeCover from "../../images/event-covers/parade.png";

///
import CTA from "../../images/girl-cta.jpg";
import Favicon from "../../images/favicon.png";
import OGFB from "../../images/og-image.jpg";
import { Helmet } from "react-helmet";
import { IoMusicalNotesSharp } from "react-icons/io5";
import FlagBg from "../../images/flag-bg.jpg";
import { BiParty } from "react-icons/bi";

export default function EventsHome() {
  //
  const [openEvent, setOpenEvent] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isListView, setIsListView] = useState(false);

  const [allEvents, setAllEvents] = useState(null);
  const [eventTypeFilter, setEventTypeFilter] = useState("View All");
  const googleMapsApiKey = "AIzaSyDwKx1yTYrz4Z7mpDf8-0Cz5D5BTXhsPPE";

  const [query, setQuery] = useState("");

  const clearSearch = () => {
    setQuery("");
  };

  const filteredEvents = useMemo(() => {
    if (!allEvents) return []; // Return empty array if events not loaded yet

    const lowerQuery = query.trim().toLowerCase();

    return allEvents.filter((event) => {
      // Text search filter (city, state, zip)
      const matchesText =
        !lowerQuery ||
        event.city?.toLowerCase().includes(lowerQuery) ||
        event.state?.toLowerCase().includes(lowerQuery) ||
        event.zip?.toString().includes(lowerQuery);

      // Event type filter: "View All" means no filtering
      const matchesType =
        eventTypeFilter === "View All" || event.eventType === eventTypeFilter;

      return matchesText && matchesType; // Must match both filters
    });
  }, [query, eventTypeFilter, allEvents]);

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
  //
  const handleEventTypeFilter = (e) => {
    setEventTypeFilter(e.target.value);
  };
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
  function formatDateLocal(isoString) {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Keep minutes padded
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Converts 0 -> 12

    return `${hours}:${minutes} ${ampm}`; // hours no padStart
  }
  //
  //
  //

  //
  //
  //
  //
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
        <meta property="og:url" content="https://saa250.com/" />
        <meta property="og:title" content="Salute Across America 250" />
        <meta
          property="og:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta property="og:image" content={OGFB} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saa250.com/" />
        <meta name="twitter:title" content="Salute Across America 250" />
        <meta
          name="twitter:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta name="twitter:image" content={Favicon} />

        {/* Favicons */}
        <link rel="icon" href={Favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={Favicon} />

        {/* Canonical Link */}
        <link rel="canonical" href="https://saa250.com/" />

        {/* Theme and Mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Helmet>

      <div className="relative pt-32">
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
              Get Notified{" "}
              <IoMdNotifications aria-hidden="true" className="size-7" />
            </a>
          </div>
          <div className="py-6 relative flex justify-center gap-x-6 items-center">
            <div className="relative lg:w-1/3">
              <input
                type="text"
                placeholder="Search by city, state or zip..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-3 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {/* X icon (Heroicon-style SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="relative lg:w-1/3">
              <select
                id="eventType"
                name="eventType"
                autoComplete="country-name"
                onChange={handleEventTypeFilter}
                className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-3 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" selected disabled hidden>
                  Filter by Event Type
                </option>
                <option value="View All">View All</option>
                <option value="Air Show">Air Show</option>
                <option value="Music Festival">Music Festival</option>
                <option value="Sports">Sporting Event</option>
                <option value="Patriotic/Historic">Patriotic/Historic</option>
                <option value="State/Local">State/Local</option>
                <option value="Car/RV/Boat">Car/RV/Boat</option>
                <option value="Military/Tribute">Military/Tribute</option>
                <option value="Educational/STEM">Educational/STEM</option>
                <option value="Parade">Parade</option>
                <option value="Other">Other</option>
              </select>

              {query && (
                <button
                  onClick={clearSearch}
                  type="button"
                  className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {/* X icon (Heroicon-style SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="lg:w-1/3">
              <div className="font-body bg-white grid grid-cols-2 gap-x-1 rounded-xl p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200">
                <label className="group relative rounded-xl px-2.5 py-3 has-[:checked]:bg-saluteBlue">
                  <input
                    defaultValue="map"
                    checked={isListView === false}
                    onChange={() => setIsListView(false)}
                    id="view"
                    name="view"
                    type="radio"
                    className="absolute inset-0 appearance-none rounded-full"
                  />
                  <span className="text-gray-500 group-has-[:checked]:text-white">
                    Map View
                  </span>
                </label>
                <label className="group relative rounded-xl px-2.5 py-3 has-[:checked]:bg-saluteBlue">
                  <input
                    id="view"
                    checked={isListView === true}
                    onChange={() => setIsListView(true)}
                    name="view"
                    type="radio"
                    className="absolute inset-0 appearance-none pointer-events-auto rounded-full"
                  />
                  <span className="text-gray-500 group-has-[:checked]:text-white">
                    List View
                  </span>
                </label>
              </div>
            </div>
          </div>
          {isListView === true ? (
            <div className="pt-6 pb-8 border-t">
              {filteredEvents === null ? (
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
                  {filteredEvents.length > 0 ? (
                    filteredEvents
                      .slice() // optional: avoid mutating the original array
                      .sort((a, b) => {
                        const dateA = a.dateTime?.[0]
                          ? new Date(a.dateTime[0])
                          : null;
                        const dateB = b.dateTime?.[0]
                          ? new Date(b.dateTime[0])
                          : null;

                        // Both null → equal
                        if (!dateA && !dateB) return 0;

                        // Nulls last
                        if (!dateA) return 1;
                        if (!dateB) return -1;

                        // Compare valid dates
                        return dateA - dateB;
                      })
                      .map((event) => (
                        <>
                          {openEvent === event.id && (
                            <EventModal
                              event={event}
                              open={openEvent === event.id}
                              onClose={handleCloseEvent}
                              formatDateLocal={formatDateLocal}
                              googleMapsApiKey={googleMapsApiKey}
                            />
                          )}
                          <li
                            key={event.email}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 "
                          >
                            <button
                              onClick={() => handleOpenEvent(event.id)}
                              className="text-left duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-2xl group h-full w-full"
                            >
                              <div className="bg-white rounded-2xl ring-1 ring-blue-700/10 flex flex-col justify-between h-full">
                                {/* Top content area */}
                                <div className="flex flex-col flex-grow p-6">
                                  {/* Background image + icon section */}
                                  <div className="relative isolate overflow-hidden rounded-2xl py-12">
                                    {event.img != undefined ? (
                                      <img
                                        alt=""
                                        src={event.img}
                                        className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                      />
                                    ) : (
                                      <>
                                        {" "}
                                        {event.eventType === "Air Show" && (
                                          <img
                                            alt=""
                                            src={AirShowCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType === "Sports" && (
                                          <img
                                            alt=""
                                            src={SportsCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType === "Car/RV/Boat" && (
                                          <img
                                            alt=""
                                            src={CarCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType ===
                                          "Patriotic/Historic" && (
                                          <img
                                            alt=""
                                            src={PatrioticCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType ===
                                          "Music Festival" && (
                                          <img
                                            alt=""
                                            src={MusicCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType === "State/Local" && (
                                          <img
                                            alt=""
                                            src={LocalCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType ===
                                          "Military/Tribute" && (
                                          <img
                                            alt=""
                                            src={MilitaryCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType ===
                                          "Educational/STEM" && (
                                          <img
                                            alt=""
                                            src={SchoolCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType === "Parade" && (
                                          <img
                                            alt=""
                                            src={ParadeCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                        {event.eventType === "Other" && (
                                          <img
                                            alt=""
                                            src={OtherCover}
                                            className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                          />
                                        )}
                                      </>
                                    )}

                                    <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply group-hover:saturate-0" />
                                    <div className="relative flex justify-center opacity-90 group-hover:blur-[2px] group-hover:opacity-60">
                                      {event.eventType === "Air Show" && (
                                        <MdAirplaneTicket className="size-24 text-white" />
                                      )}
                                      {event.eventType === "Sports" && (
                                        <GiAmericanFootballHelmet className="size-24 text-white" />
                                      )}
                                      {event.eventType === "Car/RV/Boat" && (
                                        <IoCarSportSharp className="size-24 text-white" />
                                      )}
                                      {event.eventType === "Music Festival" && (
                                        <IoMusicalNotesSharp className="size-24 text-white" />
                                      )}
                                      {event.eventType ===
                                        "Patriotic/Historic" && (
                                        <LiaFlagUsaSolid className="size-24 text-white" />
                                      )}
                                      {event.eventType === "State/Local" && (
                                        <MdOutlineFestival className="size-24 text-white" />
                                      )}
                                      {event.eventType ===
                                        "Military/Tribute" && (
                                        <FaPersonMilitaryRifle className="size-24 text-white" />
                                      )}
                                      {event.eventType ===
                                        "Educational/STEM" && (
                                        <RiSchoolFill className="size-24 text-white" />
                                      )}
                                      {event.eventType === "Parade" && (
                                        <BiParty className="size-24 text-white" />
                                      )}
                                      {event.eventType === "Other" && (
                                        <BsPatchQuestionFill className="size-24 text-white" />
                                      )}
                                    </div>
                                  </div>

                                  {/* Tags */}
                                  <div className="mb-0 mt-4 font-body">
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
                                  </div>

                                  {/* Title */}
                                  <h3 className="py-3 text-2xl font-primary font-medium text-gray-700">
                                    {event.name}
                                  </h3>

                                  {/* Date */}
                                  <dl className="border-t pt-2 mt-2 flex flex-col font-body gap-2">
                                    <dt className="sr-only">Date</dt>
                                    <div className="mb-0 mb-0 text-sm text-gray-600 flex items-center gap-2">
                                      <FaClock className="size-4 text-blue-700" />
                                      {event.dateTime === null ? (
                                        <span className="text-gray-400">
                                          TBA
                                        </span>
                                      ) : (
                                        <>
                                          {event.isSingleDate === true ? (
                                            <span className="text-blue-600 font-medium">
                                              {/* {formatDateLocal(event.dateTime)} */}
                                              {new Date(
                                                event.dateTime
                                              ).toLocaleString("en-US", {
                                                month: "long",
                                              })}{" "}
                                              {new Date(
                                                event.dateTime
                                              ).getDate()}
                                              ,{" "}
                                              <span className="text-blue-600 font-bold">
                                                {new Date(
                                                  event.dateTime
                                                ).getFullYear()}
                                              </span>
                                            </span>
                                          ) : (
                                            <span className="text-blue-600 font-medium">
                                              {/* {formatDateLocal(event.dateTime)} */}
                                              {new Date(
                                                event.dateTime[0]
                                              ).toLocaleString("en-US", {
                                                month: "long",
                                              })}{" "}
                                              {new Date(
                                                event.dateTime[0]
                                              ).getDate()}{" "}
                                              -{" "}
                                              {new Date(
                                                event.dateTime[1]
                                              ).toLocaleString("en-US", {
                                                month: "long",
                                              })}{" "}
                                              {new Date(
                                                event.dateTime[1]
                                              ).getDate()}
                                              ,{" "}
                                              <span className="text-blue-600 font-bold">
                                                {new Date(
                                                  event.dateTime[0]
                                                ).getFullYear()}
                                              </span>
                                            </span>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </dl>

                                  {event.venue === null ? (
                                    <span className="text-gray-400">TBA</span>
                                  ) : (
                                    <dl className="border-t pt-2 flex flex-col font-body">
                                      <dt className="sr-only">Venue</dt>
                                      <div className="mb-0 text-sm text-gray-600 flex items-start gap-2">
                                        <MdLocationCity className="size-5 text-blue-700" />
                                        {event.venue}
                                      </div>
                                    </dl>
                                  )}

                                  {/* Address */}
                                  <dl className="border-t pt-2 flex flex-col font-body">
                                    <dt className="sr-only">Address</dt>
                                    <div className="mb-0 mb-0 text-sm text-gray-600 flex items-start gap-2">
                                      <MdLocationPin className="size-5 text-blue-700" />
                                      {event.address.slice(0, -5)}
                                    </div>
                                  </dl>
                                </div>

                                {/* Footer - always pinned to bottom */}
                                <div className="font-body bg-blue-700 group-hover:opacity-80 rounded-b-2xl">
                                  <div className="flex w-full justify-center py-4 text-sm font-semibold text-white group-hover:underline">
                                    <IoTicketSharp className="size-5 text-saluteTan mr-2" />
                                    Event Details
                                  </div>
                                </div>
                              </div>
                            </button>
                          </li>
                        </>
                      ))
                  ) : (
                    <div className="col-span-3 mt-3 font-body text-center text-red-600 text-4xl font-bold">
                      <p> No Events found for your search.</p>
                    </div>
                  )}
                </ul>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {isListView === false ? (
        <>
          {filteredEvents === null ? (
            <div className="flex">
              <div className="h-20 my-3 mx-4 w-1/3 rounded-2xl bg-gray-200 animate-pulse"></div>
              <div className="h-20 my-3 mx-4 w-3/4 rounded-2xl bg-gray-200 animate-pulse"></div>
            </div>
          ) : (
            <>
              {filteredEvents.length > 0 ? (
                <EventMap
                  events={filteredEvents}
                  googleMapsApiKey={googleMapsApiKey}
                />
              ) : (
                <div className="bg-saluteBlue col-span-3 py-5 font-body text-center text-red-600 text-4xl font-bold">
                  <p> No Events found for your search.</p>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}

      <div className="hidden relative bg-white">
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
