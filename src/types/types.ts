export type siswa = {
  name: string;
  nisn: string;
  kelas: Kelas[];
  alamat: string;
  walisiswa: {
    name: string;
    phoneNumber: string;
  }[];
};

export type Nilai = {
  id: string;
  siswaId: string;
  mataPelajaranKode: string;
  kelasName: string;
  nilai: number;
  kategori: "UTS" | "UAS" | "Tugas" | "Quiz";
  tanggal: string;
  guruId: string;
};

export type JadwalPelajaran = {
  id: string;
  kelasName: string;
  mataPelajaranKode: string;
  guruId: string;
  hari: "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat";
  jamMulai: string;
  jamSelesai: string;
  ruangan?: string;
};

export type Materi = {
  id: string;
  judul: string;
  deskripsi: string;
  mataPelajaranKode: string;
  kelasName: string;
  guruId: string;
  fileUrl?: string;
  tanggalUpload: string;
};

export type Tugas = {
  id: string;
  judul: string;
  deskripsi: string;
  mataPelajaranKode: string;
  kelasName: string;
  guruId: string;
  deadline: string;
  maxNilai: number;
};

export type PengumpulanTugas = {
  id: string;
  tugasId: string;
  siswaId: string;
  fileUrl?: string;
  jawaban?: string;
  tanggalKumpul: string;
  nilai?: number;
};

export type statusAbsensi = "Hadir" | "Izin" | "Sakit" | "Alpa";

export type Absensi = {
  id: string;
  nameSiswa: string;
  kelasName: string;
  tanggal: string;
  status: statusAbsensi;
  keterangan?: string;
};

export type Guru = {
  name: string;
  isWaliKelas: boolean;
  jabatan: string[];
  kelas: Kelas[];
};

export type MataPelajaran = {
  kode: string;
  name: string;
  kkm: number;
};

export type Kelas = {
  name: string;
  waliKelas: string;
  tahunPembelajaran: string;
  jumlahMurid: number;
};

export type WaliSiswa = {
  name: string;
  nameSiswa: string;
  alamat: string;
  phoneNumber: string;
};

export type AcademicYear = {
  startYear: string;
  endYear: string;
  jumlahKelas: number;
  jumlahMataPelajaran: {
    wajib: number;
    opsional: number;
  };
  jumlahSiswa: number;
  jumlahGuru: number;
};
