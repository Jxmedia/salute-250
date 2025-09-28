import React from "react";
import Layout from "../components/Layout";
import Favicon from "../images/favicon.png";
import OGFB from "../images/og-image.jpg";
import { Helmet } from "react-helmet";
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us || Salute Across America 250</title>
        <meta name="title" content="Salute Across America 250" />
        <meta
          name="description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta name="keywords" content="America, 250, America 250th" />
        <meta name="author" content="Salute Across America 250" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saluteacrossamerica250.com/" />
        <meta property="og:title" content="Salute Across America 250" />
        <meta
          property="og:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta property="og:image" content={OGFB} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://saluteacrossamerica250.com/"
        />
        <meta name="twitter:title" content="Salute Across America 250" />
        <meta
          name="twitter:description"
          content="Get ready for a once-in-a-generation celebration—America's 250th anniversary is almost here! Over 365 days, we’ll unite for thousands of events honoring our shared history, diverse stories, and bold future. Join millions of event in commemorating the spirit of a nation 250 years in the making."
        />
        <meta name="twitter:image" content={Favicon} />

        {/* Favicons */}
        <link rel="icon" href={Favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={Favicon} />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://saluteacrossamerica250.com/" />

        {/* Theme and Mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
      </Helmet>
      <div className="border-t border-amber-200 bg-white py-24">
        <div className="mx-auto max-w-100 px-6 lg:px-8">
          <div className="overflow-hidden bg-white px-6">
            <div className="mx-auto max-w-max lg:max-w-5xl">
              <div className="relative">
                <div className="relative md:bg-white">
                  <div className="text-base leading-7 text-gray-700">
                    <h2 class="mt-8 text-2xl tracking-tight leading-10 font-primary font-semibold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl">
                      PRIVACY POLICY
                    </h2>
                    <p className="mt-6">
                      Welcome to saluteacrossamerica250.com ("Website"),
                      operated by National Air, Sea and Space Foundation
                      ("Company," "we," "our," or "us"). Your privacy is
                      important to us. This Privacy Policy describes how we
                      collect, use, disclose, and protect your information when
                      you visit our Website.
                    </p>
                    <p className="mt-6">Effective Date: Jan. 1, 2025</p>

                    <div className="pl-10">
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          1. Information We Collect
                        </span>{" "}
                        We may collect the following types of information:
                        (1)Personal Information: Information you voluntarily
                        provide, such as your name, email address, mailing
                        address, phone number, and any other details you submit
                        through forms on our Website. (2)Usage Data: Information
                        about your interactions with our Website, including IP
                        address, browser type, operating system, referring URLs,
                        page views, and the dates/times of visits.
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          2. How We Use Your Information
                        </span>{" "}
                        We use the collected information for various purposes:
                        (1)To Provide Services: Processing your requests,
                        managing your account, and delivering the services you
                        have requested. (2)To Improve Our Website: Analyzing
                        usage patterns to enhance user experience and optimize
                        our Website's performance. (3)To Communicate: Sending
                        you updates, newsletters, marketing materials, and other
                        information that may be of interest to you. (4)To Comply
                        with Legal Obligations: Ensuring adherence to applicable
                        laws, regulations, and contractual obligations.
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          3. Sharing Your Information
                        </span>{" "}
                        We do not sell, trade, or otherwise transfer your
                        personal information to outside parties, except in the
                        following circumstances: (1)Service Providers: We may
                        share information with third-party vendors who assist us
                        in operating our Website, conducting our business, or
                        providing services to you, provided they agree to keep
                        this information confidential. (2)Legal Requirements: We
                        may disclose your information when required by law or to
                        protect our rights, property, or safety, or that of
                        others.
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          4. Security of Your Information
                        </span>{" "}
                        We implement appropriate security measures to protect
                        your personal information from unauthorized access,
                        alteration, disclosure, or destruction. However, no
                        method of transmission over the internet or electronic
                        storage is 100% secure, and we cannot guarantee absolute
                        security.
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold"> 5. Your Choices</span>{" "}
                        You have the following rights regarding your personal
                        information: Access and Correction: You may request
                        access to or correction of your personal information by
                        contacting us. Opt-Out: You may opt out of receiving
                        marketing communications from us by following the
                        unsubscribe instructions included in such communications
                        or by contacting us directly.
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          6. Third-Party Links. Our Website may contain links to
                          third-party websites. We are not responsible for the
                          privacy practices or content of these external sites.
                          We encourage you to review the privacy policies of any
                          third-party sites you visit.
                        </span>
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          7. Children's Privacy. Our services are not directed
                          to individuals under the age of 13. We do not
                          knowingly collect personal information from children
                          under 13. If we become aware that we have
                          inadvertently received personal information from a
                          user under the age of 13, we will delete such
                          information from our records.
                        </span>
                      </p>
                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          8. Changes to This Privacy Policy. We may update this
                          Privacy Policy from time to time. Any changes will be
                          posted on this page with an updated effective date. We
                          encourage you to review this Privacy Policy
                          periodically to stay informed about how we are
                          protecting your information.
                        </span>
                      </p>

                      <p className="mt-6">
                        <span className="font-semibold">
                          {" "}
                          9. Contact Information{" "}
                        </span>{" "}
                      </p>
                      <p className="mt-6">
                        <span className="block">
                          Email:{" "}
                          <a
                            href="mailto:info@saluteacrossamerica250.com"
                            class="text-blue-500 underline"
                          >
                            info@saluteacrossamerica250.com
                          </a>
                        </span>
                        <a href="tel:5552345678" className="block">
                          Tel: (555) 234-5678
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 flex-shrink-0">
                    <a
                      href="/contact/"
                      className="font-body uppercase font-semibold border-t-2 border-red-500 flex items-center gap-2 duration-300 ease-in-out bg-saluteRed rounded-b-xl px-14 py-2.5 text-lg/6 text-white hover:underline hover:bg-saluteTan hover:text-saluteRed"
                    >
                      Contact Us{" "}
                      <LiaFlagUsaSolid aria-hidden="true" className="size-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
}
