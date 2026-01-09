import { dummyJadwalPelajaran, hariList } from "@/data";
import { JadwalPelajaran } from "@/types/types";
import { useState } from "react";

export function useFilterScheduleGuru() {
  const [selectedGuru, setSelectedGuru] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"week" | "list">("week");

  // Get unique guru list
  const guruList = Array.from(
    new Set(dummyJadwalPelajaran.map((j) => j.guruId))
  );

  // Filter jadwal
  const filteredJadwal =
    selectedGuru === "all"
      ? dummyJadwalPelajaran
      : dummyJadwalPelajaran.filter((j) => j.guruId === selectedGuru);

  // Group by hari
  const jadwalByHari = hariList.reduce((acc, hari) => {
    acc[hari] = filteredJadwal
      .filter((j) => j.hari === hari)
      .sort((a, b) => a.jamMulai.localeCompare(b.jamMulai));
    return acc;
  }, {} as Record<string, JadwalPelajaran[]>);

  return {
    selectedGuru,
    viewMode,
    guruList,
    filteredJadwal,
    jadwalByHari,
    setSelectedGuru,
    setViewMode,
  };
}
