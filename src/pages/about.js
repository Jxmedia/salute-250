import React, { useState } from "react";
import Layout from "../components/Layout";
import CTA from "../images/girl-cta.jpg";

import { LiaFlagUsaSolid } from "react-icons/lia";

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

export default function AboutPage() {
  //
  //

  //
  //

  //

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us || Salute Across America 250</title>
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
            About Salute Across America
          </h1>

          <div className="font-body py-2 text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-700 gap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt malesuada tortor sed suscipit. Quisque ut leo
              condimentum, rhoncus ipsum quis, tempus ante.
            </p>
          </div>
        </div>
        <div className="mt-14 bg-saluteTan py-24">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="font-body mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg/7 text-saluteBlue lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas.
                </p>
              </div>
              <div>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et
                  eget. Ultricies tellus felis id dignissim eget. Est augue
                  maecenas risus nulla ultrices congue nunc tortor.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text- sm:text-5xl">
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
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative rounded-2xl px-6 pb-9 sm:px-12 lg:max-w-2xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img alt="" src={CTA} className=" rounded-2xl object-cover" />
              </div>
              <div className="relative rounded-2xl px-6 pb-9 sm:px-12 lg:max-w-2xl lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  alt=""
                  src={CTA}
                  className=" rounded-2xl object-cover saturate-0"
                />
              </div>
            </div>
            <div>
              <div className="text-base/7 text-gray-700 lg:max-w-lg">
                <h2 className="text-balance text-saluteBlue text-5xl font-primary font-extrabold uppercase sm:text-5xl">
                  Salute Across America{" "}
                  <span className="font-script  text-[1.2em] text-saluteRed">
                    250
                  </span>
                </h2>

                <div className="font-body saluteBlue max-w-xl">
                  <p className="mt-6">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                    duis odio id et. Id blandit molestie auctor fermentum
                    dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                    varius vulputate et ultrices hac adipiscing egestas. Iaculis
                    convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
            </div>
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
