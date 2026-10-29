import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutAndSkills from "./AboutAndSkills";
import Projects from "./Projects";
import ContactAndFooter from "./ContactAndFooter";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutAndSkills />
      <Projects />
      <ContactAndFooter />
    </main>
  );
}
