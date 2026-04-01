import { motion } from "motion/react";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL, MongoDB",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, iOS, Android",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Git",
    "Docker",
    "AWS",
    "Figma",
    "Tailwind",
    "PostgreSQL",
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl mb-16 text-center">Skills & Expertise</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                >
                  <skill.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl mb-6 text-gray-600">Technologies I work with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                    transition: { duration: 0.2 },
                  }}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
