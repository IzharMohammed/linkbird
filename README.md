# LinkBird CRM - Lead Management System

A modern Customer Relationship Management (CRM) system for managing leads, campaigns, and LinkedIn outreach activities.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **State**: Zustand, TanStack Query
- **Database**: PostgreSQL, Drizzle ORM
- **Auth**: Better Auth with Google OAuth

## 🚀 Quick Setup

### Prerequisites

- Node.js 20+
- PostgreSQL database
- Git

### Installation

1. **Clone & Install**

```bash
git clone git@github.com:IzharMohammed/linkbird.git
cd linkbird
pnpm install
pnpm dev
```

2. **Environment Setup**
   Create `.env.local`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/linkbird_crm"
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

3. **Database Setup**

```bash
npx drizzle-kit push
pnpm db:seed
```

4. **Start Development**

```bash
pnpm dev
```

Visit `http://localhost:3000`

## 📊 Database Schema

### Core Tables

**Users**

```sql
CREATE TABLE "user" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  email_verified BOOLEAN NOT NULL DEFAULT false,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

**Campaigns**

```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- active, inactive
  user_id TEXT NOT NULL REFERENCES "user"(id),
  total_leads INTEGER DEFAULT 0,
  requests_sent INTEGER DEFAULT 0,
  requests_accepted INTEGER DEFAULT 0,
  requests_replied INTEGER DEFAULT 0,
  start_date TIMESTAMP DEFAULT NOW(),
  conversion_rate TEXT DEFAULT '0.0%',
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

**Leads**

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  company TEXT,
  avatar TEXT,
  email TEXT,
  linkedin_url TEXT,
  campaign_id UUID NOT NULL REFERENCES campaigns(id),
  user_id TEXT NOT NULL REFERENCES "user"(id),
  status TEXT NOT NULL DEFAULT 'pending', -- pending, sent, accepted, replied, do_not_contact
  activity JSONB DEFAULT '[]',
  last_activity TIMESTAMP,
  connection_status TEXT DEFAULT 'not_connected', -- not_connected, pending, connected
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy**

```bash
npm i -g vercel
vercel --prod
```

2. **Set Environment Variables**
   Configure in Vercel dashboard:

- `DATABASE_URL`
- `BETTER_AUTH_URL`
- `BETTER_AUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

3. **Run Migrations**

```bash
npx drizzle-kit push
```

### Docker

```bash
# Build
docker build -t linkbird .

# Run
docker run -p 3000:3000 \
  -e DATABASE_URL="your-db-url" \
  -e BETTER_AUTH_SECRET="your-secret" \
  linkbird
```

### Manual Deployment

```bash
# Build
pnpm build

# Start
pnpm start
```

## ✨ Key Features

- **Authentication**: Google OAuth + email/password
- **Lead Management**: Advanced filtering, bulk operations, activity tracking
- **Campaign Management**: Performance metrics, lead association
- **Dashboard**: Real-time analytics and activity feeds
- **Responsive UI**: Dark/light theme, mobile-optimized
- **LinkedIn Integration**: Account management and outreach tracking

## 🧪 Development

### Commands

```bash
pnpm  dev          # Development server
pnpm  build        # Production build
npx drizzle-kit push
pnpm db:seed      # Seed sample data
```

### Project Structure

```
src/
├── app/             # Next.js app router
├── components/      # Reusable UI components
├── lib/            # Utilities and configurations
├── stores/         # Zustand state management
└── types/          # TypeScript definitions
```

---

**Built with Next.js, TypeScript, and modern web technologies.**
