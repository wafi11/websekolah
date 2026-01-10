import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { TableListSpp } from "../components/TableSpp";
import { dataSpp } from "@/data";

export default function DashboardKeuanganSpp() {
    return (
        <DashboardLayout>
            <HeaderDashboard />
            <TableListSpp data={dataSpp} />
        </DashboardLayout>
    )
}