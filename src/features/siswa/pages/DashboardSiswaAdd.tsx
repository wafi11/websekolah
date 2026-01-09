import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { FormSiswa } from "../components/FormSiswa";

export default function DashboardSiswaAdd() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Tambah Data Siswa"
        description="Lengkapi informasi siswa baru untuk didaftarkan ke sistem"
      />{" "}
      <FormSiswa />
    </DashboardLayout>
  );
}
