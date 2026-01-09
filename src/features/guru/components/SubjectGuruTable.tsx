import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SubjectGuruProps } from "./SubjectGuru";

export function SubjectGuruTable({ subjects }: SubjectGuruProps) {
  // Calculate statistics
  const avgKKM =
    subjects.length > 0
      ? Math.round(
          subjects.reduce((sum, s) => sum + s.kkm, 0) / subjects.length
        )
      : 0;
  const maxKKM =
    subjects.length > 0 ? Math.max(...subjects.map((s) => s.kkm)) : 0;
  const minKKM =
    subjects.length > 0 ? Math.min(...subjects.map((s) => s.kkm)) : 0;

  return (
    <div className="space-y-4">
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Mata Pelajaran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subjects.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rata-rata KKM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgKKM}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              KKM Tertinggi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{maxKKM}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              KKM Terendah
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{minKKM}</div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Mata Pelajaran</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">No</TableHead>
                <TableHead>Kode</TableHead>
                <TableHead>Nama Mata Pelajaran</TableHead>
                <TableHead className="text-center">KKM</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground h-24"
                  >
                    Belum ada mata pelajaran
                  </TableCell>
                </TableRow>
              ) : (
                subjects.map((subject, index) => {
                  // Determine KKM status color
                  const kkmStatus =
                    subject.kkm >= 75
                      ? { label: "Tinggi", variant: "default" as const }
                      : subject.kkm >= 65
                      ? { label: "Sedang", variant: "secondary" as const }
                      : { label: "Rendah", variant: "outline" as const };

                  return (
                    <TableRow key={subject.kode}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono">
                          {subject.kode}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {subject.name}
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-lg font-bold">{subject.kkm}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={kkmStatus.variant}>
                          {kkmStatus.label}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
