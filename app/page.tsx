'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import InteractiveCards from '@/components/landing/InteractiveCards';
import Features from '@/components/landing/Features';
import Benefits from '@/components/landing/Benefits';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive Cards Section (The original 4 cards redesigned) */}
      <InteractiveCards />

      {/* Features Section (Why choose us?) */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}

