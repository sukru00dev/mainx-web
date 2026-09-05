import Hero from "@/components/Hero";
import LiveCounter from "@/components/LiveCounter";
import Architecture from "@/components/Architecture";
import ServicesBento from "@/components/ServicesBento";
import ProductsShowcase from "@/components/ProductsShowcase";
import AboutMe from "@/components/AboutMe";
import AcademicRD from "@/components/AcademicRD";
import SocialWall from "@/components/SocialWall";
import ReferencesMarquee from "@/components/ReferencesMarquee";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import TerminalCLI from "@/components/TerminalCLI";
import CostEstimator from "@/components/CostEstimator";
import FloatingToC from "@/components/FloatingToC";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingToC />
      <Hero />
      <LiveCounter />
      <ReferencesMarquee />
      <AboutMe />
      <TerminalCLI />
      <AcademicRD />
      <Workflow />
      <Architecture />
      <ServicesBento />
      <ProductsShowcase />
      <Testimonials />
      <SocialWall />
      <CostEstimator />
      <FAQ />
      <Contact />
    </div>
  );
}
