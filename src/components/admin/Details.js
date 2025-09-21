import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
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

export default function Details(props) {
  const [matchedEvent, setMatchedEvent] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

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
    props.setEventName(event.name);
  };
  //
  //
  const updateStatus = async (id, status) => {
    let response = await fetch(
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
  function convertTo12Hour(time24) {
    const [hourStr, minuteStr] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr;
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12; // Convert 0 to 12

    return `${hour}:${minute} ${ampm}`;
  }
  //
  //
  //
  //
  //
  console.log(matchedEvent);
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
            <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                      Event Status Updated
                    </p>
                    <button
                      type="button"
                      className="ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                    ></button>
                  </div>
                  <div className="ml-4 flex shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShowNotification(false);
                      }}
                      className="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
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
                            <span className="text-md font-semibold isolate inline-flex rounded-md shadow-sm">
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
                            <span className="text-md font-semibold isolate inline-flex rounded-md shadow-sm">
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
                        </div>
                      )}
                    </div>
                    {matchedEvent === null ? (
                      <></>
                    ) : (
                      <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Name
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.name}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event #
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.SAAID}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Contact Email
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.poc}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Type
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
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
                                  <span className="flex">Sporting Event</span>
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
                                  <span className="flex">Car/RV/Boat Show</span>
                                </div>
                              ) : (
                                <></>
                              )}
                              {matchedEvent.eventType === "Music Festival" ? (
                                <div className="flex items-center gap-x-3">
                                  <IoMusicalNotesSharp
                                    aria-hidden="true"
                                    className="size-10 text-saluteBlue"
                                    title="Music Festival"
                                  />
                                  <span className="flex">Music Festival</span>
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
                                </div>
                              ) : (
                                <></>
                              )}
                              {matchedEvent.eventType === "Military/Tribute" ? (
                                <div className="flex items-center gap-x-3">
                                  <FaPersonMilitaryRifle
                                    aria-hidden="true"
                                    className="size-10 text-saluteBlue"
                                    title="Military/Tribute Event"
                                  />
                                  <span className="flex">Military/Tribute</span>
                                </div>
                              ) : (
                                <></>
                              )}
                              {matchedEvent.eventType === "Educational/STEM" ? (
                                <div className="flex items-center gap-x-3">
                                  <RiSchoolFill
                                    aria-hidden="true"
                                    className="size-10 text-saluteBlue"
                                    title="Educational/STEM Event"
                                  />
                                  <span className="flex">Educational/STEM</span>
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
                                </div>
                              ) : (
                                <></>
                              )}
                            </dd>
                          </div>

                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Start Date and Time
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.startDate === "12/12/9999" ? (
                                "TBA"
                              ) : (
                                <>
                                  {" "}
                                  {matchedEvent.startDate} -{" "}
                                  {convertTo12Hour(matchedEvent.startTime)}
                                </>
                              )}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              End Date and Time
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.endDate === "12/12/9999" ? (
                                "TBA"
                              ) : (
                                <>
                                  {" "}
                                  {matchedEvent.endDate} -{" "}
                                  {convertTo12Hour(matchedEvent.endTime)}
                                </>
                              )}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Event Website
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.website === undefined ? (
                                ""
                              ) : (
                                <> www.{matchedEvent.website}</>
                              )}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="flex items-center text-sm/6 font-medium text-gray-900">
                              <FaFacebookSquare
                                aria-hidden="true"
                                className="pr-2 text-saluteBlue hover:opacity-80 size-8"
                              />{" "}
                              Facebook
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.facebook === undefined ? (
                                ""
                              ) : (
                                <> www.facebook.com/{matchedEvent.facebook}/</>
                              )}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="flex items-center text-sm/6 font-medium text-gray-900">
                              <FaInstagram
                                aria-hidden="true"
                                className="pr-2 text-saluteBlue hover:opacity-80 size-8"
                              />{" "}
                              Instagram
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.instagram === undefined ? (
                                ""
                              ) : (
                                <>
                                  {" "}
                                  www.instagram.com/{matchedEvent.instagram}/
                                </>
                              )}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="flex items-center text-sm/6 font-medium text-gray-900">
                              <FaXTwitter
                                aria-hidden="true"
                                className="pr-2 text-saluteBlue hover:opacity-80 size-8"
                              />{" "}
                              Twitter/X
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.x === undefined ? (
                                ""
                              ) : (
                                <> www.x.com/{matchedEvent.x}/</>
                              )}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Projected Attendance
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.attendance}
                            </dd>
                          </div>

                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Requested Event Tier*
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.eventTier}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Type
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.eventType}
                            </dd>
                          </div>

                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Venue Address
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.address}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Venue Name
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.venue}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Description
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.description}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Other Event Tier Qualifiers
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.qualifiers}
                            </dd>
                          </div>
                          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                            <dt className="text-sm/6 font-medium text-gray-900">
                              Additional Brand Integrations
                            </dt>
                            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {matchedEvent.brandIntegrations}
                            </dd>
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
                          className="mt-6 font-body w-full rounded-md bg-green-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                          className="mt-6 font-body w-full rounded-md bg-amber-500 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Unpublish Event
                        </button>
                      ) : (
                        <></>
                      )}
                      <button
                        type="button"
                        onClick={() => props.setisDetails(false)}
                        className="mt-6 font-body w-full rounded-md bg-saluteRed px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
