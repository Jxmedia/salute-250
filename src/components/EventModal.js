import React, { useState, useEffect } from "react";
import { IoTicketSharp } from "react-icons/io5";
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

export default function EventModal(props) {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null);

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

  return (
    <>
      {props.event === undefined || googleMapsApiKey === null ? (
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
                    {props.event.startDate === "12/12/9999" ||
                    props.event.endDate === "12/12/9999" ? (
                      <></>
                    ) : (
                      <h4 className="text-sm pt-1 font-body text-gray-600">
                        <span className="text-blue-600">
                          {props.event.startDate === props.event.endDate ? (
                            new Date(props.event.startDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short", // 'short' gives you "Dec"
                                day: "numeric",
                              }
                            )
                          ) : (
                            <></>
                          )}
                          {props.event.startDate !== props.event.endDate ? (
                            <>
                              {new Date(
                                props.event.startDate
                              ).toLocaleDateString("en-US", {
                                month: "short", // 'short' gives you "Dec"
                                day: "numeric",
                              })}
                              -{new Date(props.event.endDate).getDate()},{" "}
                              {new Date(props.event.endDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                }
                              )}
                            </>
                          ) : (
                            <></>
                          )}{" "}
                        </span>
                        {"|"} {props.convertTo12Hour(props.event.startTime)} -{" "}
                        {props.convertTo12Hour(props.event.endTime)}
                      </h4>
                    )}
                    <div className="flex justify-center gap-x-4 mt-3">
                      {props.event.facebook === undefined ? (
                        <></>
                      ) : (
                        <a
                          href={
                            "https://www.facebook.com/" + props.event.facebook
                          }
                          target="blank"
                          className="text-saluteTan hover:text-white"
                        >
                          <span className="sr-only">Facebook</span>
                          <FaFacebookSquare
                            aria-hidden="true"
                            className="text-saluteRed hover:opacity-80 size-6"
                          />
                        </a>
                      )}

                      {props.event.instagram === undefined ? (
                        <></>
                      ) : (
                        <a
                          href={
                            "https://www.instagram.com/" + props.event.instagram
                          }
                          className="text-saluteTan hover:text-white"
                          target="blank"
                        >
                          <span className="sr-only">Instagram</span>
                          <FaInstagram
                            aria-hidden="true"
                            className="text-saluteRed hover:opacity-80 size-6"
                          />
                        </a>
                      )}
                      {props.event.x === undefined ? (
                        <></>
                      ) : (
                        <a
                          href={"https://x.com/" + props.event.x}
                          className="text-saluteTan hover:text-white"
                          target="blank"
                        >
                          <span className="sr-only">X</span>
                          <FaXTwitter
                            aria-hidden="true"
                            className="text-saluteRed hover:opacity-80 size-6"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 relative isolate overflow-hidden rounded-2xl">
                    <div class=" col-span-6 sm:col-span-3">
                      <div class="border border-gray-300 rounded-lg p-2 h-64 relative">
                        <div class="absolute top-0 left-0 w-full h-full rounded-2xl">
                          <LoadScript googleMapsApiKey={googleMapsApiKey}>
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
                          </LoadScript>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-x-4 font-body">
                    <div className="flex items-center justify-center gap-x-2">
                      <MdLocationPin
                        aria-hidden="true"
                        className="size-5 text-blue-700"
                      />
                      <dd className="text-sm text-gray-600 py-3 text-center gap-2">
                        {props.event.address.slice(0, -5)}
                      </dd>
                    </div>
                    {props.event.price === undefined ? (
                      <>
                        {props.event.website === undefined ? (
                          <dl className="font-body justify-between">
                            <dt className="sr-only">Price</dt>
                            <dd className="text-sm text-gray-600 flex items-start gap-2">
                              <IoTicketSharp
                                aria-hidden="true"
                                className="size-5 text-blue-700"
                              />{" "}
                              <span className="text-gray-400"> TBA</span>
                            </dd>
                          </dl>
                        ) : (
                          <dl className="font-body justify-between">
                            <dt className="sr-only">Price</dt>
                            <dd className="text-sm text-gray-600 flex items-start gap-2">
                              <IoTicketSharp
                                aria-hidden="true"
                                className="size-5 text-blue-700"
                              />{" "}
                              <span className="text-gray-400">
                                {" "}
                                Check Website
                              </span>
                            </dd>
                          </dl>
                        )}
                      </>
                    ) : (
                      <dl className="font-body justify-between">
                        <dt className="sr-only">Price</dt>
                        <dd className="text-sm text-gray-600 flex items-start gap-2">
                          <IoTicketSharp
                            aria-hidden="true"
                            className="size-5 text-blue-700"
                          />{" "}
                          {props.event.price}
                        </dd>
                      </dl>
                    )}
                  </div>

                  {props.event.description === undefined ? (
                    ""
                  ) : (
                    <div className="">
                      <div className="border border-gray-100 bg-gray-50 rounded-2xl p-3 font-body justify-center">
                        <div className="py-2">
                          <p className="text-sm text-gray-700 gap-2">
                            {props.event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {props.event.website === undefined ? (
                  <></>
                ) : (
                  <a
                    href={"https://" + props.event.website}
                    target="blank"
                    className="mx-auto text-center py-2 flex justify-center text-sm font-body underline tracking-[0.5px] text-blue-500 hover:opacity-70"
                  >
                    Event Website
                  </a>
                )}

                <div className="flex justify-center mt-5 sm:mt-6 gap-x-2 text-center">
                  <button
                    type="button"
                    onClick={() => props.setOpenEvent(false)}
                    className="pointer-events-none w-full justify-center opacity-30 border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
                  >
                    Buy Tickets
                  </button>
                  <button
                    type="button"
                    onClick={() => props.setOpenEvent(false)}
                    className="hidden w-full justify-center border-t-2 border-blue-800 flex items-center gap-2 duration-300 ease-in-out bg-saluteNavy rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteNavy"
                  >
                    Buy Tickets
                  </button>
                  <button
                    type="button"
                    onClick={() => props.onClose()}
                    className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
                  >
                    Back to Events
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
