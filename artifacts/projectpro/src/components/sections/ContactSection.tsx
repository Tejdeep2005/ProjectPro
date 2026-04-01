import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a brief message")
});

const serviceOptions = [
  "Apartment Management System",
  "Hospital Management System",
  "School Management System",
  "Clinic Website",
  "Consultancy/Law Firm Website",
  "E-Commerce Website",
  "Major Student Project",
  "Minor Student Project",
  "Research Paper",
  "Publication Support",
  "Document Writing",
  "Other / Custom Inquiry"
];

export function ContactSection() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    const message = `Hello ProjectPro IT Solutions! I'd like to make an inquiry.
    
*Name*: ${values.name}
*Email*: ${values.email}
*Phone*: ${values.phone}
*Interested In*: ${values.service}

*Message*:
${values.message}`;

    openWhatsApp(message);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Left panel */}
          <div className="bg-slate-50 p-10 md:w-2/5 flex flex-col justify-between border-r border-slate-100">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-4">Let's Build Together.</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ready to take your business or academic project to the next level? Fill out the form, and we'll connect with you directly via WhatsApp.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                <p className="font-medium text-primary">projectproitsolutions@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                <p className="font-medium text-primary">+91 93467 06747</p>
              </div>
            </div>
          </div>

          {/* Right panel (Form) */}
          <div className="p-10 md:w-3/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 xxxxx xxxxx" className="bg-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" className="bg-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="min-h-[120px] bg-white resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white">
                  Send via WhatsApp
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}