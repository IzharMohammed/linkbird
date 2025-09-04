import { Lead } from "@/db/schema";

// Helper function to generate UUIDs for campaigns (you'll need to replace these with actual campaign IDs after insertion)
const campaignIds = [
    "campaign_1", "campaign_2", "campaign_3", "campaign_4", "campaign_5",
    "campaign_6", "campaign_7", "campaign_8", "campaign_9", "campaign_10",
    "campaign_11", "campaign_12", "campaign_13", "campaign_14", "campaign_15",
    "campaign_16", "campaign_17", "campaign_18", "campaign_19", "campaign_20",
    "campaign_21", "campaign_22", "campaign_23", "campaign_24"
];

export const leadsData: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>[] = [
    // Leads for Campaign 7 (Healthcare IT Leaders) - User 3
    {
        name: "Dr. Sunita Rao",
        title: "Chief Information Officer",
        company: "Apollo Health Systems",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        email: "sunita.rao@apollohealth.com",
        linkedinUrl: "https://linkedin.com/in/sunitarao",
        campaignId: campaignIds[6] as any,
        userId: "user_3",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-11", note: "Healthcare CIO outreach" },
            { type: "connection_accepted", date: "2024-01-12", note: "Professional response" },
            { type: "message_sent", date: "2024-01-13", note: "Healthcare IT discussion" },
            { type: "message_received", date: "2024-01-14", note: "Interested in digital health solutions" }
        ],
        lastActivity: new Date('2024-01-14'),
        connectionStatus: "connected",
        notes: "20+ years in healthcare IT. Leading digital transformation at major hospital chain."
    },
    {
        name: "Rajesh Malhotra",
        title: "VP of Health Technology",
        company: "MedTech Innovations",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
        email: "rajesh@medtech.in",
        linkedinUrl: "https://linkedin.com/in/rajeshmalhotra",
        campaignId: campaignIds[6] as any,
        userId: "user_3",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-01-12", note: "Health tech VP outreach" },
            { type: "connection_accepted", date: "2024-01-13", note: "Quick professional response" }
        ],
        lastActivity: new Date('2024-01-13'),
        connectionStatus: "connected",
        notes: "Medical device and health IT expert. Former consultant at McKinsey."
    },
    {
        name: "Ananya Krishnamurthy",
        title: "Director of Digital Health",
        company: "HealthFirst Solutions",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        email: "ananya@healthfirst.co",
        linkedinUrl: "https://linkedin.com/in/ananyakrishnamurthy",
        campaignId: campaignIds[6] as any,
        userId: "user_3",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-01-15", note: "Digital health director outreach" }
        ],
        lastActivity: new Date('2024-01-15'),
        connectionStatus: "pending",
        notes: "Telemedicine and digital health platform expert. PhD in Health Informatics."
    },

    // Leads for Campaign 8 (EdTech Entrepreneurs) - User 3
    {
        name: "Varun Agrawal",
        title: "Founder & CEO",
        company: "LearnSphere",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        email: "varun@learnsphere.edu",
        linkedinUrl: "https://linkedin.com/in/varunagrawal",
        campaignId: campaignIds[7] as any,
        userId: "user_3",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-21", note: "EdTech founder outreach" },
            { type: "connection_accepted", date: "2024-02-22", note: "Interested in connection" },
            { type: "message_sent", date: "2024-02-23", note: "EdTech collaboration inquiry" },
            { type: "message_received", date: "2024-02-24", note: "Wants to discuss partnerships" }
        ],
        lastActivity: new Date('2024-02-24'),
        connectionStatus: "connected",
        notes: "Serial EdTech entrepreneur. Built and sold 2 education startups."
    },
    {
        name: "Meera Nambiar",
        title: "Co-Founder",
        company: "SkillBridge Academy",
        avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
        email: "meera@skillbridge.co",
        linkedinUrl: "https://linkedin.com/in/meeranambiar",
        campaignId: campaignIds[7] as any,
        userId: "user_3",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-22", note: "EdTech co-founder outreach" },
            { type: "connection_accepted", date: "2024-02-23", note: "Quick response" }
        ],
        lastActivity: new Date('2024-02-23'),
        connectionStatus: "connected",
        notes: "Focus on professional skill development. Former Google education team."
    },

    // Leads for Campaign 9 (AI/ML Engineers) - User 4
    {
        name: "Siddharth Jain",
        title: "Principal ML Engineer",
        company: "AITech Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        email: "siddharth@aitech.ai",
        linkedinUrl: "https://linkedin.com/in/siddharthjain",
        campaignId: campaignIds[8] as any,
        userId: "user_4",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-26", note: "ML engineer outreach" },
            { type: "connection_accepted", date: "2024-01-27", note: "Tech professional response" },
            { type: "message_sent", date: "2024-01-28", note: "AI collaboration discussion" },
            { type: "message_received", date: "2024-01-29", note: "Interested in technical exchange" }
        ],
        lastActivity: new Date('2024-01-29'),
        connectionStatus: "connected",
        notes: "PhD in AI/ML. Published 20+ research papers. Expert in computer vision."
    },
    {
        name: "Neha Aggarwal",
        title: "Senior Data Scientist",
        company: "DeepLearn Corp",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e1e7?w=150&h=150&fit=crop&crop=face",
        email: "neha@deeplearn.co",
        linkedinUrl: "https://linkedin.com/in/nehaaggarwal",
        campaignId: campaignIds[8] as any,
        userId: "user_4",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-01-27", note: "Senior data scientist outreach" },
            { type: "connection_accepted", date: "2024-01-28", note: "Professional acceptance" }
        ],
        lastActivity: new Date('2024-01-28'),
        connectionStatus: "connected",
        notes: "NLP and recommendation systems expert. Former Microsoft Research."
    },
    {
        name: "Arjun Pillai",
        title: "AI Research Engineer",
        company: "Cognitive Systems Ltd",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        email: "arjun@cognitive.ai",
        linkedinUrl: "https://linkedin.com/in/arjunpillai",
        campaignId: campaignIds[8] as any,
        userId: "user_4",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-01-30", note: "AI researcher outreach" }
        ],
        lastActivity: new Date('2024-01-30'),
        connectionStatus: "pending",
        notes: "Reinforcement learning specialist. IIT graduate with strong research background."
    },

    // Leads for Campaign 10 (Data Science Managers) - User 4
    {
        name: "Kavya Srinivasan",
        title: "Head of Data Science",
        company: "DataVision Analytics",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        email: "kavya@datavision.com",
        linkedinUrl: "https://linkedin.com/in/kavyasrinivasan",
        campaignId: campaignIds[9] as any,
        userId: "user_4",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-11", note: "Data science head outreach" },
            { type: "connection_accepted", date: "2024-02-12", note: "Leadership response" },
            { type: "message_sent", date: "2024-02-13", note: "Data strategy discussion" },
            { type: "message_received", date: "2024-02-14", note: "Interested in team collaboration" }
        ],
        lastActivity: new Date('2024-02-14'),
        connectionStatus: "connected",
        notes: "Leads team of 25+ data scientists. Expert in scaling data teams."
    },
    {
        name: "Ravi Subramanian",
        title: "Principal Data Scientist",
        company: "InsightLabs",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        email: "ravi@insightlabs.co",
        linkedinUrl: "https://linkedin.com/in/ravisubramanian",
        campaignId: campaignIds[9] as any,
        userId: "user_4",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-12", note: "Principal data scientist outreach" },
            { type: "connection_accepted", date: "2024-02-13", note: "Quick acceptance" }
        ],
        lastActivity: new Date('2024-02-13'),
        connectionStatus: "connected",
        notes: "Statistical modeling expert. 12+ years in data science across industries."
    },

    // Additional leads for various campaigns
    {
        name: "Pooja Narayan",
        title: "UX Director",
        company: "DesignCraft Studios",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        email: "pooja@designcraft.co",
        linkedinUrl: "https://linkedin.com/in/poojanarayan",
        campaignId: campaignIds[17] as any,
        userId: "user_8",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-13", note: "UX director outreach" },
            { type: "connection_accepted", date: "2024-01-14", note: "Design professional response" },
            { type: "message_sent", date: "2024-01-15", note: "Design collaboration inquiry" },
            { type: "message_received", date: "2024-01-16", note: "Interested in design workshops" }
        ],
        lastActivity: new Date('2024-01-16'),
        connectionStatus: "connected",
        notes: "Award-winning UX designer. Led design teams at 3 unicorn startups."
    },
    {
        name: "Abhishek Tandon",
        title: "Senior Product Designer",
        company: "UserFirst Design",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
        email: "abhishek@userfirst.design",
        linkedinUrl: "https://linkedin.com/in/abhishektandon",
        campaignId: campaignIds[18] as any,
        userId: "user_8",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-04", note: "Product designer outreach" },
            { type: "connection_accepted", date: "2024-02-05", note: "Creative professional response" }
        ],
        lastActivity: new Date('2024-02-05'),
        connectionStatus: "connected",
        notes: "B2B SaaS design specialist. Design systems expert with strong portfolio."
    },
    {
        name: "Ritika Bhattacharya",
        title: "VP of Sales",
        company: "SalesForce India",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        email: "ritika@salesforce.co.in",
        linkedinUrl: "https://linkedin.com/in/ritikabhattacharya",
        campaignId: campaignIds[19] as any,
        userId: "user_9",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-09", note: "VP Sales outreach" },
            { type: "connection_accepted", date: "2024-01-10", note: "Sales leader response" },
            { type: "message_sent", date: "2024-01-11", note: "Sales strategy discussion" },
            { type: "message_received", date: "2024-01-12", note: "Interested in sales methodologies exchange" }
        ],
        lastActivity: new Date('2024-01-12'),
        connectionStatus: "connected",
        notes: "Top sales performer. Built and scaled sales teams from 5 to 200+ members."
    },
    {
        name: "Manish Jaiswal",
        title: "Business Development Director",
        company: "GrowthPartners Ltd",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
        email: "manish@growthpartners.co",
        linkedinUrl: "https://linkedin.com/in/manishjaiswal",
        campaignId: campaignIds[20] as any,
        userId: "user_9",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-07", note: "BD director outreach" },
            { type: "connection_accepted", date: "2024-02-08", note: "Business professional response" }
        ],
        lastActivity: new Date('2024-02-08'),
        connectionStatus: "connected",
        notes: "Partnership and alliances expert. Generated $50M+ in partner revenue."
    },
    {
        name: "Shreya Iyer",
        title: "Chief People Officer",
        company: "TalentFirst Solutions",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        email: "shreya@talentfirst.hr",
        linkedinUrl: "https://linkedin.com/in/shreyaiyer",
        campaignId: campaignIds[21] as any,
        userId: "user_10",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-17", note: "CPO outreach" },
            { type: "connection_accepted", date: "2024-01-18", note: "HR leader response" },
            { type: "message_sent", date: "2024-01-19", note: "HR tech discussion" },
            { type: "message_received", date: "2024-01-20", note: "Interested in people analytics" }
        ],
        lastActivity: new Date('2024-01-20'),
        connectionStatus: "connected",
        notes: "HR transformation expert. Led people operations at 3 high-growth startups."
    },
    {
        name: "Aditya Khanna",
        title: "Head of People Operations",
        company: "ScaleUp HR",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        email: "aditya@scaleup.hr",
        linkedinUrl: "https://linkedin.com/in/adityakhanna",
        campaignId: campaignIds[22] as any,
        userId: "user_10",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-19", note: "People ops head outreach" },
            { type: "connection_accepted", date: "2024-02-20", note: "Professional acceptance" }
        ],
        lastActivity: new Date('2024-02-20'),
        connectionStatus: "connected",
        notes: "People operations specialist. Expert in remote team management and culture."
    },

    // Additional leads for blockchain campaign
    {
        name: "Keshav Prasad",
        title: "Blockchain Developer",
        company: "CryptoTech Labs",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        email: "keshav@cryptotech.dev",
        linkedinUrl: "https://linkedin.com/in/keshavprasad",
        campaignId: campaignIds[11] as any,
        userId: "user_5",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-02-02", note: "Blockchain dev outreach" }
        ],
        lastActivity: new Date('2024-02-02'),
        connectionStatus: "pending",
        notes: "Smart contract specialist. 5+ years in DeFi and Web3 development."
    },
    {
        name: "Tanvi Mathur",
        title: "Crypto Product Manager",
        company: "DeFi Innovations",
        avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
        email: "tanvi@defi.innovations",
        linkedinUrl: "https://linkedin.com/in/tanvimathur",
        campaignId: campaignIds[12] as any,
        userId: "user_5",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-13", note: "Crypto PM outreach" },
            { type: "connection_accepted", date: "2024-02-14", note: "Crypto professional response" },
            { type: "message_sent", date: "2024-02-15", note: "DeFi collaboration inquiry" },
            { type: "message_received", date: "2024-02-16", note: "Interested in product insights" }
        ],
        lastActivity: new Date('2024-02-16'),
        connectionStatus: "connected",
        notes: "DeFi product expert. Former Goldman Sachs, now building crypto products."
    },

    // Mobile app development leads
    {
        name: "Sameer Shah",
        title: "Senior iOS Developer",
        company: "AppCraft Studios",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        email: "sameer@appcraft.dev",
        linkedinUrl: "https://linkedin.com/in/sameershah",
        campaignId: campaignIds[13] as any,
        userId: "user_6",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-01-19", note: "iOS dev outreach" },
            { type: "connection_accepted", date: "2024-01-20", note: "Developer response" }
        ],
        lastActivity: new Date('2024-01-20'),
        connectionStatus: "connected",
        notes: "iOS expert with 50+ published apps. Focus on fintech and healthcare apps."
    },
    {
        name: "Lakshmi Venkat",
        title: "React Native Developer",
        company: "CrossPlatform Solutions",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        email: "lakshmi@crossplatform.dev",
        linkedinUrl: "https://linkedin.com/in/lakshmivenkat",
        campaignId: campaignIds[14] as any,
        userId: "user_6",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-09", note: "React Native dev outreach" },
            { type: "connection_accepted", date: "2024-02-10", note: "Technical professional response" },
            { type: "message_sent", date: "2024-02-11", note: "Cross-platform development discussion" },
            { type: "message_received", date: "2024-02-12", note: "Interested in technical knowledge sharing" }
        ],
        lastActivity: new Date('2024-02-12'),
        connectionStatus: "connected",
        notes: "React Native specialist. Built apps with 1M+ downloads. Open source contributor."
    },

    // DevOps leads
    {
        name: "Harsh Agarwal",
        title: "DevOps Engineer",
        company: "CloudScale Systems",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        email: "harsh@cloudscale.dev",
        linkedinUrl: "https://linkedin.com/in/harshagarwal",
        campaignId: campaignIds[15] as any,
        userId: "user_7",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-01-23", note: "DevOps engineer outreach" }
        ],
        lastActivity: new Date('2024-01-23'),
        connectionStatus: "pending",
        notes: "Kubernetes and AWS expert. Managed infrastructure for unicorn startups."
    },
    {
        name: "Priyanka Reddy",
        title: "Site Reliability Engineer",
        company: "ReliableOps Inc",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        email: "priyanka@reliableops.com",
        linkedinUrl: "https://linkedin.com/in/priyankareddysre",
        campaignId: campaignIds[16] as any,
        userId: "user_7",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-15", note: "SRE outreach" },
            { type: "connection_accepted", date: "2024-02-16", note: "Engineering response" }
        ],
        lastActivity: new Date('2024-02-16'),
        connectionStatus: "connected",
        notes: "SRE with expertise in monitoring and incident response. Previously at Netflix."
    },

    //  Campaign 1 (Tech Startup Founders)
    {
        name: "Aditi Sharma",
        title: "CEO & Co-Founder",
        company: "TechFlow Solutions",
        avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
        email: "aditi@techflow.co",
        linkedinUrl: "https://linkedin.com/in/aditisharma",
        campaignId: campaignIds[0] as any,
        userId: "user_1",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-16", note: "Initial outreach" },
            { type: "connection_accepted", date: "2024-01-18", note: "Accepted within 2 days" },
            { type: "message_sent", date: "2024-01-19", note: "Follow-up message" },
            { type: "message_received", date: "2024-01-20", note: "Positive response, interested in collaboration" }
        ],
        lastActivity: new Date('2024-01-20'),
        connectionStatus: "connected",
        notes: "Very responsive, interested in partnership opportunities. CEO of 50+ employee company."
    },
    {
        name: "Rahul Krishnan",
        title: "Founder & CTO",
        company: "InnovateLabs",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        email: "rahul@innovatelabs.io",
        linkedinUrl: "https://linkedin.com/in/rahulkrishnan",
        campaignId: campaignIds[0] as any,
        userId: "user_1",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-01-17", note: "Targeted outreach to CTO" },
            { type: "connection_accepted", date: "2024-01-19", note: "Quick acceptance" }
        ],
        lastActivity: new Date('2024-01-19'),
        connectionStatus: "connected",
        notes: "Tech-focused founder, leads engineering team of 30+. Potential for technical collaboration."
    },
    {
        name: "Sneha Kapoor",
        title: "Co-Founder & Head of Product",
        company: "NextGen Analytics",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e1e7?w=150&h=150&fit=crop&crop=face",
        email: "sneha@nextgenanalytics.com",
        linkedinUrl: "https://linkedin.com/in/snehakapoor",
        campaignId: campaignIds[0] as any,
        userId: "user_1",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-01-18", note: "Product leader outreach" }
        ],
        lastActivity: new Date('2024-01-18'),
        connectionStatus: "pending",
        notes: "Product expert with 8+ years experience. Previously at Google."
    },
    {
        name: "Vikash Agarwal",
        title: "CEO",
        company: "FinTech Innovations",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        email: "vikash@fintechinnovations.in",
        linkedinUrl: "https://linkedin.com/in/vikashagarwal",
        campaignId: campaignIds[0] as any,
        userId: "user_1",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-20", note: "FinTech CEO outreach" },
            { type: "connection_accepted", date: "2024-01-21", note: "Fast response" },
            { type: "message_sent", date: "2024-01-22", note: "Intro message about collaboration" },
            { type: "message_received", date: "2024-01-23", note: "Interested in discussing partnership" }
        ],
        lastActivity: new Date('2024-01-23'),
        connectionStatus: "connected",
        notes: "Serial entrepreneur, founded 3 companies. Very interested in partnerships."
    },
    {
        name: "Kavitha Reddy",
        title: "Founder",
        company: "GreenTech Solutions",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        email: "kavitha@greentech.co",
        linkedinUrl: "https://linkedin.com/in/kavithareddy",
        campaignId: campaignIds[0] as any,
        userId: "user_1",
        status: "pending",
        activity: [],
        lastActivity: null,
        connectionStatus: "not_connected",
        notes: "Sustainability-focused startup. 2-year-old company with strong growth."
    },

    // Leads for Campaign 2 (SaaS Product Managers)
    {
        name: "Arjun Mehta",
        title: "Senior Product Manager",
        company: "CloudScale Technologies",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        email: "arjun@cloudscale.tech",
        linkedinUrl: "https://linkedin.com/in/arjunmehta",
        campaignId: campaignIds[1] as any,
        userId: "user_1",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-02", note: "Product manager outreach" },
            { type: "connection_accepted", date: "2024-02-03", note: "Quick acceptance" },
            { type: "message_sent", date: "2024-02-04", note: "Product collaboration inquiry" },
            { type: "message_received", date: "2024-02-05", note: "Interested in product insights exchange" }
        ],
        lastActivity: new Date('2024-02-05'),
        connectionStatus: "connected",
        notes: "10+ years in product management. Expert in SaaS metrics and user experience."
    },
    {
        name: "Priyanka Singh",
        title: "Head of Product",
        company: "DataDriven Inc",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        email: "priyanka@datadriven.com",
        linkedinUrl: "https://linkedin.com/in/priyankasingh",
        campaignId: campaignIds[1] as any,
        userId: "user_1",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-03", note: "Head of Product outreach" },
            { type: "connection_accepted", date: "2024-02-04", note: "Accepted connection" }
        ],
        lastActivity: new Date('2024-02-04'),
        connectionStatus: "connected",
        notes: "Leads product team of 15+. Strong background in B2B SaaS."
    },
    {
        name: "Rohit Bansal",
        title: "Principal Product Manager",
        company: "TechCorp Solutions",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
        email: "rohit@techcorp.solutions",
        linkedinUrl: "https://linkedin.com/in/rohitbansal",
        campaignId: campaignIds[1] as any,
        userId: "user_1",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-02-05", note: "Principal PM outreach" }
        ],
        lastActivity: new Date('2024-02-05'),
        connectionStatus: "pending",
        notes: "Senior product leader with enterprise SaaS experience."
    },

    // Leads for Campaign 4 (E-commerce Directors) - User 2
    {
        name: "Nisha Agarwal",
        title: "Director of E-commerce",
        company: "RetailMax India",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        email: "nisha@retailmax.in",
        linkedinUrl: "https://linkedin.com/in/nishaagarwal",
        campaignId: campaignIds[3] as any,
        userId: "user_2",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-01-21", note: "E-commerce director outreach" },
            { type: "connection_accepted", date: "2024-01-22", note: "Quick response" },
            { type: "message_sent", date: "2024-01-23", note: "E-commerce strategy discussion" },
            { type: "message_received", date: "2024-01-24", note: "Interested in growth strategies" }
        ],
        lastActivity: new Date('2024-01-24'),
        connectionStatus: "connected",
        notes: "15+ years in e-commerce. Currently scaling online presence for major retailer."
    },
    {
        name: "Amit Joshi",
        title: "VP of Digital Commerce",
        company: "FashionForward",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        email: "amit@fashionforward.co",
        linkedinUrl: "https://linkedin.com/in/amitjoshi",
        campaignId: campaignIds[3] as any,
        userId: "user_2",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-01-22", note: "VP Digital Commerce outreach" },
            { type: "connection_accepted", date: "2024-01-24", note: "Accepted after weekend" }
        ],
        lastActivity: new Date('2024-01-24'),
        connectionStatus: "connected",
        notes: "Fashion e-commerce expert. Led digital transformation at 3 companies."
    },
    {
        name: "Ritu Sharma",
        title: "Head of Online Sales",
        company: "ElectroWorld",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        email: "ritu@electroworld.in",
        linkedinUrl: "https://linkedin.com/in/ritusharma",
        campaignId: campaignIds[3] as any,
        userId: "user_2",
        status: "sent",
        activity: [
            { type: "connection_request_sent", date: "2024-01-25", note: "Head of Online Sales outreach" }
        ],
        lastActivity: new Date('2024-01-25'),
        connectionStatus: "pending",
        notes: "Electronics e-commerce specialist. Previously at Amazon."
    },

    // Leads for Campaign 5 (Digital Marketing Heads) - User 2
    {
        name: "Deepika Gupta",
        title: "Head of Digital Marketing",
        company: "BrandBoost Agency",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        email: "deepika@brandboost.co",
        linkedinUrl: "https://linkedin.com/in/deepikagupta",
        campaignId: campaignIds[4] as any,
        userId: "user_2",
        status: "replied",
        activity: [
            { type: "connection_request_sent", date: "2024-02-06", note: "Digital marketing head outreach" },
            { type: "connection_accepted", date: "2024-02-07", note: "Fast response" },
            { type: "message_sent", date: "2024-02-08", note: "Marketing collaboration inquiry" },
            { type: "message_received", date: "2024-02-09", note: "Interested in knowledge sharing" }
        ],
        lastActivity: new Date('2024-02-09'),
        connectionStatus: "connected",
        notes: "Agency owner with 200+ clients. Expert in performance marketing."
    },
    {
        name: "Kiran Kumar",
        title: "Digital Marketing Director",
        company: "StartupGrowth Co",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
        email: "kiran@startupgrowth.co",
        linkedinUrl: "https://linkedin.com/in/kirankumar",
        campaignId: campaignIds[4] as any,
        userId: "user_2",
        status: "accepted",
        activity: [
            { type: "connection_request_sent", date: "2024-02-07", note: "Marketing director outreach" },
            { type: "connection_accepted", date: "2024-02-08", note: "Quick acceptance" }
        ],
        lastActivity: new Date('2024-02-08'),
        connectionStatus: "connected",
        notes: "Specializes in startup marketing. Helped 50+ startups scale."
    },
]
// Leads for