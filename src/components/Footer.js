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
    <>
      <footer className="hidden bg-gray-900 lg:block">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 lg:order-2">
            <div className="">
              {" "}
              <dl className="font-body mt-10 space-y-4 text-sm/7 tracking-wide text-saluteTan">
                <div className="hidden flex justify-center lg:justify-end gap-x-2">
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
                <div className="flex justify-center lg:justify-end gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <IoIosMailOpen
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@saa250.com"
                      className="hover:text-white"
                    >
                      info@saa250.com
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="flex justify-center lg:justify-end gap-x-4 mt-5">
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
              <span className="sr-only">Salute 250</span>
              <img
                alt=""
                src={HeaderLogo}
                className="h-20 mx-auto w-auto hover:saturate-0"
              />
            </a>
            <p className="mt-8 text-center text-sm/6 text-saluteTan lg:order-1 lg:mt-0">
              &copy; {new Date().getFullYear()} National Air, Sea and Space
              Foundation
            </p>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-900 lg:hidden">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 lg:order-2">
            <div className="">
              {" "}
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Salute 250</span>
                <img
                  alt=""
                  src={HeaderLogo}
                  className="h-20 mx-auto w-auto hover:saturate-0"
                />
              </a>
              <dl className="font-body space-y-4 text-sm/7 tracking-wide text-saluteTan">
                <div className="hidden flex justify-center lg:justify-end gap-x-2">
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
                <div className="flex justify-center lg:justify-end gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <IoIosMailOpen
                      aria-hidden="true"
                      className="h-7 w-6 text-saluteRed"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@saa250.com"
                      className="hover:text-white"
                    >
                      info@saa250.com
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="flex justify-center lg:justify-end gap-x-4 mt-5">
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
            <p className="opacity-50 mt-8 text-center text-xs/6 text-saluteTan lg:order-1 lg:mt-0">
              &copy; {new Date().getFullYear()} National Air, Sea and Space
              Foundation
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
