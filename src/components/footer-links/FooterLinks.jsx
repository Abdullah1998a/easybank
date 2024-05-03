import { footerLinks } from "../../data/links";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0, color: "white" },
  visible: { x: 0, opacity: 1 },
};
export default function FooterLinks() {
  return (
    <motion.div
      variants={scaleVariants}
      className="flex justify-between flex-col md:flex-row my-8 md:my-0"
    >
      <ul className="space-y-4 mb-4 md:my-0">
        {footerLinks.map(({ id, name, link }) => {
          if (id < 4) {
            return (
              <motion.li
                variants={slideRightVariants}
                whileHover={{ color: "hsl(136,65%,51%)" }}
                className="capitalize"
              >
                <a href={link}>{name}</a>
              </motion.li>
            );
          }
        })}
      </ul>
      <ul className="space-y-4">
        {footerLinks.map(({ id, name, link }) => {
          if (id >= 4) {
            return (
              <motion.li
                variants={slideRightVariants}
                whileHover={{ color: "hsl(136,65%,51%)" }}
                className="capitalize"
              >
                <a href={link}>{name}</a>
              </motion.li>
            );
          }
        })}
      </ul>
    </motion.div>
  );
}
