import { dummyWaliSiswa } from "@/data";
import { ChangeEvent, useMemo, useState } from "react";

export function useFilterWaliMurid() {
  const [search, setSearch] = useState("");

  const filteredWaliMurid = useMemo(() => {
    if (!search.trim()) return dummyWaliSiswa;

    const searchLower = search.toLowerCase();

    return dummyWaliSiswa.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.nameSiswa.toLowerCase().includes(searchLower) ||
        item.alamat.toLowerCase().includes(searchLower)
      );
    });
  }, [search]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return {
    search,
    setSearch,
    filteredWaliMurid,
    handleChange,
  };
}
