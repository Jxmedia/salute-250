import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { FaBedPulse, FaXTwitter } from "react-icons/fa6";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdOutlineFestival } from "react-icons/md";
import { DatePicker, DateRangePicker, TimeRangePicker } from "rsuite";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import "rsuite/dist/rsuite.min.css";
import { BiParty } from "react-icons/bi";

export default function Details(props) {
  const [matchedEvent, setMatchedEvent] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  //
  //

  //
  ////// Edit Fields ////
  //
  const [eventData, setEventData] = useState(null);
  console.log(eventData);
  //
  function handleChange(e) {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  }

  const [eventImage, setEventImage] = useState({ img: null });

  console.log(eventImage);

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
        setEventImage({ img: img.src });
      } else {
        alert("Image must be exactly 800x400 pixels.");
      }
    };

    reader.readAsDataURL(file);
  };
  //
  //

  function handleCancel() {
    setEventData(null);
    setIsEditName(false);
    setIsEditPoc(false);
    setIsEditType(false);
    setIsEditTime(false);
    setIsEditWebsite(false);
    setIsEditCover(false);
    setEventImage({ img: null });
    setIsEditIg(false);
    setIsEditX(false);
    setIsEditAttendance(false);
    setIsEditTier(false);
    setIsEditAddress(false);
    setIsEditVenue(false);
    setIsEditDesc(false);
    setIsEditQualifiers(false);
    setIsEditIntegrations(false);
  }

  const [isEditName, setIsEditName] = useState(false);
  const [isEditPoc, setIsEditPoc] = useState(false);
  const [isEditType, setIsEditType] = useState(false);
  const [isEditTime, setIsEditTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [singleTime, setSingleTime] = useState(null);
  const [isSingleDate, setIsSingleDate] = useState(false);

  const [isEditWebsite, setIsEditWebsite] = useState(false);
  const [isEditCover, setIsEditCover] = useState(false);
  const [isEditIg, setIsEditIg] = useState(false);
  const [isEditX, setIsEditX] = useState(false);
  const [isEditAttendance, setIsEditAttendance] = useState(false);
  const [isEditTier, setIsEditTier] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isEditVenue, setIsEditVenue] = useState(false);
  const [isEditDesc, setIsEditDesc] = useState(false);
  const [isEditQualifiers, setIsEditQualifiers] = useState(false);
  const [isEditIntegrations, setIsEditIntegrations] = useState(false);
  //
  //
  //
  const handleToggle = (event) => {
    setSelectedDate(null);
    setSingleTime(null);
    setIsSingleDate(event.target.checked); // true or false
  };
  //
  //
  //
  //
  //

  useEffect(() => {
    foundEvent();
  }, []);

  const foundEvent = async () => {
    let response = await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/pullEventByID",
      {
        method: "POST",
        body: JSON.stringify(props.eventDetailID),
      }
    );

    const event = await response.json();

    setMatchedEvent(event);
    setIsSingleDate(event.isSingleDate);
    props.setEventName(event.name);
  };
  //
  //
  const updateStatus = async (id, status) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventStatus",
      {
        method: "POST",
        body: JSON.stringify({ eventID: id, isApproved: { approved: status } }),
      }
    );
    setShowNotification(true);
    setTimeout(function () {
      setShowNotification(false);
    }, 2000);

    foundEvent();
  };
  //
  //
  //
  //
  const updateEventDetails = async (id) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventDetails",
      {
        method: "POST",
        body: JSON.stringify({ eventID: id, data: eventData }),
      }
    );
    handleCancel();

    foundEvent();
  };
  //
  //
  const updateEventImage = async (id) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventDetails",
      {
        method: "POST",
        body: JSON.stringify({ eventID: id, data: eventImage }),
      }
    );
    handleCancel();

    foundEvent();
  };
  //
  //
  //
  const deleteEvent = async (id) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/deleteEvent",
      {
        method: "POST",
        body: JSON.stringify({ eventID: id }),
      }
    );

    props.setisDetails(false);
  };
  //
  //
  //
  const updateEventTime = async (id) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventDetails",
      {
        method: "POST",
        body: JSON.stringify({
          eventID: id,
          data: { dateTime: selectedDate, isSingleDate: isSingleDate },
        }),
      }
    );
    handleCancel();

    foundEvent();
  };
  //
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
  //
  const updateEventAddress = async (id) => {
    await fetch(
      "https://salute250-cxbccag3f0dff5b0.eastus2-01.azurewebsites.net/api/updateEventDetails",
      {
        method: "POST",
        body: JSON.stringify({
          eventID: id,
          data: {
            address: address.address,
            city: address.city,
            state: address.state,
            stateAbbr: address.stateAbbr,
            zip: address.zip,
            lat: coords.lat,
            lng: coords.lng,
          },
        }),
      }
    );
    handleCancel();

    foundEvent();
  };
  //
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
  //

  //
  return (
    <>
      <div
        aria-live="assertive"
        className="font-body pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={showNotification}>
            <div className="relative z-50 pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                      Event Status Updated
                    </p>
                    <button
                      type="button"
                      className="ml-3 shrink-0 rounded-full bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                    ></button>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShowNotification(false);
                      }}
                      className="inline-flex rounded-full text-gray-400 hover:text-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
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
      <div className="min-h-full">
        <main className="font-body relative -mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                  <div>
                    <div className="flex justify-between">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-base/7 font-semibold text-saluteRed">
                          Submission Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
                          Event details that were submitted
                        </p>
                      </div>
                      {matchedEvent === null ? (
                        <></>
                      ) : (
                        <div>
                          {" "}
                          {matchedEvent.approved === false ? (
                            <span className="text-md font-semibold isolate inline-flex rounded-full shadow-sm">
                              <button
                                type="button"
                                disabled
                                className="relative inline-flex items-center rounded-l-md bg-amber-200 px-5 py-2 text-amber-900 ring-1 ring-inset ring-amber-400 focus:z-10"
                              >
                                Pending
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  updateStatus(matchedEvent.id, true)
                                }
                                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-5 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-green-200 hover:text-green-900 hover:ring-green-400 focus:z-10"
                              >
                                Approved
                              </button>
                            </span>
                          ) : (
                            <>
                              {matchedEvent.approved === "passed" ? (
                                <button
                                  type="button"
                                  disabled
                                  className="relative items-center bg-white  w-full rounded-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-10"
                                >
                                  Event Passed
                                </button>
                              ) : (
                                <span className="text-md font-semibold isolate inline-flex rounded-full shadow-sm">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateStatus(matchedEvent.id, false)
                                    }
                                    className="relative inline-flex items-center rounded-l-md bg-white px-5 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-amber-200 hover:text-amber-900 hover:ring-amber-400 focus:z-10"
                                  >
                                    Pending
                                  </button>
                                  <button
                                    type="button"
                                    disabled
                                    className="relative -ml-px inline-flex items-center rounded-r-md px-5 py-2  ring-1 ring-inset ring-gray-300 bg-green-200 text-green-900 ring-green-400 focus:z-10"
                                  >
                                    Approved
                                  </button>
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    {matchedEvent === null ? (
                      <></>
                    ) : (
                      <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Name
                            </dt>
                            {isEditName === true ? (
                              <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div className="flex items-center  sm:max-w-md">
                                  <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder={matchedEvent.name}
                                    className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-1 sm:text-sm/6 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue rounded-md bg-white pl-3"
                                  />
                                  <div className="col-span-1">
                                    {" "}
                                    <button
                                      type="button"
                                      onClick={() =>
                                        updateEventDetails(matchedEvent.id)
                                      }
                                      disabled={eventData === null}
                                      className={`${
                                        eventData === null
                                          ? "text-gray-700 ring-gray-500"
                                          : "text-green-700 ring-green-500 hover:bg-green-50"
                                      } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                    >
                                      Save
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleCancel()}
                                      className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {matchedEvent.name}{" "}
                                <button
                                  type="button"
                                  onClick={() => setIsEditName(true)}
                                  className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  Edit
                                </button>
                              </div>
                            )}
                          </div>

                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event #
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.SAAID}
                            </div>
                          </div>
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Requested Event Tier*
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditTier === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center">
                                    {" "}
                                    <div className="grid grid-cols-1 sm:max-w-xs">
                                      <select
                                        id="eventTier"
                                        name="eventTier"
                                        autoComplete="country-name"
                                        onChange={handleChange}
                                        required
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                                      >
                                        <option
                                          value=""
                                          selected
                                          disabled
                                          hidden
                                        >
                                          Select Event Tier
                                        </option>
                                        <option value="Affiliate">
                                          Affiliate
                                        </option>
                                        <option value="Partner">Partner</option>
                                        <option value="Signature">
                                          Signature
                                        </option>
                                      </select>
                                      <FaRegArrowAltCircleDown
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                      />
                                    </div>
                                    <div className="col-span-1">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.eventTier}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditTier(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          {matchedEvent.eventTier === "Signature" ? (
                            <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                              <dt className="text-sm/6 font-medium text-gray-900">
                                Signature Event Cover
                              </dt>
                              <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {isEditCover === true ? (
                                  <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
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
                                      <div className="flex">
                                        {" "}
                                        <label
                                          htmlFor="file-upload"
                                          className="cursor-pointer px-6 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-body font-medium"
                                        >
                                          Upload Event Cover
                                        </label>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateEventImage(matchedEvent.id)
                                          }
                                          disabled={eventImage.img === null}
                                          className={`${
                                            eventImage.img === null
                                              ? "text-gray-700 ring-gray-500"
                                              : "text-green-700 ring-green-500 hover:bg-green-50"
                                          } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                        >
                                          Save
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => handleCancel()}
                                          className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                          Cancel
                                        </button>
                                      </div>

                                      {/* Preview */}
                                      {eventImage.img && (
                                        <img
                                          src={eventImage.img}
                                          alt="Event"
                                          className="border rounded shadow-lg mt-4 w-1/2"
                                        />
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <img
                                      src={matchedEvent.img}
                                      className="w-1/2"
                                    />

                                    <button
                                      type="button"
                                      onClick={() => setIsEditCover(true)}
                                      className="mt-1 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      Edit
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Contact Email
                            </dt>
                            {isEditPoc === true ? (
                              <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div className="flex items-center  sm:max-w-md">
                                  <input
                                    id="poc"
                                    name="poc"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder={matchedEvent.poc}
                                    className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-1 sm:text-sm/6 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue rounded-md bg-white pl-3"
                                  />
                                  <div className="col-span-1">
                                    {" "}
                                    <button
                                      type="button"
                                      onClick={() =>
                                        updateEventDetails(matchedEvent.id)
                                      }
                                      disabled={eventData === null}
                                      className={`${
                                        eventData === null
                                          ? "text-gray-700 ring-gray-500"
                                          : "text-green-700 ring-green-500 hover:bg-green-50"
                                      } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                    >
                                      Save
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleCancel()}
                                      className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {matchedEvent.poc}{" "}
                                <button
                                  type="button"
                                  onClick={() => setIsEditPoc(true)}
                                  className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  Edit
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Type
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditType === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center">
                                    {" "}
                                    <div className="grid grid-cols-1 sm:max-w-xs">
                                      <select
                                        id="eventType"
                                        name="eventType"
                                        autoComplete="country-name"
                                        onChange={handleChange}
                                        required
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:text-sm/6"
                                      >
                                        <option
                                          value=""
                                          selected
                                          disabled
                                          hidden
                                        >
                                          Select Event Type
                                        </option>
                                        <option value="Air Show">
                                          Air Show
                                        </option>
                                        <option value="Music Festival">
                                          Music Festival
                                        </option>
                                        <option value="Sports">
                                          Sporting Event
                                        </option>
                                        <option value="Patriotic/Historic">
                                          Patriotic/Historic
                                        </option>
                                        <option value="State/Local">
                                          State/Local
                                        </option>
                                        <option value="Car/RV/Boat">
                                          Car/RV/Boat
                                        </option>
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
                                    <div className="col-span-1">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.eventType === "Air Show" ? (
                                    <div className="flex items-center gap-x-3">
                                      <MdAirplaneTicket
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Air Show"
                                      />{" "}
                                      <span className="flex">Air Show</span>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType === "Sports" ? (
                                    <div className="flex items-center gap-x-3">
                                      <GiAmericanFootballHelmet
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Sporting Event"
                                      />
                                      <span className="flex">
                                        Sporting Event
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType === "Car/RV/Boat" ? (
                                    <div className="flex items-center gap-x-3">
                                      {" "}
                                      <IoCarSportSharp
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Car/RV/Boat Show"
                                      />
                                      <span className="flex">
                                        Car/RV/Boat Show
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType ===
                                  "Music Festival" ? (
                                    <div className="flex items-center gap-x-3">
                                      <IoMusicalNotesSharp
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Music Festival"
                                      />
                                      <span className="flex">
                                        Music Festival
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}

                                  {matchedEvent.eventType ===
                                  "Patriotic/Historic" ? (
                                    <div className="flex items-center gap-x-3">
                                      <LiaFlagUsaSolid
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Patriotic/Historic Event"
                                      />
                                      <span className="flex">
                                        Patriotic/Historic
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType === "State/Local" ? (
                                    <div className="flex items-center gap-x-3">
                                      <MdOutlineFestival
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="State/Local Event"
                                      />
                                      <span className="flex">State/Local</span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType ===
                                  "Military/Tribute" ? (
                                    <div className="flex items-center gap-x-3">
                                      <FaPersonMilitaryRifle
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Military/Tribute Event"
                                      />
                                      <span className="flex">
                                        Military/Tribute
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType ===
                                  "Educational/STEM" ? (
                                    <div className="flex items-center gap-x-3">
                                      <RiSchoolFill
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Educational/STEM Event"
                                      />
                                      <span className="flex">
                                        Educational/STEM
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType === "Parade" ? (
                                    <div className="flex items-center gap-x-3">
                                      <BiParty
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Parade Event"
                                      />
                                      <span className="flex">Parade</span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  {matchedEvent.eventType === "Other" ? (
                                    <div className="flex items-center gap-x-3">
                                      <BsPatchQuestionFill
                                        aria-hidden="true"
                                        className="size-10 text-saluteBlue"
                                        title="Other"
                                      />
                                      <span className="flex">Other</span>
                                      <button
                                        type="button"
                                        onClick={() => setIsEditType(true)}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Edit
                                      </button>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Date and Time
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditTime === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
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

                                  {isSingleDate === true ? (
                                    <div className="mt-3 flex items-center  sm:max-w-md">
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
                                          placeholder={[
                                            "Start Time",
                                            "End Time",
                                          ]}
                                          showMeridiem
                                        />
                                      </div>
                                      <div className="flex">
                                        {" "}
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateEventTime(matchedEvent.id)
                                          }
                                          disabled={selectedDate === null}
                                          className={`${
                                            selectedDate === null
                                              ? "text-gray-700 ring-gray-500"
                                              : "text-green-700 ring-green-500 hover:bg-green-50"
                                          } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                        >
                                          Save
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => handleCancel()}
                                          className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="mt-3 flex items-center  sm:max-w-md">
                                      <DateRangePicker
                                        className="border-1 border-gray-300 rounded-md hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
                                        format="MM/dd/yyyy hh:mm aa"
                                        value={selectedDate}
                                        onChange={setSelectedDate}
                                        showMeridiem
                                      />
                                      <div className="flex">
                                        {" "}
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateEventTime(matchedEvent.id)
                                          }
                                          disabled={selectedDate === null}
                                          className={`${
                                            selectedDate === null
                                              ? "text-gray-700 ring-gray-500"
                                              : "text-green-700 ring-green-500 hover:bg-green-50"
                                          } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                        >
                                          Save
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => handleCancel()}
                                          className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.dateTime === null ? (
                                    <span className="text-gray-400">TBA</span>
                                  ) : (
                                    <>
                                      {matchedEvent.isSingleDate === false ? (
                                        <span className="text-gray-700">
                                          {formatDateLocal(
                                            matchedEvent.dateTime[0]
                                          )}{" "}
                                          -{" "}
                                          {formatDateLocal(
                                            matchedEvent.dateTime[1]
                                          )}{" "}
                                          <span className="text-gray-700 font-semibold">
                                            {" "}
                                            {matchedEvent.dateTime[0].substring(
                                              0,
                                              4
                                            )}
                                          </span>
                                        </span>
                                      ) : (
                                        <span className="text-gray-700">
                                          {formatDateLocal(
                                            matchedEvent.dateTime
                                          ).substring(0, 7)}{" "}
                                          |
                                          <span className="text-gray-700">
                                            {" "}
                                            {
                                              formatDateLocal(
                                                matchedEvent.singleTime[0]
                                              )
                                                .split(" | ")[1]
                                                .split(" - ")[0]
                                            }{" "}
                                            -{" "}
                                            {
                                              formatDateLocal(
                                                matchedEvent.singleTime[1]
                                              )
                                                .split(" | ")[1]
                                                .split(" - ")[0]
                                            }{" "}
                                            <span className="font-semibold">
                                              {" "}
                                              {matchedEvent.dateTime.substring(
                                                0,
                                                4
                                              )}
                                            </span>
                                          </span>
                                        </span>
                                      )}
                                    </>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditTime(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Website
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditWebsite === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center  sm:max-w-md">
                                    <input
                                      id="website"
                                      name="website"
                                      type="text"
                                      onChange={handleChange}
                                      placeholder={matchedEvent.website}
                                      className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-1 sm:text-sm/6 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue rounded-md bg-white pl-3"
                                    />
                                    <div className="col-span-1">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.website === undefined ? (
                                    ""
                                  ) : (
                                    <> www.{matchedEvent.website}</>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditWebsite(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Venue Address
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditAddress === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center ">
                                    <div className="w-96 rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue">
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
                                            componentRestrictions: {
                                              country: "us",
                                            }, // Optional: limit to U.S.
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
                                    <div className="col-span-1">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventAddress(matchedEvent.id)
                                        }
                                        disabled={address.city === ""}
                                        className={`${
                                          address.city === ""
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.address}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditAddress(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Venue Name
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditVenue === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center  sm:max-w-md">
                                    <input
                                      id="venue"
                                      name="venue"
                                      type="text"
                                      onChange={handleChange}
                                      placeholder={matchedEvent.venue}
                                      className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-1 sm:text-sm/6 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-saluteBlue rounded-md bg-white pl-3"
                                    />
                                    <div className="col-span-1">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.venue}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditVenue(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Description + Qualifiers for Event Tier
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditQualifiers === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center  sm:max-w-md">
                                    <textarea
                                      id="qualifiers"
                                      name="qualifiers"
                                      rows={3}
                                      onChange={handleChange}
                                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-2xl sm:text-sm/6"
                                      defaultValue={matchedEvent.qualifiers}
                                    />
                                    <div className="flex">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.qualifiers}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditQualifiers(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="odd:bg-gray-50 even:bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Additional Brand Integrations
                            </dt>
                            <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {isEditIntegrations === true ? (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <div className="flex items-center  sm:max-w-md">
                                    <textarea
                                      id="brandIntegrations"
                                      name="brandIntegrations"
                                      rows={3}
                                      onChange={handleChange}
                                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-saluteBlue sm:max-w-2xl sm:text-sm/6"
                                      defaultValue={
                                        matchedEvent.brandIntegrations
                                      }
                                    />
                                    <div className="flex">
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateEventDetails(matchedEvent.id)
                                        }
                                        disabled={eventData === null}
                                        className={`${
                                          eventData === null
                                            ? "text-gray-700 ring-gray-500"
                                            : "text-green-700 ring-green-500 hover:bg-green-50"
                                        } ml-3 rounded bg-white px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset`}
                                      >
                                        Save
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => handleCancel()}
                                        className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-0 mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  {matchedEvent.brandIntegrations}
                                  <button
                                    type="button"
                                    onClick={() => setIsEditIntegrations(true)}
                                    className="ml-3 rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                  >
                                    Edit
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </dl>
                      </div>
                    )}
                  </div>
                  {matchedEvent === null ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      {matchedEvent.approved === false ? (
                        <button
                          type="button"
                          onClick={() => updateStatus(matchedEvent.id, true)}
                          className="mt-6 font-body w-full rounded-full bg-green-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Approve Event
                        </button>
                      ) : (
                        <></>
                      )}
                      {matchedEvent.approved === true ? (
                        <button
                          type="button"
                          onClick={() => updateStatus(matchedEvent.id, false)}
                          className="mt-6 font-body w-full rounded-full bg-amber-500 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Unpublish Event
                        </button>
                      ) : (
                        <></>
                      )}
                      <button
                        type="button"
                        onClick={() => deleteEvent(matchedEvent.id)}
                        className="mt-6 font-body w-full rounded-full bg-saluteRed px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Delete Event
                      </button>
                      <button
                        type="button"
                        onClick={() => props.setisDetails(false)}
                        className="mt-6 font-body w-full rounded-full bg-saluteBlue px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Return To Event Dashboard
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
