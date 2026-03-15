'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Platform() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Supplier Infrastructure<br />
            <span className="text-[#0D9E8A] animate-gradient">Platform</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            Revolutionizing African supply chains with verified supplier discovery, competitive RFQ marketplaces, and comprehensive certification management.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">The Problem</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              African supply chains suffer from fragmented supplier discovery, lack of verification, and inefficient procurement processes. Businesses struggle to find reliable suppliers and suppliers struggle to reach qualified buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 animate-fade-in-up">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-[#0D9E8A] rounded-lg flex items-center justify-center mb-4 animate-bounce-in">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Supplier Profiles</h3>
              <p className="text-white/70">
                Comprehensive supplier profiles with verification, certifications, and performance history.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-100">
              <div className="w-12 h-12 bg-[#0D9E8A] rounded-lg flex items-center justify-center mb-4 animate-bounce-in animate-delay-100">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">RFQ Marketplace</h3>
              <p className="text-white/70">
                Competitive request-for-quote system connecting buyers with qualified suppliers.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-200">
              <div className="w-12 h-12 bg-[#0D9E8A] rounded-lg flex items-center justify-center mb-4 animate-bounce-in animate-delay-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Certifications</h3>
              <p className="text-white/70">
                Comprehensive certification management and compliance tracking for industry standards.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover-lift animate-fade-in-up animate-delay-300">
              <div className="w-12 h-12 bg-[#0D9E8A] rounded-lg flex items-center justify-center mb-4 animate-bounce-in animate-delay-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Buyer Discovery</h3>
              <p className="text-white/70">
                Intelligent matching system connecting suppliers with relevant procurement opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 animate-fade-in-up">Who It&apos;s For</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover-lift animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-white mb-6">For Suppliers</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start animate-fade-in-up animate-delay-100">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Showcase your capabilities and certifications
                </li>
                <li className="flex items-start animate-fade-in-up animate-delay-200">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Access competitive procurement opportunities
                </li>
                <li className="flex items-start animate-fade-in-up animate-delay-300">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Build credibility with verified profiles
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover-lift animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-white mb-6">For Buyers</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start animate-fade-in-up animate-delay-100">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Find verified and certified suppliers
                </li>
                <li className="flex items-start animate-fade-in-up animate-delay-200">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Competitive pricing through RFQ system
                </li>
                <li className="flex items-start animate-fade-in-up animate-delay-300">
                  <svg className="w-5 h-5 text-[#0D9E8A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Streamlined procurement process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0D9E8A]/20 to-[#0D9E8A]/10 border border-[#0D9E8A]/30 rounded-lg p-8 md:p-12 text-center hover-lift animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Early Access
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Be among the first to experience the future of African supply chain management. Join our early access program.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-scale-in">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#0D9E8A] focus:ring-1 focus:ring-[#0D9E8A] transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#0D9E8A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D9E8A]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#0D9E8A]/25"
                  >
                    Join Waitlist
                  </button>
                </div>
                <p className="text-white/40 text-xs mt-3 text-center">
                  * Early access signup - backend integration coming soon
                </p>
              </form>
            ) : (
              <div className="text-[#0D9E8A] text-xl font-semibold animate-bounce-in">
                Thank you! We&apos;ll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}