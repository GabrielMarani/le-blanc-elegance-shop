import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Map from "@/components/Map";

const Index = () => {
  useEffect(() => {
    // Initialize animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-element").forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <CustomerReviews />
      <Map />
      <Footer />
    </div>
  );
};

export default Index;