import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { useFilterWaliMurid } from "../hooks/useFilterWaliMurid";
import { TableListWaliMurid } from "../components/TableListWaliMurid";
import { SearchInput } from "@/features/siswa/components/SearchInput";

export default function DashboardListWaliSiswa() {
  const { filteredWaliMurid, handleChange, search } = useFilterWaliMurid();
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="List Semua Wali Murid"
        description="Kelola Semua Informasi Wali Murid"
      >
        <SearchInput onChange={handleChange} value={search} />
      </HeaderDashboard>
      <TableListWaliMurid data={filteredWaliMurid} />
    </DashboardLayout>
  );
}
