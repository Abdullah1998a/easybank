import footerLogo from "../../assets/images/footer-logo.svg";
import { FooterLinks } from "../footer-links";
import { Attribution } from "../attribution";
import { motion } from "framer-motion";
import { Social } from "../social";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const personalData = {
  name: "Abdullah Alnoime",
  website: "https://abdullah-alnoime.netlify.app",
};
export default function Footer() {
  return (
    <footer className="bg-[hsl(233,26%,24%)] text-white py-8">
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-8 flex flex-col md:grid lg:grid-cols-4 gap-4 text-center md:text-left"
      >
        <motion.div variants={slideRightVariants}>
          <a href="#">
            <img
              className="w-48 md:w-36  mx-auto md:mx-0"
              src={footerLogo}
              alt="footer logo"
            />
          </a>
          <Social />
        </motion.div>
        <FooterLinks />
        <motion.div
          variants={slideLeftVariants}
          className="col-start-4 mb-8 flex flex-col gap-4"
        >
          <motion.button
            whileHover={{ opacity: 0.85 }}
            className="btn w-fit mx-auto md:ml-auto md:mr-0"
          >
            Request Invite
          </motion.button>
          <p className="md:text-right">© Easybank. All Rights Reserved</p>
        </motion.div>
        <Attribution personal={personalData} />
      </motion.div>
    </footer>
  );
}
