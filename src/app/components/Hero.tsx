import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base mb-4 tracking-wider uppercase text-gray-600"
          >
            Welcome to my Personal Website
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl mb-6"
          >
            Hi, I'm{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Prakhar
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Creative Developer & Designer crafting beautiful digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              View my work
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center mt-12"
          >
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="p-3 border border-gray-300 rounded-full hover:border-black transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity },
          }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
}
