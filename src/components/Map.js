import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FaCircle } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import EventModal from "./EventModal";
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
import ParadeCover from "../images/event-covers/parade.png";

const containerStyle = {
  width: "100%",
  height: "600px",
};
const defaultCenter = { lat: 39.8283, lng: -80.5795 };

export default function EventMap(props) {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);
  const [openEvent, setOpenEvent] = useState(false);
  const mapRef = useRef();

  function getIcon(eventType) {
    switch (eventType) {
      case "Air Show":
        return "/images/air-show.svg";
      case "Sports":
        return "/images/sports.svg";
      case "Music Festival":
        return "/images/music.svg";
      case "Patriotic/Historic":
        return "/images/patriotic.svg";
      case "State/Local":
        return "/images/local.svg";
      case "Car/RV/Boat":
        return "/images/car.svg";
      case "Military/Tribute":
        return "/images/military.svg";
      case "Educational/STEM":
        return "/images/school.svg";
      case "Parade":
        return "/images/parade.svg";
      case "Other":
        return "/images/other.svg";
      default:
        return "/images/other.svg";
    }
  }
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

  const resetMarkerClick = () => {
    setSelectedEventId(null);
    // Smoothly move and zoom the map

    mapRef.current.setZoom(5);
    // setOpenEvent(event.id);
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
      <div className="font-body grid lg:grid-cols-9">
        <div className="relative order-2 col-span-4 p-6 overflow-y-scroll h-[600px] lg:order-1">
          {" "}
          {selectedEventId === null ? (
            <></>
          ) : (
            <button
              onClick={() => resetMarkerClick()}
              className="my-3 text-sm text-gray-500 underline hover:text-gray-900 sm:block"
            >
              View All Events
            </button>
          )}
          <ul role="list" className="items-start gap-2 grid grid-cols-2 ">
            {props.events.map((event) => (
              <li
                key={event.id}
                ref={(el) => (eventRefs.current[event.id] = el)}
                className={`${
                  selectedEventId === event.id
                    ? "bg-saluteTan/40 rounded-2xl"
                    : ""
                } `}
              >
                <div className="min-w-0 border border-gray-100 p-3 rounded-2xl">
                  <div className="mb-4 relative isolate overflow-hidden rounded-2xl py-14">
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
                  </div>
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {event.name}
                    </p>
                  </div>

                  <div className="flex mt-1 items-center gap-x-2 text-xs/5 text-gray-500">
                    {event.dateTime === null ? (
                      <span className="text-gray-400">TBA</span>
                    ) : (
                      <>
                        {event.isSingleDate === true ? (
                          <span className="text-blue-600">
                            {formatDateLocal(event.dateTime).substring(0, 7)} |
                            <span className="">
                              {" "}
                              {
                                formatDateLocal(event.singleTime[0])
                                  .split(" | ")[1]
                                  .split(" - ")[0]
                              }{" "}
                              -{" "}
                              {
                                formatDateLocal(event.singleTime[1])
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
                  {event.venue === null ? (
                    <div className="mb-0 text-xs text-gray-400 pt-1 gap-2">
                      Venue TBA
                    </div>
                  ) : (
                    <div className="mb-0 text-xs text-gray-600 pt-1 gap-2">
                      {event.venue}
                    </div>
                  )}
                  <div className="mb-0 text-xs text-gray-600 font-medium pt-1 gap-2">
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

                  <div className="flex gap-x-2 mt-3">
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
                icon={{
                  url: getIcon(event.eventType),
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
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
