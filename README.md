# LinkBird CRM - Lead Management System

A comprehensive Customer Relationship Management (CRM) system built with Next.js 15, TypeScript, Tailwind CSS, and modern web technologies. This application provides a complete solution for managing leads, campaigns, and LinkedIn outreach activities.

## 🚀 Features

### Authentication System

- **Multi-step Authentication Flow**: Login, registration, and account recovery
- **Google OAuth Integration**: Single sign-on with Google accounts
- **Email/Password Authentication**: Traditional login with secure password handling
- **Responsive Design**: Optimized for all device sizes with blur background effects

### Dashboard & Analytics

- **Campaign Overview**: Real-time campaign performance metrics
- **Recent Activity Feed**: Live updates on lead interactions and campaign progress
- **LinkedIn Account Management**: Track connected accounts and usage statistics
- **Interactive Charts**: Visual representation of campaign data and trends

### Lead Management System

- **Advanced Lead Table**: Sortable columns with filtering and search capabilities
- **Lead Profiles**: Detailed lead information with activity timelines
- **Status Management**: Track lead status (Pending, Sent, Accepted, Replied, Do Not Contact)
- **Activity Tracking**: Visual activity indicators and engagement metrics
- **Bulk Operations**: Select and manage multiple leads simultaneously
- **Sheet-based Interface**: Smooth slide-in panels for lead details

### Campaign Management

- **Campaign Creation**: Set up new outreach campaigns with custom parameters
- **Performance Tracking**: Monitor campaign metrics and conversion rates
- **Lead Association**: Assign leads to specific campaigns
- **Progress Visualization**: Real-time progress bars and completion rates
- **Campaign Details**: Comprehensive campaign analytics and settings

### User Interface & Experience

- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Collapsible Sidebar**: Space-efficient navigation with active state indicators
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Smooth Animations**: Polished transitions and micro-interactions
- **Accessibility**: WCAG AA compliant with proper contrast ratios

### State Management & Performance

- **Zustand Integration**: Efficient client-side state management
- **TanStack Query**: Advanced data fetching with caching and optimistic updates
- **Infinite Scrolling**: Performance-optimized lead loading
- **Real-time Updates**: Live data synchronization across components

## 🛠️ Technology Stack

### Frontend

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icon library

### State Management

- **Zustand**: Lightweight state management
- **TanStack Query**: Server state management and caching

### Database & Backend

- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Robust relational database
- **Server Actions**: Next.js server-side operations

### Development Tools

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud)
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/linkbird-crm.git
cd linkbird-crm
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install

# or

yarn install
\`\`\`

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

\`\`\`env

# Database Configuration

DATABASE_URL="postgresql://username:password@localhost:5432/linkbird_crm"

# Authentication

NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (Optional)

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Application Settings

NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

### 4. Database Setup

#### Initialize Database Schema

\`\`\`bash

# Run the database migration scripts

npm run db:migrate
\`\`\`

#### Seed Sample Data

\`\`\`bash

# Populate database with sample data

npm run db:seed
\`\`\`

### 5. Start Development Server

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

The application will be available at `http://localhost:3000`

## 📊 Database Schema

### Users Table

