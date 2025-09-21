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

export default function HomePage() {
  const [cookieOpen, setcookieOpen] = useState(true);
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
  const handleOpenEvent = (eventId) => {
    setOpenEvent(eventId);
  };
  //
  //
  const handleCloseEvent = () => {
    setOpenEvent(null);
  };
  //
  console.log(allEvents);

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

      <div className="bg-white">
        <div className="relative isolate overflow-hidden">
          <img
            alt=""
            src={HomeHero}
            className="absolute inset-0 -z-10 object-cover scale-x-[-1]"
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
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    href="/events/"
                    className="border-t-2 border-blue-500 flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
                  >
                    View All Events{" "}
                    <MdOutlineEvent aria-hidden="true" className="size-7" />
                  </a>
                  <a
                    href="/spectators/"
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
          </p>
          <h2 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-gray-800 sm:text-7xl">
            Upcoming{" "}
            <span className="font-scriptText tracking-[0.5px] text-[1.2em] text-saluteRed">
              Signature
            </span>{" "}
            Events
          </h2>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href="/events/"
              className="border-t-2 border-blue-500 flex items-center gap-2 duration-300 ease-in-out bg-blue-800 rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-blue-800"
            >
              View All Events{" "}
              <MdOutlineEvent aria-hidden="true" className="size-7" />
            </a>
            <a
              href="/events/register/"
              className="border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-10 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
            >
              Register Your Event{" "}
              <MdOutlineEventAvailable aria-hidden="true" className="size-7" />
            </a>
          </div>
          {allEvents === null ? (
            <ul
              role="list"
              className="pt-20 tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            >
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
              <button className="h-20 w-full rounded-2xl bg-gray-200 animate-pulse"></button>
            </ul>
          ) : (
            <>
              <ul
                role="list"
                className="py-20 tracking-wide grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
              >
                {allEvents
                  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
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
                          convertTo12Hour={convertTo12Hour}
                        />
                      )}
                      <button
                        onClick={() => handleOpenEvent(event.id)}
                        className="text-left duration-300 ease-in-out hover:bg-saluteTan hover:bg-opacity-30 rounded-2xl group"
                      >
                        <div className="bg-white rounded-t-2xl ring-1 ring-blue-700/10 flex flex-1 flex-col p-6">
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
                                  {new Date(event.startDate).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short", // 'short' gives you "Dec"
                                      day: "numeric",
                                    }
                                  )}{" "}
                                </span>
                                {"|"} {convertTo12Hour(event.startTime)} -{" "}
                                {convertTo12Hour(event.endTime)}
                              </dd>
                            )}
                          </dl>

                          <dl className="border-t pt-2 mt-2 flex grow flex-col font-body justify-between">
                            <dt className="sr-only">Title</dt>
                            {event.venue === undefined ? (
                              <dd className="text-sm text-gray-400 flex items-start gap-2">
                                <MdLocationPin
                                  aria-hidden="true"
                                  className="size-5 text-blue-700"
                                />{" "}
                                Venue TBA
                              </dd>
                            ) : (
                              <>
                                <dd className="text-sm text-gray-600 flex items-start gap-2">
                                  <MdLocationPin
                                    aria-hidden="true"
                                    className="size-5 text-blue-700"
                                  />{" "}
                                  {event.venue}
                                </dd>

                                <dd className="pl-7 text-sm text-gray-600 flex items-start gap-2">
                                  {event.address}
                                </dd>
                                <dd className="pl-7 text-sm text-gray-600 flex items-start gap-2">
                                  City, Florida 3333
                                </dd>
                              </>
                            )}
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
                      </button>
                    </li>
                  ))}
              </ul>
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
        <div className="py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-white sm:text-5xl">
              Current Sponsors
            </h3>

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
                    className="font-body uppercase font-semibold border-t-2 border-yellow-100 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-14 py-2.5 text-lg/6 text-saluteBlue hover:underline hover:bg-saluteBlue  hover:text-white"
                  >
                    Sign Up{" "}
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
          <img alt="" src={CTA} className="size-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2  lg:pr-0">
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
                Learn More{" "}
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
