import {
  Absensi,
  AcademicYear,
  Guru,
  JadwalPelajaran,
  Kelas,
  MataPelajaran,
  Materi,
  Nilai,
  PengumpulanTugas,
  Tugas,
  WaliSiswa,
  siswa,
} from "@/types/types";

export const dummyKelas: Kelas[] = [
  {
    name: "10-A",
    waliKelas: "Budi Santoso",
    tahunPembelajaran: "2024/2026",
    jumlahMurid: 32,
  },
  {
    name: "10-B",
    waliKelas: "Siti Aminah",
    tahunPembelajaran: "2024/2025",
    jumlahMurid: 30,
  },
  {
    name: "11-IPA-1",
    waliKelas: "Ahmad Dahlan",
    tahunPembelajaran: "2024/2025",
    jumlahMurid: 28,
  },
  {
    name: "11-IPS-1",
    waliKelas: "Rina Wijaya",
    tahunPembelajaran: "2024/2025",
    jumlahMurid: 25,
  },
  {
    name: "12-IPA-2",
    waliKelas: "Dedi Kurniawan",
    tahunPembelajaran: "2024/2025",
    jumlahMurid: 27,
  },
];

export const dummyMataPelajaran: MataPelajaran[] = [
  {
    kode: "MTK001",
    name: "Matematika",
    kkm: 75,
  },
  {
    kode: "FIS001",
    name: "Fisika",
    kkm: 70,
  },
  {
    kode: "BIO001",
    name: "Biologi",
    kkm: 72,
  },
  {
    kode: "ING001",
    name: "Bahasa Inggris",
    kkm: 75,
  },
  {
    kode: "IND001",
    name: "Bahasa Indonesia",
    kkm: 75,
  },
];

export const dummyGuru: Guru[] = [
  {
    name: "Budi Santoso",
    isWaliKelas: true,
    jabatan: ["Guru Matematika", "Wali Kelas 10-A"],
    kelas: [dummyKelas[0], dummyKelas[2]],
  },
  {
    name: "Siti Aminah",
    isWaliKelas: true,
    jabatan: ["Guru Fisika", "Wali Kelas 10-B"],
    kelas: [dummyKelas[1], dummyKelas[4]],
  },
  {
    name: "Ahmad Dahlan",
    isWaliKelas: true,
    jabatan: ["Guru Biologi", "Wali Kelas 11-IPA-1"],
    kelas: [dummyKelas[2], dummyKelas[4]],
  },
  {
    name: "Rina Wijaya",
    isWaliKelas: true,
    jabatan: ["Guru Bahasa Inggris", "Wali Kelas 11-IPS-1"],
    kelas: [dummyKelas[0], dummyKelas[3]],
  },
  {
    name: "Dedi Kurniawan",
    isWaliKelas: true,
    jabatan: ["Guru Bahasa Indonesia", "Wali Kelas 12-IPA-2"],
    kelas: [dummyKelas[3], dummyKelas[4]],
  },
];

export const dummySiswa: siswa[] = [
  {
    name: "Andi Pratama",
    nisn: "0051234567",
    kelas: [dummyKelas[0]],
    alamat: "Jl. Merdeka No. 12, Jakarta Selatan",
    walisiswa: [
      {
        name: "Susanto Pratama",
        phoneNumber: "081234567890",
      },
      {
        name: "Dewi Lestari",
        phoneNumber: "081234567891",
      },
    ],
  },
  {
    name: "Siti Nurhaliza",
    nisn: "0051234568",
    kelas: [dummyKelas[0]],
    alamat: "Jl. Sudirman No. 45, Jakarta Pusat",
    walisiswa: [
      {
        name: "Bambang Hermawan",
        phoneNumber: "081234567892",
      },
    ],
  },
  {
    name: "Rizky Firmansyah",
    nisn: "0051234569",
    kelas: [dummyKelas[2]],
    alamat: "Jl. Gatot Subroto No. 78, Jakarta Timur",
    walisiswa: [
      {
        name: "Firmansyah Hidayat",
        phoneNumber: "081234567893",
      },
      {
        name: "Nurul Fadilah",
        phoneNumber: "081234567894",
      },
    ],
  },
  {
    name: "Putri Ayu Lestari",
    nisn: "0051234570",
    kelas: [dummyKelas[3]],
    alamat: "Jl. Thamrin No. 23, Jakarta Barat",
    walisiswa: [
      {
        name: "Lestari Wijaya",
        phoneNumber: "081234567895",
      },
    ],
  },
  {
    name: "Fajar Ramadhan",
    nisn: "0051234571",
    kelas: [dummyKelas[4]],
    alamat: "Jl. Kuningan No. 56, Jakarta Selatan",
    walisiswa: [
      {
        name: "Ramadhan Putra",
        phoneNumber: "081234567896",
      },
      {
        name: "Sri Mulyani",
        phoneNumber: "081234567897",
      },
    ],
  },
];

