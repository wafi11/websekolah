import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { FormGuru } from "../components/FormGuru";

export default function DashboardAddGuru() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Tambah Guru"
        description="Kelola informasi dan data guru sekolah"
      />
      <FormGuru />
    </DashboardLayout>
  );
}
