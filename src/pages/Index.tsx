import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/hero-section';
import ProductsSection from '../components/products-section';
import AboutSection from '../components/about-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/made-with-dyad';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;