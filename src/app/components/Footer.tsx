import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> in
            {new Date().getFullYear()}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