\`\`\`sql
CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
name VARCHAR(255) NOT NULL,
avatar TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Campaigns Table

\`\`\`sql
CREATE TABLE campaigns (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
status VARCHAR(50) DEFAULT 'active',
total_leads INTEGER DEFAULT 0,
requests_sent INTEGER DEFAULT 0,
requests_accepted INTEGER DEFAULT 0,
requests_replied INTEGER DEFAULT 0,
start_date DATE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Leads Table

\`\`\`sql
CREATE TABLE leads (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255),
title VARCHAR(255),
company VARCHAR(255),
avatar TEXT,
status VARCHAR(50) DEFAULT 'pending',
connection_status VARCHAR(50) DEFAULT 'not_connected',
linkedin_url TEXT,
campaign_id INTEGER REFERENCES campaigns(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### LinkedIn Accounts Table

\`\`\`sql
CREATE TABLE linkedin_accounts (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
avatar TEXT,
status VARCHAR(50) DEFAULT 'connected',
requests_used INTEGER DEFAULT 0,
requests_limit INTEGER DEFAULT 100,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## 🔌 API Documentation

### Authentication Endpoints

#### POST /api/auth/login

Login with email and password
\`\`\`json
{
"email": "user@example.com",
"password": "password123"
}
\`\`\`

#### POST /api/auth/register

Register new user account
\`\`\`json
{
"name": "John Doe",
"email": "john@example.com",
"password": "password123"
}
\`\`\`

### Leads Endpoints

#### GET /api/leads

Fetch leads with filtering and pagination
\`\`\`
Query Parameters:

- search: string (optional)
- status: string (optional)
- campaign: string (optional)
- page: number (default: 1)
- limit: number (default: 20)
  \`\`\`

#### POST /api/leads

Create new lead
\`\`\`json
{
"name": "Jane Smith",
"email": "jane@company.com",
"title": "Marketing Manager",
"company": "Tech Corp",
"campaignId": 1
}
\`\`\`

#### PUT /api/leads/[id]

Update lead information
\`\`\`json
{
"status": "accepted",
"connectionStatus": "connected"
}
\`\`\`

### Campaigns Endpoints

#### GET /api/campaigns

Fetch all campaigns
\`\`\`
Query Parameters:

- status: string (optional)
- page: number (default: 1)
- limit: number (default: 20)
  \`\`\`

#### POST /api/campaigns

Create new campaign
\`\`\`json
{
"name": "Q1 Outreach Campaign",
"status": "active",
"startDate": "2025-01-01"
}
\`\`\`

#### GET /api/campaigns/[id]

Fetch campaign details
\`\`\`
Returns campaign with associated leads and metrics
\`\`\`

## 🎨 Component Architecture

### Layout Components

- **AppLayout**: Main application wrapper with sidebar and header
- **Sidebar**: Collapsible navigation with theme toggle
- **Header**: Breadcrumbs and search functionality

### Feature Components

- **LeadSheet**: Slide-out panel for lead details
- **LeadProfile**: Comprehensive lead information display
- **CampaignCard**: Campaign overview with metrics
- **ActivityTimeline**: Lead interaction history

### UI Components (shadcn/ui)

- **Button**: Various button styles and sizes
- **Card**: Content containers with headers
- **Sheet**: Slide-out panels and modals
- **Badge**: Status indicators and labels
- **Avatar**: User profile images
- **Progress**: Progress bars and indicators

## 🔧 State Management

### Zustand Stores

#### Sidebar Store

\`\`\`typescript
interface SidebarState {
isCollapsed: boolean
toggleCollapsed: () => void
}
\`\`\`

#### Leads Store

\`\`\`typescript
interface LeadsState {
selectedLeads: string[]
selectedLead: Lead | null
setSelectedLead: (lead: Lead | null) => void
toggleLeadSelection: (leadId: string) => void
}
\`\`\`

#### UI Store

\`\`\`typescript
interface UIState {
theme: 'light' | 'dark' | 'system'
setTheme: (theme: Theme) => void
modals: Record<string, boolean>
toggleModal: (modalId: string) => void
}
\`\`\`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   \`\`\`bash

   # Install Vercel CLI

   npm i -g vercel

   # Deploy to Vercel

   vercel --prod
   \`\`\`

2. **Environment Variables**
   Configure the following in Vercel dashboard:

   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`

3. **Database Migration**
   \`\`\`bash
   # Run migrations on production
   vercel env pull .env.local
   npm run db:migrate:prod
   \`\`\`

### Docker Deployment

1. **Build Docker Image**
   \`\`\`bash
   docker build -t linkbird-crm .
   \`\`\`

2. **Run Container**
   \`\`\`bash
   docker run -p 3000:3000 \
    -e DATABASE_URL="your-database-url" \
    -e NEXTAUTH_SECRET="your-secret" \
    linkbird-crm
   \`\`\`

### Manual Deployment

1. **Build Application**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start Production Server**
   \`\`\`bash
   npm start
   \`\`\`

## 🧪 Testing

### Run Tests

\`\`\`bash

# Unit tests

npm run test

# Integration tests

npm run test:integration

# E2E tests

npm run test:e2e
\`\`\`

### Test Coverage

\`\`\`bash
npm run test:coverage
\`\`\`

## 📈 Performance Optimization

### Implemented Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Caching**: TanStack Query with stale-while-revalidate
- **Lazy Loading**: Dynamic imports for heavy components
- **Bundle Analysis**: Webpack bundle analyzer integration

### Performance Monitoring

\`\`\`bash

# Analyze bundle size

npm run analyze

# Lighthouse audit

npm run lighthouse
\`\`\`

## 🔒 Security Features

- **Input Validation**: Zod schema validation
- **SQL Injection Prevention**: Parameterized queries with Drizzle
- **XSS Protection**: Content Security Policy headers
- **Authentication**: Secure session management
- **Rate Limiting**: API endpoint protection

## 🤝 Contributing

1. **Fork the Repository**
2. **Create Feature Branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit Changes**
   \`\`\`bash
   git commit -m 'Add amazing feature'
   \`\`\`
4. **Push to Branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Documentation**: Check this README and inline code comments
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions

## 🗺️ Roadmap

### Upcoming Features

- [ ] Email Integration (Gmail, Outlook)
- [ ] Advanced Analytics Dashboard
- [ ] Automated Sequence Builder
- [ ] Team Collaboration Features
- [ ] Mobile Application
- [ ] API Rate Limiting
- [ ] Advanced Reporting
- [ ] Integration with CRM platforms

### Version History

- **v1.0.0**: Initial release with core CRM functionality
- **v1.1.0**: Added dark mode and improved UI
- **v1.2.0**: Enhanced lead management and campaign tracking

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
