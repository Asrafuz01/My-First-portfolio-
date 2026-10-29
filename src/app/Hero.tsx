// app/Hero.tsx এর একদম ওপরের ৩ এবং ৪ নম্বর লাইনটি এভাবে পরিবর্তন করুন:
"use client";

import { Download } from "lucide-react"; // শুধুমাত্র ডাউনলোড আইকন রাখুন
import { FaGithub, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6"; // লেটেস্ট সোশ্যাল আইকনস

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-[95vh] flex items-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-sky-400 uppercase">
              ✨ Available for Opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Hi, I'm <span className="text-white">Md Asrafuz Zaman</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400">
                Full Stack Web Developer
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
              I specialize in crafting high-performance, responsive web applications. Focused on writing scalable code, clean architectures, and delivering seamless user experiences.
            </p>
            <div className="pt-2">
              <a href="#" download className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
            
            {/* সোশ্যাল আইকন পার্টটি আপডেট করা হলো */}
            <div className="pt-4 flex justify-center md:justify-start items-center gap-4">
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all"><FaGithub size={19} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all"><FaLinkedinIn size={19} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all"><FaXTwitter size={17} /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all"><FaFacebookF size={17} /></a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500 via-blue-600 to-emerald-400 opacity-20 blur-xl animate-pulse"></div>
              <div className="w-full h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 overflow-hidden shadow-2xl relative z-10">
                <div className="w-full h-full rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img src="https://unsplash.com" alt="Asrafuz Zaman" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
