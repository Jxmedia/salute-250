import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlineFestival, MdStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function convertISOToUSDate(isoDateStr) {
  const [year, month, day] = isoDateStr.split("-");
  return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
}

export default function Dashboard(props) {
  return (
    <>
      <div className="min-h-full">
        <main className="font-body relative -mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                  <div className=" -mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <table className="font-body min-w-full border-separate border-spacing-0">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                            >
                              Submitted
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                            >
                              Start Date
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                            >
                              City
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                            >
                              State
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                            >
                              Tier
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        {props.allEvents === null ? (
                          <tbody>
                            <td className="pl-4 font-body text-red-600 font-bold animate-pulse">
                              Loading Events
                            </td>
                          </tbody>
                        ) : (
                          <tbody>
                            {props.allEvents.map((event, eventIdx) => (
                              <tr key={event.name}>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-600 hover:opacity-70 sm:pl-6 lg:pl-8"
                                  )}
                                >
                                  <button
                                    onClick={() => props.eventDetails(event.id)}
                                    className="underline"
                                  >
                                    {event.name}
                                  </button>
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                                  )}
                                >
                                  {convertISOToUSDate(event.created)}
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                                  )}
                                >
                                  {event.startDate === "12/12/9999"
                                    ? "TBA"
                                    : event.startDate}
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                                  )}
                                >
                                  {event.city}
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                                  )}
                                >
                                  {event.stateAbbr}
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                  )}
                                >
                                  {event.eventTier === "Signature" ? (
                                    <span className="inline-flex gap-x-1 items-center rounded-md bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                                      <MdOutlineStar
                                        aria-hidden="true"
                                        className="size-4"
                                      />

                                      {event.eventTier}
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventTier === "Partner" ? (
                                    <span className="inline-flex gap-x-1 items-center rounded-md bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/20">
                                      <MdStarBorder
                                        aria-hidden="true"
                                        className="size-4"
                                      />
                                      {event.eventTier}
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventTier === "Affiliate" ? (
                                    <span className="inline-flex gap-x-1 items-center rounded-md bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                                      <FaCircle
                                        aria-hidden="true"
                                        className="size-2"
                                      />
                                      {event.eventTier}
                                    </span>
                                  ) : (
                                    <></>
                                  )}
                                </td>
                                <td
                                  className={classNames(
                                    eventIdx !== props.allEvents.length - 1
                                      ? "border-b border-gray-200"
                                      : "",
                                    "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                  )}
                                >
                                  {event.eventType === "Air Show" ? (
                                    <MdAirplaneTicket
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Air Show"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Sports" ? (
                                    <GiAmericanFootballHelmet
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Sporting Event"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Car/RV/Boat" ? (
                                    <IoCarSportSharp
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Car/RV/Boat Show"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Music Festival" ? (
                                    <IoMusicalNotesSharp
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Music Festival"
                                    />
                                  ) : (
                                    <></>
                                  )}

                                  {event.eventType === "Patriotic/Historic" ? (
                                    <LiaFlagUsaSolid
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Patriotic/Historic Event"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "State/Local" ? (
                                    <MdOutlineFestival
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="State/Local Event"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Military/Tribute" ? (
                                    <FaPersonMilitaryRifle
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Military/Tribute Event"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Educational/STEM" ? (
                                    <RiSchoolFill
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Educational/STEM Event"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                  {event.eventType === "Other" ? (
                                    <BsPatchQuestionFill
                                      aria-hidden="true"
                                      className="size-10 text-saluteBlue"
                                      title="Other"
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </td>
                                <td className="border-b pl-3">
                                  {event.approved === false ? (
                                    <span className="text-xs font-semibold isolate inline-flex rounded-md shadow-sm">
                                      <button
                                        type="button"
                                        disabled
                                        className="relative inline-flex items-center rounded-l-md bg-amber-200 px-3 py-2 text-amber-900 ring-1 ring-inset ring-amber-400 focus:z-10"
                                      >
                                        Pending
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          props.updateStatus(event.id, true)
                                        }
                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-green-200 hover:text-green-900 hover:ring-green-400 focus:z-10"
                                      >
                                        Approved
                                      </button>
                                    </span>
                                  ) : (
                                    <span className="text-xs font-semibold isolate inline-flex rounded-md shadow-sm">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          props.updateStatus(event.id, false)
                                        }
                                        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-amber-200 hover:text-amber-900 hover:ring-amber-400 focus:z-10"
                                      >
                                        Pending
                                      </button>
                                      <button
                                        type="button"
                                        disabled
                                        className="relative -ml-px inline-flex items-center rounded-r-md px-3 py-2  ring-1 ring-inset ring-gray-300 bg-green-200 text-green-900 ring-green-400 focus:z-10"
                                      >
                                        Approved
                                      </button>
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                      <nav
                        aria-label="Pagination"
                        className="hidden pt-8 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                      >
                        <div className="hidden sm:block">
                          <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "}
                            <span className="font-medium">20</span> results
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between sm:justify-end">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Previous
                          </a>
                          <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Next
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
