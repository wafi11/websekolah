import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import {
  attendanceStats,
  classPerformance,
  mainStats,
  recentActivities,
  todaySchedule,
  topPerformers,
} from "@/data/Dashboard";
import {
  Award,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <HeaderDashboard />

      {/* Main Statistics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mainStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                {stat.change !== "0" && (
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kehadiran Hari Ini */}
        <div className="lg:col-span-1 bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Kehadiran Hari Ini
            </h3>
          </div>
          <div className="space-y-3">
            {attendanceStats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`${stat.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {stat.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                Total Siswa
              </span>
              <span className="text-sm font-bold text-primary">450</span>
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Aktivitas Terbaru
            </h3>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div
                    className={`h-10 w-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {activity.class}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Jadwal Hari Ini */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Jadwal Hari Ini
            </h3>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((schedule, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-accent/50"
              >
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-foreground">
                      {schedule.subject}
                    </p>
                    <span className="text-xs font-medium text-muted-foreground">
                      {schedule.class}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{schedule.time}</span>
                    <span>•</span>
                    <span>{schedule.teacher}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">
              Siswa Berprestasi
            </h3>
          </div>
          <div className="space-y-3">
            {topPerformers.map((student, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex-shrink-0">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? "bg-yellow-100 text-yellow-700"
                        : index === 1
                        ? "bg-gray-100 text-gray-700"
                        : index === 2
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    #{student.rank}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {student.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {student.class}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">
                    {student.score}
                  </p>
                  <p className="text-xs text-muted-foreground">Rata-rata</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performa Per Kelas */}
      <section className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">
            Performa Per Kelas
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Kelas
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Rata-rata Nilai
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Jumlah Siswa
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Kehadiran
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {classPerformance.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-accent transition-colors"
                >
                  <td className="py-3 px-4 text-sm font-medium text-foreground">
                    {item.class}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {item.avgScore}
                      </span>
                      <div className="w-20 bg-muted rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{ width: `${item.avgScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground">
                    {item.students} siswa
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground">
                    {item.attendance}%
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.avgScore >= 85
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.avgScore >= 85 ? "Sangat Baik" : "Baik"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
