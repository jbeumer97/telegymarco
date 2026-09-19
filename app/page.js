import Header from "./components/Header";
import Hero from "./components/Hero";
import StatBar from "./components/StatBar";
import ValueProp from "./components/ValueProp";
import Services from "./components/Services";
import References from "./components/References";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollUtils from "./components/ScrollUtils";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <StatBar />
        <ValueProp />
        <Services />
        <References />
        <ContactForm />
      </main>
      <Footer />
      <ScrollUtils />
    </>
  );
}
