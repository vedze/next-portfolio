import Image from "next/image";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import IntroPage from "./intro/page";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-full p-20">
      <IntroPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </section>
  );
}
