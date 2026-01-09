import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";
import { Nilai } from "@/types/types";

interface TableGradesSiswaProps {
  grades: Nilai[];
}

export function TableGradesSiswa({ grades }: TableGradesSiswaProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Kelas</TableHead>
          <TableHead>Mata Pelajaran</TableHead>
          <TableHead>Kategori</TableHead>
          <TableHead>Nilai</TableHead>
          <TableHead>Tanggal</TableHead>
          <TableHead>Guru</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {grades.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={7}
              className="text-center text-muted-foreground"
            >
              Data nilai belum tersedia
            </TableCell>
          </TableRow>
        )}

        {grades.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.kelasName}</TableCell>

            <TableCell>{item.mataPelajaranKode}</TableCell>

            <TableCell>
              <KategoriBadge kategori={item.kategori} />
            </TableCell>

            <TableCell className="font-semibold">
              <NilaiText nilai={item.nilai} />
            </TableCell>

            <TableCell>{item.tanggal}</TableCell>

            <TableCell>{item.guruId}</TableCell>

            <TableCell>
              <ActionComponent />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function KategoriBadge({ kategori }: { kategori: string }) {
  switch (kategori) {
    case "UTS":
      return <Badge className="bg-purple-100 text-purple-700">UTS</Badge>;
    case "UAS":
      return <Badge className="bg-indigo-100 text-indigo-700">UAS</Badge>;
    case "Quiz":
      return <Badge className="bg-blue-100 text-blue-700">Quiz</Badge>;
    case "Tugas":
      return <Badge className="bg-green-100 text-green-700">Tugas</Badge>;
    default:
      return <Badge variant="secondary">{kategori}</Badge>;
  }
}
function NilaiText({ nilai }: { nilai: number }) {
  if (nilai >= 85) return <span className="text-green-600">{nilai}</span>;
  if (nilai >= 70) return <span className="text-yellow-600">{nilai}</span>;
  return <span className="text-red-600">{nilai}</span>;
}
