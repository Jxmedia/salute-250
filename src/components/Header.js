import React, { useState, useEffect } from "react";
import HeaderLogo from "../images/SAA-Badge-Dates.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoIosMailOpen } from "react-icons/io";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const footerNavigation = [
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

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Events", href: "/events/" },
  { name: "Spectators", href: "/spectators/" },
];

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  return (
    <header
      className={` ${
        props.currentPath === "/events/register/" ||
        props.currentPath === "/events/" ||
        props.currentPath === "/spectators/" ||
        props.currentPath === "/about/"
          ? "backdrop-blur-none from-transparent"
          : ""
      } absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-saluteBlue/50 backdrop-blur-sm to-transparent`}
    >
      <nav
        aria-label="Global"
        className="flex items-center font-body font-medium uppercase justify-between p-8 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={HeaderLogo}
              className="h-16 w-auto hover:saturate-0"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2 text-white bg-saluteRed"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg/6 uppercase duration-300 ease-in-out ${
                props.currentPath === "/events/register/" ||
                props.currentPath === "/spectators/" ||
                props.currentPath === "/about/"
                  ? "text-saluteBlue"
                  : "text-white"
              } hover:underline hover:text-saluteTan p-3 rounded-md`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact/"
            className="border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-6 py-2.5 text-lg/6 text-white hover:underline hover:bg-saluteTan hover:text-saluteRed"
          >
            Contact Us <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="animate-fade fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-white/80 backdrop-blur-lg to-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pt-2">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={HeaderLogo} className="h-16 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-full p-2 text-white bg-saluteRed"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="mt-6 flow-root font-body">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-2xl px-3 py-2 text-base/7 font-semibold text-saluteBlue underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <dl className="font-body pt-10 space-y-4 text-sm/7 tracking-wide text-saluteBlue">
                <div className="flex justify-start gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <HiMiniDevicePhoneMobile
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+1 (555) 234-5678"
                      className="hover:text-white"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex justify-start gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <IoIosMailOpen
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@saluteacrossamerica250.com"
                      className="hover:text-white"
                    >
                      info@saluteacrossamerica250.com
                    </a>
                  </dd>
                </div>
                <div className="flex justify-start gap-x-4 pt-2">
                  {footerNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-saluteTan hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon
                        aria-hidden="true"
                        className="text-saluteBlue hover:opacity-80 size-6"
                      />
                    </a>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
