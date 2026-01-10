import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Spp } from "@/types/types";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";
import { FormatCurrency, formatDate } from "@/utils/format";

interface TableListSppProps {
    data: Spp[];
}

export function TableListSpp({ data }: TableListSppProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-muted/50">
                    <TableHead>No Invoice</TableHead>
                    <TableHead>Siswa</TableHead>
                    <TableHead>Periode</TableHead>
                    <TableHead>Metode</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Terbuat</TableHead>
                    <TableHead>Terupdate</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.invoiceNumber}>
                        <TableCell className="font-medium">
                            {item.invoiceNumber}
                        </TableCell>

                        <TableCell>{item.nameSiswa}</TableCell>

                        <TableCell>{item.periode}</TableCell>

                        <TableCell>{item.paymentMethod}</TableCell>

                        <TableCell>
                            {FormatCurrency(item.amount)}
                        </TableCell>
                        <TableCell>
                            <StatusBadge status={item.status} />
                        </TableCell>

                        <TableCell>
                            {formatDate(item.createdAt)}
                        </TableCell>
                        <TableCell>
                            {formatDate(item.updatedAt)}
                        </TableCell>
                        <TableCell>
                            <ActionComponent />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


export function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case "PAID":
            return <Badge className="bg-green-600">Lunas</Badge>;
        case "PENDING":
            return <Badge variant="secondary">Pending</Badge>;
        case "UNPAID":
            return <Badge variant="destructive">Belum Bayar</Badge>;
        default:
            return <Badge variant="outline">{status}</Badge>;
    }
}
