import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Faq from "./components/Faq";
import LeadSection from "./components/LeadSection";
import Footer from "./components/Footer";
import ScrollUtils from "./components/ScrollUtils";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problems />
        <Solutions />
        <Process />
        <CaseStudies />
        <Faq />
        <LeadSection />
      </main>
      <Footer />
      <ScrollUtils />
    </>
  );
}
