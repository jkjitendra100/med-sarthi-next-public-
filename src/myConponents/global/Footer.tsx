"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-gray-200 md:py-10 py-4">
      <div className="container mx-auto text-xs sm:text-base grid grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {/* Section 3: Social Media */}
        <div>
          <img
            src="/assets/images/logo.jpeg"
            className="h-16 rounded-xl"
            alt="logo"
          />
          <h2 className="mt-4 text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61563519583918"
              className="text-2xl text-white hover:border-white hover:text-primary rounded-full hover:bg-white duration-300"
              target="_blank"
            >
              <FaFacebook className="rounded-full" />
            </a>
            <a
              href="https://x.com/medsarthi"
              className="text-2xl text-white hover:border-white hover:text-primary rounded-full hover:bg-white duration-300"
              target="_blank"
            >
              <BsTwitterX className="rounded-full" />
            </a>
            <a
              href="https://www.instagram.com/medsarthi/"
              className="text-2xl text-white hover:border-white hover:text-primary rounded-full hover:bg-white duration-300"
              target="_blank"
            >
              <FaInstagram className="rounded-full" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-2xl text-white hover:border-white hover:text-primary rounded-full hover:bg-white duration-300"
              target="_blank"
            >
              <FaLinkedin className="rounded-full" />
            </a>
          </div>
        </div>

        {/* Section 1: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#services" className="hover:text-primary">
                Our Services
              </a>
            </li>
            <li>
              <a href="#hospitals" className="hover:text-primary">
                Hospitals
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-primary">
                Doctors
              </a>
            </li>
            <li>
              <a href="#blood-camps" className="hover:text-primary">
                Blood Camps
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2: Contact Information */}
        <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <p>123 Health Street, Wellness City</p>
          <p>Email: contact@healthplatform.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} Health Platform. All rights reserved.
      </div>
    </footer>
  );
}
