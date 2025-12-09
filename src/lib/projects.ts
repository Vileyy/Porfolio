export const projects = [
  {
    id: 1,
    title: "Halora Cosmetics – Mobile App",
    description:
      "Mobile e-commerce app built with React Native and Redux, integrated with Firebase for authentication, real-time database, and Cloudinary for image storage.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux",
      "Firebase",
      "Cloudinary",
    ],
    image: "/projects/halora-mobile.png",
    github: "https://github.com/Vileyy/user-halora-app.git",
    youtube: "",
    demo: "https://youtu.be/kbDpjS7Xgls",
  },

  {
    id: 2,
    title: "Halora Cosmetics – Website",
    description:
      "E-commerce website for customers built with Next.js 14 and TypeScript, featuring a modern and feminine design. Integrated with Firebase for authentication, real-time database, and Cloudinary for image storage. Includes product browsing, search, cart, checkout, and order tracking functionalities.",
    tech: ["Next.js", "TypeScript", "Firebase", "TailwindCSS", "Cloudinary"],
    image: "/projects/halora-user.png",
    github: "https://github.com/Vileyy/HaloraWebsite",
    youtube: "",
    demo: "https://halora-cosmetic.vercel.app/",
  },

  {
    id: 3,
    title: "Halora Cosmetics – Admin Dashboard",
    description:
      "Web admin system developed with Next.js and Shadcn UI, integrated with Firebase to manage products, vouchers, and orders with real-time updates.",
    tech: ["Next.js", "TypeScript", "Firebase", "Shadcn UI"],
    image: "/projects/halora-admin.png",
    github: "https://github.com/Vileyy/admin-halora.git",
    youtube: "",
    demo: "https://admin-halora.vercel.app/login",
  },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description:
  //     "Website cá nhân giới thiệu bản thân và dự án với animations mượt mà và thiết kế responsive.",
  //   tech: ["Next.js", "Tailwind", "Framer Motion"],
  //   image: "/projects/portfolio.png",
  //   github: "https://github.com/yourusername/portfolio",
  //   demo: "#",
  // },
];

export type Project = (typeof projects)[0];
