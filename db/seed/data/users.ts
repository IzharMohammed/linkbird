import { User } from "@/db/schema";

export const usersData: Omit<User, 'createdAt' | 'updatedAt'>[] = [
    {
        id: "user_1",
        name: "Arjun Sharma",
        email: "arjun.sharma@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_2",
        name: "Priya Patel",
        email: "priya.patel@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612e1e7?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_3",
        name: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        emailVerified: false,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_4",
        name: "Sneha Gupta",
        email: "sneha.gupta@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_5",
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_6",
        name: "Anitha Reddy",
        email: "anitha.reddy@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_7",
        name: "Karthik Menon",
        email: "karthik.menon@example.com",
        emailVerified: false,
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_8",
        name: "Divya Iyer",
        email: "divya.iyer@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_9",
        name: "Rohit Agarwal",
        email: "rohit.agarwal@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_10",
        name: "Kavya Nair",
        email: "kavya.nair@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_11",
        name: "Amit Joshi",
        email: "amit.joshi@example.com",
        emailVerified: false,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_12",
        name: "Riya Malhotra",
        email: "riya.malhotra@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_13",
        name: "Sanjay Verma",
        email: "sanjay.verma@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_14",
        name: "Meera Desai",
        email: "meera.desai@example.com",
        emailVerified: true,
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: "user_15",
        name: "Nikhil Bhat",
        email: "nikhil.bhat@example.com",
        emailVerified: false,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
];