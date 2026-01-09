import { dummyGuru } from "@/data";
import { useState } from "react";

export function useFilterGuru() {
  const [search, setSearch] = useState<string>("");

  const filterGuru = dummyGuru.filter((data) => {
    const searchLower = search.toLowerCase();

    const matchSearch =
      !search || data.name.toLowerCase().includes(searchLower);

    return matchSearch;
  });

  function handleChangeSearch(value: string) {
    setSearch(value);
  }
  return {
    search,
    handleChangeSearch,
    filterGuru,
  };
}
