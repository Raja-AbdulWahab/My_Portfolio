
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-8 items-center">
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] border-b border-gray-700">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 ease-in-out ${isOpen ? 'pb-6' : ''}`}>
          <div className="flex items-center justify-between h-16">
            <a 
              href="#home" 
              className="font-bold text-xl text-white"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
            >
              Portfolio.
            </a>

            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyan-400 hover:bg-transparent"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>

          {isMobile ? (
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96 mt-4' : 'opacity-0 max-h-0'}`}>
              <NavLinks />
            </div>
          ) : (
            <NavLinks />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
