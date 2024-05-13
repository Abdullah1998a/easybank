import onboardingIcon from "../assets/images/icon-onboarding.svg";
import budgetingIcon from "../assets/images/icon-budgeting.svg";
import onlineIcon from "../assets/images/icon-online.svg";
import apiIcon from "../assets/images/icon-api.svg";

export const features = [
  {
    id: 1,
    img: {
      src: onlineIcon,
      alt: "icon online",
    },
    title: "Online Banking",
    body: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    img: {
      src: budgetingIcon,
      alt: "icon budgeting",
    },
    title: "Simple Budgeting",
    body: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    img: {
      src: onboardingIcon,
      alt: "icon onboarding",
    },
    title: "Fast Onboarding",
    body: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    img: {
      src: apiIcon,
      alt: "icon api",
    },
    title: "Open API",
    body: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
