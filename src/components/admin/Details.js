import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const testApproval = true;

export default function Details(props) {
  return (
    <>
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
                      <div>
                        {" "}
                        {testApproval === false ? (
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
                              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-5 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-green-200 hover:text-green-900 hover:ring-green-400 focus:z-10"
                            >
                              Approved
                            </button>
                          </span>
                        ) : (
                          <span className="text-md font-semibold isolate inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
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
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Event Name
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Tampa Bay Car show
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Start Date and Time
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            01/23/26 - 12:00PM
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            End Date and Time
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            01/23/26 - 8:00PM
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Event Website
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            www.event.com
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
                            www.facebook.com/event/
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
                            www.instagram.com/event/
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
                            www.x.com/event/
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Projected Attendance
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            250
                          </dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Requested Event Tier*
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Signature
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Type
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Air Show
                          </dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Venue Address
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            12345, Happy Lane, Tampa FL 44444
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Venue Name
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Happy Farm
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Description
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Other Event Tier Qualifiers
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                          <dt className="text-sm/6 font-medium text-gray-900">
                            Additional Brand Integrations
                          </dt>
                          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do
                            nostrud anim incididunt cillum culpa consequat.
                            Excepteur qui ipsum aliquip consequat sint. Sit id
                            mollit nulla mollit nostrud in ea officia proident.
                            Irure nostrud pariatur mollit ad adipisicing
                            reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => props.setisDetails(false)}
                    className="mt-6 font-body w-full rounded-md bg-saluteRed px-3.5 py-5 text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Return To All Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
