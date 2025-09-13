import React, { useState } from "react";
import Layout from "../components/Layout";
import CTA from "../images/girl-cta.jpg";
import { parseDate, parseAbsoluteToLocal } from "@internationalized/date";
import { RiMailSendFill } from "react-icons/ri";
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

export default function RegisterEvent() {
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
        <title>Contact Us || Salute Across America 250</title>
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
      <div className="relative pt-32">
        <img
          alt=""
          src="https://www.shutterstock.com/shutterstock/photos/1067889479/display_1500/stock-photo-american-flag-background-1067889479.jpg"
          className="absolute inset-0 -z-10 opacity-60 size-full object-cover scale-x-[-1]"
        />

        <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteRed text-xl font-primary font-extrabold uppercase">
            SAA <span className="font-script text-[1.2em] text-white">250</span>
            Tour
          </p>
          <h1 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteTan sm:text-7xl">
            Get in Touch With Us
          </h1>

          <div className="font-body py-2 text-center">
            <p className="max-w-3xl mx-auto text-lg text-white gap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt malesuada tortor sed suscipit. Quisque ut leo
              condimentum, rhoncus ipsum quis, tempus ante.
            </p>
          </div>
        </div>
        <div className="relative py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2">
                <div className="rounded-2xl bg-sky-100/10 p-10">
                  <h3 className="text-xl/7 font-body font-semibold text-white">
                    Physical Mail
                  </h3>
                  <dl className="mt-5 space-y-1 text-base/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Address</dt>
                      <dd>
                        <p className="font-semibold text-saluteTan">
                          5700 North Harbor City Blvd, Suite 280 Melbourne, FL
                          32940
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-saluteRed/30 p-10">
                  <h3 className="text-xl/7 font-body font-semibold text-white">
                    Contact
                  </h3>
                  <dl className="mt-5 space-y-1 text-base/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Phone NUmber</dt>
                      <dd>
                        <p className="font-semibold text-saluteTan">
                          +1 250-250-0000
                        </p>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <p className="mt-2 font-semibold text-saluteTan">
                          info@saluteacrossamerica250.com
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:pb-24 lg:px-8">
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

      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden bg-saluteBlue md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img alt="" src={CTA} className="size-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2  lg:pr-0">
            <h3 className="font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
              More Questions?
            </h3>
            <p className="mt-6 font-body text-lg/7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="isolate bg-white">
              <form action="#" method="POST" className="mx-auto mt-16 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <input
                          id="phone-number"
                          name="phone-number"
                          type="text"
                          placeholder="123-456-7890"
                          className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 sm:col-span-2">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-5 grid-cols-1">
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
                    <div className="text-base/6 font-medium">
                      <p id="comments-description" className="text-gray-800">
                        By Checking this, you agree to our{" "}
                        <a
                          href="#"
                          className="underline text-blue-700 hover:opacity-70"
                        >
                          privacy policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="w-full flex justify-center border-t-2 border-saluteBlue flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteBlue hover:text-white">
                    Submit Request
                    <RiMailSendFill aria-hidden="true" className="size-7" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
