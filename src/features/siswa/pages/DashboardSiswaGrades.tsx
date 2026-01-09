import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { TableGradesSiswa } from "../components/TableGradesSiswa";
import { dummyNilai } from "@/data";

export default function DashboardSiswaGrades() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="Nilai Siswa"
        description="Pantau dan kelola perkembangan nilai akademik siswa"
      />
      <TableGradesSiswa grades={dummyNilai} />
    </DashboardLayout>
  );
}
