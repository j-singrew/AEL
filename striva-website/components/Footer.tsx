'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            © 2024 Striva Software. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:hello@strivasoftware.co.za"
              className="text-[#0D9E8A] hover:text-[#0D9E8A]/80 transition-colors text-sm"
              onClick={(e) => {
                // Fallback for browsers that block mailto
                setTimeout(() => {
                  window.location.href = 'mailto:hello@strivasoftware.co.za';
                }, 100);
              }}
            >
              hello@strivasoftware.co.za
            </a>
            <span className="text-white/30 text-sm hidden sm:block">|</span>
            <a
              href="https://strivasoftware.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#0D9E8A] transition-colors text-sm"
            >
              strivasoftware.co.za
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}