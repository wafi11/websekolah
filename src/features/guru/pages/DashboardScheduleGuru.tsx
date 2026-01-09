import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { ScheduleGuru } from "../components/ScheduleGuru";

export default function DashboardScheduleGuru() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Jadwal Semua Guru"
        description="Kelola informasi dan data guru sekolah"
      />
      <ScheduleGuru />
    </DashboardLayout>
  );
}
