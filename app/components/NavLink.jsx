import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  default: { width: 0, height: "0.1rem" },
  hover: { width: "calc(100% - 0.75rem)", height: ".1rem" },
  active: { width: "calc(100% - 0.75rem)", height: "0.02rem" },
  exit: { width: "calc(10% - 0.75rem)", height: "0.1rem", x: "100%" },
};

const textVariants = {
  default: { scale: 1 },
  hover: { scale: 1.1 },
};

const NavLink = ({ active, selectTab, href, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClasses = active ? "text-[#ffffff]" : " text-primary-500 ";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        className={`mr-3 font-semibold ${buttonClasses}`}
        variants={textVariants}
        animate={isHovered ? "hover" : "default"}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={href}
          onClick={selectTab}
          className="block py-2 pl-3 pr-4  text-[#e2e2e2] sm:text-xl uppercase rounded md:p-0 hover:text-primary-400"
        >
          {title}
          <motion.div
            animate={active || isHovered ? "hover" : "exit"}
            variants={variants}
            className="bg-primary-500 rounded mt-2 h-0.5 bottom-0 left-0 right-0"
            transition={{ duration: 0.3 }}
          ></motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NavLink;
