import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAirplaneTicket } from "react-icons/md";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineFestival } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { RiSchoolFill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { BiParty } from "react-icons/bi";

export default function EventModal(props) {
  return (
    <>
      {props.event === undefined ? (
        <></>
      ) : (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          className="relative z-50"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-800/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="lg:flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div>
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200">
                    {props.event.eventType === "Air Show" ? (
                      <MdAirplaneTicket
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Air Show"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Sports" ? (
                      <GiAmericanFootballHelmet
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Sporting Event"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Car/RV/Boat" ? (
                      <IoCarSportSharp
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Car/RV/Boat Show"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Music Festival" ? (
                      <IoMusicalNotesSharp
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Music Festival"
                      />
                    ) : (
                      <></>
                    )}

                    {props.event.eventType === "Patriotic/Historic" ? (
                      <LiaFlagUsaSolid
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Patriotic/Historic Event"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "State/Local" ? (
                      <MdOutlineFestival
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="State/Local Event"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Military/Tribute" ? (
                      <FaPersonMilitaryRifle
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Military/Tribute Event"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Educational/STEM" ? (
                      <RiSchoolFill
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Educational/STEM Event"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Parade" ? (
                      <BiParty
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Parade"
                      />
                    ) : (
                      <></>
                    )}
                    {props.event.eventType === "Other" ? (
                      <BsPatchQuestionFill
                        aria-hidden="true"
                        className="size-6 text-blue-600"
                        title="Other"
                      />
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="mt-2 text-center">
                    {props.event.eventTier === "Signature" ? (
                      <p className="text-3xl font-scriptText tracking-[0.5px] text-saluteRed">
                        Signature Event
                      </p>
                    ) : (
                      <></>
                    )}
                    {props.event.eventTier === "Partner" ? (
                      <p className="text-2xl font-primary tracking-[0.5px] text-saluteRed">
                        Partner Event
                      </p>
                    ) : (
                      <></>
                    )}
                    {props.event.eventTier === "Affiliate" ? (
                      <p className="text-2xl font-primary tracking-[0.5px] text-saluteRed">
                        Affiliate Event
                      </p>
                    ) : (
                      <></>
                    )}
                    <h3 className="text-3xl font-primary font-medium text-gray-700">
                      {props.event.name}
                    </h3>
                    {props.event.dateTime === null ? (
                      <span className="text-gray-400">TBA</span>
                    ) : (
                      <>
                        {props.event.isSingleDate === true ? (
                          <span className="text-blue-600">
                            {props
                              .formatDateLocal(props.event.dateTime)
                              .substring(0, 7)}{" "}
                            |
                            <span className="">
                              {" "}
                              {
                                props
                                  .formatDateLocal(props.event.singleTime[0])
                                  .split(" | ")[1]
                                  .split(" - ")[0]
                              }{" "}
                              -{" "}
                              {
                                props
                                  .formatDateLocal(props.event.singleTime[1])
                                  .split(" | ")[1]
                                  .split(" - ")[0]
                              }{" "}
                              <span className="text-blue-800 font-semibold">
                                {" "}
                                {props.event.dateTime.substring(0, 4)}
                              </span>
                            </span>
                          </span>
                        ) : (
                          <span className="text-blue-600">
                            {props.formatDateLocal(props.event.dateTime[0])} -{" "}
                            {props.formatDateLocal(props.event.dateTime[1])}{" "}
                            <span className="text-blue-800 font-semibold">
                              {" "}
                              {props.event.dateTime[0].substring(0, 4)}
                            </span>
                          </span>
                        )}
                      </>
                    )}

                    <div className="flex items-center justify-center gap-x-2 font-body">
                      <MdLocationPin
                        aria-hidden="true"
                        className="size-5 text-blue-700"
                      />
                      <div className="mb-0 text-sm text-gray-600 py-2 text-center gap-2">
                        {props.event.address.slice(0, -5)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 relative isolate overflow-hidden rounded-2xl">
                    <div class=" col-span-6 sm:col-span-3">
                      <div class="border border-gray-300 rounded-lg p-2 h-64 relative">
                        <div class="absolute top-0 left-0 w-full h-full rounded-2xl">
                          <GoogleMap
                            mapContainerStyle={{
                              width: "100%",
                              height: "100%",
                            }}
                            center={{
                              lat: props.event.lat,
                              lng: props.event.lng,
                            }}
                            zoom={11}
                          >
                            {/* Marker at the center */}
                            <Marker
                              position={{
                                lat: props.event.lat,
                                lng: props.event.lng,
                              }}
                            />
                          </GoogleMap>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {props.event.website === undefined ? (
                  <div className="flex justify-center mt-5 sm:mt-6 gap-x-2 text-center">
                    <button
                      type="button"
                      onClick={() => props.onClose()}
                      className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                    >
                      Back to Events
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-5 sm:mt-6 gap-x-2 text-center">
                    <button
                      type="button"
                      onClick={() => props.onClose()}
                      className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                    >
                      Back to Events
                    </button>
                    <a
                      href={"https://" + props.event.website}
                      target="blank"
                      className="w-full justify-center border-t-2 border-red-300 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                    >
                      Event Website
                    </a>
                  </div>
                )}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
