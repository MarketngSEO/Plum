/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  Droplets, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Star, 
  AlertTriangle, 
  CheckCircle2,
  ChevronRight,
  Hammer,
  Thermometer
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const CONTACT_NUMBER = "01756144670";
const WHATSAPP_LINK = "https://wa.me/8801756144670";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* SEO Meta Tags (Simulated via Head) */}
      {/* In a real app, these would be in index.html or handled by a head manager */}
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Mohammadpur<span className="text-blue-500">Plumbing</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</a>
            <a href="#area" className="hover:text-blue-400 transition-colors">Service Area</a>
            <a 
              href={`tel:${CONTACT_NUMBER}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
          <div className="md:hidden">
             <a href={`tel:${CONTACT_NUMBER}`} className="text-blue-500 font-bold flex items-center gap-1">
               <Phone className="w-5 h-5" /> {CONTACT_NUMBER}
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
            alt="Plumbing Service" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Available 24/7 in Mohammadpur
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              🚿 Emergency Plumbing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                30 Minutes Response!
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
            >
              Pipe leak, clogged drain, or bathroom fittings? We provide fast, reliable, and affordable plumbing services right at your doorstep in Mohammadpur, Dhaka.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={`tel:${CONTACT_NUMBER}`}
                className="group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)]"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex items-center gap-8 text-slate-500"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-200">4.8/5</span>
                <span className="text-xs uppercase tracking-wider">Customer Rating</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-200">500+</span>
                <span className="text-xs uppercase tracking-wider">Happy Clients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Facing a Plumbing Nightmare?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Don't let a small leak turn into a flood. We solve the problems that keep you up at night.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Water Leaking", desc: "Wasting water and damaging your walls? We fix leaks instantly." },
              { icon: AlertTriangle, title: "Blocked Drains", desc: "Stinky and messy? Our experts clear any blockage fast." },
              { icon: Thermometer, title: "Low Pressure", desc: "Frustrated with low water flow? We'll restore your pressure." },
              { icon: Clock, title: "Night Emergency", desc: "Burst pipe at 2 AM? We are available 24/7 for you." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
              >
                <div className="bg-slate-900 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Professional Services</h2>
              <p className="text-slate-400">Comprehensive plumbing solutions for residential and commercial properties in Mohammadpur.</p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <a href={`tel:${CONTACT_NUMBER}`} className="text-blue-500 font-bold flex items-center gap-2 group">
                View All Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pipe Leak Repair", icon: Wrench, desc: "Expert detection and fixing of hidden or visible pipe leaks." },
              { title: "Drain Cleaning", icon: Droplets, desc: "Professional unclogging of kitchen, bathroom, and main drains." },
              { title: "Bathroom Installation", icon: Hammer, desc: "Modern fittings, commodes, basins, and shower installations." },
              { title: "Water Line Fixing", icon: Wrench, desc: "New water line connections and repair of existing lines." },
              { title: "Pump & Tank Repair", icon: Hammer, desc: "Water pump servicing and overhead tank cleaning/repair." },
              { title: "24/7 Emergency", icon: Clock, desc: "Immediate response for any urgent plumbing crisis." },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 transition-all group"
              >
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon className="w-32 h-32" />
                </div>
                <service.icon className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.desc}</p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                  Book Now <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Mohammadpur Residents Trust Us?</h2>
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "30-Minute Response", text: "We are local, so we reach you faster than anyone else." },
                  { icon: ShieldCheck, title: "Skilled Technicians", text: "10+ years of experience in complex plumbing systems." },
                  { icon: Star, title: "Affordable Pricing", text: "Transparent costs with no hidden charges. Quality at fair price." },
                  { icon: CheckCircle2, title: "24/7 Availability", text: "Day or night, weekend or holiday—we are just a call away." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="bg-white/20 p-3 rounded-xl h-fit">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-blue-100">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                  alt="Plumber Working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-slate-950 p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-950" alt="User" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-400">+500 Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xl font-bold">4.8/5.0</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-400">Real feedback from your neighbors in Mohammadpur.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahat Ahmed", area: "Kaderabad Housing", text: "Excellent service! They reached my home in 20 minutes for a burst pipe. Very professional and clean work." },
              { name: "Sumaiya Khan", area: "Dhanmondi 27", text: "I had a major drain blockage. Other plumbers failed, but these guys fixed it in an hour. Highly recommended!" },
              { name: "Tanvir Hasan", area: "Adabor", text: "Very affordable and honest. They explained the problem clearly and didn't charge extra for night service." },
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <span className="text-xs text-slate-500">{t.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Map */}
      <section id="area" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Serve Your Neighborhood</h2>
              <p className="text-slate-400 mb-8 text-lg">Based in the heart of Mohammadpur, we cover all surrounding areas within 30 minutes.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Mohammadpur", "Dhanmondi", "Adabor", "Shyamoli", 
                  "Lalmatia", "Asad Gate", "Basila", "Town Hall"
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
                <h4 className="text-xl font-bold mb-4">Need Immediate Help?</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${CONTACT_NUMBER}`} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-center transition-all">
                    Call {CONTACT_NUMBER}
                  </a>
                  <a href={WHATSAPP_LINK} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-center transition-all">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              {/* Google Maps Embed - Centered on Mohammadpur, Dhaka */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.60232537213!2d90.3503248871582!3d23.750942500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5000000001%3A0x1e053f305553c740!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712270000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mohammadpur Map"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-blue-600/20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Wait for the Flood!</h2>
            <p className="text-blue-100 text-xl mb-10">Get a professional plumber at your door in 30 minutes. 24/7 Emergency Service in Mohammadpur.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={`tel:${CONTACT_NUMBER}`}
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-blue-50 transition-all shadow-xl"
              >
                Call Now: {CONTACT_NUMBER}
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 text-emerald-500" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">Mohammadpur<span className="text-blue-500">Plumbing</span></span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2026 Mohammadpur Plumbing Service. All rights reserved.
            </div>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-600 text-xs max-w-2xl mx-auto">
            Keywords: plumber in Mohammadpur Dhaka, emergency plumbing service Dhaka, pipe repair Mohammadpur, drain cleaning Dhaka, bathroom fittings Mohammadpur.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-4 flex gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <a 
          href={`tel:${CONTACT_NUMBER}`}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a 
          href={WHATSAPP_LINK}
          className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>
      
      {/* Spacer for sticky bar on mobile */}
      <div className="md:hidden h-24"></div>
    </div>
  );
}
