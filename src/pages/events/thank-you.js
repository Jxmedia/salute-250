import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import CTA from "../../images/girl-cta.jpg";
import { LiaFlagUsaSolid } from "react-icons/lia";
import Favicon from "../../images/favicon.png";
import OGFB from "../../images/og-image.jpg";
import { Helmet } from "react-helmet";
import FlagBg from "../../images/flag-bg.jpg";

export default function AboutPage() {
  //
  //
  const [foundEvent, setfoundEvent] = useState(null);
  //
  //
  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
    pullEvent();
  }, []);
  //
  //

  const pullEvent = async () => {
    var params = new URLSearchParams(window.location.search);

    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullEventByID?",
      {
        method: "POST",
        body: JSON.stringify(params.get("en")),
      }
    );
    const foundEvent = await response.json();

    setfoundEvent(foundEvent);

    // await fetch(
    //   "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/notificationNewEventSubmitted",
    //   {
    //     method: "POST",
    //     // body: JSON.stringify(params.get("en")),
    //   }
    // );
  };
  //
  //

  //

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Thank You || Salute Across America 250</title>
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

        {/* Canonical Link */}
        <link rel="canonical" href="https://saluteacrossamerica250.com/" />

        {/* Theme and Mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Helmet>
      <div className="bg-white"></div>
      <div className="divider">
        <div className="bg-gradient-to-r from-saluteRed to-red-700 h-2.5" />
        <div className="bg-white h-1.5" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-2.5" />
      </div>
      <div className=" relative pt-32">
        <img
          alt=""
          src={FlagBg}
          className="hidden absolute inset-0 -z-10 opacity-10 size-full object-cover scale-x-[-1]"
        />

        {/* <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" /> */}
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteRed text-xl font-primary font-extrabold uppercase">
            SAA{" "}
            <span className="font-script text-[1.2em] text-saluteBlue">
              250
            </span>
          </p>
          <h1 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteBlue sm:text-7xl">
            Thank you for <span className="block">Registering your Event</span>
          </h1>
          <h2 className="border-t max-w-xl pt-5 mx-auto mt-5 text-balance text-center text-4xl font-body font-semibold tracking-tight text-gray-500 sm:text-5xl">
            Event#{" "}
            {foundEvent === null ? (
              <span className="inline-block h-10 w-56 rounded bg-gray-200 animate-pulse" />
            ) : (
              <span className="text-saluteRed">{foundEvent.SAAID}</span>
            )}
          </h2>

          <div className="font-body py-2 text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-700 gap-2">
              Thank you for your interest. Our team will review your submission
              and email you with next steps. Please keep your event number handy
              for reference.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16  relative bg-white">
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
    </Layout>
  );
}
