export const projects = [
  {
    id: 1,
    title: "Fruit Shop App",
    description:
      "A mobile application system built with Java and Android Studio, including both user and admin apps. Integrated Firebase Realtime Database for product and order management, and Firebase Storage for handling product images. The user app allows customers to browse and purchase fruits, while the admin app provides tools to manage inventory and orders.",
    tech: ["Java", "Android Studio", "Firebase"],
    image: "/projects/FruitShop.png",
    github: "https://github.com/Vileyy/FruitShop.git",
    demo: "#",
  },
  {
    id: 2,
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
    demo: "#",
  },
  {
    id: 3,
    title: "Halora Cosmetics – Admin Dashboard",
    description:
      "Web admin system developed with Next.js and Shadcn UI, integrated with Firebase to manage products, vouchers, and orders with real-time updates.",
    tech: ["Next.js", "TypeScript", "Firebase", "Shadcn UI"],
    image: "/projects/halora-admin.png",
    github: "https://github.com/Vileyy/admin-halora.git",
    demo: "#",
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
