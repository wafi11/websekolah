import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { dummyKelas, kelasList } from "@/data";
import { CardKelas } from "../components/CardKelas";

export default function DashboardCardKelas() {
  return (
    <DashboardLayout>
      <HeaderDashboard
        title="List Semua Kelas"
        description="Kelola informasi dan data kelas sekolah"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyKelas.map((item) => (
          <CardKelas kelas={item} />
        ))}
      </section>
    </DashboardLayout>
  );
}
