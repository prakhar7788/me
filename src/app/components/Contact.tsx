import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "prakhar.tyagi.ug24@iilm.edu" },
    { icon: Phone, label: "Phone", value: "9310144453" },
    { icon: MapPin, label: "Location", value: "New Delhi" },
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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-6">Let's talk about everything!</h3>
                <p className="text-gray-600 mb-8">
                  Don't like forms? Send me an email directly or connect with me on
                  social media. I'll get back to you as soon as possible.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-white rounded-xl shadow-sm"
                  >
                    <info.icon size={24} />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-600">{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
