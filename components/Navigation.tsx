import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm z-50 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#0D9E8A] transition-colors duration-300 transform hover:scale-105">
              Striva
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/#services" className="text-white/70 hover:text-[#0D9E8A] transition-all duration-300 px-3 py-2 text-sm font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D9E8A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/platform" className="text-white/70 hover:text-[#0D9E8A] transition-all duration-300 px-3 py-2 text-sm font-medium relative group">
                Platform
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D9E8A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#work" className="text-white/70 hover:text-[#0D9E8A] transition-all duration-300 px-3 py-2 text-sm font-medium relative group">
                Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D9E8A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#contact" className="text-white/70 hover:text-[#0D9E8A] transition-all duration-300 px-3 py-2 text-sm font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D9E8A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}