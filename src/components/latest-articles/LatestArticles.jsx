import { articles } from "../../data/articles";
import { motion } from "framer-motion";
import { Article } from "../article";

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
export default function LatestArticles() {
  return (
    <section className="container mx-auto px-8 py-24">
      <motion.h2
        variants={slideRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl text-[hsl(233,26%,24%)] mb-12 text-center md:text-left"
      >
        Latest Articles
      </motion.h2>
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </motion.div>
    </section>
  );
}
