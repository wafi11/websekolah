import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEvent } from "react";

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export function SearchInput({ onChange, value }: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="size-5 absolute right-2 top-2" />
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search....."
        className="rounded-full"
      />
    </div>
  );
}
