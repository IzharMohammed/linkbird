import {
    LayoutDashboard,
    Users,
    Megaphone,
    MessageSquare,
    Linkedin,
    Settings,
    Activity,
    FileText,
} from "lucide-react";

export const navigationItems = [
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