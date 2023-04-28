import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Testimonials from "../components/testimonials";
import CTA from "../components/callToAction";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
