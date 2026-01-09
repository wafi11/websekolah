import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

interface UserProfileDashboardProps {
  isCollapsed: boolean;
}

export function UserProfileDashboard({
  isCollapsed,
}: UserProfileDashboardProps) {
  return (
    <div className="p-4 border-t border-border">
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-3 rounded-xl bg-accent hover:bg-accent/80 transition-all cursor-pointer",
          isCollapsed && "justify-center"
        )}
      >
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg">
          AD
        </div>
        {!isCollapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                Admin Sekolah
              </p>
              <p className="text-xs text-muted-foreground truncate">
                admin@smpn1.sch.id
              </p>
            </div>
            <LogOut className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
          </>
        )}
      </div>
    </div>
  );
}
