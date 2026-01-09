import { dummyAbsensi } from "@/data";
import { statusAbsensi } from "@/types/types";
import { useState } from "react";

export const defaultDate = new Date().toISOString().split("T")[0];

export function useFilterAttendanceSiswa() {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<statusAbsensi | "all">("all");
  const [date, setDate] = useState<string>(defaultDate);

  const filterKelas = dummyAbsensi.filter((data) => {
    const searchLower = search.toLowerCase();

    const matchSearch =
      !search ||
      data.kelasName.toLowerCase().includes(searchLower) ||
      data.nameSiswa.toLowerCase().includes(searchLower);

    const matchStatus = status === "all" || data.status === status;

    const matchDate = !date || data.tanggal === date;

    return matchSearch && matchStatus && matchDate;
  });

  function handleChangeSearch(value: string) {
    setSearch(value);
  }

  function handleChangeStatus(value: statusAbsensi | "all") {
    setStatus(value);
  }

  return {
    search,
    status,
    date,
    filterKelas,
    handleChangeSearch,
    handleChangeStatus,
    setDate,
  };
}
