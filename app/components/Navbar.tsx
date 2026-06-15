"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Company", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Vision", href: "/vision" },
  { label: "HSE & Quality", href: "/hse" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[120] w-full border-b border-[#0D3B66]/10 bg-[#0D3B66] shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-4">
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
              <h2 className="text-2xl font-bold tracking-[0.22em] text-white">
                CHARISMAK
              </h2>
              <p className="text-xs text-white/70">Project Nigeria Limited</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition ${
                    active ? "text-[#C8A45D]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#C8A45D]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/quote"
            className="hidden bg-[#8B1E00] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#C8A45D] lg:inline-flex"
          >
            Request Quote
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="grid h-11 w-11 place-items-center border border-white/20 text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0D3B66] text-white lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-6">
            <h2 className="text-2xl font-bold tracking-[0.22em]">CHARISMAK</h2>

            <button onClick={() => setMobileOpen(false)}>
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
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-8 bg-[#8B1E00] px-6 py-4 text-center font-bold"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}