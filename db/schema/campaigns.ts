import { pgTable, text, uuid, integer, timestamp } from "drizzle-orm/pg-core";
import { user } from "../schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const campaigns = pgTable("campaigns", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    status: text("status").notNull().default("active"), // active, inactive
    userId: uuid("user_id")
        .references(() => user.id)
        .notNull(),
    totalLeads: integer("total_leads").default(0),
    requestsSent: integer("requests_sent").default(0),
    requestsAccepted: integer("requests_accepted").default(0),
    requestsReplied: integer("requests_replied").default(0),
    startDate: timestamp("start_date").defaultNow(),
    conversionRate: text("conversion_rate").default("0.0%"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const insertCampaignSchema = createInsertSchema(campaigns);
export const selectCampaignSchema = createSelectSchema(campaigns);

export type Campaign = z.infer<typeof selectCampaignSchema>