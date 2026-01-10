"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    LineChart,
    Line,
} from "recharts";
import { DollarSign, Users, TrendingUp, AlertCircle } from "lucide-react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { FormatCurrency } from "@/utils/format";

// Data untuk status pembayaran
export const chartStatus = [
    { name: "Lunas", value: 245 },
    { name: "Pending", value: 38 },
    { name: "Belum Bayar", value: 17 },
];

// Data SPP per bulan (6 bulan terakhir)
export const chartPerBulan = [
    { bulan: "Agu", total: 8500000, siswa: 250 },
    { bulan: "Sep", total: 9200000, siswa: 268 },
    { bulan: "Okt", total: 8800000, siswa: 255 },
    { bulan: "Nov", total: 9500000, siswa: 275 },
    { bulan: "Des", total: 9100000, siswa: 262 },
    { bulan: "Jan", total: 10200000, siswa: 295 },
];

// Data pembayaran per kelas
export const chartPerKelas = [
    { kelas: "X", lunas: 85, pending: 10, belum: 5 },
    { kelas: "XI", lunas: 80, pending: 15, belum: 5 },
    { kelas: "XII", lunas: 80, pending: 13, belum: 7 },
];

// Data trend pembayaran tepat waktu
export const chartTrendTepat = [
    { bulan: "Agu", persentase: 82 },
    { bulan: "Sep", persentase: 85 },
    { bulan: "Okt", persentase: 79 },
    { bulan: "Nov", persentase: 87 },
    { bulan: "Des", persentase: 84 },
    { bulan: "Jan", persentase: 90 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"];
const KELAS_COLORS = ["#3b82f6", "#8b5cf6", "#ec4899"];



export default function DashboardReports() {
    // Hitung statistik
    const totalSiswa = chartStatus.reduce((sum, item) => sum + item.value, 0);
    const totalPendapatan = chartPerBulan.reduce((sum, item) => sum + item.total, 0);
    const persentaseLunas = ((chartStatus[0].value / totalSiswa) * 100).toFixed(1);
    const tunggakan = (chartStatus[1].value + chartStatus[2].value) * 350000; // Asumsi SPP 350k

    return (
        <DashboardLayout >

            <HeaderDashboard title="Laporan SPP" description="Periode: Tahun Ajaran 2024/2025" />

            {/* Cards Statistik */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">
                            Total Siswa
                        </CardTitle>
                        <Users className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalSiswa}</div>
                        <p className="text-xs text-gray-500 mt-1">Siswa aktif</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">
                            Total Pendapatan
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{FormatCurrency(totalPendapatan)}</div>
                        <p className="text-xs text-gray-500 mt-1">6 bulan terakhir</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">
                            Tingkat Pembayaran
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">{persentaseLunas}%</div>
                        <p className="text-xs text-gray-500 mt-1">Siswa lunas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">
                            Total Tunggakan
                        </CardTitle>
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{FormatCurrency(tunggakan)}</div>
                        <p className="text-xs text-gray-500 mt-1">{chartStatus[1].value + chartStatus[2].value} siswa</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 1 */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* Bar Chart - SPP per Bulan */}
                <Card>
                    <CardHeader>
                        <CardTitle>Total SPP per Bulan</CardTitle>
                        <p className="text-sm text-gray-500">Pendapatan 6 bulan terakhir</p>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartPerBulan}>
                                <XAxis dataKey="bulan" />
                                <YAxis tickFormatter={(value) => `${value / 1000000}jt`} />
                                <Tooltip
                                    formatter={(value?: number) => FormatCurrency(value as number)}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px'
                                    }}
                                />
                                <Bar
                                    dataKey="total"
                                    fill="#3b82f6"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Pie Chart - Status Pembayaran */}
                <Card>
                    <CardHeader>
                        <CardTitle>Status Pembayaran</CardTitle>
                        <p className="text-sm text-gray-500">Distribusi status bulan ini</p>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartStatus}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={110}
                                    label={({ name, percent }) =>
                                        `${name} ${(percent as number * 100).toFixed(0)}%`
                                    }
                                >
                                    {chartStatus.map((_, index) => (
                                        <Cell key={index} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Row 2 */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Stacked Bar Chart - Status per Kelas */}
                <Card>
                    <CardHeader>
                        <CardTitle>Status Pembayaran per Kelas</CardTitle>
                        <p className="text-sm text-gray-500">Breakdown per tingkat kelas</p>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartPerKelas}>
                                <XAxis dataKey="kelas" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="lunas" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} />
                                <Bar dataKey="pending" stackId="a" fill="#facc15" radius={[0, 0, 0, 0]} />
                                <Bar dataKey="belum" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Line Chart - Trend Pembayaran Tepat Waktu */}
                <Card>
                    <CardHeader>
                        <CardTitle>Trend Pembayaran Tepat Waktu</CardTitle>
                        <p className="text-sm text-gray-500">Persentase pembayaran sebelum tanggal 10</p>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartTrendTepat}>
                                <XAxis dataKey="bulan" />
                                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                                <Tooltip formatter={(value?: number) => `${value}%`} />
                                <Line
                                    type="monotone"
                                    dataKey="persentase"
                                    stroke="#8b5cf6"
                                    strokeWidth={3}
                                    dot={{ fill: '#8b5cf6', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}