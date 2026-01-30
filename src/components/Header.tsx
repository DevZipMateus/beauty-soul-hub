import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Beauty Soul Cosméticos - Logo"
            className="h-12 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`font-medium text-sm uppercase tracking-wide transition-colors duration-300 hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5551981636522"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm uppercase tracking-wide"
            >
              Fale conosco
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden animate-fade-in">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <a
                  href="https://wa.me/5551981636522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-center w-full"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
