import { Outlet, NavLink } from "react-router";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Password Guide", path: "/password-guide" },
    { label: "Security Tips", path: "/security-tips" },
    { label: "Best Practices", path: "/best-practices" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-primary/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <NavLink 
                to="/" 
                className="flex items-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-8 h-8 text-secondary" />
                <span className="font-heading font-bold text-xl tracking-tight">MMU SecurePass</span>
              </NavLink>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-secondary" 
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary-foreground hover:text-secondary focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-secondary/20 text-secondary"
                        : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}
