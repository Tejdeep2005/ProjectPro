import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Passionate Students. Serious Professionals.
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            We are a student-based startup led by two driven individuals with a passion for technology and entrepreneurship. We started ProjectPro IT Solutions with one mission: to help businesses grow through smart technology and to empower students with the academic support they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Director 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors"
          >
            <Avatar className="w-32 h-32 mb-6 border-4 border-slate-700 shadow-xl">
              <AvatarImage src="/director.png" alt="K.V. Tejdeep" className="object-cover" />
              <AvatarFallback className="bg-slate-700 text-2xl font-bold">KVT</AvatarFallback>
            </Avatar>
            <h4 className="text-2xl font-bold mb-1">K.V. Tejdeep</h4>
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Director</p>
            <a 
              href="https://www.linkedin.com/in/konda-tejdeep-a0a4b7259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5] hover:bg-[#005e93] transition-colors text-white"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>

          {/* Director 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors"
          >
            <Avatar className="w-32 h-32 mb-6 border-4 border-slate-700 shadow-xl">
              <AvatarFallback className="bg-slate-700 text-3xl font-bold">SB</AvatarFallback>
            </Avatar>
            <h4 className="text-2xl font-bold mb-1">Satwik Bharadwaj</h4>
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">Co-Director & CTO</p>
            <a 
              href="https://www.linkedin.com/in/gadepalli-satwik-a45b06229/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5] hover:bg-[#005e93] transition-colors text-white"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}