import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/#contato" },
  { label: "Vitrine", href: "/vitrine" },
];

const HEADER_HEIGHT = 80;
const BADGE_HEIGHT = 63;

const Vitrine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(
    window.innerHeight - HEADER_HEIGHT - BADGE_HEIGHT
  );

  useEffect(() => {
    document.title = "Demonstração de Vitrine | Beauty Soul Cosméticos";

    const handleResize = () => {
      setIframeHeight(window.innerHeight - HEADER_HEIGHT - BADGE_HEIGHT);
    };

    window.addEventListener("resize", handleResize);
    
    // Prevent scroll on body
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo com 80px */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-md"
        style={{ height: `${HEADER_HEIGHT}px` }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container-custom h-full flex items-center justify-between px-4 md:px-8">
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Beauty Soul Cosméticos - Logo"
              className="h-12 md:h-14 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="font-medium text-sm uppercase tracking-wide transition-colors duration-300 hover:text-primary text-foreground relative"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.a
                href="https://wa.me/5551981636522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm uppercase tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Fale conosco
              </motion.a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col py-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    className="px-6 py-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <a
                      href="https://wa.me/5551981636522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block text-center w-full"
                    >
                      Fale conosco
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Iframe ocupando o espaço restante */}
      <main
        className="w-full"
        style={{
          marginTop: `${HEADER_HEIGHT}px`,
          height: `${iframeHeight}px`,
        }}
      >
        <iframe
          src="https://beautysulcosmeticos.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full border-none"
          style={{ height: `${iframeHeight}px` }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
