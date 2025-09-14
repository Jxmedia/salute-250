import React, { useState } from "react";
import HeaderLogo from "../images/SAA-Badge-Dates.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaChevronRight } from "react-icons/fa";
import Dashboard from "../components/admin/Dashboard";
import Details from "../components/admin/Details";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminPage() {
  const [isDetails, setisDetails] = useState(false);

  console.log(isDetails);
  return (
    <>
      <div className="relative bg-saluteBlue pb-32">
        <Disclosure as="nav" className="">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="border-b py-5 border-white/10">
              <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      alt=""
                      src={HeaderLogo}
                      className="h-16 w-auto saturate-0"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="/"
                        className="font-body rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        SAA250 Website
                      </a>
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="border-b border-white/10 md:hidden">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-white/10 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <header className="py-10">
          {isDetails === true ? (
            <div className="flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setisDetails(false)}
                className=" text-3xl font-bold font-primary underline hover:text-amber-200 tracking-tight text-white"
              >
                Event Dashboard{" "}
              </button>
              <FaChevronRight
                aria-hidden="true"
                className="inline-flex mx-5 size-5 text-white"
              />{" "}
              <p className="font-body text-xl text-amber-200">
                {" "}
                Tampa Bay Car Show
              </p>
            </div>
          ) : (
            <div className="flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <button
                onClick=""
                className=" text-3xl font-bold font-primary tracking-tight text-white"
              >
                Event Dashboard
              </button>
            </div>
          )}
        </header>
      </div>
      {isDetails === true ? (
        <Details isDetails={isDetails} setisDetails={setisDetails} />
      ) : (
        <Dashboard isDetails={isDetails} setisDetails={setisDetails} />
      )}
    </>
  );
}
