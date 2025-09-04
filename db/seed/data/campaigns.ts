import { Campaign } from "@/db/schema";

export const campaignsData: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>[] = [
    // User 1 campaigns
    {
        name: "Tech Startup Founders",
        status: "active",
        userId: "user_1",
        totalLeads: 25,
        requestsSent: 20,
        requestsAccepted: 12,
        requestsReplied: 8,
        startDate: new Date('2024-01-15'),
        conversionRate: "40.0%"
    },
    {
        name: "SaaS Product Managers",
        status: "active",
        userId: "user_1",
        totalLeads: 18,
        requestsSent: 15,
        requestsAccepted: 9,
        requestsReplied: 6,
        startDate: new Date('2024-02-01'),
        conversionRate: "33.3%"
    },
    {
        name: "Fintech CTOs",
        status: "inactive",
        userId: "user_1",
        totalLeads: 12,
        requestsSent: 10,
        requestsAccepted: 4,
        requestsReplied: 2,
        startDate: new Date('2023-12-10'),
        conversionRate: "16.7%"
    },

    // User 2 campaigns
    {
        name: "E-commerce Directors",
        status: "active",
        userId: "user_2",
        totalLeads: 30,
        requestsSent: 28,
        requestsAccepted: 18,
        requestsReplied: 12,
        startDate: new Date('2024-01-20'),
        conversionRate: "40.0%"
    },
    {
        name: "Digital Marketing Heads",
        status: "active",
        userId: "user_2",
        totalLeads: 22,
        requestsSent: 20,
        requestsAccepted: 14,
        requestsReplied: 9,
        startDate: new Date('2024-02-05'),
        conversionRate: "40.9%"
    },
    {
        name: "Growth Hackers",
        status: "active",
        userId: "user_2",
        totalLeads: 15,
        requestsSent: 12,
        requestsAccepted: 7,
        requestsReplied: 4,
        startDate: new Date('2024-02-15'),
        conversionRate: "26.7%"
    },

    // User 3 campaigns
    {
        name: "Healthcare IT Leaders",
        status: "active",
        userId: "user_3",
        totalLeads: 20,
        requestsSent: 18,
        requestsAccepted: 10,
        requestsReplied: 7,
        startDate: new Date('2024-01-10'),
        conversionRate: "35.0%"
    },
    {
        name: "EdTech Entrepreneurs",
        status: "active",
        userId: "user_3",
        totalLeads: 16,
        requestsSent: 14,
        requestsAccepted: 8,
        requestsReplied: 5,
        startDate: new Date('2024-02-20'),
        conversionRate: "31.3%"
    },

    // User 4 campaigns
    {
        name: "AI/ML Engineers",
        status: "active",
        userId: "user_4",
        totalLeads: 28,
        requestsSent: 25,
        requestsAccepted: 16,
        requestsReplied: 11,
        startDate: new Date('2024-01-25'),
        conversionRate: "39.3%"
    },
    {
        name: "Data Science Managers",
        status: "active",
        userId: "user_4",
        totalLeads: 24,
        requestsSent: 22,
        requestsAccepted: 13,
        requestsReplied: 8,
        startDate: new Date('2024-02-10'),
        conversionRate: "33.3%"
    },
    {
        name: "Cloud Architects",
        status: "inactive",
        userId: "user_4",
        totalLeads: 14,
        requestsSent: 12,
        requestsAccepted: 5,
        requestsReplied: 3,
        startDate: new Date('2023-11-15'),
        conversionRate: "21.4%"
    },

    // User 5 campaigns
    {
        name: "Blockchain Developers",
        status: "active",
        userId: "user_5",
        totalLeads: 19,
        requestsSent: 16,
        requestsAccepted: 9,
        requestsReplied: 6,
        startDate: new Date('2024-02-01'),
        conversionRate: "31.6%"
    },
    {
        name: "Crypto Startup CEOs",
        status: "active",
        userId: "user_5",
        totalLeads: 13,
        requestsSent: 11,
        requestsAccepted: 6,
        requestsReplied: 4,
        startDate: new Date('2024-02-12'),
        conversionRate: "30.8%"
    },

    // User 6 campaigns
    {
        name: "Mobile App Developers",
        status: "active",
        userId: "user_6",
        totalLeads: 26,
        requestsSent: 24,
        requestsAccepted: 15,
        requestsReplied: 10,
        startDate: new Date('2024-01-18'),
        conversionRate: "38.5%"
    },
    {
        name: "React Native Specialists",
        status: "active",
        userId: "user_6",
        totalLeads: 21,
        requestsSent: 19,
        requestsAccepted: 11,
        requestsReplied: 7,
        startDate: new Date('2024-02-08'),
        conversionRate: "33.3%"
    },

    // User 7 campaigns
    {
        name: "DevOps Engineers",
        status: "active",
        userId: "user_7",
        totalLeads: 23,
        requestsSent: 21,
        requestsAccepted: 13,
        requestsReplied: 9,
        startDate: new Date('2024-01-22'),
        conversionRate: "39.1%"
    },
    {
        name: "Site Reliability Engineers",
        status: "active",
        userId: "user_7",
        totalLeads: 17,
        requestsSent: 15,
        requestsAccepted: 8,
        requestsReplied: 5,
        startDate: new Date('2024-02-14'),
        conversionRate: "29.4%"
    },

    // User 8 campaigns
    {
        name: "UX/UI Designers",
        status: "active",
        userId: "user_8",
        totalLeads: 32,
        requestsSent: 30,
        requestsAccepted: 19,
        requestsReplied: 13,
        startDate: new Date('2024-01-12'),
        conversionRate: "40.6%"
    },
    {
        name: "Product Designers",
        status: "active",
        userId: "user_8",
        totalLeads: 27,
        requestsSent: 25,
        requestsAccepted: 16,
        requestsReplied: 11,
        startDate: new Date('2024-02-03'),
        conversionRate: "40.7%"
    },

    // User 9 campaigns
    {
        name: "Sales Directors",
        status: "active",
        userId: "user_9",
        totalLeads: 35,
        requestsSent: 32,
        requestsAccepted: 20,
        requestsReplied: 14,
        startDate: new Date('2024-01-08'),
        conversionRate: "40.0%"
    },
    {
        name: "Business Development Managers",
        status: "active",
        userId: "user_9",
        totalLeads: 29,
        requestsSent: 26,
        requestsAccepted: 17,
        requestsReplied: 12,
        startDate: new Date('2024-02-06'),
        conversionRate: "41.4%"
    },

    // User 10 campaigns
    {
        name: "HR Tech Leaders",
        status: "active",
        userId: "user_10",
        totalLeads: 24,
        requestsSent: 22,
        requestsAccepted: 14,
        requestsReplied: 10,
        startDate: new Date('2024-01-16'),
        conversionRate: "41.7%"
    },
    {
        name: "People Operations Heads",
        status: "active",
        userId: "user_10",
        totalLeads: 18,
        requestsSent: 16,
        requestsAccepted: 9,
        requestsReplied: 6,
        startDate: new Date('2024-02-18'),
        conversionRate: "33.3%"
    }
];