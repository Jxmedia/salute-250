import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FaCircle } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import EventModal from "./EventModalMap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
import BucsCover from "../images/event-covers/71a4d628-d864-4ba0-aead-080b73ef5d48.png";
import Saa250Cover from "../images/event-covers/0cf0c100-7f8a-4be8-a9ee-03bd98ef1ffd.png";
///
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineFestival } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { IoMusicalNotesSharp } from "react-icons/io5";

const containerStyle = {
  width: "100%",
  height: "600px",
};
const defaultCenter = { lat: 39.8283, lng: -80.5795 };

export default function EventMap(props) {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);
  const [openEvent, setOpenEvent] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    findGoogleKey();
  }, []);

  const findGoogleKey = async () => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullGoogleKey",
      {
        method: "POST",
      }
    );

    const key = await response.json();

    setGoogleMapsApiKey(key);
  };
  //
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
  //
  //

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: props.googleMapsApiKey,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const eventRefs = useRef({});
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleMarkerClick = (position, event) => {
    if (!mapRef.current) return;
    setSelectedEventId(event.id);
    // Smoothly move and zoom the map
    mapRef.current.panTo(position);
    mapRef.current.setZoom(14);
    // setOpenEvent(event.id);
    eventRefs.current[event.id]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const mapStyle = [
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#243746",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#243746",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape.natural.landcover",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
        {
          saturation: "12",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#2551cc",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#243746",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit.station.airport",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit.station.bus",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#6fb1c8",
        },
        {
          visibility: "on",
        },
      ],
    },
  ];

  const mapOptions = {
    styles: mapStyle, // <-- Apply your custom style here
    disableDefaultUI: true, // optional: hides default controls
    zoomControl: true, // optional: enable zoom control
  };

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <>
      <div className="font-body grid lg:grid-cols-8">
        <div className="relative order-2 col-span-3 p-6 overflow-y-scroll h-[600px] border-b-2 border-saluteBlue lg:order-1">
          {" "}
          <ul role="list" className="divide-y divide-gray-200">
            {props.events.map((event) => (
              <li
                key={event.id}
                ref={(el) => (eventRefs.current[event.id] = el)}
                className={`${
                  selectedEventId === event.id
                    ? "bg-saluteTan/40 lg:p-4 rounded-2xl my-2"
                    : ""
                } flex items-center justify-between gap-x-6 py-5`}
              >
                <div className="min-w-0">
                  <div className="mb-4 relative isolate overflow-hidden rounded-2xl py-14 w-56">
                    {event.id === "71a4d628-d864-4ba0-aead-080b73ef5d48" ? (
                      <img
                        alt=""
                        src={BucsCover}
                        className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                      />
                    ) : (
                      <>
                        {" "}
                        {event.id === "0cf0c100-7f8a-4be8-a9ee-03bd98ef1ffd" ? (
                          <img
                            alt=""
                            src={Saa250Cover}
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
                            {event.eventType === "Patriotic/Historic" && (
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
                            {event.eventType === "Other" && (
                              <img
                                alt=""
                                src={OtherCover}
                                className="absolute inset-0 -z-10 size-full object-cover h-48 group-hover:saturate-0"
                              />
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {event.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2 text-xs/5 text-gray-500">
                    {event.dateTime === null ? (
                      <span className="text-gray-400">TBA</span>
                    ) : (
                      <span className="text-blue-700">
                        {formatDateLocal(event.dateTime[0])} -{" "}
                        {formatDateLocal(event.dateTime[1])}{" "}
                        <span className="text-blue-800 font-semibold">
                          {" "}
                          {event.dateTime[0].substring(0, 4)}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="mb-0 text-xs text-gray-600 pt-1 gap-2">
                    {event.address.slice(0, -5)}
                  </div>
                  <div className="flex mt-2 gap-x-2">
                    {event.eventTier === "Signature" ? (
                      <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                        <MdOutlineStar aria-hidden="true" className="size-3" />

                        {event.eventTier}
                      </span>
                    ) : (
                      <></>
                    )}
                    {event.eventTier === "Partner" ? (
                      <span className="inline-flex gap-x-1 items-center rounded-md bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                        <MdStarBorder aria-hidden="true" className="size-3" />
                        {event.eventTier}
                      </span>
                    ) : (
                      <></>
                    )}
                    {event.eventTier === "Affiliate" ? (
                      <span className="inline-flex gap-x-1 items-center rounded-md bg-indigo-50 px-3 py-11 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                        <FaCircle aria-hidden="true" className="size-1" />
                        {event.eventTier}
                      </span>
                    ) : (
                      <></>
                    )}
                    <span className="inline-flex items-center rounded-md bg-teal-50 px-4 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                      {event.eventType}
                    </span>
                  </div>
                  <div className="flex justify-start gap-x-2 mt-3">
                    {event.facebook === undefined ? (
                      <></>
                    ) : (
                      <a
                        href={"https://www.facebook.com/" + event.facebook}
                        target="blank"
                        className="text-saluteTan hover:text-white"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebookSquare
                          aria-hidden="true"
                          className="text-saluteRed hover:opacity-80 size-5"
                        />
                      </a>
                    )}

                    {event.instagram === undefined ? (
                      <></>
                    ) : (
                      <a
                        href={"https://www.instagram.com/" + event.instagram}
                        className="text-saluteTan hover:text-white"
                        target="blank"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram
                          aria-hidden="true"
                          className="text-saluteRed hover:opacity-80 size-5"
                        />
                      </a>
                    )}
                    {event.x === undefined ? (
                      <></>
                    ) : (
                      <a
                        href={"https://x.com/" + event.x}
                        className="text-saluteTan hover:text-white"
                        target="blank"
                      >
                        <span className="sr-only">X</span>
                        <FaXTwitter
                          aria-hidden="true"
                          className="text-saluteRed hover:opacity-80 size-5"
                        />
                      </a>
                    )}
                  </div>
                  <div className="mb-0 text-xs text-gray-600 pt-3 gap-2">
                    {event.description}
                  </div>
                  <div className="flex gap-x-2">
                    <button
                      onClick={() =>
                        handleMarkerClick(
                          { lat: event.lat, lng: event.lng },
                          event
                        )
                      }
                      className="mt-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                    >
                      View on Map
                      <span className="sr-only">, {event.name}</span>
                    </button>
                    {event.website === undefined ? (
                      <></>
                    ) : (
                      <a
                        href={"https://" + event.website}
                        target="blank"
                        className="mt-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                      >
                        Event Website
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 col-span-5 lg:order-2">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapOptions}
          >
            {props.events.map((event) => (
              <Marker
                key={event.id}
                position={{ lat: event.lat, lng: event.lng }}
                // onClick={() => setOpenEvent(event.id)}
                onClick={() =>
                  handleMarkerClick({ lat: event.lat, lng: event.lng }, event)
                }
              />
            ))}
            {props.events.map(
              (event) =>
                openEvent === event.id && (
                  <EventModal
                    event={event}
                    open={openEvent === event.id}
                    onClose={handleCloseEvent}
                    formatDateLocal={formatDateLocal}
                  />
                )
            )}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
