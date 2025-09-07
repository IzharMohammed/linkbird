import { user, campaigns, leads } from '../schema';
import { usersData } from './data/users';
import { campaignsData } from './data/campaigns';
import { leadsData } from './data/leads';
import { db } from '../drizzle';

async function seedDatabase() {
    try {
        console.log('🌱 Starting database seeding...');

        // Clear existing data 
        console.log('🧹 Clearing existing data...');
        await db.delete(leads);
        await db.delete(campaigns);
        await db.delete(user);

        // Seed users
        console.log('👥 Seeding users...');
        const insertedUsers = await db.insert(user).values(usersData).returning();
        console.log(`✅ Inserted ${insertedUsers.length} users`);

        // Seed campaigns
        console.log('📊 Seeding campaigns...');
        const insertedCampaigns = await db.insert(campaigns).values(campaignsData).returning();
        console.log(`✅ Inserted ${insertedCampaigns.length} campaigns`);

        // Update leads data with actual campaign IDs
        console.log('🔗 Updating lead campaign references...');
        const updatedLeadsData = leadsData.map((lead, index) => {
            // Map the placeholder campaign IDs to actual IDs
            const campaignIndex = parseInt(lead.campaignId.toString().replace('campaign_', '')) - 1;
            return {
                ...lead,
                campaignId: insertedCampaigns[campaignIndex]?.id || insertedCampaigns[0].id
            };
        });

        // Seed leads
        console.log('👤 Seeding leads...');
        const insertedLeads = await db.insert(leads).values(updatedLeadsData).returning();
        console.log(`✅ Inserted ${insertedLeads.length} leads`);

        console.log('🎉 Database seeding completed successfully!');
        console.log('\n📈 Summary:');
        console.log(`- Users: ${insertedUsers.length}`);
        console.log(`- Campaigns: ${insertedCampaigns.length}`);
        console.log(`- Leads: ${insertedLeads.length}`);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

// Run the seeding script
if (require.main === module) {
    seedDatabase().catch((error) => {
        console.error('Failed to seed database:', error);
        process.exit(1);
    });
}

export { seedDatabase };
