import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracker with price alerts and reminders.",
      tags: ["React", "Node.js", "sqlite"],
      github:https://github.com/prakhar7788/crypto_project_tracker
      gradient: "from-blue-400 to-blue-600",
      githubUrl: "https://github.com/yourusername/crypto-portfolio-tracker",
      liveUrl: "", // Optional: add live demo URL if available
    },
    {
      title: "Plant disease detection ai Model",
      description:
        "AI-powered model for detecting plant diseases from images.",
      tags: ["tensorFlow", "Python", "yolov5"],
      gradient: "from-purple-400 to-purple-600",
      githubUrl: "https://github.com/yourusername/plant-disease-detection",
      liveUrl: "",
    },
    {
      title: "tool for Subdomain Enumeration",
      description:
        "Beautiful weather application with interactive maps and detailed forecasts.",
    tags: ["Shell Script", "GoBuster", "Amass"],
      gradient: "from-cyan-400 to-cyan-600",
      githubUrl: "https://github.com/yourusername/subdomain-enumeration",
      liveUrl: "",
    },
    {
      title: "EduGap - Online Learning Platform",
      description:
        "Comprehensive online learning platform with interactive courses and community features.",
      tags: ["React", "Tailwind", "Motion"],
      gradient: "from-pink-400 to-pink-600",
      githubUrl: "https://github.com/yourusername/edugap",
      liveUrl: "",
    },
    {
      title: "Dino Game Clone",
      description:
        "Fun and addictive clone of the Chrome Dino game, built with Python.",
      tags: ["pygame"],
      gradient: "from-orange-400 to-orange-600",
      githubUrl: "https://github.com/yourusername/dino-game-clone",
      liveUrl: "",
    },
    {
      title: "Arcade Management System",
      description:
        "Comprehensive management system for organizing and tracking arcade games and tournaments.",
      tags: ["MySql-Connector for python"],
      gradient: "from-green-400 to-green-600",
      githubUrl: "https://github.com/yourusername/arcade-management",
      liveUrl: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion
            for development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
