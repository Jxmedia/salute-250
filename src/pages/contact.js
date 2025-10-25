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
import FlagBg from "../images/flag-bg.jpg";

const faqs = [
  {
    question: "What is Salute Across America 250?",
    answer:
      "Salute Across America 250 is a nationwide initiative commemorating the 250th anniversary of the United States in 2026. From coast to coast, communities will host events that honor our shared history, diverse culture, and enduring spirit. From large-scale air shows and concerts to local parades and festivals, each gathering adds to a collective national salute on America’s milestone birthday.",
  },
  {
    question: "How can I be a part of SAA250?",
    answer:
      "Everyone is invited to take part in the celebration. You can attend events in your community or travel to one of our Signature Events happening across the country. By joining in person, sharing your experience online, or volunteering locally, you’ll become part of a once-in-a-generation moment that unites millions of Americans in celebration.",
  },
  {
    question: "How can an event apply to join SAA250?",
    answer:
      "Events of all sizes are welcome to apply to be part of Salute Across America 250. Through a simple application process, organizers can register their event and be listed on our national calendar. Approved events may be designated as Signature, Partner, or Affiliate events depending on their scope and impact.",
  },
  {
    question:
      "What is the difference between Signature, Partner, and Affiliate events?",
    answer:
      "Signature Events are large-scale celebrations recognized as anchor gatherings in the SAA250 calendar. Partner Events are major regional or community celebrations that carry national significance while retaining local character. Affiliate Events are local festivals, parades, and gatherings that proudly fly the SAA250 banner and bring the spirit of the anniversary into neighborhoods across America.",
  },
  {
    question: "How can sponsors and partners get involved?",
    answer:
      "SAA250 offers opportunities for organizations, companies, and institutions to align with the nation’s 250th anniversary through sponsorships and partnerships. Support can be tailored to national, regional, or local levels, providing visibility and meaningful engagement with audiences across the country.",
  },
  {
    question: "Where can I find the list of upcoming events?",
    answer:
      "Our full calendar of events is always available online and continuously updated as new celebrations are added. Visitors can search by date, location, or event type to find opportunities to join the anniversary near them.",
  },
];

export default function ContactPage() {
  //
  //
  //
  const [contact, setContact] = useState(null);
  const [saving, setSaving] = useState(false);
  //
  //
  function handleChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }
  //
  //
  //
  const sendContactRequest = async () => {
    setSaving(true);

    setSaving(false);
  };
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
          src={FlagBg}
          className="absolute inset-0 -z-10 opacity-60 size-full object-cover scale-x-[-1]"
        />

        <div className="absolute inset-0 bg-saluteBlue mix-blend-multiply" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-saluteRed text-xl font-primary font-extrabold uppercase">
            SAA <span className="font-script text-[1.2em] text-white">250</span>
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
                      <div>
                        <p className="font-semibold text-saluteTan">
                          5700 North Harbor City Blvd, Suite 280 Melbourne, FL
                          32940
                        </p>
                      </div>
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
                      <div>
                        <p className="font-semibold text-saluteTan">
                          +1 250-250-0000
                        </p>
                      </div>
                    </div>
                    <div>
                      <dt className="sr-only">Email</dt>
                      <div>
                        <p className="mt-2 font-semibold text-saluteTan">
                          info@saa250.com
                        </p>
                      </div>
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
            <dl className="mt-16 pb-14 divide-y divide-gray-100/10">
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
        <div className="relative h-80 overflow-hidden bg-saluteBlue lg:absolute lg:left-0 lg:h-full lg:w-1/3 lg:w-1/2">
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
            <div className="font-body isolate bg-white">
              <form action="#" method="POST" className="mx-auto mt-16 max-w-xl">
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
                        id="first-name"
                        name="first-name"
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
                        id="last-name"
                        name="last-name"
                        type="text"
                        required
                        onChange={handleChange}
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
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
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
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
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
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
                      <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-red-600">
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
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 sm:col-span-2">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-5 grid-cols-1">
                        <input
                          defaultChecked
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          aria-describedby="privacy"
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
                          href="/privacy-policy/"
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
