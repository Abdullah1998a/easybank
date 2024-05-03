import imageRestaurant from "../assets/images/image-restaurant.jpg";
import imageConfetti from "../assets/images/image-confetti.jpg";
import imageCurrency from "../assets/images/image-currency.jpg";
import imagePlane from "../assets/images/image-plane.jpg";

export const articles = [
  {
    id: 1,
    img: {
      src: imageCurrency,
      alt: "image currency",
    },
    by: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    body: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    id: 2,
    img: {
      src: imageRestaurant,
      alt: "image restaurant",
    },
    by: "Wilso Hutton",
    title: "Treat yourself without worrying about money",
    body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    id: 3,
    img: {
      src: imagePlane,
      alt: "image plane",
    },
    by: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    body: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...",
  },
  {
    id: 4,
    img: {
      src: imageConfetti,
      alt: "image confetti",
    },
    by: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    body: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
  },
];
