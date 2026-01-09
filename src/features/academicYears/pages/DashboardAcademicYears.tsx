import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import StatsAcademicYears from "../components/StatsAcademicYears";

export default function DashboardStatsAcademicYears() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Tahun Ajaran"
        description="Kelola Informasi Selama Tahun Ajaran"
      />
      <StatsAcademicYears />
    </DashboardLayout>
  );
}
