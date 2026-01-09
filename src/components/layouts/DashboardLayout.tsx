import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}
export function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Sidebar>{children}</Sidebar>;
}
