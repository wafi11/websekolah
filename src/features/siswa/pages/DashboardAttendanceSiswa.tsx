import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { TableAttendanceSiswa } from "../components/TableAttendanceSiswa";
import { useFilterAttendanceSiswa } from "../hooks/useFilterAttendanceSiswa";
import { SearchInput } from "../components/SearchInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statusAbsensi } from "@/types/types";
import { Input } from "@/components/ui/input";

export default function DashboardAttendanceSiswa() {
  const {
    date,
    filterKelas,
    handleChangeSearch,
    handleChangeStatus,
    search,
    setDate,
    status,
  } = useFilterAttendanceSiswa();
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Kehadiran Siswa"
        description="Pantau dan kelola data kehadiran siswa secara terstruktur"
      >
        <div className="flex md:flex-row flex-col gap-3">
          {/* Search */}
          <SearchInput
            onChange={(e) => handleChangeSearch(e.target.value)}
            value={search}
          />

          {/* Filter Status */}
          <Select
            value={status}
            onValueChange={(value: statusAbsensi) => handleChangeStatus(value)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="Hadir">Hadir</SelectItem>
              <SelectItem value="Izin">Izin</SelectItem>
              <SelectItem value="Sakit">Sakit</SelectItem>
              <SelectItem value="Alpa">Alpa</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter Tanggal */}
          <Input
            type="date"
            className="w-[160px]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </HeaderDashboard>

      <TableAttendanceSiswa attendance={filterKelas} />
    </DashboardLayout>
  );
}
