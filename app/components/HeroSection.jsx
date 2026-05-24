"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const roles = t("hero.roles", { returnObjects: true });

  return (
    <section className="lg:py-16 pt-14 px-4 sm:px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 lg:mb-0 lg:order-2"
        >
          <div className="bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] relative overflow-hidden lg:bottom-8 lg:left-4 xl:bottom-0 xl:left-32">
            <Image
              src="/images/profile-image.jpg"
              alt="profile image"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left flex flex-col justify-center"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {t("hero.greeting")}
            </span>
          </h1>

          {/* Texto animado */}
          <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white whitespace-nowrap">
            <TypeAnimation
              key={i18n.language}
              sequence={roles.flatMap((role) => [role, 4000])}
              speed={50}
              repeat={Infinity}
            />
          </span>

          {/* Descripción */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-8 mb-7 leading-relaxed">
            <span className="text-white font-black"></span>
            {t("hero.description")}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Contactame por Gmail */}

          <a
            href="mailto:hermiotalora@gmail.com?subject=Contacto desde Portfolio"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-3 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white font-semibold shadow-lg"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t("hero.hireMe")}
              </span>
            </motion.button>
          </a>

          {/* DESCARGAR CV */}
          <a
            href="/Herminia-Otalora-Taquichiri.pdf"
            download
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-3 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white font-semibold shadow-lg"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t("hero.downloadCV")}
              </span>
            </motion.button>
          </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
