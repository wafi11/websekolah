import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { kelasList } from "@/data";
import { siswa } from "@/types/types";
import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormSiswa() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState<siswa | null>(null);

  const form = useForm<{
    name: string;
    nisn: string;
    alamat: string;
    kelas: string[];
    walisiswa: { name: string; phoneNumber: string }[];
  }>({
    defaultValues: {
      name: "",
      nisn: "",
      alamat: "",
      kelas: [],
      walisiswa: [
        {
          name: "",
          phoneNumber: "",
        },
      ],
    },
  });

  const addWaliSiswa = () => {
    const currentWali = form.getValues("walisiswa");
    form.setValue("walisiswa", [...currentWali, { name: "", phoneNumber: "" }]);
  };

  const removeWaliSiswa = (index: number) => {
    const currentWali = form.getValues("walisiswa");
    if (currentWali.length > 1) {
      form.setValue(
        "walisiswa",
        currentWali.filter((_, i) => i !== index)
      );
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    setAlertData(data);
    setShowAlert(true);

    // Reset form setelah submit
    form.reset();

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const waliSiswaFields = form.watch("walisiswa");

  return (
    <div className="space-y-4">
      {showAlert && alertData && (
        <Alert className="bg-green-50 border-green-200">
          <AlertTitle className="text-green-800 font-semibold flex items-center gap-2">
            ✓ Data Siswa Berhasil Ditambahkan!
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 ml-auto"
              onClick={() => setShowAlert(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </AlertTitle>
          <AlertDescription className="text-green-700 mt-2 space-y-1">
            <div>
              <strong>Nama:</strong> {alertData.name}
            </div>
            <div>
              <strong>NISN:</strong> {alertData.nisn}
            </div>
            <div>
              <strong>Kelas:</strong> {alertData.kelas.join(", ") || "-"}
            </div>
            <div>
              <strong>Alamat:</strong> {alertData.alamat}
            </div>
            <div className="mt-2">
              <strong>Wali Siswa:</strong>
            </div>
            {alertData.walisiswa.map((wali, idx) => (
              <div key={idx} className="ml-4">
                • {wali.name} ({wali.phoneNumber})
              </div>
            ))}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <div className="space-y-6">
          {/* Nama Siswa */}
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Nama siswa wajib diisi" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama lengkap siswa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* NISN */}
          <FormField
            control={form.control}
            name="nisn"
            rules={{
              required: "NISN wajib diisi",
              pattern: {
                value: /^[0-9]+$/,
                message: "NISN harus berupa angka",
              },
              minLength: {
                value: 10,
                message: "NISN minimal 10 digit",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>NISN</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan NISN (10 digit)" {...field} />
                </FormControl>
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
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {field.value.map((kelas, idx) => (
                      <div
                        key={idx}
                        className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm flex items-center gap-2"
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
                          className="hover:bg-primary/80 rounded-full"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Select
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

          {/* Alamat */}
          <FormField
            control={form.control}
            name="alamat"
            rules={{ required: "Alamat wajib diisi" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Masukkan alamat lengkap"
                    className="resize-none"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Wali Siswa */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Data Wali Siswa</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addWaliSiswa}
              >
                <Plus className="mr-2 h-4 w-4" />
                Tambah Wali
              </Button>
            </div>

            {waliSiswaFields.map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-4 relative"
              >
                {waliSiswaFields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => removeWaliSiswa(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}

                <div className="font-medium text-sm text-muted-foreground">
                  Wali {index + 1}
                </div>
                <div className="flex items-center gap-3 w-full justify-between">
                  <FormField
                    control={form.control}
                    name={`walisiswa.${index}.name`}
                    rules={{ required: "Nama wali wajib diisi" }}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nama Wali</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Masukkan nama wali"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`walisiswa.${index}.phoneNumber`}
                    rules={{
                      required: "Nomor telepon wajib diisi",
                      pattern: {
                        value: /^[0-9+()-\s]+$/,
                        message: "Format nomor telepon tidak valid",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nomor Telepon</FormLabel>
                        <FormControl className="w-full">
                          <Input
                            className="w-full"
                            placeholder="Contoh: 081234567890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline">
              Batal
            </Button>
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Simpan Data Siswa
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
