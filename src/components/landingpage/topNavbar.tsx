import Image from "next/image";
import Button from "@/components/ui/buttom";
import Link from "next/link";

export default function TopNavbar() {
  const navLinks = [{ name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tours", href: "/tours" },
  { name: "Tutorial", href: "/tutorial" },
  { name: "FAQ", href: "/faq" },
  { name: "Download", href: "/download" },
  ];
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-transparent sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl">TravelWeb</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-10 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} // optional: buat anchor link
              className="hover:text-purple-600 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign in button */}
      <div className="hidden md:block">
        <Button variant="primary">Sign in</Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button className="p-2 bg-gray-200 hover:bg-gray-300">
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </Button>
      </div>
    </nav>
  );
}
