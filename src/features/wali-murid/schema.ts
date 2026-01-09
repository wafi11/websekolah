import { z } from "zod";

export const waliSiswaSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  phoneNumber: z.string().min(10, "Nomor telepon tidak valid"),
  nameSiswa: z.string().min(1, "Pilih siswa"),
  alamat: z.string().min(5, "Alamat terlalu pendek"),
});
