"use client";

import { create } from 'zustand';
import { Lead } from '@/db/schema/leads';

interface LeadsState {
  // Data
  allLeads: Lead[];
  selectedLead: Lead | null;

  // Loading state
  isLoading: boolean;
  error: string | null;

  // Filters
  searchQuery: string;
  statusFilter: string;
  campaignFilter: string;

  // Actions
  setAllLeads: (leads: Lead[]) => void;
  appendLeads: (leads: Lead[]) => void;
  setSelectedLead: (lead: Lead | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string) => void;
  setCampaignFilter: (campaign: string) => void;

  // Computed filtered leads
  getFilteredLeads: () => Lead[];
}

export const useLeadsStore = create<LeadsState>((set, get) => ({
  // Initial state
  allLeads: [],
  selectedLead: null,
  isLoading: false,
  error: null,
  searchQuery: '',
  statusFilter: 'all',
  campaignFilter: 'all',

  // Actions
  setAllLeads: (leads) => set({ allLeads: leads }),
  appendLeads: (newLeads) => set((state) => ({
    allLeads: [...state.allLeads, ...newLeads]
  })),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setCampaignFilter: (campaign) => set({ campaignFilter: campaign }),

  // Filter function - works on all stored leads
  getFilteredLeads: () => {
    const { allLeads, searchQuery, statusFilter, campaignFilter } = get();

    let filtered = allLeads;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(query) ||
        lead.company?.toLowerCase().includes(query) ||
        lead.title?.toLowerCase().includes(query)
      );
    }

    // Status filter
    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    // Campaign filter
    if (campaignFilter && campaignFilter !== 'all') {
      filtered = filtered.filter(lead => lead.campaignId === campaignFilter);
    }

    return filtered;
  },
}));