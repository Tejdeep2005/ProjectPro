import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Apartment Management Systems Delivered" },
  { value: "100+", label: "Student Projects Completed" },
  { value: "20+", label: "AI-Powered Landing Pages" },
  { value: "1+", label: "Year of Experience" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-600 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}