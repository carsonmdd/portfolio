import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HomeSection from "./components/sections/HomeSection";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HomeSection />
        <Navbar />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
