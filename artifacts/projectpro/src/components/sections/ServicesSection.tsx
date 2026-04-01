import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { openWhatsApp } from "@/lib/whatsapp";
import { FaProjectDiagram, FaGlobe, FaGraduationCap } from "react-icons/fa";

const softwareProducts = [
  { title: "Apartment/Gated Community Management System", price: "₹75,000", subtitle: "one-time", maintenance: "₹10,000/month maintenance" },
  { title: "Hospital Management System", price: "₹90,000", subtitle: "one-time", maintenance: "₹15,000/month maintenance" },
  { title: "School Management System", price: "₹80,000", subtitle: "one-time", maintenance: "₹30,000/month maintenance" },
];

const customWebsites = [
  { title: "Clinic Websites", price: "₹25,000–₹50,000", desc: "Single Page / Multi-Page / AI-Powered" },
  { title: "Consultancy & Law Firm Websites", price: "₹50,000" },
  { title: "E-Commerce Websites", price: "₹35,000", maintenance: "₹10,000/month maintenance" },
];

const academicSupport = [
  { title: "Major Student Projects", price: "₹6,500", desc: "each" },
  { title: "Minor Student Projects", price: "₹3,000", desc: "each" },
  { title: "Research Paper", price: "₹2,000", desc: "each (IEEE/Scopus Indexed)" },
  { title: "Publication Support", price: "₹10,000", desc: "each (IEEE/Scopus Journals)" },
  { title: "Document Writing", price: "₹1,500", desc: "each (For Projects)" },
];

export function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            Comprehensive Solutions for Business & Academia
          </h3>
          <p className="text-lg text-slate-600">
            Transparent pricing. End-to-end customization. Uncompromising quality.
          </p>
        </div>

        {/* Software Products */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="p-3 bg-primary/5 rounded-lg text-primary">
              <FaProjectDiagram size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Software Products</h4>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softwareProducts.map((service, i) => (
              <motion.div variants={item} key={i}>
                <Card className="h-full flex flex-col border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                    <div className="text-sm font-medium text-slate-500 mb-4">{service.subtitle}</div>
                    {service.maintenance && (
                      <div className="inline-flex items-center text-sm px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                        + {service.maintenance}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white" 
                      onClick={() => openWhatsApp(`Hi! I'm interested in the ${service.title}. Can we discuss further?`)}
                    >
                      Get Quote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Custom Websites */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="p-3 bg-primary/5 rounded-lg text-primary">
              <FaGlobe size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Custom Websites</h4>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customWebsites.map((service, i) => (
              <motion.div variants={item} key={i}>
                <Card className="h-full flex flex-col border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                    {service.desc && (
                      <div className="text-sm font-medium text-slate-500 mb-4">{service.desc}</div>
                    )}
                    {service.maintenance && (
                      <div className="inline-flex items-center text-sm px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium">
                        + {service.maintenance}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white" 
                      onClick={() => openWhatsApp(`Hi! I'm interested in a ${service.title}. Can we discuss further?`)}
                    >
                      Get Quote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Support */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="p-3 bg-primary/5 rounded-lg text-primary">
              <FaGraduationCap size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Academic / Student Support</h4>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {academicSupport.map((service, i) => (
              <motion.div variants={item} key={i} className="lg:col-span-1 md:col-span-1">
                <Card className="h-full flex flex-col border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <div className="text-2xl font-bold text-primary mb-1">{service.price}</div>
                    {service.desc && (
                      <div className="text-xs font-medium text-slate-500">{service.desc}</div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white" 
                      onClick={() => openWhatsApp(`Hi! I'm a student interested in: ${service.title}.`)}
                    >
                      Enquire
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}