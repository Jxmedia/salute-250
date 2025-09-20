import React, { useState } from "react";
import Layout from "../components/Layout";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { RiMailSendFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";
import Favicon from "../images/favicon.png";
import OGFB from "../images/og-image.jpg";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.",
  },
];

export default function SpectatorsPage() {
  //
  //
  //

  //
  //
  const [spectator, setSpectator] = useState(null);
  const [spectatorID, setSpectatorID] = useState(null);
  const [saving, setSaving] = useState(false);
  //
  //
  function handleChange(e) {
    setSpectator({
      ...spectator,
      [e.target.name]: e.target.value,
    });
  }
  //
  //
  const createSpectator = async () => {
    setSaving(true);
    let dbResponse = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/createSpectator?",
      {
        method: "POST",
        body: JSON.stringify(spectator),
      }
    );
    console.log("uoooo");
    const spectatorID = await dbResponse.json();
    setSpectatorID(spectatorID);
    setSaving(false);
  };
  //
  //

  //

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Spectators || Salute Across America 250</title>
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
      <div className="bg-white"></div>
      <div className="divider">
        <div className="bg-gradient-to-r from-saluteRed to-red-700 h-2.5" />
        <div className="bg-white h-1.5" />
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 h-2.5" />
      </div>
      <div className=" relative pt-32">
        <img
          alt=""
          src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
          className="hidden absolute inset-0 -z-10 opacity-10 size-full object-cover scale-x-[-1]"
        />

        {/* <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" /> */}
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteRed text-xl font-primary font-extrabold uppercase">
            SAA{" "}
            <span className="font-script text-[1.2em] text-saluteBlue">
              250
            </span>
            Tour
          </p>
          <h1 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteBlue sm:text-7xl">
            Spectators/Visitors{" "}
          </h1>

          <div className="font-body py-2 text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-700 gap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt malesuada tortor sed suscipit. Quisque ut leo
              condimentum, rhoncus ipsum quis, tempus ante.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-saluteTan mt-16 relative isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-saluteTan ring-1 ring-gray-900/10 lg:w-1/2"></div>
                <h2 className="font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
                  Subscribe to Notifications
                </h2>
                <p className="pt-2 font-body font-medium max-w-xl text-2xl text-saluteBlue gap-2">
                  Be Part of America’s <span className="font-script">250</span>
                  th and Find <span className="block">Events Near You</span>
                </p>
                <p className="pt-4 font-body max-w-3xl mx-auto text-lg text-gray-700 gap-2">
                  From air shows to parades, concerts to commemorations —
                  patriotic events are happening across the nation for America’s
                  <span className="font-script">250</span>th birthday in 2026.
                </p>
                <p className="pt-5 font-body max-w-3xl mx-auto text-lg text-gray-700 gap-2">
                  Sign up to get updates about Salute Across America{" "}
                  <span className="font-script">250</span> events near you.
                  You’ll be the first to know about major celebrations in your
                  area.
                </p>
                <p className="pt-5 font-body max-w-3xl mx-auto text-lg text-gray-700 gap-2">
                  Hosting an event? Thousands of Americans are searching here
                  for ways to celebrate. Make sure they find you — register your
                  event today.
                </p>
              </div>
            </div>

            {spectatorID === null ? (
              <form
                method="POST"
                target="_self"
                onSubmit={(e) => {
                  e.preventDefault();
                  createSpectator();
                }}
                className="font-body px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-semibold text-red-600"
                      >
                        First name*
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          onChange={handleChange}
                          required
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-semibold text-red-600"
                      >
                        Last name*
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          onChange={handleChange}
                          required
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-red-600"
                      >
                        Email*
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="zip"
                        className="block text-sm/6 font-semibold text-red-600"
                      >
                        Zip Code*
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="zip"
                          name="zip"
                          type="number"
                          required
                          onChange={handleChange}
                          onWheel={(e) => e.target.blur()}
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="distance"
                        className="block text-sm/6 font-semibold text-red-600"
                      >
                        Max Miles From Home You’ll Travel to an Event?*
                      </label>
                      <div className="mt-2.5">
                        <div className="grid grid-cols-1">
                          <select
                            id="distance"
                            name="distance"
                            required
                            onChange={handleChange}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                          >
                            <option value="" selected disabled hidden>
                              Select a distance (in miles)
                            </option>
                            <option value="1-10">1 - 10</option>
                            <option value="11-50">11 - 50</option>
                            <option value="51-100">51 - 100</option>
                            <option value="101-500">101 - 500</option>
                            <option value="500-1000">500 - 1000</option>
                            <option value="1001-5000">1001 - 5000</option>
                            <option value="5001-10000">5001 - 10000</option>
                            <option>I'll travel anywhere in the Country</option>
                          </select>
                          <FaRegArrowAltCircleDown
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="phone"
                          name="phone"
                          onChange={handleChange}
                          type="tel"
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="w-full flex justify-center border-t-2 border-saluteBlue flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteBlue hover:text-white"
                    >
                      {saving === false ? "Submit" : "Submitting..."}
                      <RiMailSendFill aria-hidden="true" className="size-7" />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="animate-fade font-body pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="text-center">
                  <MdNotificationsActive
                    aria-hidden="true"
                    className="pr-2 mx-auto text-green-600 animate-bounce hover:opacity-80 size-32"
                  />{" "}
                  <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-saluteBlue sm:text-7xl">
                    Thank you!
                  </h1>
                  <p className="max-w-md mx-auto mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    We will notify you by email when there's an event close by!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-saluteBlue">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteTan sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-100/10">
              {faqs.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center text-gray-100">
                        <LuCirclePlus
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                        />
                        <LuCircleMinus
                          aria-hidden="true"
                          className="size-6 group-[:not([data-open])]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-300">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="hidden relative bg-white">
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
