import React, { useState } from "react";
import { IoTicketSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AirShowCover from "../images/event-covers/airshow.png";
import SportsCover from "../images/event-covers/sports-event.png";
import CarCover from "../images/event-covers/carshow.png";
import { MdAirplaneTicket } from "react-icons/md";

const modalShareIcons = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookSquare,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },
];

const event = [
  {
    name: "Tampa Bay Aviation Show",
    location: "Raymond James Stadium",
    eventType: "Air Show",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: AirShowCover,
  },
  {
    name: "Lightning vs. Avalanche",
    location: "Lead Security Associate",
    eventType: "Sporting Event",
    email: "codyfisher@example.com",
    telephone: "+1-202-555-0114",
    imageUrl: SportsCover,
  },
  {
    name: "SEMA Pre Show",
    location: "Assurance Administrator",
    email: "estherhoward@example.com",
    telephone: "+1-202-555-0143",
    eventType: "Car Show",
    imageUrl: CarCover,
  },
];

export default function HomePage(props) {
  return (
    <Dialog
      open={props.openEvent}
      onClose={props.setOpenEvent}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-800/90 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200">
                <MdAirplaneTicket
                  aria-hidden="true"
                  className="size-6 text-blue-600"
                />
              </div>

              <div className="mt-2 text-center">
                <p className="text-3xl font-scriptText tracking-[0.5px] text-saluteRed">
                  Signature Event
                </p>
                <h3 className="text-3xl font-primary font-medium text-gray-700">
                  {event[0].name}
                </h3>
                <h4 className="text-sm pt-1 font-body text-gray-600">
                  Sunday, Jan 13, 2026 |{" "}
                  <span className="text-saluteBlue/90 font-medium">
                    3PM - 7PM
                  </span>
                </h4>{" "}
                <div className="flex justify-center gap-x-4 mt-3">
                  {modalShareIcons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-saluteTan hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon
                        aria-hidden="true"
                        className="text-saluteRed hover:opacity-80 size-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-3 relative isolate overflow-hidden rounded-2xl">
                <img
                  alt=""
                  src="https://www.ilpost.it/wp-content/uploads/2016/07/google.jpg"
                  className="absolute inset-0 -z-10 size-full object-cover shrink-0 h-48 duration-300 ease-in-out group-hover:saturate-0"
                />

                <div className="py-20 relative flex justify-center" />
              </div>

              <div className="flex items-center justify-center gap-x-4 font-body">
                <div className="flex items-center justify-center gap-x-2">
                  <MdLocationPin
                    aria-hidden="true"
                    className="size-5 text-blue-700"
                  />
                  <dd className="text-sm text-gray-600 py-3 text-center gap-2">
                    Street Address, City, Florida 33333
                  </dd>
                </div>
                <p className="text-sm text-gray-600 flex items-start gap-x-2">
                  <IoTicketSharp
                    aria-hidden="true"
                    className="size-5 text-blue-700"
                  />{" "}
                  Free
                </p>
              </div>

              <div className="">
                <div className="border border-gray-100 bg-gray-50 rounded-2xl p-3 font-body justify-center">
                  <div className="py-2">
                    <p className="text-sm text-gray-700 gap-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed orci libero, mattis sed orci ut, sagittis ultrices
                      neque. Pellentesque habitant morbi tristique senectus et
                      netus et malesuada fames ac turpis egestas. Donec at
                      varius lacus. Pellentesque eget varius sapien. Cras vel
                      gravida diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                onClick={() => props.setOpenEvent(false)}
                className="w-full justify-center border-t-2 border-blue-300 flex items-center gap-2 duration-300 ease-in-out bg-blue-600 rounded-b-xl px-8 py-2.5 text-lg/6 text-white font-body font-semibold uppercase hover:underline hover:bg-saluteTan hover:text-saluteBlue"
              >
                Back to Events
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
