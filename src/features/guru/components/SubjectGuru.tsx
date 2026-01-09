import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MataPelajaran } from "@/types/types";
import { useState } from "react";
import { SubjectGuruCards } from "./SubjectGuruCard";
import { SubjectGuruTable } from "./SubjectGuruTable";

export type SubjectGuruProps = {
  subjects: MataPelajaran[];
};

export default function SubjectGuru({ subjects }: SubjectGuruProps) {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Mata Pelajaran</h3>
          <p className="text-sm text-muted-foreground">
            {subjects.length} mata pelajaran yang diampu
          </p>
        </div>

        <Tabs
          value={viewMode}
          onValueChange={(v) => setViewMode(v as "cards" | "table")}
        >
          <TabsList>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {viewMode === "cards" ? (
        <SubjectGuruCards subjects={subjects} />
      ) : (
        <SubjectGuruTable subjects={subjects} />
      )}
    </div>
  );
}
