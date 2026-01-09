import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { TableListGuru } from "../components/TableListGuru";
import { dummyGuru } from "@/data";
import { useFilterGuru } from "../hooks/useFilterGuru";
import { SearchInput } from "@/features/siswa/components/SearchInput";

export default function DashboardGuru() {
  const { filterGuru, handleChangeSearch, search } = useFilterGuru();
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="List Semua Guru"
        description="Kelola informasi dan data guru sekolah"
      >
        <SearchInput
          onChange={(e) => handleChangeSearch(e.target.value)}
          value={search}
        />
      </HeaderDashboard>
      <TableListGuru guru={filterGuru} />
    </DashboardLayout>
  );
}
