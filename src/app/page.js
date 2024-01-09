import Nav from "./components/nav/Nav";
import MainPage from "./components/main/Main";
import About from "./components/about/About";
import ProjectSection from "./components/project/ProjectSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex max-w-full min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Nav />
      <div className="container mx-auto mt-24">
        <MainPage />
        <About />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
