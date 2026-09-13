# ⚽ Champions League API

A RESTful API built with **Node.js**, **Express**, and **TypeScript** to manage UEFA Champions League players and clubs, including detailed player statistics (Overall, Pace, Shooting, Passing, Dribbling, Defending, Physical).

Designed with a clean, layered architecture ensuring separation of concerns between controllers, services, and repositories.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Reference](#-api-reference)
  - [Base URL](#base-url)
  - [Players Endpoints](#players-endpoints)
  - [Clubs Endpoints](#clubs-endpoints)
- [Data Models](#-data-models)
- [Available Scripts](#-available-scripts)
- [License](#-license)

---

## ✨ Features

- **Full CRUD for Players**: Retrieve, create, update, and delete player records.
- **Player Statistics Updates**: Dedicated partial update (`PATCH`) to fine-tune player attributes and stats.
- **Club Management**: Query available clubs participating in the league.
- **Layered Architecture**: Decoupled Controllers, Services, Repositories, and Models for maintainability and scalability.
- **Type Safety**: Fully typed with TypeScript interfaces for requests, responses, and domain entities.
- **Fast Developer Workflow**: Instant execution and hot-reloading powered by `tsx` and high-speed bundling with `tsup`.

---

## 🛠 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v20+)
- **Framework**: [Express 5](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [tsup](https://tsup.egoist.dev/)
- **TypeScript Runner**: [tsx](https://github.com/privatenumber/tsx)

---

## 🏛 Architecture

The API follows a multi-tier layered pattern:

```text
Client Request
      │
      ▼
┌──────────────┐
│  Express App │  (Middleware, JSON parser, route prefix: /api)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Controllers │  (HTTP request parsing & response serialization)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Services   │  (Business logic & response formatting via HTTP helpers)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Repositories │  (Data access and manipulation - in-memory storage)
└──────────────┘
```

---

## 📁 Project Structure

```bash
champions-league-api/
├── dist/                     # Compiled production build output
├── src/
│   ├── controllers/          # HTTP request handlers
│   │   ├── clubs-controller.ts
│   │   └── players-controller.ts
│   ├── helppers/             # Standardized HTTP response helpers (ok, created, noContent, etc.)
│   │   └── http-helper.ts
│   ├── models/               # TypeScript interfaces and data definitions
│   │   ├── club-model.ts
│   │   ├── http-response-model.ts
│   │   ├── player-models.ts
│   │   └── statistics-models.ts
│   ├── repository/           # Data access layer (in-memory data store)
│   │   ├── clubs-repository.ts
│   │   └── player.ts
│   ├── services/             # Business logic layer
│   │   ├── club-service.ts
│   │   └── players-service.ts
│   ├── app.ts                # Express application factory & middleware setup
│   ├── routes.ts             # Route definitions & mappings
│   └── server.ts             # Application entry point & HTTP listener
├── .env                      # Environment configuration
├── .gitignore
├── archteture.tldr           # Architecture diagram (tldraw)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v20 or higher recommended)
- **npm** (or yarn / pnpm)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Gileno29/champions-league-api.git
   cd champions-league-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory (or use the existing one):

```env
PORT=3333
```

### Running the Application

- **Development mode** (with live execution):
  ```bash
  npm run start:dev
  ```

- **Watch mode** (reloads automatically on file changes):
  ```bash
  npm run start:watch
  ```

- **Production build**:
  ```bash
  npm run dist
  ```

Once running, the server will be accessible at:
```text
http://localhost:3333
```

---

## 📖 API Reference

### Base URL
All routes are prefixed with `/api`:
```text
http://localhost:3333/api
```

---

### Players Endpoints

#### 1. Get All Players
- **Method**: `GET`
- **Route**: `/api/players`
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "name": "Lionel messi",
      "club": "paris Saint-Germain",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "club": "Algum lugar",
      "nationality": "Portugal",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    }
  ]
  ```

#### 2. Get Player By ID
- **Method**: `GET`
- **Route**: `/api/players/:id`
- **Example**: `GET /api/players/1`
- **Response**: `200 OK`
  ```json
  {
    "id": 1,
    "name": "Lionel messi",
    "club": "paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 85,
      "Shooting": 94,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 38,
      "Physical": 65
    }
  }
  ```
- **If Not Found**: `204 No Content`

#### 3. Create Player
- **Method**: `POST`
- **Route**: `/api/players`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "id": 3,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 97,
      "Shooting": 90,
      "Passing": 80,
      "Dribbling": 92,
      "Defending": 36,
      "Physical": 78
    }
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "message": "sucessefull"
  }
  ```
- **Error Response**: `400 Bad Request` (when the payload is empty)

#### 4. Update Player Statistics
- **Method**: `PATCH`
- **Route**: `/api/players/:id`
- **Example**: `PATCH /api/players/1`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "Overall": 94,
    "Pace": 86,
    "Shooting": 95,
    "Passing": 92,
    "Dribbling": 96,
    "Defending": 39,
    "Physical": 66
  }
  ```
- **Response**: `200 OK` (returns the updated player entity)
  ```json
  {
    "id": 1,
    "name": "Lionel messi",
    "club": "paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 94,
      "Pace": 86,
      "Shooting": 95,
      "Passing": 92,
      "Dribbling": 96,
      "Defending": 39,
      "Physical": 66
    }
  }
  ```

#### 5. Delete Player
- **Method**: `DELETE`
- **Route**: `/api/players/:id`
- **Example**: `DELETE /api/players/2`
- **Response**: `200 OK`
  ```json
  {
    "message": "deleted"
  }
  ```
- **If Not Found**: `204 No Content`

---

### Clubs Endpoints

#### 1. Get All Clubs
- **Method**: `GET`
- **Route**: `/api/clubs`
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "name": "Real Madrid"
    }
  ]
  ```

---

## 📊 Data Models

### PlayerModel
```typescript
interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: StatisticsModel;
}
```

### StatisticsModel
```typescript
interface StatisticsModel {
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;
}
```

### ClubModel
```typescript
interface ClubModel {
  id: number;
  name: string;
}
```

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run start:dev` | `tsx --env-file=.env src/server.ts` | Runs the API in development mode loading environment variables from `.env`. |
| `npm run start:watch` | `tsx watch --env-file=.env src/server.ts` | Runs the API in watch mode with automatic restart on file change. |
| `npm run dist` | `tsup src` | Bundles TypeScript source code into production JavaScript in `dist/`. |

---

## 📄 License

This project is licensed under the **ISC License**.
