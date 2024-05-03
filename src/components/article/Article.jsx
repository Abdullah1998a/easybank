import { motion } from "framer-motion";

const slideUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const slideDownVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export default function Article({ article }) {
  const {
    id,
    img: { src, alt },
    by,
    title,
    body,
  } = article;
  return (
    <motion.div
      variants={id % 2 !== 0 ? slideDownVariants : slideUpVariants}
      className="overflow-clip rounded-md"
    >
      <img src={src} alt={alt} className="w-full h-48" />
      <div className="grid gap-2 py-6 px-5">
        <span className="text-sm text-neutral-600">By {by}</span>
        <h3 className="text-xl text-[hsl(233,26%,24%)] text-balance">
          {title}
        </h3>
        <p className="text-neutral-600 line-clamp-4">{body}</p>
      </div>
    </motion.div>
  );
}
