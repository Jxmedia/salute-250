import React, { useState, useEffect } from "react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { IoIosMailOpen } from "react-icons/io";
import HeaderLogo from "../images/SAA-Badge-Dates.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Countdown = () => {
  const targetDate = new Date("January 1, 2026 00:00:00");

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function TimeBlock({ label, value }) {
    return (
      <div>
        <div className="text-4xl font-bold font-primary">
          {String(value).padStart(2, "0")}
        </div>
        <div className="mt-2 text-sm">{label}</div>
      </div>
    );
  }
  return (
    <div className="font-primary relative px-3 py-1 text-gray-700 hover:ring-gray-900/20">
      {timeLeft.expired ? (
        <p className="text-3xl font-primary font-bold uppercase text-left">
          Happy{" "}
          <span className="font-script  text-[1.2em] text-saluteRed">250</span>
          th Anniversary!
        </p>
      ) : (
        <div className="mt-5 flex justify-center gap-6 text-center divide-x divide-gray-500 font-body">
          <TimeBlock label="Days" value={timeLeft.days} />
          <span className="pl-6">
            {" "}
            <TimeBlock label="Hrs" value={timeLeft.hours} />
          </span>
          <span className="pl-6">
            {" "}
            <TimeBlock label="Mins" value={timeLeft.minutes} />
          </span>
          <span className="pl-6 text-left">
            <TimeBlock label="Secs" value={timeLeft.seconds} />
          </span>
        </div>
      )}
    </div>
  );
};
export default Countdown;
