"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, ChevronRight } from "lucide-react";

interface HeaderProps {
  title?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function Header({ title, breadcrumbs }: HeaderProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if not provided
  const defaultBreadcrumbs = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href:
        index === segments.length - 1
          ? undefined
          : `/${segments.slice(0, index + 1).join("/")}`,
    }));
  }, [pathname]);

  const finalBreadcrumbs = breadcrumbs || defaultBreadcrumbs;
  const finalTitle =
    title || finalBreadcrumbs[finalBreadcrumbs.length - 1]?.label;

  return (
    <header className=" border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Breadcrumbs */}
          {finalBreadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-1 text-sm  mb-1">
              {finalBreadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.label}>
                  {index > 0 && <ChevronRight className="h-4 w-4" />}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-gray-700">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className=" font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
          {/* Page Title */}
          {finalTitle && (
            <h1 className="text-2xl font-semibold ">{finalTitle}</h1>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
}
