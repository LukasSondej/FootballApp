# ⚽ Football Management App

A Full-Stack application for managing football teams, players, and matches. Designed with a focus on modern UX, database query optimization, and full Type Safety.

## 🔗 Live Demo
**[Open Application - Live Demo]([INSERT_LINK_TO_APP_HERE])**

> **Note:** The application is connected to a test cloud database. Feel free to add, edit, and delete data to test the system's functionality.

---

## 🛠 Tech Stack

The project was built using modern technologies, strictly separating the visual layer (Frontend) from the business logic (Backend).

**Frontend:**
* **React 19** + **Vite**
* **TypeScript**
* **TanStack Router** – modern, file-based routing.
* **TanStack Query** – data fetching, mutations, and asynchronous state management.
* **Zustand** – lightweight global state management (e.g., notifications, modals).
* **React Hook Form** + **Zod** – form handling and strict validation.
* **Tailwind CSS** + **shadcn/ui** – modern user interface.

**Backend:**
* **Node.js** + **Express**
* **Prisma ORM** – secure and type-safe database communication.
* **PostgreSQL** – relational database.

---

## ✨ Key Features & Technical Solutions

* **Query Optimization (Overfetching prevention):** Utilizing Prisma relations to include related data (e.g., fetching matches along with team names in a single query), which offloads the frontend from making additional redundant requests.
* **Advanced Validation (Zod):** Implemented strict business rules, e.g., form blocking (`.refine`) when a user attempts to schedule a match for a team against itself.
* **Elegant Error Handling:** API errors (e.g., preventing the deletion of a team because it has existing matches in the database) are seamlessly caught by TanStack Query and displayed to the user as friendly Toast Notifications.
* **Consistent UX:** Intuitive sidebar navigation, dynamic confirmation modals for destructive actions (like deletion), and a fully responsive layout built with CSS Grid/Flexbox.

---

## 📸 Screenshots
