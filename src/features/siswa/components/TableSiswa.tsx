import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { siswa } from "@/types/types";
import { Ellipsis, Trash, Edit, Eye } from "lucide-react";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";

interface TableListSiswaProps {
  siswa: siswa[];
}

export function TableListSiswa({ siswa }: TableListSiswaProps): JSX.Element {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No Absen</TableHead>
            <TableHead className="w-[200px]">Nama</TableHead>
            <TableHead className="w-[120px]">NISN</TableHead>
            <TableHead className="w-[150px]">Kelas</TableHead>
            <TableHead className="w-[200px]">Alamat</TableHead>
            <TableHead className="w-[200px]">Wali Siswa</TableHead>
            <TableHead className="w-[80px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {siswa.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-24 text-center text-muted-foreground"
              >
                Tidak ada data siswa
              </TableCell>
            </TableRow>
          ) : (
            siswa.map((s, index) => (
              <TableRow key={s.nisn || index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{s.name}</TableCell>
                <TableCell className="font-mono text-sm">{s.nisn}</TableCell>
                <TableCell>
                  {s.kelas.length > 0 ? (
                    <div className="flex flex-wrap justify-center items-center gap-1">
                      {s.kelas.map((k, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {k.name}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell className="max-w-[200px]">
                  <div className="truncate text-sm" title={s.alamat}>
                    {s.alamat || "-"}
                  </div>
                </TableCell>
                <TableCell>
                  {s.walisiswa.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {s.walisiswa.map((wali, idx) => (
                        <div key={idx} className="text-sm">
                          <div className="font-medium">{wali.name}</div>
                          <div className="text-muted-foreground text-xs">
                            {wali.phoneNumber}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <ActionComponent />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
