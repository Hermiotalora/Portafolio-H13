"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    {
      title: t("navigation.about"),
      path: "#about",
    },
    {
      title: t("navigation.projects"),
      path: "#projects",
    },
    {
      title: t("navigation.contact"),
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed w-full top-0 z-20 bg-gradient-to-br from-[#000000] via-[#04010e] to-secondary-0">
      <div className="flex items-center justify-between mx-auto px-4 my-0 md:my-0">
        <div className="flex w-full justify-between md:justify-start items-center">
          <div className="block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <Link
            href={"/"}
            className="mx-auto md:mx-0 text-2xl md:text-4xl text-white font-semibold"
          >
            <Image
              src="/images/logos/logo.png"
              alt="logo image"
              width={300}
              height={50}
              className="object-contain lg:w-96"
            />
          </Link>
        </div>
        <div
          className="menu hidden md:block  md:items-center md:w-auto"
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2 md:py-0 uppercase">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
