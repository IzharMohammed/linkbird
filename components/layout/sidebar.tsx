"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { cn, getInitials } from "@/lib/utils";
import { useSidebarStore } from "@/lib/stores/sidebar-store";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  Users,
  Megaphone,
  MessageSquare,
  Linkedin,
  Settings,
  Activity,
  FileText,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Moon,
  Sun,
  Bell,
  HelpCircle,
  Zap,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Leads", href: "/leads", icon: Users },
      { name: "Campaign", href: "/campaigns", icon: Megaphone },
      {
        name: "Messages",
        href: "/messages",
        icon: MessageSquare,
        badge: "10+",
      },
      { name: "LinkedIn Accounts", href: "/linkedin-accounts", icon: Linkedin },
    ],
  },
  {
    title: "Settings",
    items: [{ name: "Setting & Billing", href: "/settings", icon: Settings }],
  },
  {
    title: "Admin Panel",
    items: [
      { name: "Activity logs", href: "/admin/activity", icon: Activity },
      { name: "User logs", href: "/admin/users", icon: FileText },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebarStore();
  const { theme, setTheme } = useTheme();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const { user } = session || {};

  const { email, name } = user || {};

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/auth/login");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-foreground">LinkBird</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="p-1 h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* User Profile Section - moved to top */}
      {!isCollapsed && (
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                PE
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">{name}</div>
              <div className="text-xs text-muted-foreground">Personal</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigationItems.map((section) => (
          <div key={section.title} className="mb-6">
            {!isCollapsed && (
              <h3 className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <nav className="space-y-1 px-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 h-10",
                        isActive
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300"
                          : "text-foreground hover:bg-accent",
                        isCollapsed && "justify-center px-2"
                      )}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left">{item.name}</span>
                          {item.badge && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Utility Icons Section */}
      {!isCollapsed && (
        <div className="px-4 py-2 border-t border-border">
          <div className="flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
              <Zap className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            {/* <Button
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button> */}
          </div>
        </div>
      )}
      {/* Enhanced Bottom User Profile */}
      <div className="border-t border-border p-4">
        {isCollapsed ? (
          <Avatar className="h-8 w-8 mx-auto">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-100 text-blue-600">
              BK
            </AvatarFallback>
          </Avatar>
        ) : (
          <DropdownMenu
            open={userDropdownOpen}
            onOpenChange={setUserDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start p-2 h-auto hover:bg-accent"
              >
                <div className="flex items-center gap-3 w-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {getInitials(name, email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-sm font-medium text-foreground truncate">
                      {name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {email}
                    </div>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{name}</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    {email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
