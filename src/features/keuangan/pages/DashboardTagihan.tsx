"use client";

import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { ActionComponent } from "@/features/dashboard/components/ActionComponent";
import { FormatCurrency, formatDate } from "@/utils/format";
import {
    Download,
    Search
} from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "../components/TableSpp";

// Data dummy tagihan
const tagihanData = [
    {
        id: "TGH001",
        nis: "2024001",
        nama: "Ahmad Fauzi",
        kelas: "X - A",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "lunas",
        tglBayar: "2025-01-05",
        metodeBayar: "Transfer Bank",
    },
    {
        id: "TGH002",
        nis: "2024002",
        nama: "Siti Nurhaliza",
        kelas: "X - B",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "pending",
        tglBayar: null,
        metodeBayar: null,
    },
    {
        id: "TGH003",
        nis: "2024003",
        nama: "Budi Santoso",
        kelas: "XI - A",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "belum",
        tglBayar: null,
        metodeBayar: null,
    },
    {
        id: "TGH004",
        nis: "2024004",
        nama: "Dewi Lestari",
        kelas: "XII - A",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "lunas",
        tglBayar: "2025-01-03",
        metodeBayar: "Cash",
    },
    {
        id: "TGH005",
        nis: "2024005",
        nama: "Rizki Ramadhan",
        kelas: "X - A",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "lunas",
        tglBayar: "2025-01-07",
        metodeBayar: "Transfer Bank",
    },
    {
        id: "TGH006",
        nis: "2024006",
        nama: "Ayu Wulandari",
        kelas: "XI - B",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "pending",
        tglBayar: null,
        metodeBayar: null,
    },
    {
        id: "TGH007",
        nis: "2024007",
        nama: "Farhan Hakim",
        kelas: "XII - B",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "belum",
        tglBayar: null,
        metodeBayar: null,
    },
    {
        id: "TGH008",
        nis: "2024008",
        nama: "Putri Anggraini",
        kelas: "X - B",
        bulan: "Januari 2025",
        nominal: 350000,
        status: "lunas",
        tglBayar: "2025-01-08",
        metodeBayar: "E-Wallet",
    },
];


export default function DashboardTagihan() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("semua");

    // Filter data
    const filteredData = tagihanData.filter((item) => {
        const matchSearch =
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.nis.includes(searchQuery) ||
            item.kelas.toLowerCase().includes(searchQuery.toLowerCase());

        const matchStatus =
            filterStatus === "semua" || item.status === filterStatus;

        return matchSearch && matchStatus;
    });

    // Statistik
    const totalTagihan = tagihanData.length;
    const totalLunas = tagihanData.filter((t) => t.status === "lunas").length;
    const totalPending = tagihanData.filter((t) => t.status === "pending").length;
    const totalBelum = tagihanData.filter((t) => t.status === "belum").length;
    const totalNominal = tagihanData.reduce((sum, t) => sum + t.nominal, 0);
    const totalTerbayar = tagihanData
        .filter((t) => t.status === "lunas")
        .reduce((sum, t) => sum + t.nominal, 0);


    return (
        <DashboardLayout >

            <HeaderDashboard title="Tagihan SPP" description=" Kelola dan pantau tagihan pembayaran SPP siswa" />

            {/* Cards Statistik */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                        Total Tagihan
                    </div>
                    <div className="text-2xl font-bold">{totalTagihan}</div>
                    <p className="text-xs text-gray-500 mt-1">
                        {FormatCurrency(totalNominal)}
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                        Sudah Lunas
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                        {totalLunas}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        {FormatCurrency(totalTerbayar)}
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                        Pending
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">
                        {totalPending}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        {FormatCurrency(totalPending * 350000)}
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                        Belum Bayar
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                        {totalBelum}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        {FormatCurrency(totalBelum * 350000)}
                    </p>
                </div>
            </div>

            {/* Filter & Search Section */}
            <div className="bg-white rounded-lg shadow mb-6 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Cari nama, NIS, atau kelas..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Filter Status */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilterStatus("semua")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterStatus === "semua"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => setFilterStatus("lunas")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterStatus === "lunas"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            Lunas
                        </button>
                        <button
                            onClick={() => setFilterStatus("pending")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterStatus === "pending"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => setFilterStatus("belum")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filterStatus === "belum"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            Belum Bayar
                        </button>
                    </div>

                    {/* Export Button */}
                    <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Tabel Tagihan */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold">Daftar Tagihan</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Menampilkan {filteredData.length} dari {totalTagihan} tagihan
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    ID
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    NIS
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Nama Siswa
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Kelas
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Bulan
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Nominal
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Status
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Tgl Bayar
                                </th>
                                <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((tagihan) => (
                                <tr key={tagihan.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4 text-sm">{tagihan.id}</td>
                                    <td className="py-3 px-4 text-sm">{tagihan.nis}</td>
                                    <td className="py-3 px-4 text-sm font-medium">
                                        {tagihan.nama}
                                    </td>
                                    <td className="py-3 px-4 text-sm">{tagihan.kelas}</td>
                                    <td className="py-3 px-4 text-sm">{tagihan.bulan}</td>
                                    <td className="py-3 px-4 text-sm font-semibold">
                                        {FormatCurrency(tagihan.nominal)}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        {StatusBadge({
                                            status: tagihan.status
                                        })}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        {formatDate(tagihan.tglBayar as string)}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                        <ActionComponent />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}