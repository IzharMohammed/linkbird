import { pgTable, text, uuid, jsonb, timestamp } from "drizzle-orm/pg-core";
import { user } from "../schema";
import { campaigns } from "./campaigns";
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import z from "zod";

export const leads = pgTable("leads", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    title: text("title"),
    company: text("company"),
    avatar: text("avatar"),
    email: text("email"),
    linkedinUrl: text("linkedin_url"),
    campaignId: uuid("campaign_id")
        .references(() => campaigns.id)
        .notNull(),
    userId: uuid("user_id")
        .references(() => user.id)
        .notNull(),
    status: text("status").notNull().default("pending"), // pending, sent, accepted, replied, do_not_contact
    activity: jsonb("activity").default([]), // Array of activity objects
    lastActivity: timestamp("last_activity"),
    connectionStatus: text("connection_status").default("not_connected"), // not_connected, pending, connected
    notes: text("notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const insertLeadSchema = createInsertSchema(leads);
export const selectLeadSchema = createSelectSchema(leads);

export type Lead = z.infer<typeof selectLeadSchema>