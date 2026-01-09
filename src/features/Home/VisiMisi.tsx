import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { misiList } from "@/data/VisiMisi";
import { Lightbulb, Target } from "lucide-react";

export function VisiMisiSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Visi */}
        <Card className="relative mb-16 overflow-hidden border-0 bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

          <CardHeader className="relative z-10 flex flex-row items-center gap-4">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Lightbulb className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl md:text-3xl">Visi</CardTitle>
          </CardHeader>

          <CardContent className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-white/95">
              Mewujudkan siswa yang berprestasi, berkarakter, berbudaya, dan
              peduli lingkungan berdasarkan iman dan takwa.
            </p>
          </CardContent>
        </Card>

        {/* Misi Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Misi
          </h3>
        </div>

        {/* Misi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {misiList.map((misi, index) => {
            const Icon = misi.icon;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Number */}
                <div className="absolute -top-2 -left-1 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {misi.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {misi.description}
                  </p>
                </CardContent>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full group-hover:bg-primary/10 transition-colors" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
