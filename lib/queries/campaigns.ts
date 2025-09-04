"use client";

import { getCampaignById, getCampaigns } from "@/actions/campaigns";
import { Campaign } from "@/db/schema/campaigns"
import { useQuery } from "@tanstack/react-query"

export const useCampaigns = () => {
    return useQuery({
        queryKey: ["campaigns"],
        queryFn: async (): Promise<Campaign[]> => getCampaigns(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}

export const useCampaign = (id: string) => {
    return useQuery({
        queryKey: ["campaign", id],
        queryFn: async (): Promise<Campaign | null> => getCampaignById(id),
        enabled: !!id,
    })
}