import {
  AlertCircle,
  Award,
  BookOpen,
  CheckCircle,
  FileText,
  GraduationCap,
  School,
  Users,
} from "lucide-react";

// Data Statistik Utama
export const mainStats = [
  {
    icon: Users,
    label: "Total Siswa",
    value: "450",
    change: "+12",
    trend: "up",
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    label: "Total Guru",
    value: "35",
    change: "+2",
    trend: "up",
    color: "text-green-600",
  },
  {
    icon: School,
    label: "Total Kelas",
    value: "15",
    change: "0",
    trend: "stable",
    color: "text-purple-600",
  },
  {
    icon: BookOpen,
    label: "Mata Pelajaran",
    value: "12",
    change: "+1",
    trend: "up",
    color: "text-orange-600",
  },
];

// Data Kehadiran
export const attendanceStats = [
  { label: "Hadir", value: 425, percentage: 94, color: "bg-green-500" },
  { label: "Sakit", value: 15, percentage: 3, color: "bg-yellow-500" },
  { label: "Izin", value: 8, percentage: 2, color: "bg-blue-500" },
  { label: "Alpha", value: 2, percentage: 1, color: "bg-red-500" },
];

// Aktivitas Terbaru
export const recentActivities = [
  {
    type: "assignment",
    title: "Tugas Matematika Bab 5 telah dikumpulkan",
    class: "Kelas 8A",
    time: "2 jam yang lalu",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    type: "grade",
    title: "Nilai Ujian Bahasa Indonesia telah diinput",
    class: "Kelas 9B",
    time: "3 jam yang lalu",
    icon: Award,
    color: "bg-green-100 text-green-600",
  },
  {
    type: "attendance",
    title: "Absensi kelas telah direkap",
    class: "Kelas 7C",
    time: "5 jam yang lalu",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
  },
  {
    type: "announcement",
    title: "Pengumuman: Libur Semester",
    class: "Semua Kelas",
    time: "1 hari yang lalu",
    icon: AlertCircle,
    color: "bg-orange-100 text-orange-600",
  },
];

// Jadwal Hari Ini
export const todaySchedule = [
  {
    subject: "Matematika",
    class: "8A",
    time: "07:30 - 09:00",
    teacher: "Pak Budi",
  },
  {
    subject: "Bahasa Indonesia",
    class: "8B",
    time: "09:15 - 10:45",
    teacher: "Bu Siti",
  },
  { subject: "IPA", class: "9A", time: "11:00 - 12:30", teacher: "Bu Ani" },
  {
    subject: "Bahasa Inggris",
    class: "7C",
    time: "13:00 - 14:30",
    teacher: "Pak Ahmad",
  },
];

// Top Performers (Siswa Berprestasi)
export const topPerformers = [
  { name: "Ahmad Fauzi", class: "9A", score: 95.5, rank: 1 },
  { name: "Siti Nurhaliza", class: "9B", score: 94.2, rank: 2 },
  { name: "Budi Santoso", class: "8A", score: 93.8, rank: 3 },
  { name: "Dewi Lestari", class: "8B", score: 92.9, rank: 4 },
  { name: "Rizki Ramadan", class: "9A", score: 92.1, rank: 5 },
];

// Statistik Per Kelas
export const classPerformance = [
  { class: "7A", avgScore: 85.2, students: 30, attendance: 96 },
  { class: "7B", avgScore: 83.5, students: 28, attendance: 94 },
  { class: "8A", avgScore: 87.8, students: 32, attendance: 97 },
  { class: "8B", avgScore: 84.1, students: 30, attendance: 93 },
  { class: "9A", avgScore: 89.5, students: 35, attendance: 98 },
];

export const kelasList: string[] = [
  "X IPA 1",
  "X IPA 2",
  "X IPS 1",
  "X IPS 2",
  "XI IPA 1",
  "XI IPA 2",
  "XI IPS 1",
  "XI IPS 2",
  "XII IPA 1",
  "XII IPA 2",
  "XII IPS 1",
  "XII IPS 2",
];
