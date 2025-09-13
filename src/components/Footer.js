import React from "react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoIosMailOpen } from "react-icons/io";
import HeaderLogo from "../images/SAA-Badge-Dates.png";
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

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          <div className="">
            {" "}
            <dl className="font-body mt-10 space-y-4 text-sm/7 tracking-wide text-saluteTan">
              <div className="flex justify-end gap-x-2">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <HiMiniDevicePhoneMobile
                    aria-hidden="true"
                    className="h-7 w-6 text-saluteRed"
                  />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex justify-end gap-x-2">
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
            </dl>
            <div className="flex justify-end gap-x-4 mt-5">
              {footerNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-saluteTan hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    aria-hidden="true"
                    className="text-white hover:opacity-80 size-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={HeaderLogo}
              className="h-20 mx-auto w-auto hover:saturate-0"
            />
          </a>
          <p className="mt-8 text-center text-sm/6 text-saluteTan md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} SAA 250, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
