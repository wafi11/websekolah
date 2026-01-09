import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hariList, mataPelajaranMap } from "@/data";
import { useFilterScheduleGuru } from "../hooks/useFilterScheduleGuru";
import { JadwalCard } from "./JadwalCard";

export function ScheduleGuru() {
  const {
    filteredJadwal,
    guruList,
    jadwalByHari,
    selectedGuru,
    setSelectedGuru,
    setViewMode,
    viewMode,
  } = useFilterScheduleGuru();
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="w-full sm:w-64">
          <Select value={selectedGuru} onValueChange={setSelectedGuru}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Guru" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Guru</SelectItem>
              {guruList.map((guru) => (
                <SelectItem key={guru} value={guru}>
                  {guru}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs
          value={viewMode}
          onValueChange={(v) => setViewMode(v as "week" | "list")}
        >
          <TabsList>
            <TabsTrigger value="week">Minggu</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Jadwal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredJadwal.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Guru Aktif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {selectedGuru === "all" ? guruList.length : 1}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Kelas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(filteredJadwal.map((j) => j.kelasName)).size}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Mata Pelajaran
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(filteredJadwal.map((j) => j.mataPelajaranKode)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      {viewMode === "week" ? (
        /* Weekly View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hariList.map((hari) => (
            <Card key={hari}>
              <CardHeader>
                <CardTitle className="text-base">{hari}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {jadwalByHari[hari].length} jadwal
                </p>
              </CardHeader>
              <CardContent className="space-y-2 min-h-[200px]">
                {jadwalByHari[hari].length > 0 ? (
                  jadwalByHari[hari].map((jadwal) => (
                    <JadwalCard key={jadwal.id} jadwal={jadwal} />
                  ))
                ) : (
                  <div className="flex items-center justify-center h-[180px] text-muted-foreground text-sm">
                    Tidak ada jadwal
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* List View */
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hari</TableHead>
                  <TableHead>Waktu</TableHead>
                  <TableHead>Mata Pelajaran</TableHead>
                  <TableHead>Kelas</TableHead>
                  <TableHead>Guru</TableHead>
                  <TableHead>Ruangan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJadwal.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center text-muted-foreground"
                    >
                      Tidak ada jadwal
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredJadwal
                    .sort((a, b) => {
                      const hariCompare =
                        hariList.indexOf(a.hari) - hariList.indexOf(b.hari);
                      if (hariCompare !== 0) return hariCompare;
                      return a.jamMulai.localeCompare(b.jamMulai);
                    })
                    .map((jadwal) => {
                      const mapel = mataPelajaranMap[
                        jadwal.mataPelajaranKode
                      ] || {
                        nama: jadwal.mataPelajaranKode,
                        variant: "outline",
                      };
                      return (
                        <TableRow key={jadwal.id}>
                          <TableCell className="font-medium">
                            {jadwal.hari}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {jadwal.jamMulai} - {jadwal.jamSelesai}
                          </TableCell>
                          <TableCell>
                            <span className={mapel.color}>{mapel.nama}</span>
                          </TableCell>
                          <TableCell>{jadwal.kelasName}</TableCell>
                          <TableCell>{jadwal.guruId}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {jadwal.ruangan}
                          </TableCell>
                        </TableRow>
                      );
                    })
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
