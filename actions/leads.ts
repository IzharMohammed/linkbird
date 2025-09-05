"use server"

import { db } from "@/db/drizzle"
import { leads, Lead } from "@/db/schema/leads"
import { eq } from "drizzle-orm"

export async function getLeads(filters?: {
    search?: string
    status?: string
    campaign?: string
    page?: number
    pageSize?: number
}): Promise<{ leads: Lead[]; hasMore: boolean }> {
    try {

        const page = filters?.page ?? 0
        const pageSize = filters?.pageSize ?? 20

        // Fetch from DB
        let allLeads = await db.select().from(leads) as Lead[]

        // Filtering
        if (filters?.search) {
            allLeads = allLeads.filter(
                (lead) =>
                    lead.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
                    lead.company?.toLowerCase().includes(filters.search!.toLowerCase())
            )
        }

        if (filters?.status && filters.status !== "all") {
            allLeads = allLeads.filter((lead) => lead.status === filters.status)
        }

        if (filters?.campaign && filters.campaign !== "all") {
            allLeads = allLeads.filter((lead) => lead.campaignId === filters.campaign)
        }

        // Pagination
        const start = page * pageSize
        const end = start + pageSize
        const paginatedLeads = allLeads.slice(start, end)

        return {
            leads: paginatedLeads,
            hasMore: end < allLeads.length,
        }

    } catch (error) {
        console.error("Error fetching leads:", error)
        throw new Error("Failed to fetch leads")
    }
}

export async function getLeadsByCampaignId(campaignId: string) {
    try {
        const campaignLeads = await db
            .select()
            .from(leads)
            .where(eq(leads.campaignId, campaignId));

        return campaignLeads;
    } catch (error) {
        console.error("Error fetching campaign leads:", error)
        throw new Error("Failed to fetch campaign leads")
    }
}