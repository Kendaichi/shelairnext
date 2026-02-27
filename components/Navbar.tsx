"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MapPin,
  Wrench,
  Building2,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import shelairLogo from "@/assets/shelair-logo-web.png";

type DropdownKey = "services" | "industries" | "brands" | "locations";

const dropdownMenus: Record<
  DropdownKey,
  { label: string; href: string; topLink?: true; external?: true }[]
> = {
  services: [
    { label: "All Services", href: "/services", topLink: true },
    {
      label: "Air Conditioning Installation",
      href: "/services/air-conditioning-installation",
    },
    {
      label: "Air Conditioning Service & Repairs",
      href: "/services/air-conditioning-service-repairs",
    },
    {
      label: "Commercial Refrigeration Service",
      href: "/services/commercial-refrigeration-maintenance",
    },

    {
      label: "Commercial Refrigeration",
      href: "https://acrorefrigeration.com.au",
      external: true,
    },
  ],
  industries: [
    { label: "All Service Areas", href: "/locations", topLink: true },
    { label: "Brisbane", href: "/locations/brisbane" },
    { label: "Gold Coast", href: "/locations/gold-coast" },
    { label: "Sunshine Coast", href: "/locations/sunshine-coast" },
  ],
  brands: [
    { label: "All Brands", href: "/brands", topLink: true },
    { label: "Panasonic", href: "/brands/panasonic" },
    { label: "Daikin", href: "/brands/daikin" },
    { label: "Mitsubishi Electric", href: "/brands/mitsubishi" },
  ],
  locations: [
    { label: "All Locations", href: "/locations", topLink: true },
    { label: "Brisbane", href: "/locations/brisbane" },
    { label: "Gold Coast", href: "/locations/gold-coast" },
    { label: "Sunshine Coast", href: "/locations/sunshine-coast" },
  ],
};

const plainLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Shelair Insights", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null
  );
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(
    null
  );
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileExpanded(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleDropdown = (key: DropdownKey) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const toggleMobileExpanded = (key: DropdownKey) =>
    setMobileExpanded((prev) => (prev === key ? null : key));

  const isActive = (key: DropdownKey) => {
    if (key === "locations") return pathname.startsWith("/locations");
    if (key === "services") return pathname.startsWith("/services");
    if (key === "industries") return pathname.startsWith("/industries");
    if (key === "brands") return pathname.startsWith("/brands");
    return false;
  };

  const dropdownKeys: { key: DropdownKey; label: string }[] = [
    { key: "services", label: "Services" },
    { key: "brands", label: "Brands" },
    { key: "locations", label: "Locations" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight"
        >
          <img
            src={shelairLogo.src}
            alt="Shelair"
            className="h-10 w-10 object-contain"
          />
          <span>Shelair</span>
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          {dropdownKeys.map(({ key, label }) => (
            <div key={key} className="relative">
              <button
                onClick={() => toggleDropdown(key)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-secondary ${
                  isActive(key)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === key ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === key && (
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-background border border-border rounded-xl shadow-lg py-1.5 z-50">
                  {dropdownMenus[key].map((item, i) => (
                    <div key={item.href}>
                      {item.topLink && i > 0 && (
                        <div className="mx-3 my-1 border-t border-border" />
                      )}
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-secondary text-muted-foreground"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                            item.topLink ? "font-medium" : ""
                          } ${
                            pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.topLink && key === "services" && (
                            <Wrench className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "industries" && (
                            <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "brands" && (
                            <Tag className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "locations" && (
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {plainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-secondary ${
                pathname === link.href
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0732049511"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            07 3204 9511
          </a>
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 -mr-1"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6">
          <nav className="flex flex-col gap-1">
            {dropdownKeys.map(({ key, label }) => (
              <div key={key}>
                <button
                  onClick={() => toggleMobileExpanded(key)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(key)
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      mobileExpanded === key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpanded === key && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3 mb-1">
                    {dropdownMenus[key].map((item) =>
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-muted-foreground"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                            item.topLink ? "font-medium" : ""
                          } ${
                            pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.topLink && key === "services" && (
                            <Wrench className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "industries" && (
                            <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "brands" && (
                            <Tag className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.topLink && key === "locations" && (
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          )}
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {plainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href="tel:0732049511"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> 07 3204 9511
            </a>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
