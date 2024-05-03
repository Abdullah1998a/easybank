import menu from "../../assets/images/icon-hamburger.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import close from "../../assets/images/icon-close.svg";
import logo from "../../assets/images/logo.svg";
import { links } from "../../data/links";
import { useState } from "react";
import { Links } from "../links";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Navbar() {
  const [show, setShow] = useState(false);
  let isMedium = useMediaQuery("(min-width: 768px)");
  return (
    <nav className="container mx-auto bg-white px-8 py-6 flex items-center justify-between relative z-10">
      <motion.a
        variants={slideRightVariants}
        initial="hidden"
        animate="visible"
        href="#"
      >
        <img src={logo} alt="logo" />
      </motion.a>
      <button
        className="w-8 h-6 flex justify-center items-center md:hidden"
        onClick={() => setShow(!show)}
      >
        <motion.img
          key={show}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={show ? close : menu}
          alt="toggle icon"
        />
      </button>
      <AnimatePresence>
        {(show || isMedium) && <Links links={links} isMedium={isMedium} />}
      </AnimatePresence>
      <motion.button
        variants={slideLeftVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ opacity: 0.75 }}
        className="btn hidden md:block"
      >
        Request Invite
      </motion.button>
    </nav>
  );
}
