import { dummySiswa } from "@/data";
import { useState } from "react";

export function useFilterSiswa() {
  const [search, setSearch] = useState<string>("");

  const filterSiswa = dummySiswa.filter((data) => {
    // Jika search kosong, tampilkan semua data
    if (!search) return true;

    const searchLower = search.toLowerCase();

    // Cek nama siswa
    const matchName = data.name.toLowerCase().includes(searchLower);

    // Cek NISN
    const matchNISN = data.nisn.toLowerCase().includes(searchLower);

    // Cek alamat
    const matchAlamat = data.alamat.toLowerCase().includes(searchLower);

    // Cek nama wali siswa
    const matchWali = data.walisiswa.some(
      (wali) =>
        wali.name.toLowerCase().includes(searchLower) ||
        wali.phoneNumber.includes(searchLower)
    );

    // Cek kelas (jika kelas berupa string array)
    const matchKelas = data.kelas.some((kelas) =>
      kelas.toString().toLowerCase().includes(searchLower)
    );

    // Return true jika salah satu match
    return matchName || matchNISN || matchAlamat || matchWali || matchKelas;
  });

  function allNameSiswa(): string[] {
    const data = dummySiswa.map((v) => v.name);
    return data;
  }

  function handleChange(value: string) {
    setSearch(value);
  }

  return {
    search,
    filterSiswa, // Jangan lupa return hasil filter
    handleChange,
    allNameSiswa,
  };
}
