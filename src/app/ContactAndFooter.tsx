"use client";

import { Mail, Phone, MessageSquare } from "lucide-react";
import React from "react";

export default function ContactAndFooter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>
      <section id="contact" className="py-24 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight sm:text-4xl">
              Contact Information
            </h2>
            <div className="w-12 h-1 bg-sky-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  Let's connect and build something grand!
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Feel free to reach out for structural collaborations,
                  full-time positions, or simply to discuss modern technical
                  architectures.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 text-sky-500 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href="mailto:asrafuzzaman@example.com"
                      className="text-slate-700 font-bold hover:text-sky-500 text-base"
                    >
                      asrafuzzaman@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 text-sky-500 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                      Phone Number
                    </p>
                    <a
                      href="tel:+8801700000000"
                      className="text-slate-700 font-bold hover:text-sky-500 text-base"
                    >
                      +880 1700-000000
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-50 text-emerald-500 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <MessageSquare size={19} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                      WhatsApp Link
                    </p>
                    <a
                      href="https://wa.me"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-700 font-bold hover:text-emerald-500 text-base"
                    >
                      +880 1700-000000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-5 shadow-sm"
            >
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-950 bg-white text-sm text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-950 bg-white text-sm text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your text here..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-950 bg-white text-sm resize-none text-slate-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-950 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-md text-sm uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900 text-center text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
