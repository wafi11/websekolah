import z from "zod";

// Schema validation
export const formGuruSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  isWaliKelas: z.boolean(),
  jabatan: z.array(z.string()).min(1, "Pilih minimal 1 jabatan"),
  kelas: z.array(z.string()).min(1, "Pilih minimal 1 kelas"),
});

export type FormGuruValues = z.infer<typeof formGuruSchema>;
