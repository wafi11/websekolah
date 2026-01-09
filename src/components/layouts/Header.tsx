import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SearchInput } from "@/features/siswa/components/SearchInput";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

export const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { push } = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-white backdrop-blur-sm shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
            <Image
              src="https://smpn1sangsel.sch.id/wp-content/uploads/2020/10/Logo-OSIS-SMP-Warna-728x900-removebg-preview1.png"
              alt="Logo OSIS SMP"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button onClick={() => push("/login")} className="ml-2">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-secondary px-4 py-4 space-y-4 animate-slide-down">
          <SearchInput
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button className="w-full">Login</Button>
        </div>
      )}
    </header>
  );
};
