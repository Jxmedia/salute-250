import React, { useState, useEffect } from "react";
import HeaderLogo from "../images/SAA-Badge-Dates.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaChevronRight } from "react-icons/fa";
import Dashboard from "../components/admin/Dashboard";
import Details from "../components/admin/Details";
import { Transition } from "@headlessui/react";
import Favicon from "../images/favicon.png";
import OGFB from "../images/og-image.jpg";
import { Helmet } from "react-helmet";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminPage() {
  const [isDetails, setisDetails] = useState(false);
  const [allEvents, setAllEvents] = useState(null);
  const [eventDetailID, setEventDetailID] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullEvents",
      {
        method: "POST",
      }
    );

    const events = await response.json();

    setAllEvents(events);
  };
  //
  //
  const updateStatus = async (id, status) => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventStatus",
      {
        method: "POST",
        body: JSON.stringify({
          eventID: id,
          isApproved: { approved: status },
        }),
      }
    );
    setShowNotification(true);
    setTimeout(function () {
      setShowNotification(false);
    }, 2000);

    getAllEvents();
  };
  //

  const eventDetails = async (ID) => {
    setEventDetailID(ID);
    setisDetails(true);
  };
  //
  //
  const returnDash = async (ID) => {
    setisDetails(false);
    getAllEvents();
  };
  //
  //
  //

  //
  //
  //

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Admin || SAA250</title>
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
      <div
        aria-live="assertive"
        className="z-50 font-body pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={showNotification}>
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                      Event Status Updated
                    </p>
                    <button
                      type="button"
                      className="ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                    ></button>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShowNotification(false);
                      }}
                      className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div className="relative bg-saluteBlue pb-32">
        <Disclosure as="nav" className="">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="border-b py-5 border-white/10">
              <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      alt=""
                      src={HeaderLogo}
                      className="h-16 w-auto saturate-0"
                    />
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="/"
                        className="font-body rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        SAA250 Website
                      </a>
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="border-b border-white/10 lg:hidden"></DisclosurePanel>
        </Disclosure>
        <header className="py-10">
          {isDetails === true ? (
            <div className="flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => returnDash()}
                className=" text-3xl font-bold font-primary underline hover:text-amber-200 tracking-tight text-white"
              >
                Event Dashboard{" "}
              </button>
              <FaChevronRight
                aria-hidden="true"
                className="inline-flex mx-5 size-5 text-white"
              />{" "}
              <p className="font-body text-xl text-amber-200"> {eventName}</p>
            </div>
          ) : (
            <div className=" items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className=" text-3xl font-bold font-primary tracking-tight text-white">
                Event Dashboard
              </p>
              <p className="pt-2 block text-xl font-body tracking-tight text-white">
                Click an event name to view all details.
              </p>
            </div>
          )}
        </header>
      </div>
      {isDetails === true ? (
        <Details
          eventDetailID={eventDetailID}
          isDetails={isDetails}
          setisDetails={setisDetails}
          setEventName={setEventName}
        />
      ) : (
        <Dashboard
          allEvents={allEvents}
          isDetails={isDetails}
          eventDetails={eventDetails}
          setEventDetailID={setEventDetailID}
          setisDetails={setisDetails}
          updateStatus={updateStatus}
        />
      )}
    </>
  );
}
