import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header section Haus */}
        <section className="bg-heading py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">How Can We Help You?</h1>
            <p className="text-white/60 max-w-2xl text-sm md:text-base mb-8">
              Reach out to our engineering and sales teams for inquiries, quotes, or technical consultations.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </section>

        {/* Contact Details & Form Haus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Info Haus */}
              <div>
                <h2 className="text-3xl font-black text-heading mb-12 uppercase tracking-wide">Direct Access</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-[#00c0f3] font-black text-[10px] uppercase tracking-widest">
                            <Phone className="w-4 h-4" />
                            <span>Phone</span>
                         </div>
                         <p className="text-xl font-black text-heading">(+44) 7776 449775</p>
                      </div>
                      <div className="flex flex-col gap-2 pt-6">
                         <div className="flex items-center gap-2 text-[#00c0f3] font-black text-[10px] uppercase tracking-widest">
                            <Mail className="w-4 h-4" />
                            <span>Email</span>
                         </div>
                         <p className="text-sm font-bold text-heading">erkan.ates@layerstech.co.uk</p>
                         <p className="text-sm font-bold text-heading">sales@layerstech.co.uk</p>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 text-[#00c0f3] font-black text-[10px] uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            <span>Address</span>
                         </div>
                         <p className="text-xs text-[#777777] leading-relaxed">
                            136 Richmond Hill, Flat 4, 2 The Terrace, <br />
                            TW10 6RN, United Kingdom.
                         </p>
                      </div>
                      <div className="flex flex-col gap-2 pt-6">
                         <div className="flex items-center gap-2 text-[#00c0f3] font-black text-[10px] uppercase tracking-widest">
                            <Clock className="w-4 h-4" />
                            <span>Hours</span>
                         </div>
                         <p className="text-xs text-[#777777] leading-relaxed">
                            <strong>Assistance:</strong> Mon - Sat, 9am - 8pm <br />
                            <strong>Sales:</strong> Mon - Sat, 9am - 6pm <br />
                            (Sunday Closed)
                         </p>
                      </div>
                   </div>
                </div>
                
                {/* Embed Map Haus */}
                <div className="mt-16 w-full h-[300px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative grayscale hover:grayscale-0 transition-all duration-700">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.94827056230616!2d-0.3015509630094056!3d51.45500003058444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c6d70d49b2b%3A0xc0f3e69a0a0a0a0a!2sRichmond%20Hill%2C%20Richmond!5e0!3m2!1sen!2suk!4v1711728000000!5m2!1sen!2suk" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              {/* Contact Form Haus */}
              <div className="bg-[#fcfcfc] border border-gray-100 p-12 rounded-[40px] shadow-sm">
                 <h3 className="text-2xl font-black text-heading mb-10 uppercase">Message Us</h3>
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase text-heading/40 ml-2">Full Name</label>
                          <input type="text" className="bg-white border-2 border-transparent border-b-gray-200 focus:border-primary px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-gray-300" placeholder="John Doe" />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase text-heading/40 ml-2">Email Address</label>
                          <input type="email" className="bg-white border-2 border-transparent border-b-gray-200 focus:border-primary px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-gray-300" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase text-heading/40 ml-2">Subject</label>
                       <input type="text" className="bg-white border-2 border-transparent border-b-gray-200 focus:border-primary px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-gray-300" placeholder="Technical Inquiry" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase text-heading/40 ml-2">Message</label>
                       <textarea rows={5} className="bg-white border-2 border-transparent border-b-gray-200 focus:border-primary px-4 py-3 text-sm focus:outline-none transition-all placeholder:text-gray-300 resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full primary-gradient py-5 rounded-2xl flex items-center justify-center gap-3 text-white font-black tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                       <Send className="w-4 h-4" />
                       SUBMIT ENQUIRY
                    </button>
                    <p className="text-[10px] text-center text-[#777777] italic mt-4">
                       We typically respond within 12 - 24 business hours.
                    </p>
                 </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
