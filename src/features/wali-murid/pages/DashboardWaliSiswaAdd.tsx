import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { FormWaliSiswa } from "../components/FormWaliSiswa";

export default function DashboardAddWaliSiswa() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Tambah Wali Siswa"
        description="Kelola Wali Siswa"
      />
      <FormWaliSiswa />
    </DashboardLayout>
  );
}
