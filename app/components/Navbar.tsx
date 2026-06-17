"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Quality", href: "#quality" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/2347066619598?text=Hello%20Charismak%20Project%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.";

  return (
    <>
      <header className="fixed left-0 top-0 z-[120] w-full border-b border-white/10 bg-[#0D3B66]/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="#home" className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden bg-white">
              <Image
                src="/Images/LOGO.png"
                alt="Charismak Project Nigeria Limited"
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-[0.22em] text-white md:text-2xl">
                CHARISMAK
              </h2>
              <p className="text-xs text-white/70">Project Nigeria Limited</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition hover:text-[#C8A45D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Profile <Download className="h-4 w-4" />
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#8B1E00] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C8A45D]"
            >
              WhatsApp <Phone className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="grid h-11 w-11 place-items-center border border-white/20 text-white xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0D3B66] text-white xl:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-6">
            <div>
              <h2 className="text-2xl font-bold tracking-[0.22em]">CHARISMAK</h2>
              <p className="text-xs text-white/60">Project Nigeria Limited</p>
            </div>

            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="flex flex-col px-5 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-5 text-lg text-white/85"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/company-profile.pdf"
              onClick={() => setMobileOpen(false)}
              className="mt-8 border border-white/20 px-6 py-4 text-center font-bold"
            >
              Download Company Profile
            </Link>

            <Link
              href={whatsappLink}
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-[#8B1E00] px-6 py-4 text-center font-bold"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
