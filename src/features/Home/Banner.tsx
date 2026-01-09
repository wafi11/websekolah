import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BannerSection() {
  return (
    <section className="relative w-full h-[calc(100vh-300px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-green-700">
        <Image
          src="/SD-BG.png"
          alt="Banner background"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block drop-shadow-2xl">Selamat Datang</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-white/90 font-normal drop-shadow-lg">
              di Platform Kami
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Temukan pengalaman terbaik bersama kami. Solusi inovatif untuk
            kebutuhan Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg">Mulai Sekarang</Button>
            <Button size="lg" variant="outline">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
