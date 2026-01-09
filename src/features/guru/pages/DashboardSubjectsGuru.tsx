import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import SubjectGuru from "../components/SubjectGuru";
import { dummyMataPelajaran } from "@/data";

export default function DashboardSubjectsGuru() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Semua Mata Pelajaran"
        description="Kelola informasi dan data Mata Pelajaran sekolah"
      />
      <SubjectGuru subjects={dummyMataPelajaran} />
    </DashboardLayout>
  );
}
