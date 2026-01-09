import { mataPelajaranMap } from "@/data";
import { JadwalPelajaran } from "@/types/types";
import { Clock, MapPin, User } from "lucide-react";

export function JadwalCard({ jadwal }: { jadwal: JadwalPelajaran }) {
  const mapel = mataPelajaranMap[jadwal.mataPelajaranKode] || {
    nama: jadwal.mataPelajaranKode,
    color: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <div
      className={`rounded-lg border-l-4 ${mapel.color} bg-accent p-3 shadow-sm hover:shadow-md transition-all`}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-sm leading-tight">{mapel.nama}</h4>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/40 text-white whitespace-nowrap">
            {jadwal.kelasName}
          </span>
        </div>

        <div className="space-y-1 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {jadwal.jamMulai} - {jadwal.jamSelesai}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{jadwal.guruId}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{jadwal.ruangan}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
