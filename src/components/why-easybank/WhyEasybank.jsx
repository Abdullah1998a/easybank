import { features } from "../../data/features";
import { motion } from "framer-motion";
import { Feature } from "../feature";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function WhyEasybank() {
  return (
    <section className="bg-[hsl(220,14%,96%)] py-24">
      <div className="container mx-auto px-8">
        <motion.header
          variants={slideRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left md:w-3/4 lg:w-1/2 mb-16"
        >
          <h2 className="text-4xl text-[hsl(233,26%,24%)] mb-5 md:mb-2">
            Why choose Easybank?
          </h2>
          <p className="text-neutral-600">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </motion.header>
        <motion.div
          variants={faddingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-14"
        >
          {features.map((feature) => (
            <Feature feature={feature} key={feature.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
