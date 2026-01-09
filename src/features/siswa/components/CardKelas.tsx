import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, User } from "lucide-react";
import { Kelas } from "@/types/types";

interface CardKelasProps {
  kelas: Kelas;
}

export function CardKelas({ kelas }: CardKelasProps) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          {kelas.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Tahun Ajaran {kelas.tahunPembelajaran}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Wali Kelas:</span>
          <span className="font-medium">{kelas.waliKelas}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Jumlah Murid:</span>
          <span className="font-medium">{kelas.jumlahMurid} Siswa</span>
        </div>
      </CardContent>
    </Card>
  );
}
