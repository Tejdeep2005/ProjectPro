import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  { title: "Secured & Reliable", desc: "We build products and services you can trust, emphasizing security and uptime." },
  { title: "Monthly Maintenance", desc: "We don't just build and leave. We provide ongoing maintenance to verify quality." },
  { title: "Student-Founded", desc: "We truly understand both the dynamic needs of modern businesses and the academic rigor required by students." },
  { title: "End-to-End Customization", desc: "Every project is tailored specifically to your requirements. No cookie-cutter templates." },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight">
              A Partner You Can Trust, Built on Quality and Dedication.
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We started ProjectPro IT Solutions with a clear mission: deliver high-value, reliable technology that empowers. We aren't just an agency; we are your technical partners.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <FaCheckCircle className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-slate-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-primary flex items-center justify-center p-12"
          >
             <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
             </div>
             <div className="relative z-10 text-center">
                <img src="/logo.jpg" alt="ProjectPro Shield" className="w-32 h-32 mx-auto mb-8 rounded-2xl shadow-lg border-4 border-white/10 object-cover" />
                <h3 className="text-3xl font-bold text-white mb-4">Built Bold. Built Smart.</h3>
                <p className="text-slate-300 text-lg">Your vision, translated into perfect code.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}