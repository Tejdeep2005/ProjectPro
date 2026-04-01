import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-primary overflow-hidden pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm tracking-wide">
            Student-Led IT Startup
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Build Bold. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Build Smart.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering businesses with custom software and students with expert academic support.
            Build with ProjectPro.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-accent text-primary hover:bg-accent/90 shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:scale-105"
              onClick={() => openWhatsApp("Hi ProjectPro! I'd like to get a free quote.")}
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}