import introDesktop from "../../assets/images/bg-intro-desktop.svg";
import introMobile from "../../assets/images/bg-intro-mobile.svg";
import imageMockups from "../../assets/images/image-mockups.png";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export default function Header() {
  return (
    <header className="min-h-[110vh] sm:min-h-[110vh] md:min-h-[calc(100vh-88px)] flex items-center relative overflow-clip">
      <div className="w-full md:w-3/5 h-full absolute top-0 right-0 overflow-clip pointer-events-none">
        <picture>
          <source media="(min-width: 768px)" srcSet={introDesktop} />
          <img
            className="md:max-w-6xl absolute -top-[15%] md:-top-[45%] right-0 md:right-auto"
            src={introMobile}
            alt="intro background"
          />
        </picture>
      </div>
      <img
        className="absolute -top-[23%] sm:-top-[30%] xl:-top-[45%] right-1/2 translate-x-1/2 md:right-2 md:-translate-x-0 max-w-[24rem] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        src={imageMockups}
        alt="image mockups"
      />
      <div className="container mx-auto px-8 self-end md:self-center pb-6 text-center md:text-left">
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          className="sm:w-3/4 mx-auto md:mx-0 md:w-[35%] lg:w-2/5"
        >
          <h1 className="text-4xl sm:text-5xl text-balance leading-tight font-semibold text-[hsl(233,26%,24%)]">
            Next generation digital banking
          </h1>
          <p className="my-4 md:my-6 text-[hsl(233,8%,62%)]">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <motion.button
            variants={scaleVariants}
            whileHover={{ opacity: 0.75 }}
            className="btn"
          >
            Request Invite
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
