"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

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
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-gray-900">LinkBird</span>
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

      {/* User Profile Section */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-200">
          <DropdownMenu
            open={userDropdownOpen}
            onOpenChange={setUserDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-2 h-auto"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      PE
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">
                      Kandid
                    </div>
                    <div className="text-xs text-gray-500">Personal</div>
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigationItems.map((section) => (
          <div key={section.title} className="mb-6">
            {!isCollapsed && (
              <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                          : "text-gray-700 hover:bg-gray-100",
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

      {/* Bottom User Profile */}
      <div className="border-t border-gray-200 p-4">
        {isCollapsed ? (
          <Avatar className="h-8 w-8 mx-auto">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-blue-100 text-blue-600">
              BK
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                BK
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                Bhavya From Kand...
              </div>
              <div className="text-xs text-gray-500 truncate">
                bhavya@kandid.ai
              </div>
            </div>
            <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
              <Settings className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
