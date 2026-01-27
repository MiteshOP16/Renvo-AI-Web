import { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", hasDropdown: true },
    { label: "Features", hasDropdown: true },
    { label: "Blogs", hasDropdown: true },
    { label: "Contact", hasDropdown: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold">
              <span className="text-primary">Renvo</span>AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="nav-link flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <a href="https://community-connect-qabh.onrender.com" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary hidden sm:flex">Join Community Channel</Button>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="nav-link flex items-center justify-between py-2"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href="#" className="nav-link">
                  Login / Register
                </a>
              </div>
              <Button className="btn-primary w-full">Join AI</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
