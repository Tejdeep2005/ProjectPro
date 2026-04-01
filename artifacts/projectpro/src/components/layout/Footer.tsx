import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="ProjectPro IT Solutions Logo" className="h-10 w-auto rounded" />
              <span className="font-bold text-xl text-white tracking-tight">ProjectPro</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              Build Bold. Build Smart. Build with ProjectPro.
              A student-led IT startup specializing in custom websites, management systems, and academic support.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">Services & Pricing</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <a href="mailto:projectproitsolutions@gmail.com" className="hover:text-white transition-colors">
                  projectproitsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-accent text-lg" />
                <a href="https://wa.me/919346706747" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 93467 06747
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ProjectPro IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/919346706747" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}