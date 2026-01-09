import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";
import { WaliSiswa } from "@/types/types";

interface TableListWaliMuridProps {
  data: WaliSiswa[];
}

export function TableListWaliMurid({ data }: TableListWaliMuridProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama Wali</TableHead>
          <TableHead>Nama Siswa</TableHead>
          <TableHead>Alamat</TableHead>
          <TableHead>No HP</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              Data tidak ditemukan
            </TableCell>
          </TableRow>
        ) : (
          data.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.nameSiswa}</TableCell>
              <TableCell>{item.alamat}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell className="text-center">
                <ActionComponent />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
