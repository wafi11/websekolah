import {
  Form,
  FormControl,
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFilterSiswa } from "@/features/siswa/hooks/useFilterSiswa";
import { WaliSiswa } from "@/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waliSiswaSchema } from "../schema";

export function FormWaliSiswa() {
  const { allNameSiswa } = useFilterSiswa();

  const form = useForm<WaliSiswa>({
    resolver: zodResolver(waliSiswaSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      nameSiswa: "",
      alamat: "",
    },
  });

  function onSubmit(values: WaliSiswa) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Budi Santoso" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telepon</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="08xxxxxxxxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* SELECT SISWA */}
        <FormField
          control={form.control}
          name="nameSiswa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Siswa</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih siswa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {allNameSiswa().map((siswa) => (
                    <SelectItem key={siswa} value={siswa}>
                      {siswa}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ALAMAT */}
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Lengkap</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Masukkan alamat lengkap wali siswa"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ACTION */}
        <div className="flex justify-end gap-2">
          <Button type="submit">Simpan Data</Button>
        </div>
      </form>
    </Form>
  );
}
