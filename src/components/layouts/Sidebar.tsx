import { DataSidebar, DataSidebarProps, iconMap } from "@/data/Sidebar";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  School,
} from "lucide-react";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { UserProfileDashboard } from "./UserProfileDashboard";

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { push } = useRouter();
  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    push(link);
    setIsMobileOpen(false);
  };

  const renderMenuItem = (item: DataSidebarProps, level: number = 0) => {
    const Icon = item.icon ? iconMap[item.icon] : null;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = activeMenu === item.name;
    const isActive = activeLink === item.link;

    return (
      <div key={item.name} className="w-full">
        <button
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.name);
            } else {
              handleLinkClick(item.link);
            }
          }}
          className={cn(
            "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl group relative overflow-hidden",
            level === 0 ? "mb-1" : "mb-0.5 ml-4",
            isActive
              ? "bg-primary text-primary-foreground shadow-lg"
              : "text-foreground hover:bg-accent hover:text-accent-foreground",
            level > 0 && "text-xs",
            isCollapsed && level === 0 && "justify-center px-2"
          )}
        >
          <div className="flex items-center gap-3 relative z-10">
            {Icon && (
              <Icon
                className={cn(
                  "transition-all",
                  level === 0 ? "h-5 w-5" : "h-4 w-4"
                )}
              />
            )}
            {!isCollapsed && <span>{item.name}</span>}
          </div>
          {!isCollapsed && hasChildren && (
            <div className="relative z-10">
              {isOpen ? (
                <ChevronDown className="h-4 w-4 transition-transform" />
              ) : (
                <ChevronRight className="h-4 w-4 transition-transform" />
              )}
            </div>
          )}
        </button>

        {hasChildren && isOpen && !isCollapsed && (
          <div className="mt-1 space-y-0.5 ml-2 animate-in slide-in-from-top-2 duration-200">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen bg-card border-r border-border transition-all duration-300 z-50 flex flex-col shadow-xl",
          isCollapsed ? "w-20" : "w-72",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header with Gradient */}
        <div className="p-5 border-b border-border bg-primary">
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <School className="h-6 w-6 text-primary-foreground" />
              </div>
              {!isCollapsed && (
                <div className="text-primary-foreground">
                  <h2 className="text-lg font-bold">SMP Negeri 1</h2>
                  <p className="text-xs opacity-90">Learning Management</p>
                </div>
              )}
            </div>
            <Button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:block px-2.5 py-1 rounded-full bg-primary-foreground hover:bg-primary-foreground/30 text-primary transition-colors"
            >
              {isCollapsed ? (
                <ArrowRight className="h-4 w-4" />
              ) : (
                <ArrowLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {DataSidebar.map((item) => renderMenuItem(item))}
        </nav>

        {/* User Profile */}
        <UserProfileDashboard isCollapsed={isCollapsed} />
      </aside>

      <Button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed lg:hidden px-2.5 py-1 top-4 left-4 rounded-full bg-primary hover:bg-primary-foreground/30 text-primary-foreground transition-colors"
      >
        {isMobileOpen ? (
          <ArrowRight className="h-4 w-4" />
        ) : (
          <ArrowLeft className="h-4 w-4" />
        )}
      </Button>

      {/* Main Content */}
      <div
        className={cn(
          "flex-1 transition-all duration-300",
          isCollapsed ? "lg:ml-24" : "lg:ml-72"
        )}
      >
        {/* Content Area */}
        <main className="p-6 lg:p-8 space-y-6">{children}</main>
      </div>
    </div>
  );
}
