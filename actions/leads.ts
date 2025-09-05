"use server"

import { db } from "@/db/drizzle"
import { leads, Lead } from "@/db/schema/leads"
import { and, eq, ilike } from "drizzle-orm";

export async function getLeads(filters?: {
    search?: string;
    status?: string;
    campaign?: string;
    page?: number;
    pageSize?: number;
}) {
    const page = filters?.page ?? 0;
    const pageSize = filters?.pageSize ?? 20;

    let conditions = [];

    if (filters?.status && filters.status !== "all") {
        conditions.push(eq(leads.status, filters.status));
    }
    if (filters?.campaign && filters.campaign !== "all") {
        conditions.push(eq(leads.campaignId, filters.campaign));
    }
    if (filters?.search) {
        conditions.push(
            ilike(leads.name, `%${filters.search}%`)
        );
    }

    const whereClause = conditions.length ? and(...conditions) : undefined;

    const rows = await db
        .select()
        .from(leads)
        .where(whereClause)
        .limit(pageSize)
        .offset(page * pageSize);

    return {
        leads: rows,
        hasMore: rows.length === pageSize,
    };
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