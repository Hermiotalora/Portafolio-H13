"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const EmailSection = () => {
  const { t } = useTranslation();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(false);
    setSubmitError("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      e.target.reset();
      return;
    }

    setSubmitError(result?.error || "Unable to send the message right now.");
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-x2 font-bold text-white my-4">
          {t("contact.title")}
        </h5>
        <p className="text-[#ADB7BE] mb-9 max-w-md">
          {t("contact.description")}
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Hermiotalora" target="_blank">
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center bg-black rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaGithub className="text-white text-3xl hover:text-primary-500" />
            </motion.div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/herminia-otalora/"
            target="_blank"
          >
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center bg-black rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaLinkedin className="text-white text-3xl hover:text-primary-500" />
            </motion.div>
          </Link>
          <Link href="https://www.instagram.com/hache.ah" target="_blank">
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center bg-black rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaInstagram className="text-white text-3xl hover:text-primary-500" />
            </motion.div>
          </Link>
          <Link
            href="https://www.behance.net/gallery/244748177/Fotografia-Videografo"
            target="_blank"
          >
            <motion.div
              className="relative w-16 h-16 flex items-center justify-center bg-black rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FaBehance className="text-white text-3xl hover:text-primary-500" />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t("contact.email")}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("contact.placeholderEmail")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t("contact.subject")}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("contact.placeholderSubject")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t("contact.placeholderMessage")}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {t("contact.submit")}
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              {t("contact.success")}
            </p>
          )}
          {submitError && (
            <p className="text-red-500 text-sm mt-2">{submitError}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
