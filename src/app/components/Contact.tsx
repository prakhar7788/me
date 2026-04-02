import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "prakhar.tyagi.ug24@iilm.edu", href: "mailto:prakhar.tyagi.ug24@iilm.edu" },
    { icon: Phone, label: "Phone", value: "+91 9310144453", href: "tel:+919310144453" },
    { icon: MapPin, label: "Location", value: "New Delhi", href: null },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl mb-4">Let's talk about everything!</h3>
                <p className="text-gray-600">
                  Send me an email directly or give me a call. I'll get back to you as soon as possible.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full max-w-md"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-gray-50 rounded-xl"
                      >
                        <info.icon size={24} />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-600">{info.label}</p>
                        <p className="text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-gray-50 rounded-xl"
                      >
                        <info.icon size={24} />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-600">{info.label}</p>
                        <p className="text-lg">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