export const dummyWaliSiswa: WaliSiswa[] = [
  {
    name: "Susanto Pratama",
    nameSiswa: "Andi Pratama",
    alamat: "Jl. Merdeka No. 12, Jakarta Selatan",
    phoneNumber: "081234567890",
  },
  {
    name: "Dewi Lestari",
    nameSiswa: "Andi Pratama",
    alamat: "Jl. Merdeka No. 12, Jakarta Selatan",
    phoneNumber: "081234567891",
  },
  {
    name: "Bambang Hermawan",
    nameSiswa: "Siti Nurhaliza",
    alamat: "Jl. Sudirman No. 45, Jakarta Pusat",
    phoneNumber: "081234567892",
  },
  {
    name: "Firmansyah Hidayat",
    nameSiswa: "Rizky Firmansyah",
    alamat: "Jl. Gatot Subroto No. 78, Jakarta Timur",
    phoneNumber: "081234567893",
  },
  {
    name: "Nurul Fadilah",
    nameSiswa: "Rizky Firmansyah",
    alamat: "Jl. Gatot Subroto No. 78, Jakarta Timur",
    phoneNumber: "081234567894",
  },
];

export const hariList = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export const mataPelajaranMap: Record<string, { nama: string; color: string }> =
  {
    MTK001: {
      nama: "Matematika",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    FIS001: {
      nama: "Fisika",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    BIO001: {
      nama: "Biologi",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    KIM001: {
      nama: "Kimia",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    },
    ING001: {
      nama: "Bahasa Inggris",
      color: "bg-pink-100 text-pink-700 border-pink-200",
    },
    IND001: {
      nama: "Bahasa Indonesia",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
  };

export const dummyJadwalPelajaran: JadwalPelajaran[] = [
  {
    id: "jadwal-001",
    kelasName: "10-A",
    mataPelajaranKode: "MTK001",
    guruId: "Budi Santoso",
    hari: "Senin",
    jamMulai: "07:30",
    jamSelesai: "09:00",
    ruangan: "R-101",
  },
  {
    id: "jadwal-002",
    kelasName: "10-A",
    mataPelajaranKode: "FIS001",
    guruId: "Siti Aminah",
    hari: "Senin",
    jamMulai: "09:15",
    jamSelesai: "10:45",
    ruangan: "Lab Fisika",
  },
  {
    id: "jadwal-003",
    kelasName: "10-B",
    mataPelajaranKode: "BIO001",
    guruId: "Ahmad Dahlan",
    hari: "Selasa",
    jamMulai: "07:30",
    jamSelesai: "09:00",
    ruangan: "Lab Biologi",
  },
  {
    id: "jadwal-004",
    kelasName: "11-IPA-1",
    mataPelajaranKode: "ING001",
    guruId: "Rina Wijaya",
    hari: "Rabu",
    jamMulai: "10:00",
    jamSelesai: "11:30",
    ruangan: "R-205",
  },
  {
    id: "jadwal-005",
    kelasName: "12-IPA-2",
    mataPelajaranKode: "IND001",
    guruId: "Dedi Kurniawan",
    hari: "Kamis",
    jamMulai: "13:00",
    jamSelesai: "14:30",
    ruangan: "R-301",
  },
];

export const dummyMateri: Materi[] = [
  {
    id: "materi-001",
    judul: "Persamaan Kuadrat",
    deskripsi:
      "Materi tentang persamaan kuadrat meliputi rumus abc dan diskriminan",
    mataPelajaranKode: "MTK001",
    kelasName: "10-A",
    guruId: "Budi Santoso",
    fileUrl: "/files/materi-persamaan-kuadrat.pdf",
    tanggalUpload: "2025-01-05",
  },
  {
    id: "materi-002",
    judul: "Hukum Newton",
    deskripsi:
      "Pembahasan lengkap tentang Hukum Newton I, II, dan III beserta contoh soal",
    mataPelajaranKode: "FIS001",
    kelasName: "10-B",
    guruId: "Siti Aminah",
    fileUrl: "/files/materi-hukum-newton.pdf",
    tanggalUpload: "2025-01-03",
  },
  {
    id: "materi-003",
    judul: "Sel dan Jaringan",
    deskripsi:
      "Materi tentang struktur sel, organel, dan jenis-jenis jaringan pada makhluk hidup",
    mataPelajaranKode: "BIO001",
    kelasName: "11-IPA-1",
    guruId: "Ahmad Dahlan",
    fileUrl: "/files/materi-sel-jaringan.pdf",
    tanggalUpload: "2025-01-02",
  },
  {
    id: "materi-004",
    judul: "Present Perfect Tense",
    deskripsi:
      "Penggunaan present perfect tense dalam kalimat positif, negatif, dan interogatif",
    mataPelajaranKode: "ING001",
    kelasName: "11-IPS-1",
    guruId: "Rina Wijaya",
    fileUrl: "/files/materi-present-perfect.pdf",
    tanggalUpload: "2025-01-04",
  },
  {
    id: "materi-005",
    judul: "Teks Argumentasi",
    deskripsi: "Struktur dan ciri-ciri teks argumentasi serta cara menyusunnya",
    mataPelajaranKode: "IND001",
    kelasName: "12-IPA-2",
    guruId: "Dedi Kurniawan",
    fileUrl: "/files/materi-teks-argumentasi.pdf",
    tanggalUpload: "2025-01-01",
  },
];

export const dummyTugas: Tugas[] = [
  {
    id: "tugas-001",
    judul: "Latihan Soal Persamaan Kuadrat",
    deskripsi:
      "Kerjakan 10 soal tentang persamaan kuadrat yang ada di buku paket halaman 45-47",
    mataPelajaranKode: "MTK001",
    kelasName: "10-A",
    guruId: "Budi Santoso",
    deadline: "2025-01-15",
    maxNilai: 100,
  },
  {
    id: "tugas-002",
    judul: "Laporan Praktikum Hukum Newton",
    deskripsi:
      "Buat laporan praktikum tentang percobaan Hukum Newton II dengan format yang telah ditentukan",
    mataPelajaranKode: "FIS001",
    kelasName: "10-B",
    guruId: "Siti Aminah",
    deadline: "2025-01-20",
    maxNilai: 100,
  },
  {
    id: "tugas-003",
    judul: "Gambar Sel Hewan dan Tumbuhan",
    deskripsi:
      "Gambar dan beri label pada sel hewan dan sel tumbuhan beserta organel-organelnya",
    mataPelajaranKode: "BIO001",
    kelasName: "11-IPA-1",
    guruId: "Ahmad Dahlan",
    deadline: "2025-01-18",
    maxNilai: 100,
  },
  {
    id: "tugas-004",
    judul: "Essay: My Holiday Experience",
    deskripsi:
      "Tulis essay minimal 200 kata tentang pengalaman liburanmu menggunakan Present Perfect Tense",
    mataPelajaranKode: "ING001",
    kelasName: "11-IPS-1",
    guruId: "Rina Wijaya",
    deadline: "2025-01-22",
    maxNilai: 100,
  },
  {
    id: "tugas-005",
    judul: "Menulis Teks Argumentasi",
    deskripsi:
      "Buat teks argumentasi tentang pentingnya pendidikan karakter di sekolah (minimal 5 paragraf)",
    mataPelajaranKode: "IND001",
    kelasName: "12-IPA-2",
    guruId: "Dedi Kurniawan",
    deadline: "2025-01-25",
    maxNilai: 100,
  },
];

export const dummyPengumpulanTugas: PengumpulanTugas[] = [
  {
    id: "pengumpulan-001",
    tugasId: "tugas-001",
    siswaId: "0051234567",
    fileUrl: "/uploads/andi-tugas-persamaan-kuadrat.pdf",
    tanggalKumpul: "2025-01-14",
    nilai: 85,
  },
  {
    id: "pengumpulan-002",
    tugasId: "tugas-001",
    siswaId: "0051234568",
    fileUrl: "/uploads/siti-tugas-persamaan-kuadrat.pdf",
    tanggalKumpul: "2025-01-15",
    nilai: 90,
  },
  {
    id: "pengumpulan-003",
    tugasId: "tugas-002",
    siswaId: "0051234568",
    fileUrl: "/uploads/siti-laporan-newton.pdf",
    tanggalKumpul: "2025-01-19",
    nilai: 88,
  },
  {
    id: "pengumpulan-004",
    tugasId: "tugas-003",
    siswaId: "0051234569",
    jawaban: "Telah menggambar sel hewan dan tumbuhan lengkap dengan label",
    fileUrl: "/uploads/rizky-gambar-sel.jpg",
    tanggalKumpul: "2025-01-17",
    nilai: 92,
  },
  {
    id: "pengumpulan-005",
    tugasId: "tugas-004",
    siswaId: "0051234570",
    jawaban: "Essay tentang pengalaman liburan ke Bali",
    fileUrl: "/uploads/putri-essay-holiday.docx",
    tanggalKumpul: "2025-01-21",
  },
];

export const dummyNilai: Nilai[] = [
  {
    id: "nilai-001",
    siswaId: "0051234567",
    mataPelajaranKode: "MTK001",
    kelasName: "10-A",
    nilai: 85,
    kategori: "UTS",
    tanggal: "2024-12-15",
    guruId: "Budi Santoso",
  },
  {
    id: "nilai-002",
    siswaId: "0051234567",
    mataPelajaranKode: "MTK001",
    kelasName: "10-A",
    nilai: 78,
    kategori: "Quiz",
    tanggal: "2024-12-10",
    guruId: "Budi Santoso",
  },
  {
    id: "nilai-003",
    siswaId: "0051234568",
    mataPelajaranKode: "FIS001",
    kelasName: "10-A",
    nilai: 88,
    kategori: "UTS",
    tanggal: "2024-12-18",
    guruId: "Siti Aminah",
  },
  {
    id: "nilai-004",
    siswaId: "0051234569",
    mataPelajaranKode: "BIO001",
    kelasName: "11-IPA-1",
    nilai: 92,
    kategori: "Tugas",
    tanggal: "2025-01-05",
    guruId: "Ahmad Dahlan",
  },
  {
    id: "nilai-005",
    siswaId: "0051234570",
    mataPelajaranKode: "ING001",
    kelasName: "11-IPS-1",
    nilai: 80,
    kategori: "Quiz",
    tanggal: "2024-12-20",
    guruId: "Rina Wijaya",
  },
];

export const dummyAbsensi: Absensi[] = [
  {
    id: "absen-001",
    nameSiswa: "Andi Pratama",
    kelasName: "10-A",
    tanggal: "2026-01-08",
    status: "Hadir",
  },
  {
    id: "absen-002",
    nameSiswa: "Siti Nurhaliza",
    kelasName: "10-A",
    tanggal: "2026-01-08",
    status: "Hadir",
  },
  {
    id: "absen-003",
    nameSiswa: "Rizky Firmansyah",
    kelasName: "11-IPA-1",
    tanggal: "2026-01-08",
    status: "Sakit",
    keterangan: "Demam",
  },
  {
    id: "absen-004",
    nameSiswa: "Putri Ayu Lestari",
    kelasName: "11-IPS-1",
    tanggal: "2026-01-07",
    status: "Izin",
    keterangan: "Keperluan keluarga",
  },
  {
    id: "absen-005",
    nameSiswa: "Fajar Ramadhan",
    kelasName: "12-IPA-2",
    tanggal: "2026-01-06",
    status: "Alpa",
  },
];

export const academicYears: AcademicYear[] = [
  {
    startYear: "2019",
    endYear: "2020",
    jumlahKelas: 12,
    jumlahMataPelajaran: {
      wajib: 8,
      opsional: 2,
    },
    jumlahSiswa: 360,
    jumlahGuru: 28,
  },
  {
    startYear: "2020",
    endYear: "2021",
    jumlahKelas: 14,
    jumlahMataPelajaran: {
      wajib: 9,
      opsional: 3,
    },
    jumlahSiswa: 420,
    jumlahGuru: 30,
  },
  {
    startYear: "2021",
    endYear: "2022",
    jumlahKelas: 15,
    jumlahMataPelajaran: {
      wajib: 10,
      opsional: 3,
    },
    jumlahSiswa: 460,
    jumlahGuru: 32,
  },
  {
    startYear: "2022",
    endYear: "2023",
    jumlahKelas: 16,
    jumlahMataPelajaran: {
      wajib: 10,
      opsional: 4,
    },
    jumlahSiswa: 500,
    jumlahGuru: 35,
  },
  {
    startYear: "2023",
    endYear: "2024",
    jumlahKelas: 18,
    jumlahMataPelajaran: {
      wajib: 11,
      opsional: 4,
    },
    jumlahSiswa: 540,
    jumlahGuru: 38,
  },
  {
    startYear: "2024",
    endYear: "2025",
    jumlahKelas: 18,
    jumlahMataPelajaran: {
      wajib: 11,
      opsional: 4,
    },
    jumlahSiswa: 540,
    jumlahGuru: 38,
  },
  {
    startYear: "2025",
    endYear: "2026",
    jumlahKelas: 18,
    jumlahMataPelajaran: {
      wajib: 11,
      opsional: 4,
    },
    jumlahSiswa: 540,
    jumlahGuru: 38,
  },
];
