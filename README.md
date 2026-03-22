# Football App ⚽

A full-stack web application for managing football teams, players, and matches.
Built as a portfolio project to demonstrate end-to-end development skills with modern web technologies.

**🌐 Live Demo:** [https://football-app-sondej.netlify.app](https://football-app-sondej.netlify.app/)

---

## 📋 Features

- **Player Management** – Create, edit, delete, and browse players with detailed profiles.
- **Team Management** – Build teams, set their establishment year and location, assign players.
- **Match Management** – Record matches with date, location, duration, and scores between two teams.
- **Smart Validation** – Prevents invalid actions (e.g., a team cannot play against itself) using **Zod**.
- **Error Handling** – Clear, user-friendly toast notifications for all error scenarios.
- **Responsive UI** – Fully responsive design that works seamlessly on desktop and mobile.
- **Unit Testing** – Core business logic and form validation schemas are covered by unit tests using **Vitest**.

---

## 📸 Screenshots

### 1. Match list view
Shows the main dashboard with sidebar navigation and match cards.

<img width="1892" height="932" alt="image" src="https://github.com/user-attachments/assets/94b4d890-fd81-49cd-9e3f-207c791aa67f" />


### 2. Smart form validation
All fields filled correctly, but Team 1 and Team 2 are the same — Zod catches the logical error.

<img width="1893" height="938" alt="image" src="https://github.com/user-attachments/assets/171d1b45-a77b-4090-a5f1-698bb1b9649d" />


### 3. Error handling (toast)
Toast notification when attempting to delete a team that still has matches assigned.

<img width="1907" height="934" alt="image" src="https://github.com/user-attachments/assets/cb9ac274-30a9-4da7-9d13-53154e8a8f1d" />


---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **TypeScript**
- **Vite**
- **TanStack Router** & **TanStack Query**
- **Tailwind CSS** & **shadcn/ui**
- **Zustand** (state management)
- **React Hook Form** + **Zod** (form handling & validation)
- **Vitest** (unit testing)

### Backend
- **Node.js** & **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Zod** (request validation)

---

## 🚀 Run Locally

Follow these steps to get the app running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) **v18 or newer**
- [Yarn](https://yarnpkg.com/) (or npm)
- [PostgreSQL](https://www.postgresql.org/) installed and running

### 1. Clone the repository

```bash
git clone https://github.com/LukasSondej/FootballApp.git
cd FootballApp
```

### 2. Backend setup

Open a terminal and navigate to the backend folder:

```bash
cd backend
yarn install
```

Create a `.env` file inside `backend/` with your database connection string:

```
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/footballapp"
```

> **Note:** Replace `your_user` and `your_password` with your local PostgreSQL credentials.

Push the database schema (creates all tables) and start the server:

```bash
yarn prisma db push
yarn tsx src/index.ts
```

✅ The API will be running at **http://localhost:3000**

### 3. Frontend setup

Open a new terminal window, go back to the project root, and enter the frontend folder:

```bash
cd frontend
yarn install
yarn dev
```

✅ The React app will open automatically at **http://localhost:5173**

---

## 📁 Project Structure

```
FootballApp/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma         # Database schema (Prisma models)
│   ├── src/
│   │   ├── controllers/          # Express route controllers
│   │   ├── routes/               # API route definitions
│   │   ├── schemas/              # Zod validation schemas
│   │   └── index.ts              # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/           # Reusable UI components (shadcn/ui)
│   │   ├── features/             # Feature-based logic (matches, players, teams)
│   │   ├── hooks/                # Custom React hooks (TanStack Query)
│   │   ├── routes/               # TanStack Router route config & components
│   │   └── main.tsx              # React app entry point
│   └── package.json
└── README.md
```

---

## 👤 Author

**Łukasz Sondej** – [@LukasSondej](https://github.com/LukasSondej)
