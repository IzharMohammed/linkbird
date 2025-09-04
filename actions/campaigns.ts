"use server";

import { db } from "@/db/drizzle";
import { campaigns } from "@/db/schema";
import { eq } from "drizzle-orm";

// Fetch all campaigns
export async function getCampaigns() {
    try {
        const data = await db.select().from(campaigns)
        return data
    } catch (error) {
        console.error("Error fetching campaigns:", error)
        throw new Error("Failed to fetch campaigns")
    }
}

// Fetch a single campaign by id
export async function getCampaignById(id: string) {
    try {
        const data = await db
            .select()
            .from(campaigns)
            .where(eq(campaigns.id, id))
            .limit(1)

        return data[0] || null
    } catch (error) {
        console.error("Error fetching campaign:", error)
        throw new Error("Failed to fetch campaign")
    }
}
