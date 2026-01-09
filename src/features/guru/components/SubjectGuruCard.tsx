import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MataPelajaran } from "@/types/types";
import { Award, BookOpen } from "lucide-react";
export type SubjectGuruProps = {
  subjects: MataPelajaran[];
};

// ==================== OPSI 1: CARD GRID (Rekomendasi untuk dashboard/overview) ====================
export function SubjectGuruCards({ subjects }: SubjectGuruProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Mata Pelajaran</h3>
          <p className="text-sm text-muted-foreground">
            {subjects.length} mata pelajaran
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <Card
            key={subject.kode}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {subject.kode}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-base leading-tight">
                  {subject.name}
                </h4>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span>KKM</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {subject.kkm}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {subjects.length === 0 && (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Belum ada mata pelajaran</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
