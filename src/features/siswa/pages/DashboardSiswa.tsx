import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { TableListSiswa } from "../components/TableSiswa";
import { dummySiswa } from "@/data";
import { SearchInput } from "../components/SearchInput";
import { useFilterSiswa } from "../hooks/useFilterSiswa";
import { ChangeEvent } from "react";

export default function DashboardSiswa() {
  const { filterSiswa, handleChange, search } = useFilterSiswa();
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Daftar Siswa"
        description="Kelola informasi dan data siswa sekolah"
      >
        <SearchInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
          value={search}
        />
      </HeaderDashboard>
      <TableListSiswa siswa={filterSiswa} />
    </DashboardLayout>
  );
}
