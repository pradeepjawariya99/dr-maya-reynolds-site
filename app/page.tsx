import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hope from "@/components/Hope";
import WhoIHelp from "@/components/WhoIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Office from "@/components/Office";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Hope />
        <WhoIHelp />
        <Expertise />
        <HowIWork />
        <Services />
        <Office />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
