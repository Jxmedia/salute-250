import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FaCircle } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import EventModal from "./EventModalMap";

const containerStyle = {
  width: "100%",
  height: "500px",
};
const defaultCenter = { lat: 39.8283, lng: -98.5795 };

const usaBounds = {
  north: 49.384358, // northern border
  south: 24.396308, // southern border
  west: -125.0, // western border
  east: -66.93457, // eastern border
};

export default function EventMap(props) {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);
  const [openEvent, setOpenEvent] = useState(false);
  const mapRef = useRef();
  const [zoom, setZoom] = useState(5);
  const [center, setCenter] = useState(defaultCenter);

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
    googleMapsApiKey: "AIzaSyCydl9IQNI9kEhs_--rVWqjRc0B2M9hays",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMarkerClick = (position, event) => {
    if (!mapRef.current) return;

    // Smoothly move and zoom the map
    mapRef.current.panTo(position);
    mapRef.current.setZoom(14);
    setOpenEvent(event.id);
  };

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  console.log(props);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-2 p-6 overflow-y-scroll h-96">
          {" "}
          <ul role="list" className="divide-y divide-gray-100">
            {props.events.map((event) => (
              <li
                key={event.id}
                className="flex items-center justify-between gap-x-6 py-5"
              >
                <div className="min-w-0">
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
                </div>
                <div className="flex flex-none items-center gap-x-4">
                  <button
                    onClick={() =>
                      handleMarkerClick(
                        { lat: event.lat, lng: event.lng },
                        event
                      )
                    }
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                  >
                    View Event
                    <span className="sr-only">, {event.name}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
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
