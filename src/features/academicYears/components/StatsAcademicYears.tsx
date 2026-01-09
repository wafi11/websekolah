import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, GraduationCap, School, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data - replace with your actual data
const academicYears = [
  {
    startYear: 2019,
    endYear: 2020,
    jumlahSiswa: 450,
    jumlahGuru: 28,
    jumlahKelas: 12,
    kelulusan: 95,
  },
  {
    startYear: 2020,
    endYear: 2021,
    jumlahSiswa: 480,
    jumlahGuru: 30,
    jumlahKelas: 13,
    kelulusan: 96,
  },
  {
    startYear: 2021,
    endYear: 2022,
    jumlahSiswa: 520,
    jumlahGuru: 32,
    jumlahKelas: 14,
    kelulusan: 97,
  },
  {
    startYear: 2022,
    endYear: 2023,
    jumlahSiswa: 565,
    jumlahGuru: 35,
    jumlahKelas: 15,
    kelulusan: 98,
  },
  {
    startYear: 2023,
    endYear: 2024,
    jumlahSiswa: 610,
    jumlahGuru: 38,
    jumlahKelas: 16,
    kelulusan: 98.5,
  },
  {
    startYear: 2024,
    endYear: 2025,
    jumlahSiswa: 645,
    jumlahGuru: 40,
    jumlahKelas: 17,
    kelulusan: 99,
  },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"];

export default function StatsAcademicYears() {
  const chartData = academicYears.map((item) => ({
    tahun: `${item.startYear}/${item.endYear}`,
    siswa: item.jumlahSiswa,
    guru: item.jumlahGuru,
    kelas: item.jumlahKelas,
    kelulusan: item.kelulusan,
    rasio: (item.jumlahSiswa / item.jumlahGuru).toFixed(1),
  }));

  const latestData = academicYears[academicYears.length - 1];

  const distributionData = [
    { name: "Kelas X", value: Math.round(latestData.jumlahSiswa * 0.35) },
    { name: "Kelas XI", value: Math.round(latestData.jumlahSiswa * 0.33) },
    { name: "Kelas XII", value: Math.round(latestData.jumlahSiswa * 0.32) },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-semibold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Siswa
            </CardTitle>
            <Users className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {latestData.jumlahSiswa}
            </div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />+
              {latestData.jumlahSiswa - academicYears[0].jumlahSiswa} dari{" "}
              {academicYears[0].startYear}
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Guru
            </CardTitle>
            <GraduationCap className="h-5 w-5 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {latestData.jumlahGuru}
            </div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />+
              {latestData.jumlahGuru - academicYears[0].jumlahGuru} dari{" "}
              {academicYears[0].startYear}
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pink-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Jumlah Kelas
            </CardTitle>
            <School className="h-5 w-5 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {latestData.jumlahKelas}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Rata-rata{" "}
              {Math.round(latestData.jumlahSiswa / latestData.jumlahKelas)}{" "}
              siswa/kelas
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Tingkat Kelulusan
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {latestData.kelulusan}%
            </div>
            <p className="text-xs text-green-600 mt-1">
              Meningkat dari {academicYears[0].kelulusan}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              Perkembangan Siswa & Guru
            </CardTitle>
            <p className="text-sm text-gray-500">
              Tren pertumbuhan selama 6 tahun terakhir
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSiswa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorGuru" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="tahun" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "10px" }} />
                <Area
                  type="monotone"
                  dataKey="siswa"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorSiswa)"
                  strokeWidth={3}
                  name="Jumlah Siswa"
                />
                <Area
                  type="monotone"
                  dataKey="guru"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#colorGuru)"
                  strokeWidth={3}
                  name="Jumlah Guru"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              Jumlah Kelas per Tahun
            </CardTitle>
            <p className="text-sm text-gray-500">Ekspansi kapasitas sekolah</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="tahun" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "10px" }} />
                <Bar
                  dataKey="kelas"
                  fill="#ec4899"
                  radius={[8, 8, 0, 0]}
                  name="Jumlah Kelas"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              Rasio Siswa per Guru
            </CardTitle>
            <p className="text-sm text-gray-500">Efektivitas pengajaran</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="tahun" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: "10px" }} />
                <Line
                  type="monotone"
                  dataKey="rasio"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#f59e0b" }}
                  activeDot={{ r: 7 }}
                  name="Rasio Siswa/Guru"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">
              Distribusi Siswa per Tingkat
            </CardTitle>
            <p className="text-sm text-gray-500">
              Tahun ajaran {latestData.startYear}/{latestData.endYear}
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${((percent as number) * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {distributionData.map((item, idx) => (
                <div key={idx} className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600">{item.name}</div>
                  <div
                    className="text-lg font-bold"
                    style={{ color: COLORS[idx] }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tingkat Kelulusan Chart */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Tingkat Kelulusan per Tahun
          </CardTitle>
          <p className="text-sm text-gray-500">Persentase keberhasilan siswa</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="tahun" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                domain={[90, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "10px" }} />
              <Line
                type="monotone"
                dataKey="kelulusan"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 5, fill: "#10b981" }}
                activeDot={{ r: 7 }}
                name="Tingkat Kelulusan (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
