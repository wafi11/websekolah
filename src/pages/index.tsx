import { Header } from "@/components/layouts/Header";
import { BannerSection } from "@/features/Home/Banner";
import { VisiMisiSection } from "@/features/Home/VisiMisi";
import Link from "next/link";

export default function Home() {
  const whatsappNumber = "6282226197047";
  const whatsappMessage =
    "Halo, saya ingin bertanya tentang Website E-learning";

  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <BannerSection />
        <VisiMisiSection />
      </main>
      <footer className="flex min-h-16 border-t-2 p-4 bg-gray-50">
        <p className="w-full text-center text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary transition-all"
          >
            Wafiuddin
          </Link>
          . All rights reserved
        </p>
      </footer>
    </>
  );
}
