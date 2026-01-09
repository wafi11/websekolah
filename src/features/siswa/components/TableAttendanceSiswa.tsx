import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Absensi } from "@/types/types";
import { StatusBadge } from "./AttendanceStatusSiswa";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";

interface TableAttendanceSiswaProps {
  attendance: Absensi[];
}

export function TableAttendanceSiswa({
  attendance,
}: TableAttendanceSiswaProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Siswa</TableHead>
          <TableHead>Kelas</TableHead>
          <TableHead>Tanggal</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Keterangan</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {attendance.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={5}
              className="text-center text-muted-foreground"
            >
              Data absensi belum tersedia
            </TableCell>
          </TableRow>
        )}

        {attendance.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.nameSiswa}</TableCell>
            <TableCell className="font-medium">{item.kelasName}</TableCell>

            <TableCell>{item.tanggal}</TableCell>

            <TableCell>
              <StatusBadge status={item.status} />
            </TableCell>

            <TableCell className="max-w-[200px] truncate">
              {item.keterangan || "-"}
            </TableCell>

            <TableCell className="text-center">
              <ActionComponent />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
