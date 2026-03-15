'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Building software<br />
            <span className="text-[#0D9E8A] animate-gradient">that matters</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Professional software development agency specializing in API & Backend, Web Platforms, and B2B Products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <a
              href="#work"
              className="bg-[#0D9E8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0D9E8A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0D9E8A]/25"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="border border-[#0D9E8A] text-[#0D9E8A] px-8 py-4 rounded-lg font-semibold hover:bg-[#0D9E8A] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 animate-fade-in-up">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up">
              <h3 className="text-xl font-semibold text-white mb-4">API & Backend</h3>
              <p className="text-white/70">
                Robust, scalable backend systems and APIs that power your applications. We build secure, performant solutions using modern technologies.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-200">
              <h3 className="text-xl font-semibold text-white mb-4">Web Platforms</h3>
              <p className="text-white/70">
                Full-featured web applications and platforms. From e-commerce to SaaS, we create engaging user experiences with cutting-edge technology.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-400">
              <h3 className="text-xl font-semibold text-white mb-4">B2B Products</h3>
              <p className="text-white/70">
                Specialized business-to-business software solutions. We understand enterprise needs and deliver products that drive efficiency and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0D9E8A]/20 to-[#0D9E8A]/10 border border-[#0D9E8A]/30 rounded-lg p-8 md:p-12 hover-lift animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Supplier Infrastructure Platform
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Revolutionizing African supply chains with verified supplier discovery, RFQ marketplaces, and comprehensive certifications.
              </p>
              <Link
                href="/platform"
                className="bg-[#0D9E8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0D9E8A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0D9E8A]/25 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section Placeholder */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Work</h2>
          <p className="text-xl text-white/70 mb-8">
            Coming soon - showcase of our recent projects and success stories.
          </p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-white/70 mb-8">
            Ready to build software that matters? Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@strivasoftware.co.za?subject=Project%20Inquiry%20-%20Striva%20Software"
              className="bg-[#0D9E8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0D9E8A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0D9E8A]/25 inline-block"
            >
              Start a Project
            </a>
            <a
              href="mailto:hello@strivasoftware.co.za?subject=General%20Inquiry%20-%20Striva%20Software"
              className="border border-[#0D9E8A] text-[#0D9E8A] px-8 py-4 rounded-lg font-semibold hover:bg-[#0D9E8A] hover:text-white transition-all duration-300 transform hover:scale-105 inline-block"
            >
              General Inquiry
            </a>
          </div>
          <div className="mt-8 text-white/50 text-sm">
            Or email us directly at{" "}
            <a
              href="mailto:hello@strivasoftware.co.za"
              className="text-[#0D9E8A] hover:text-[#0D9E8A]/80 transition-colors"
            >
              hello@strivasoftware.co.za
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
