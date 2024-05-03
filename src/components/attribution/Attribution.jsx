import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
export default function Attribution({ personal }) {
  const { name, website } = personal;
  return (
    <motion.div
      variants={scaleVariants}
      className="col-span-4 text-center text-neutral-300 text-sm"
    >
      Challenge by{" "}
      <motion.a
        initial={{ color: "white" }}
        whileHover={{ textDecoration: "underline", color: "hsl(136,65%,51%)" }}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </motion.a>
      . Coded by{" "}
      <motion.a
        initial={{ color: "white" }}
        whileHover={{ textDecoration: "underline", color: "hsl(136,65%,51%)" }}
        href={website}
        target="_blank"
      >
        {name}
      </motion.a>
      .
    </motion.div>
  );
}
