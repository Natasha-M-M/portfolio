"use client";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/theme-context";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isDark, toggleTheme, isLoading } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "resume", label: "Resume", href: "/resume" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const activeItem =
    navItems.find((item) => item.href === pathname)?.id || "home";

  // Show loading state while theme is initializing
  if (isLoading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">Natasha</div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 text-sm font-medium text-gray-600"
                >
                  {item.label}
                </div>
              ))}
              <div className="p-2 rounded-full bg-gray-200">
                <div className="h-5 w-5 bg-gray-400 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex items-center space-x-4 md:hidden">
              <div className="p-2 rounded-full bg-gray-200">
                <div className="h-5 w-5 bg-gray-400 rounded animate-pulse" />
              </div>
              <Menu className="h-6 w-6 text-gray-900" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/95 backdrop-blur-md border-b border-yellow-500/20"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div
              className={`text-2xl font-bold cursor-pointer ${isDark ? "text-yellow-400" : "text-gray-900"}`}
            >
              Natasha
            </div>
          </Link>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    item.id === activeItem
                      ? isDark
                        ? "text-yellow-400"
                        : "text-gray-900"
                      : isDark
                        ? "text-gray-300 hover:text-yellow-400"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {item.id === activeItem && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDark ? "bg-yellow-400" : "bg-gray-900"}`}
                    />
                  )}
                </div>
              </Link>
            ))}
            {/* Theme toggle (desktop) */}
            <button
              onClick={toggleTheme}
              disabled={isLoading}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div
                className={`transition-transform duration-300 ${isDark ? "rotate-0" : "rotate-180"}`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu + Theme Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              disabled={isLoading}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark
                  ? "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div
                className={`transition-transform duration-300 ${isDark ? "rotate-0" : "rotate-180"}`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </div>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${isDark ? "text-yellow-400" : "text-gray-900"}`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${isDark ? "text-yellow-400" : "text-gray-900"}`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden flex flex-col items-start space-y-2 mt-2 pb-4 px-6 py-4 rounded-b-lg ${
              isDark ? "bg-black" : "bg-black"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    item.id === activeItem
                      ? isDark
                        ? "text-yellow-400"
                        : "text-gray-900"
                      : isDark
                        ? "text-gray-300 hover:text-yellow-400"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
