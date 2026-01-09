import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Guru } from "@/types/types";
import { Edit, Eye, MoreHorizontal, Trash2, UserCheck } from "lucide-react";

interface TableListGuruProps {
  guru: Guru[];
  onView?: (guru: Guru) => void;
  onEdit?: (guru: Guru) => void;
  onDelete?: (guru: Guru) => void;
}

export function TableListGuru({
  guru,
  onView,
  onEdit,
  onDelete,
}: TableListGuruProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Jabatan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead className="w-[80px] text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guru.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="h-24 text-center text-muted-foreground"
              >
                Tidak ada data guru
              </TableCell>
            </TableRow>
          ) : (
            guru.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{idx + 1}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {item.jabatan.length > 0 ? (
                      item.jabatan.map((jab, jabIdx) => (
                        <Badge
                          key={jabIdx}
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {jab}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </div>
                </TableCell>

                <TableCell>
                  {item.isWaliKelas ? (
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      <UserCheck className="mr-1 h-3 w-3" />
                      Wali Kelas
                    </Badge>
                  ) : (
                    <Badge variant="outline">Guru</Badge>
                  )}
                </TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {item.kelas.length > 0 ? (
                      item.kelas.map((kel, kelIdx) => (
                        <Badge
                          key={kelIdx}
                          variant="outline"
                          className="font-normal"
                        >
                          {kel.tahunPembelajaran} {kel.name}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">-</span>
                    )}
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => onView?.(item)}
                        className="cursor-pointer"
                      >
                        <Eye className="mr-2 h-4 w-4 text-blue-600" />
                        Lihat Detail
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => onEdit?.(item)}
                        className="cursor-pointer"
                      >
                        <Edit className="mr-2 h-4 w-4 text-amber-600" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => onDelete?.(item)}
                        className="cursor-pointer text-destructive focus:text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
