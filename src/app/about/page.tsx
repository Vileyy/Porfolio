"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const skillCategories = [
  {
    category: "Front-end",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    skills: [
      { name: "React Native", icon: SiReact, color: "text-blue-400" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    category: "Back-end",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "Java", icon: FaJava, color: "text-red-600" },
    ],
  },
  {
    category: "Database",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "SQL Server", icon: FaDatabase, color: "text-blue-600" },
    ],
  },
  {
    category: "Tools & Others",
    color: "text-gray-600",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    skills: [
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "text-green-600",
      },
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    ],
  },
];

const timeline = [
  {
    year: "03/2024 - 05/2024",
    title: "Product Labeling Analytics for AI",
    company: "Acacy Company",
    description:
      "Performed product data labeling and annotation to support AI training models, ensuring accuracy and consistency in datasets.",
  },
  {
    year: "08/2024 - 10/2024",
    title: "Halora Cosmetics – Mobile App",
    company: "Personal Project",
    description:
      "Developed a mobile e-commerce app using React Native and Redux, integrated with Firebase for authentication, real-time database, and Cloudinary for image storage. Features include product browsing, cart management, checkout, and order tracking.",
  },
  {
    year: "10/2024 - 12/2024",
    title: "Halora Cosmetics – Admin Dashboard",
    company: "Personal Project",
    description:
      "Developed a web admin system using Next.js and Shadcn UI, integrated with Firebase to manage products, vouchers, and orders with real-time updates. Features include analytics dashboard, inventory management, and order processing.",
  },
  {
    year: "10/2024 - 12/2024",
    title: "Halora Cosmetics – Website",
    company: "Personal Project",
    description:
      "Built a modern e-commerce website for customers using Next.js 14 and TypeScript. Integrated Firebase for authentication and real-time database, featuring product browsing, search, cart, checkout, and order tracking functionalities.",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate mobile developer với niềm đam mê tạo ra những ứng dụng
            mobile hiện đại và user-friendly. Tôi luôn cập nhật công nghệ mới và
            áp dụng best practices trong mọi dự án.
          </p>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I&apos;m Hiếu! 👋
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Tôi là một sinh viên năm cuối ngành Công nghệ thông tin tại Đại
                học Thủ Dầu Một, với đam mê mạnh mẽ về phát triển ứng dụng
                mobile. Qua hành trình học tập và làm việc, tôi đã tích lũy được
                kinh nghiệm quý báu trong việc xây dựng các ứng dụng React
                Native và website Next.js.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Tôi tin rằng công nghệ có thể thay đổi cuộc sống con người và
                luôn cố gắng tạo ra những sản phẩm có ý nghĩa. Mục tiêu của tôi
                là trở thành một full-stack developer chuyên nghiệp, có khả năng
                xây dựng các giải pháp công nghệ từ ý tưởng đến sản phẩm hoàn
                chỉnh.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ngoài coding, tôi thích tìm hiểu về các xu hướng công nghệ mới,
                đọc sách về business và dành thời gian cho gia đình và bạn bè.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection delay={0.4} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3
                  className={`text-lg font-semibold ${category.color} mb-3 px-3 py-1 ${category.bgColor} rounded-lg inline-block`}
                >
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-sm transition-all duration-200"
                    >
                      <skill.icon className={`w-4 h-4 ${skill.color}`} />
                      <span className="text-xs font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.6} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
