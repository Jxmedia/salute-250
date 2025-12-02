import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaPersonMilitaryRifle, FaXTwitter } from "react-icons/fa6";
import { MdOutlineFestival, MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdAirplaneTicket } from "react-icons/md";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { BiParty } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import { DateInput, TimeInput } from "@heroui/react";
import {
  parseDate,
  parseAbsoluteToLocal,
  CalendarDate,
  Time,
} from "@internationalized/date";
import { CheckIcon, PhotoIcon } from "@heroicons/react/20/solid";
import { RiMailSendFill, RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Favicon from "../../images/favicon.png";
import OGFB from "../../images/og-image.jpg";
import { Helmet } from "react-helmet";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import FlagBg from "../../images/flag-bg.jpg";
/////
import { DatePicker, DateRangePicker, TimeRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const eventTiers = [
  {
    name: "Affiliate",

    qualifications: [
      "250+ in-person attendance",
      "Event is open to the public",
      "Inclues patriotic moment (Anthem, flag salute, etc)",
    ],
    integration: [
      "Logo + link on event website",
      "At least one social media post or share",
      "Optional email or program mention if applicable",
    ],
  },
  {
    name: "Partner",

    qualifications: [
      "2,500+ in-person attendance",
      "Brings together community or showcases civic spirit",
      "Open to incorporating patriotic elements",
    ],
    integration: [
      " Logo + link on event website",
      "Inclusion in email marketing",
      "Social media cross-promotion (tags, hashtags)",
      "Optional stage or program recognition",
      "SAA250 mention in press releases where applicable",
    ],
  },
  {
    name: "Signature",

    qualifications: [
      "25,000+ in-person attendance",
      "Strong national or regional brand recognition",
      "Content with clear patriotic alignment",
      "High public visibility or cultural significance",
    ],
    integration: [
      "Logo + link on event website",
      "Inclusion in all promotional emails",
      "On-site branding (banners, stage mention)",
      "SAA250 mentioned in press/media",
      "Option to co-brand merchandise",
      "Participation in national campaign moments",
    ],
  },
];

const eventTypes = [
  {
    name: "Air Show or Aviation Event",
    description:
      "Military or civilian air shows or fly-ins with flyovers, jet teams, and aircraft displays",
    icon: MdAirplaneTicket,
  },
  {
    name: "Music Festival or Concert",
    description:
      "Live concerts, music events, or multi-act music festivals with patriotic themes or moments",
    icon: IoMusicalNotesSharp,
  },
  {
    name: "Sporting Event or Race",
    description:
      "Football, baseball, basketball, hockey games or races that include a patriotic salute",
    icon: GiAmericanFootballHelmet,
  },
  {
    name: "Patriotic or Historic Event",
    description:
      "Patriotic holiday celebrations, parades, reenactments, or events honoring U.S. history",
    icon: LiaFlagUsaSolid,
  },
  {
    name: "State or Local Fair/Festival",
    description:
      "Large public gatherings with food, rides, and local entertainment and engage the community",
    icon: MdOutlineFestival,
  },
  {
    name: "Car, RV or Boat Show",
    description:
      "Auto, boat, or RV shows that showcase iconic American machines",
    icon: IoCarSportSharp,
  },
  {
    name: "Military or Tribute Event",
    description:
      "Ceremonies, memorials, or events honoring veterans, active duty, and their families",
    icon: FaPersonMilitaryRifle,
  },
  {
    name: "Educational or STEM Event",
    description:
      "STEM expos, student showcases, or aerospace-related events with an American focus",
    icon: RiSchoolFill,
  },
  {
    name: "Parade",
    description: "SAMPLE TEXT TO BE REPLACED",
    icon: BiParty,
  },
  {
    name: "Other Event Type",
    description:
      "Any other event that aligns with the Salute Across America 250 mission and spirit",
    icon: BsPatchQuestionFill,
  },
];

export default function RegisterEvent() {
  //
  //
  //
  const [selectedDate, setSelectedDate] = useState(null);
  const [singleTime, setSingleTime] = useState(null);
  const [isSingleDate, setIsSingleDate] = useState(false);

  const handleToggle = (event) => {
    setSelectedDate(null);
    setSingleTime(null);
    setIsSingleDate(event.target.checked); // true or false
  };
  //
  console.log(isSingleDate);
  //
  const today = new Date("12/12/9999");
  const yyyy = today.getFullYear();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const formattedDate = `${yyyy}-${mm}-${dd}`;
  //
  //
  const [startDateValue, setStartDateValue] = useState(
    parseDate(formattedDate)
  );
  //
  const [startTime, setStartTime] = useState(
    parseAbsoluteToLocal("9999-12-31T23:59:59Z")
  );
  //
  //
  const [endDateValue, setEndDateValue] = useState(parseDate(formattedDate));
  //
  const [endTime, setEndTime] = useState(
    parseAbsoluteToLocal("9999-12-31T23:59:59Z")
  );
  //
  //
  const [eventData, setEventData] = useState({ eventTier: null });
  const [saving, setSaving] = useState(false);
  //
  //
  function handleChange(e) {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  }
  //
  //
  function handleStartDate(e) {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  }
  //
  const createEntry = async () => {
    setSaving(true);
    const payload = {
      ...eventData,
      eventTier: "Affiliate",
      dateTime: selectedDate,
      isSingleDate: isSingleDate,
      singleTime: singleTime,
      address: address.address,
      city: address.city,
      state: address.state,
      stateAbbr: address.stateAbbr,
      zip: address.zip,
      lat: coords.lat,
      lng: coords.lng,
      img: eventImage,
    };

    let dbResponse = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/createEvent?",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    const eventID = await dbResponse.json();

    window.location.href = `../thank-you/?en=${await eventID}`;
  };
  //
  //
  //
  ///////////////////GOOGLE AUTOCOMPLETE ///////////
  ///////////////////////////
  //
  //
  const libraries = ["places"];
  const [address, setAddress] = useState({ city: "", state: "", zip: "" });
  const [coords, setCoords] = useState(null);
  const autocompleteRef = useRef(null);
  //

  //
  //
  //
  //
  //
  ////////////SERVICE ADDRESS /////////
  //
  //
  const handleAddress = async () => {
    const place = autocompleteRef.current.getPlace();
    if (!place.geometry) return;

    // ZIP exists — continue using the place
    const formattedAddress = place.formatted_address;
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    const localityComponent = place.address_components.find((c) =>
      c.types.includes("locality")
    );

    setAddress({
      ...address,
      address: place.formatted_address,
      city: localityComponent
        ? place.address_components.find((component) =>
            component.types.includes("locality")
          ).long_name
        : "NA",

      state: place.address_components.find((component) =>
        component.types.includes("administrative_area_level_1")
      ).long_name,
      stateAbbr: place.address_components.find((component) =>
        component.types.includes("administrative_area_level_1")
      ).short_name,
      zip: place.address_components.find((component) =>
        component.types.includes("postal_code")
      ).long_name,
    });
    setCoords({ lat, lng });
  };
  //
  //
  const googleMapsApiKey = "AIzaSyDwKx1yTYrz4Z7mpDf8-0Cz5D5BTXhsPPE";

  //
  //
  //
  //
  const [eventImage, setEventImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (ev) => {
      img.src = ev.target.result;
    };

    img.onload = () => {
      if (img.width === 800 && img.height === 449) {
        setEventImage(img.src);
      } else {
        alert("Image must be exactly 800x400 pixels.");
      }
    };

    reader.readAsDataURL(file);
  };
  //
  //
  //
  //
  console.log(selectedDate);
  console.log(singleTime);
  //

  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Register Event || Salute Across America 250</title>
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
      <div className="bg-gray-50 relative pt-32">
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
            Register Your <span className="text-saluteBlue">Salute Across</span>{" "}
            <span className="mx-auto mt-2 text-balance text-center text-4xl font-primary font-semibold tracking-tight text-saluteBlue sm:text-7xl">
              <span className="text-saluteBlue">America </span>
              <span className="font-script text-[1.2em] text-saluteRed">
                250
              </span>{" "}
              Event
            </span>
          </h1>

          <div className="max-w-lg mx-auto font-body py-2 text-center">
            <p className="text-lg text-gray-700 gap-2">
              Join a growing list of events nationwide proudly commemorating
              America’s 250th anniversary in 2026.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <AnchorLink
              href="#form"
              className="border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteTan rounded-b-xl px-10 py-2.5 text-lg/6 text-saluteBlue font-body font-semibold uppercase hover:underline hover:bg-saluteBlue hover:text-white"
            >
              Skip Information and Register{" "}
              <FaRegArrowAltCircleDown aria-hidden="true" className="size-7" />
            </AnchorLink>
          </div>

          <div className="pt-6 pb-8 border-t border-gray-600 mt-10 py-20 sm:pt-14">
            <div className="">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className=" text-center font-primary text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
                  Why Register Your Event
                </h2>
                <p className="pt-8 font-body text-lg text-gray-700 gap-2 text-center max-w-5xl mx-auto">
                  SAA250 is leading the charge to help Americans take part in
                  this once-in-a-lifetime celebration of our nation’s 250th
                  anniversary. While government initiatives have struggled to
                  gain traction, our national air show tour already draws
                  millions of spectators each year. By registering your event
                  with SAA250, you join a movement that connects communities
                  nationwide and puts your celebration on the map.
                </p>
                <p className="mt-6 pb-10 font-body text-lg text-gray-700 gap-2 text-center max-w-5xl mx-auto">
                  When you register, you gain more than visibility. We can help
                  connect your event with sponsors, amplify your brand, and even
                  provide support for military flyovers, the National Anthem,
                  and patriotic activations that make your event shine.
                  Spectators are turning to SAA250 to find celebrations across
                  the country and sponsors are using SAA250 to discover the
                  right events to support. By joining us, your event becomes
                  part of a national movement wrapped in the American flag and
                  fueled by pride in our country.
                </p>
                <p className="hidden text-center font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteBlue sm:text-6xl">
                  Event Tiers
                </p>
                <div className="hidden pt-10 isolate mx-auto grid grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div className="lg:mt-12 -mr-px lg:rounded-r-none flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-gray-900 text-4xl/8 font-primary font-semibold">
                          Affiliate{" "}
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {eventTiers[0].qualifications.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteBlue">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {eventTiers[0].integration.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:mt-6 -mr-px lg:rounded-r-none lg:rounded-bl-none flex flex-col justify-between rounded-3xl bg-saluteTan/40 p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-gray-900 flex items-center gap-x-2 text-4xl/8 font-primary font-semibold">
                          Partner{" "}
                          <MdStarBorder aria-hidden="true" className="size-8" />
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {eventTiers[1].qualifications.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-600 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteBlue">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-gray-600"
                      >
                        {eventTiers[1].integration.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-saluteRed"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="-mr-px lg:rounded-bl-none flex flex-col justify-between rounded-3xl bg-saluteBlue p-8 ring-1 ring-inset ring-saluteBlue xl:p-10">
                    <div className="font-body">
                      <div className="flex items-center justify-between gap-x-4">
                        <h3 className="text-white flex items-center gap-x-2 text-4xl/8 font-primary font-semibold">
                          Signature{" "}
                          <MdOutlineStar
                            aria-hidden="true"
                            className="animate-pulse text-saluteTan size-8"
                          />
                        </h3>
                      </div>
                      <p className="mt-8 text-md/6 text-gray-200 font-semibold underline">
                        Event Qualifications
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-saluteTan"
                      >
                        {eventTiers[2].qualifications.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-white"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-md/6 text-gray-100 font-semibold underline">
                        SAA{" "}
                        <span className="font-script text-[1.2em] text-saluteTan">
                          250
                        </span>{" "}
                        Brand Integration
                      </p>

                      <ul
                        role="list"
                        className="mt-4 space-y-3 text-sm/6 text-saluteTan"
                      >
                        {eventTiers[2].integration.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-white"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-24 mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
              <p className="text-center font-primary mt-2 text-4xl font-semibold tracking-tight text-saluteRed sm:text-6xl">
                Event Types
              </p>
              <dl className="py-16 font-body grid grid-cols-1 gap-16 lg:grid-cols-3">
                {eventTypes.map((type) => (
                  <div key={type.name}>
                    <dt>
                      <div className="flex size-14 items-center justify-center rounded-lg bg-saluteBlue text-white">
                        <type.icon aria-hidden="true" className="size-8" />
                      </div>
                      <p className="mt-6 text-xl/8 font-semibold tracking-tight text-blue-800">
                        {type.name}
                      </p>
                    </dt>
                    <div className="mb-0 mt-2 text-base/7 text-gray-600">
                      {type.description}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <section id="form">
        <div className="bg-saluteTan/50 py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className=" text-center font-primary text-4xl font-semibold tracking-tight text-saluteBlue sm:text-6xl">
              Register Your Event
            </h2>
            <p className="py-8 font-body text-lg text-gray-700 gap-2 text-center max-w-3xl mx-auto">
              Complete the form below to share your event with us. All
              submissions are reviewed to ensure they align with the patriotic
              spirit of Salute Across America 250. Once approved, you’ll receive
              confirmation and next steps by email.
            </p>
            <form
              method="POST"
              target="_self"
              onSubmit={(e) => {
                e.preventDefault();
                createEntry();
              }}
              className="border-t border-saluteBlue pt-8 font-body"
            >
              <div className="space-y-12 sm:space-y-16">
                <div>
                  <h2 className="text-base/7 font-semibold text-gray-900">
                    Event Details
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm/6 text-gray-600">
                    Lets gather some information about your event for
                    consideration.
                  </p>

                  <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:border-t-gray-900/10 sm:pb-0">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="name"
                        className="block text-sm/6 font-medium sm:pt-1.5 text-red-600"
                      >
                        Event Name*
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            required
                            placeholder="American Valor Music Fest"
                            className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="website"
                        className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                      >
                        Event Website
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                            www.
                          </div>
                          <input
                            id="website"
                            name="website"
                            type="text"
                            placeholder="event.com"
                            onChange={handleChange}
                            className="block min-w-0 grow bg-white py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="poc"
                        className="block text-sm/6 font-medium sm:pt-1.5 text-red-600"
                      >
                        Contact Email*
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                          <input
                            id="poc"
                            name="poc"
                            type="email"
                            onChange={handleChange}
                            required
                            className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="start-date"
                        className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                      >
                        Date and Time
                      </label>

                      <div className="mt-2 gap-x-4 sm:mt-0">
                        <div className="flex items-center gap-3">
                          <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 outline-offset-2 outline-green-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-green-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                            <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
                            <input
                              id="isSingleDate"
                              name="isSingleDate"
                              checked={isSingleDate === true}
                              onChange={handleToggle}
                              type="checkbox"
                              aria-labelledby="single-date-label"
                              className="absolute inset-0 appearance-none focus:outline-none"
                            />
                          </div>

                          <div className="text-xs">
                            <label
                              id="single-date-label"
                              className="font-medium text-gray-900"
                            >
                              Single Date?
                            </label>{" "}
                          </div>
                        </div>
                        <div className="border-t border-saluteBlue/30 mt-3 pt-3 ">
                          {isSingleDate === true ? (
                            <div className="flex">
                              <DatePicker
                                value={selectedDate}
                                onChange={setSelectedDate}
                                placeholder="Select a Day"
                                oneTap
                              />
                              <TimeRangePicker
                                value={singleTime}
                                onChange={setSingleTime}
                                format="hh:mm a"
                                placeholder={["Start Time", "End Time"]}
                                showMeridiem
                              />
                            </div>
                          ) : (
                            <DateRangePicker
                              className="border-1 border-gray-300 rounded-md hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
                              format="MM/dd/yyyy hh:mm aa"
                              value={selectedDate}
                              onChange={setSelectedDate}
                              placeholder="Select a Day/Time Range"
                              showMeridiem
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="event-tier"
                        className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                      >
                        Requested Event Tier*
                      </label>

                      <div className="grid grid-cols-1 sm:max-w-xs">
                        <select
                          id="eventTier"
                          name="eventTier"
                          autoComplete="country-name"
                          onChange={handleChange}
                          required
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                        >
                          <option value="" selected disabled hidden>
                            Select Event Tier Requested
                          </option>
                          <option value="Affiliate">Affiliate</option>
                          <option value="Partner">Partner</option>
                          <option value="Signature">Signature</option>
                        </select>
                        <FaRegArrowAltCircleDown
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      {eventData.eventTier === "Signature" ? (
                        <div className="flex flex-col items-start">
                          {/* Hidden input */}
                          <input
                            type="file"
                            accept="image/*"
                            id="file-upload"
                            onChange={handleImageUpload}
                            className="hidden"
                          />

                          {/* Styled button */}
                          <label
                            htmlFor="file-upload"
                            className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-body font-medium"
                          >
                            Upload Event Cover
                          </label>

                          {/* Preview */}
                          {eventImage && (
                            <img
                              src={eventImage}
                              alt="Event"
                              className="border rounded shadow-lg mt-4"
                            />
                          )}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="event-type"
                        className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                      >
                        Event Type*
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="grid grid-cols-1 sm:max-w-xs">
                          <select
                            id="eventType"
                            name="eventType"
                            autoComplete="country-name"
                            onChange={handleChange}
                            required
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                          >
                            <option value="" selected disabled hidden>
                              Select Event Type
                            </option>
                            <option value="Air Show">Air Show</option>
                            <option value="Music Festival">
                              Music Festival
                            </option>
                            <option value="Sports">Sporting Event</option>
                            <option value="Patriotic/Historic">
                              Patriotic/Historic
                            </option>
                            <option value="State/Local">State/Local</option>
                            <option value="Car/RV/Boat">Car/RV/Boat</option>
                            <option value="Military/Tribute">
                              Military/Tribute
                            </option>
                            <option value="Educational/STEM">
                              Educational/STEM
                            </option>
                            <option value="Parade">Parade</option>
                            <option value="Other">Other</option>
                          </select>
                          <FaRegArrowAltCircleDown
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="venue"
                        className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                      >
                        Venue name
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                          id="venue"
                          name="venue"
                          type="text"
                          onChange={handleChange}
                          autoComplete="given-name"
                          placeholder="America First Field"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-xs sm:text-sm/6"
                        />
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="address"
                        className="block text-sm/6 font-medium text-red-600 sm:pt-1.5"
                      >
                        Event/Venue Address*
                      </label>
                      {googleMapsApiKey === null ? (
                        ""
                      ) : (
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                          <div className="rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue sm:max-w-md">
                            <LoadScript
                              googleMapsApiKey={googleMapsApiKey} // Replace with your key
                              libraries={libraries}
                            >
                              <Autocomplete
                                onLoad={(ref) =>
                                  (autocompleteRef.current = ref)
                                }
                                onPlaceChanged={handleAddress}
                                options={{
                                  types: ["address"], // ✅ Restrict to addresses only
                                  componentRestrictions: { country: "us" }, // Optional: limit to U.S.
                                }}
                              >
                                <input
                                  type="text"
                                  name="venueAddress"
                                  id="venueAddress"
                                  autoComplete="off"
                                  class="w-full bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                              </Autocomplete>
                            </LoadScript>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="qualifiers"
                        className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                      >
                        Description
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <textarea
                          id="qualifiers"
                          name="qualifiers"
                          rows={3}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-2xl sm:text-sm/6"
                          defaultValue={""}
                        />
                        <p className="mt-3 text-sm/6 text-gray-600 max-w-xl">
                          Please share anything additional about your event
                          including inclusion of patriotic themes, community
                          impact, media coverage, or other unique aspects.
                        </p>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                      <label
                        htmlFor="brandIntegrations"
                        className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5"
                      >
                        Additional Brand Integrations
                      </label>
                      <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <textarea
                          id="brandIntegrations"
                          name="brandIntegrations"
                          rows={3}
                          onChange={handleChange}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-2xl sm:text-sm/6"
                          defaultValue={""}
                        />
                        <p className="mt-3 text-sm/6 text-gray-600 max-w-xl">
                          Do you have any creative or unique ways you’d like to
                          incorporate the Salute Across America 250 branding
                          into your event? From stage design to merchandise or
                          media campaigns, we welcome your ideas for using the
                          brand to amplify patriotism and commemorate America’s
                          250th anniversary. We welcome you to share.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-base/7 font-semibold text-gray-900">
                    Terms/Conditions
                  </h2>
                  <p className="mt-1 text-xs/6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit dapibus orci, eget porttitor purus accumsan a. Donec
                    placerat rutrum augue nec gravida. Aliquam lobortis bibendum
                    mollis. Donec sapien enim, mattis gravida tincidunt ac,
                    porta sit amet elit. Quisque et dictum nibh, vel luctus
                    sapien. Vivamus vestibulum diam nisi, vulputate bibendum
                    diam congue sed. Aenean aliquam, dui et faucibus malesuada,
                    erat felis consequat nibh, vitae facilisis elit quam sed
                    turpis. Ut odio nulla, hendrerit vitae vulputate eget,
                    mattis at leo.
                  </p>
                  <p className="mt-4 text-xs/6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit dapibus orci, eget porttitor purus accumsan a. Donec
                    placerat rutrum augue nec gravida. Aliquam lobortis bibendum
                    mollis. Donec sapien enim, mattis gravida tincidunt ac,
                    porta sit amet elit. Quisque et dictum nibh, vel luctus
                    sapien. Vivamus vestibulum diam nisi, vulputate bibendum
                    diam congue sed. Aenean aliquam, dui et faucibus malesuada,
                    erat felis consequat nibh, vitae facilisis elit quam sed
                    turpis. Ut odio nulla, hendrerit vitae vulputate eget,
                    mattis at leo.
                  </p>
                  <p className="mt-4 text-xs/6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit dapibus orci, eget porttitor purus accumsan a. Donec
                    placerat rutrum augue nec gravida. Aliquam lobortis bibendum
                    mollis. Donec sapien enim, mattis gravida tincidunt ac,
                    porta sit amet elit. Quisque et dictum nibh, vel luctus
                    sapien. Vivamus vestibulum diam nisi, vulputate bibendum
                    diam congue sed. Aenean aliquam, dui et faucibus malesuada,
                    erat felis consequat nibh, vitae facilisis elit quam sed
                    turpis. Ut odio nulla, hendrerit vitae vulputate eget,
                    mattis at leo.
                  </p>

                  <div className="space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10  sm:pb-0">
                    <fieldset>
                      <legend className="sr-only">By email</legend>
                      <div className=" sm:gap-4 sm:py-6">
                        <div className="mt-4 sm:col-span-2 sm:mt-0">
                          <div className="max-w-lg space-y-6">
                            <div className="flex gap-3">
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
                                <p
                                  id="comments-description"
                                  className="text-gray-800"
                                >
                                  By Checking I Agree to the above Terms
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-3">
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
                                <p
                                  id="comments-description"
                                  className="text-gray-800"
                                >
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
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="mt-8 items-center gap-x-6">
                {coords === null ? (
                  <button
                    disabled
                    className="w-full flex justify-center border-t-2 border-saluteBlue flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl py-2.5 text-lg/6 text-white font-body font-semibold uppercase opacity-50"
                  >
                    Check Venue Address
                    <RiMailSendFill aria-hidden="true" className="size-7" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex justify-center border-t-2 border-saluteBlue flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteBlue hover:text-white"
                  >
                    {saving === false
                      ? " Submit Event for Review"
                      : "Submitting..."}

                    <RiMailSendFill aria-hidden="true" className="size-7" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="hidden relative bg-white">
        <div className="relative h-80 overflow-hidden bg-saluteBlue lg:absolute lg:left-0 lg:h-full lg:w-1/3 lg:w-1/2">
          <img
            alt=""
            src="https://www.shutterstock.com/shutterstock/photos/2452273295/display_1500/stock-photo-woman-patriot-with-american-flag-on-the-beach-at-sunset-usa-celebrate-th-of-july-independence-2452273295.jpg"
            className="size-full object-cover"
          />
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
