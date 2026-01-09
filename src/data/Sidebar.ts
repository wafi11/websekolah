import {
  Award,
  Book,
  BookOpen,
  Building,
  Calendar,
  CalendarDays,
  CheckCircle,
  CheckSquare,
  CreditCard,
  Crown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  List,
  Receipt,
  School,
  Settings,
  Shield,
  User,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
export type DataSidebarProps = {
  name: string;
  link: string;
  icon?: string;
  children?: DataSidebarProps[];
};
export const iconMap: { [key: string]: any } = {
  LayoutDashboard,
  Users,
  GraduationCap,
  Crown,
  BookOpen,
  Wallet,
  Settings,
  List,
  UserPlus,
  UserCheck,
  Calendar,
  School,
  CheckSquare,
  Award,
  User,
  FileText,
  CheckCircle,
  CalendarDays,
  Book,
  CreditCard,
  Receipt,
  Building,
  Shield,
};

export const DataSidebar: DataSidebarProps[] = [
  {
    name: "Dashboard",
    link: "/dashboard/dashboard",
    icon: "LayoutDashboard",
  },
  {
    name: "Wali Murid",
    link: "/dashboard/wali-murid",
    icon: "Users",
    children: [
      {
        name: "Daftar Wali Murid",
        link: "/dashboard/wali-murid/list",
        icon: "List",
      },
      {
        name: "Tambah Wali Murid",
        link: "/dashboard/wali-murid/add",
        icon: "UserPlus",
      },
      {
        name: "Data Siswa",
        link: "/dashboard/wali-murid/students",
        icon: "UserCheck",
      },
    ],
  },
  {
    name: "Guru",
    link: "/dashboard/guru",
    icon: "GraduationCap",
    children: [
      {
        name: "Daftar Guru",
        link: "/dashboard/guru/list",
        icon: "List",
      },
      {
        name: "Tambah Guru",
        link: "/dashboard/guru/add",
        icon: "UserPlus",
      },
      {
        name: "Jadwal Mengajar",
        link: "/dashboard/guru/schedule",
        icon: "Calendar",
      },
      {
        name: "Mata Pelajaran",
        link: "/dashboard/guru/subjects",
        icon: "BookOpen",
      },
    ],
  },
  {
    name: "Siswa",
    link: "/dashboard/siswa",
    icon: "Users",
    children: [
      {
        name: "Daftar Siswa",
        link: "/dashboard/siswa/list",
        icon: "List",
      },
      {
        name: "Tambah Siswa",
        link: "/dashboard/siswa/add",
        icon: "UserPlus",
      },
      {
        name: "Data Kelas",
        link: "/dashboard/siswa/classes",
        icon: "School",
      },
      {
        name: "Absensi",
        link: "/dashboard/siswa/attendance",
        icon: "CheckSquare",
      },
      {
        name: "Nilai",
        link: "/dashboard/siswa/grades",
        icon: "Award",
      },
    ],
  },
  {
    name: "Akademik",
    link: "/dashboard/akademik",
    icon: "BookOpen",
    children: [
      {
        name: "Tahun Ajaran",
        link: "/dashboard/akademik/academic-year",
        icon: "Calendar",
      },
      // {
      //   name: "Kelas",
      //   link: "/dashboard/akademik/classes",
      //   icon: "School",
      // },
      // {
      //   name: "Mata Pelajaran",
      //   link: "/dashboard/akademik/subjects",
      //   icon: "Book",
      // },
      // {
      //   name: "Jadwal Pelajaran",
      //   link: "/dashboard/akademik/schedule",
      //   icon: "CalendarDays",
      // },
    ],
  },
  {
    name: "Keuangan",
    link: "/dashboard/keuangan",
    icon: "Wallet",
    children: [
      {
        name: "Pembayaran SPP",
        link: "/dashboard/keuangan/spp",
        icon: "CreditCard",
      },
      {
        name: "Laporan Keuangan",
        link: "/dashboard/keuangan/reports",
        icon: "FileText",
      },
      {
        name: "Tagihan",
        link: "/dashboard/keuangan/bills",
        icon: "Receipt",
      },
    ],
  },
  {
    name: "Pengaturan",
    link: "/dashboard/settings",
    icon: "Settings",
    children: [
      {
        name: "Profil Sekolah",
        link: "/dashboard/settings/school-profile",
        icon: "Building",
      },
      {
        name: "Pengguna",
        link: "/dashboard/settings/users",
        icon: "Users",
      },
      {
        name: "Role & Permission",
        link: "/dashboard/settings/roles",
        icon: "Shield",
      },
    ],
  },
];
