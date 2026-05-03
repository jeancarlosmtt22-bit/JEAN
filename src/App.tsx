/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Institutional from './components/Institutional';
import PropertyList from './components/PropertyList';
import MarketingCTA from './components/MarketingCTA';
import Testimonials from './components/Testimonials';
import UrgencySection from './components/UrgencySection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { trackPageView } from './lib/tracking';

export default function App() {
  useEffect(() => {
    // Analytics Initialization (Normally these would be real IDs)
    // window.fbq('init', 'PIXEL_ID');
    // window.gtag('config', 'GA_ID');
    
    trackPageView();
    
    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        <Institutional />
        <PropertyList />
        <MarketingCTA />
        <Testimonials />
        <UrgencySection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
