# OpenSource Explorer

OpenSource Explorer is a SaaS platform that helps developers discover trending and active open-source projects on GitHub. With powerful filters and a clean interface, it allows users to explore repositories by programming language, topic, stars, and recent activity.

## Features

- GitHub API integration to fetch public repositories
- Filter by language, topic, stars, and activity
- Categorization and ranking system for projects
- User authentication with Clerk
- Save favorite repositories and search history
- Clean UI built with Next.js and Tailwind CSS
- Backend powered by Prisma and PostgreSQL

## Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend**: Next.js API Routes (Node.js)
- **Authentication**: Clerk
- **Database**: PostgreSQL
- **ORM**: Prisma
- **External API**: GitHub REST API / GraphQL API

## Getting Started

### Prerequisites

- Node.js >= 18.x
- PostgreSQL
- GitHub API token
- Clerk API keys

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/opensource-explorer.git
cd opensource-explorer
