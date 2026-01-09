import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { kelasList } from "@/data";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formGuruSchema, FormGuruValues } from "../schema";

// Dummy data jabatan
const jabatanList = [
  "Kepala Sekolah",
  "Wakil Kepala Sekolah",
  "Koordinator Kurikulum",
  "Guru Matematika",
  "Guru Bahasa Indonesia",
  "Guru Bahasa Inggris",
  "Guru Fisika",
  "Guru Kimia",
  "Guru Biologi",
  "Guru Sejarah",
  "Guru Geografi",
  "Guru Ekonomi",
  "Guru Sosiologi",
  "Guru Seni Budaya",
  "Guru Pendidikan Jasmani",
  "Guru BK",
  "Pembina OSIS",
  "Koordinator Lab",
];

interface FormGuruProps {
  onSubmit?: (data: FormGuruValues) => void;
  defaultValues?: Partial<FormGuruValues>;
}

export function FormGuru({ onSubmit, defaultValues }: FormGuruProps) {
  const form = useForm<FormGuruValues>({
    resolver: zodResolver(formGuruSchema),
    defaultValues: {
      name: "",
      isWaliKelas: false,
      jabatan: [],
      kelas: [],
      ...defaultValues,
    },
  });

  const handleSubmit = (data: FormGuruValues) => {
    console.log("Form data:", data);
    onSubmit?.(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Nama Lengkap */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama lengkap guru" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Jabatan */}
          <FormField
            control={form.control}
            name="jabatan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jabatan (dapat memilih lebih dari satu)</FormLabel>
                <div className="space-y-3">
                  {/* Selected Jabatan Tags */}
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {field.value.map((jabatan, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2.5 py-1 text-sm font-medium text-blue-700"
                        >
                          {jabatan}
                          <button
                            type="button"
                            onClick={() => {
                              const newJabatan = field.value.filter(
                                (_, i) => i !== idx
                              );
                              field.onChange(newJabatan);
                            }}
                            className="ml-1 rounded-full hover:bg-blue-200"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Select Jabatan */}
                  <Select
                    value=""
                    onValueChange={(value) => {
                      if (!field.value.includes(value)) {
                        field.onChange([...field.value, value]);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jabatan" />
                    </SelectTrigger>
                    <SelectContent>
                      {jabatanList
                        .filter((j) => !field.value.includes(j))
                        .map((jabatan) => (
                          <SelectItem key={jabatan} value={jabatan}>
                            {jabatan}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Kelas */}
          <FormField
            control={form.control}
            name="kelas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kelas (dapat memilih lebih dari satu)</FormLabel>
                <div className="space-y-3">
                  {/* Selected Kelas Tags */}
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {field.value.map((kelas, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-sm font-medium text-emerald-700"
                        >
                          {kelas}
                          <button
                            type="button"
                            onClick={() => {
                              const newKelas = field.value.filter(
                                (_, i) => i !== idx
                              );
                              field.onChange(newKelas);
                            }}
                            className="ml-1 rounded-full hover:bg-emerald-200"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Select Kelas */}
                  <Select
                    value=""
                    onValueChange={(value) => {
                      if (!field.value.includes(value)) {
                        field.onChange([...field.value, value]);
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      {kelasList
                        .filter((k) => !field.value.includes(k))
                        .map((kelas) => (
                          <SelectItem key={kelas} value={kelas}>
                            {kelas}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Status Wali Kelas */}
        <FormField
          control={form.control}
          name="isWaliKelas"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Wali Kelas</FormLabel>
                <FormDescription>
                  Aktifkan jika guru ini adalah wali kelas
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline">
            Batal
          </Button>
          <Button type="submit">Simpan</Button>
        </div>
      </form>
    </Form>
  );
}
