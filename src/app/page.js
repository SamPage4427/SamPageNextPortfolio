import Nav from "./components/nav/Nav";
import MainSection from "./components/main/Main";
import About from "./components/about/About";
import ProjectSection from "./components/project/ProjectSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";
import AchievementSection from "./components/achievements/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainSection />
        <AchievementSection />
        <About />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
