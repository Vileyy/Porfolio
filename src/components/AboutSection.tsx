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
} from "react-icons/si";

const skills = [
  { name: "React Native", icon: SiReact, level: 90, color: "text-blue-400" },
  { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-600" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 88,
    color: "text-black dark:text-white",
  },
  { name: "Firebase", icon: SiFirebase, level: 82, color: "text-orange-500" },
  { name: "Redux", icon: SiRedux, level: 80, color: "text-purple-600" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 92,
    color: "text-cyan-400",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Final-year IT Student",
    company: "TDMU University",
    description:
      "Hoàn thiện chương trình đại học với chuyên ngành Công nghệ thông tin, tập trung vào phát triển ứng dụng mobile và web.",
  },
  {
    year: "2023",
    title: "Mobile App Developer",
    company: "Freelance Projects",
    description:
      "Phát triển các ứng dụng mobile với React Native cho các doanh nghiệp nhỏ và vừa, tạo ra các giải pháp công nghệ hiệu quả.",
  },
  {
    year: "2022",
    title: "Web Development Intern",
    company: "Local Tech Company",
    description:
      "Thực tập phát triển web với Next.js và React, học hỏi quy trình làm việc chuyên nghiệp và best practices.",
  },
];

export default function AboutSection() {
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
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-4">
                    {skill.name}
                  </h3>
                </div>

                <div className="relative">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
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
                      index % 2 === 0
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto md:text-left"
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
