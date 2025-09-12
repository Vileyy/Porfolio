export const projects = [
  {
    id: 1,
    title: "Halora Cosmetics App",
    description:
      "Ứng dụng bán mỹ phẩm xây dựng bằng React Native + Firebase với giao diện hiện đại và tính năng thanh toán tích hợp.",
    tech: ["React Native", "Firebase", "TypeScript", "Redux"],
    image: "/projects/halora.png",
    github: "https://github.com/yourusername/halora-cosmetics",
    demo: "#",
  },
  {
    id: 2,
    title: "HaloraShop Web Admin",
    description:
      "Trang quản trị sản phẩm, voucher và đơn hàng bằng Next.js + Firebase với dashboard analytics chi tiết.",
    tech: ["Next.js", "Firebase", "Shadcn UI", "TypeScript"],
    image: "/projects/shop.png",
    github: "https://github.com/yourusername/halora-shop",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Website cá nhân giới thiệu bản thân và dự án với animations mượt mà và thiết kế responsive.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
];

export type Project = (typeof projects)[0];
