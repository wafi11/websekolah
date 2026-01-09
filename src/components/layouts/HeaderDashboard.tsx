import { ReactNode } from "react";

export interface DashboardProps {
  title?: string;
  children?: ReactNode;
  description?: string;
}
export function HeaderDashboard({
  description = "Dashboard",
  children,
  title = "Selamat datang di Sistem Informasi Sekolah SMP Negeri 1",
}: DashboardProps) {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}
