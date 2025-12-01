import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { IoMusicalNotesSharp } from "react-icons/io5";
import EventModal from "../components/EventModal";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineEvent } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineFestival } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";
import SpectatorHero from "../images/spectator-hero.jpg";
///Covers
import AirShowCover from "../images/event-covers/airshow.png";
import SportsCover from "../images/event-covers/sports-event.png";
import MusicCover from "../images/event-covers/musicfest.png";
import CarCover from "../images/event-covers/carshow.png";
import LocalCover from "../images/event-covers/local.png";
import SchoolCover from "../images/event-covers/school.png";
import MilitaryCover from "../images/event-covers/military.png";
import PatrioticCover from "../images/event-covers/patriotic.png";
import OtherCover from "../images/event-covers/other.png";
import ParadeCover from "../images/event-covers/parade.png";

///
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import HomeHero from "../images/home-hero-bg-alt.jpg";
import CTA from "../images/girl-cta.jpg";
import Favicon from "../images/favicon.png";
import OGFB from "../images/og-image.jpg";
import { Helmet } from "react-helmet";
import Countdown from "../components/Countdown";
import InfiniteScroller from "../components/scroller";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { BiParty } from "react-icons/bi";

export default function HomePage() {
  const [cookieOpen, setcookieOpen] = useState(false);
  const [openEvent, setOpenEvent] = useState(null);
  const [allEvents, setAllEvents] = useState(null);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullHomeSignatureEvents",
      {
        method: "POST",
      }
    );

    const events = await response.json();

    setAllEvents(events);
  };
  //
  //
  function formatDateLocal(isoString) {
    const date = new Date(isoString);

    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate(); // No padStart, removes leading 0
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Keep minutes padded
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Converts 0 -> 12

    return `${month} ${day} | ${hours}:${minutes} ${ampm}`; // hours no padStart
  }
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

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Salute Across America 250</title>
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

        {/* Canonical Link */}
        <link rel="canonical" href="https://saluteacrossamerica250.com/" />

        {/* Theme and Mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Helmet>

      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <img
            alt=""
            src={HomeHero}
            className="absolute opacity-30 inset-0 -z-10 object-cover blur-sm lg:opacity-100 lg:blur-none scale-x-[-1]"
          />

          <div className="absolute inset-0 bg-saluteTan opacity-60 mix-blend-multiply" />

          <div className="relative max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl py-32 sm:py-40">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <Countdown />
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
                <div className="mt-10 lg:flex items-center lg:justify-start lg:gap-x-6">
                  <a
                    href="/events/"
                    className="w-full flex justify-center lg:w-auto lg:justify-start border-t-2 border-blue-500 flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
                  >
                    Search For Events{" "}
                    <MdOutlineEvent aria-hidden="true" className="size-7" />
                  </a>
                  <a
                    href="/spectators/"
                    className="mt-5 w-full flex justify-center lg:mt-0 lg:w-auto lg:justify-start border-t-2 border-teal-800 items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
                  >
                    Get Notified{" "}
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
          </p>
          <h2 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-gray-800 sm:text-7xl">
            Upcoming{" "}
            <span className="font-scriptText tracking-[0.5px] text-[1.2em] text-saluteRed">
              Signature
            </span>{" "}
            Events
          </h2>
          <div className="mt-8 lg:flex items-center justify-center gap-x-6">
            <a
              href="/events/"
              className="w-full justify-center border-t-2 border-blue-500 lg:w-auto lg:justify-start flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
            >
              Search For Events{" "}
              <MdOutlineEvent aria-hidden="true" className="size-7" />
            </a>
            <a
              href="/events/register/"
              className="hidden mt-5 w-full justify-center border-t-2 border-red-500 lg:mt-0 lg:w-auto lg:justify-start flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
          </div>
          {allEvents === null ? (
            <ul
              role="list"
              className="pt-20 tracking-wide grid grid-cols-1 gap-6 lg:grid-cols-3"
            >
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
            </ul>
          ) : (
            <>
              <LoadScript googleMapsApiKey="AIzaSyDwKx1yTYrz4Z7mpDf8-0Cz5D5BTXhsPPE">
                <ul role="list" className="hidden py-20 lg:block">
                  <InfiniteScroller speed={30}>
                    {allEvents
                      .sort(
                        (a, b) => new Date(a.startDate) - new Date(b.startDate)
                      )
                      .slice(0, 4)
                      .map((event) => (
                        <li
                          key={event.SAAID}
                          className="mx-4 w-96 flex-shrink-0 relative flex flex-col divide-y divide-gray-200"
                        >
                          {openEvent === event.id && (
                            <EventModal
                              event={event}
                              open={openEvent === event.id}
                              onClose={handleCloseEvent}
                              formatDateLocal={formatDateLocal}
                            />
                          )}
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
                                      {event.eventType === "Music Festival" && (
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
                                    {event.eventType === "Military/Tribute" && (
                                      <FaPersonMilitaryRifle className="size-24 text-white" />
                                    )}
                                    {event.eventType === "Educational/STEM" && (
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
                                  <div className="flex gap-x-2">
                                    <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                                      <MdOutlineStar className="size-4" />
                                      Signature
                                    </span>
                                    <span className="inline-flex items-center rounded-md bg-teal-50 px-5 py-1.5 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                                      {event.eventType}
                                    </span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h3 className="py-3 text-2xl font-primary font-medium text-gray-700 whitespace-normal break-words">
                                  {event.name}
                                </h3>

                                {/* Date */}
                                <dl className="border-t pt-2 mt-2 flex flex-col font-body gap-2">
                                  <dt className="sr-only">Date</dt>
                                  <div className="mb-0 text-sm text-gray-600 flex items-center gap-2">
                                    <FaClock className="size-4 text-blue-700" />
                                    {event.dateTime === null ? (
                                      <span className="text-gray-400">TBA</span>
                                    ) : (
                                      <>
                                        {event.isSingleDate === true ? (
                                          <span className="text-blue-600">
                                            {formatDateLocal(
                                              event.dateTime
                                            ).substring(0, 7)}{" "}
                                            |
                                            <span className="">
                                              {" "}
                                              {
                                                formatDateLocal(
                                                  event.singleTime[0]
                                                )
                                                  .split(" | ")[1]
                                                  .split(" - ")[0]
                                              }{" "}
                                              -{" "}
                                              {
                                                formatDateLocal(
                                                  event.singleTime[1]
                                                )
                                                  .split(" | ")[1]
                                                  .split(" - ")[0]
                                              }{" "}
                                              <span className="text-blue-800 font-semibold">
                                                {" "}
                                                {event.dateTime.substring(0, 4)}
                                              </span>
                                            </span>
                                          </span>
                                        ) : (
                                          <span className="text-blue-600">
                                            {formatDateLocal(event.dateTime[0])}{" "}
                                            -{" "}
                                            {formatDateLocal(event.dateTime[1])}{" "}
                                            <span className="text-blue-800 font-semibold">
                                              {" "}
                                              {event.dateTime[0].substring(
                                                0,
                                                4
                                              )}
                                            </span>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </dl>

                                {/* Address */}
                                <dl className="border-t pt-2 mt-2 flex flex-col font-body">
                                  <dt className="sr-only">Address</dt>
                                  <div className="mb-0 text-sm text-gray-600 flex items-start gap-2">
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
                      ))}
                  </InfiniteScroller>
                </ul>
                <ul
                  role="list"
                  className="py-20 tracking-wide grid grid-cols-1 gap-6 lg:grid-cols-2 lg:hidden"
                >
                  {allEvents
                    .sort(
                      (a, b) => new Date(a.startDate) - new Date(b.startDate)
                    )
                    .slice(0, 4)
                    .map((event) => (
                      <li
                        key={event.SAAID}
                        className="col-span-1 flex flex-col divide-y divide-gray-200"
                      >
                        {openEvent === event.id && (
                          <EventModal
                            event={event}
                            open={openEvent === event.id}
                            onClose={handleCloseEvent}
                            formatDateLocal={formatDateLocal}
                          />
                        )}
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
                                    {event.eventType === "Music Festival" && (
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
                                    {event.eventType === "Military/Tribute" && (
                                      <img
                                        alt=""
                                        src={MilitaryCover}
                                        className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                                      />
                                    )}
                                    {event.eventType === "Educational/STEM" && (
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
                                  {event.eventType === "Patriotic/Historic" && (
                                    <LiaFlagUsaSolid className="size-24 text-white" />
                                  )}
                                  {event.eventType === "State/Local" && (
                                    <MdOutlineFestival className="size-24 text-white" />
                                  )}
                                  {event.eventType === "Military/Tribute" && (
                                    <FaPersonMilitaryRifle className="size-24 text-white" />
                                  )}
                                  {event.eventType === "Educational/STEM" && (
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
                                <div className="flex gap-x-2">
                                  <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                                    <MdOutlineStar className="size-4" />
                                    Signature
                                  </span>
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
                                <div className="mb-0 text-sm text-gray-600 flex items-center gap-2">
                                  <FaClock className="size-4 text-blue-700" />
                                  {event.dateTime === null ? (
                                    <span className="text-gray-400">TBA</span>
                                  ) : (
                                    <>
                                      {event.isSingleDate === true ? (
                                        <span className="text-blue-600">
                                          {formatDateLocal(
                                            event.dateTime
                                          ).substring(0, 7)}{" "}
                                          |
                                          <span className="">
                                            {" "}
                                            {
                                              formatDateLocal(
                                                event.singleTime[0]
                                              )
                                                .split(" | ")[1]
                                                .split(" - ")[0]
                                            }{" "}
                                            -{" "}
                                            {
                                              formatDateLocal(
                                                event.singleTime[1]
                                              )
                                                .split(" | ")[1]
                                                .split(" - ")[0]
                                            }{" "}
                                            <span className="text-blue-800 font-semibold">
                                              {" "}
                                              {event.dateTime.substring(0, 4)}
                                            </span>
                                          </span>
                                        </span>
                                      ) : (
                                        <span className="text-blue-600">
                                          {formatDateLocal(event.dateTime[0])} -{" "}
                                          {formatDateLocal(event.dateTime[1])}{" "}
                                          <span className="text-blue-800 font-semibold">
                                            {" "}
                                            {event.dateTime[0].substring(0, 4)}
                                          </span>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </div>
                              </dl>

                              {/* Address */}
                              <dl className="border-t pt-2 mt-2 flex flex-col font-body">
                                <dt className="sr-only">Address</dt>
                                <div className="mb-0 text-sm text-gray-600 flex items-start gap-2">
                                  <MdLocationPin className="size-5 text-blue-700" />
                                  {event.address.slice(0, -5)}
                                </div>
                              </dl>

                              {/* Price */}
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
                    ))}
                </ul>
              </LoadScript>
            </>
          )}
        </div>
      </div>
      <div className="bg-saluteBlue py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-white sm:text-7xl">
            About SAA{" "}
            <span className="font-script text-[1.2em] text-saluteRed">250</span>
          </p>

          <div className="font-body mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg/7 text-white lg:max-w-none">
            <div>
              <p>
                <span className="font-bold">Salute Across America 250</span> is
                a nationwide initiative honoring the 250th anniversary of the
                United States. Over the course of 2026, communities from coast
                to coast will come together with events large and small, from
                air shows and parades to concerts, festivals, and local
                commemorations. Each event is part of a collective celebration
                that highlights our shared history, diverse culture, and
                enduring spirit. Whether you attend a Signature Event or a local
                community gathering, you are taking part in celebrating
                America’s 250th birthday.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-white sm:text-5xl">
              Current Sponsors
            </h3>

            <div className="mt-10 -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-xl lg:grid-cols-3">
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
            src={SpectatorHero}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-32">
              <div className="text-center">
                <h3 className="font-primary text-balance text-5xl font-semibold tracking-tight text-saluteTan sm:text-7xl">
                  Subscribe Today
                </h3>
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
                    href="/spectators/"
                    className="w-1/2 justify-center font-body uppercase lg:w-auto font-semibold border-t-2 border-yellow-100 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-14 py-2.5 text-lg/6 text-saluteBlue hover:underline hover:bg-saluteBlue  hover:text-white"
                  >
                    Sign Up Today{" "}
                    <IoMdNotifications aria-hidden="true" className="size-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-indigo-600 lg:absolute lg:left-0 lg:h-full lg:w-1/3 lg:w-1/2">
          <img alt="" src={CTA} className="size-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl py-20 lg:px-8 lg:py-40">
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
                href="/contact/"
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
        } font-body mx-10 fixed inset-x-0 bottom-5 flex flex-col justify-between rounded-3xl gap-x-8 gap-y-4 border-t border-gray-900/10 bg-white p-10 shadow-lg lg:flex-row lg:items-center lg:px-8`}
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
