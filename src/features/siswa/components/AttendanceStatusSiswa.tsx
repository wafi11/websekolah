import { Badge } from "@/components/ui/badge";

export function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Hadir":
      return <Badge className="bg-green-100 text-green-700">Hadir</Badge>;
    case "Izin":
      return <Badge className="bg-yellow-100 text-yellow-700">Izin</Badge>;
    case "Sakit":
      return <Badge className="bg-blue-100 text-blue-700">Sakit</Badge>;
    case "Alpa":
      return <Badge className="bg-red-100 text-red-700">Alpa</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}
