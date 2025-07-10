# 🎬 MovieTV Backend

This is the **backend** of the MovieTV app, built with:

- 🧠 **Express.js** + **TypeScript**
- 🗃️ **Prisma ORM**
- 🐬 **MySQL** database
- 🌱 **Seed script** to populate sample data

It provides a RESTful API to be consumed by the frontend (React + Vite).

---

## 🧰 Tech Stack

- 🧩 Express.js
- 📝 TypeScript
- 📦 Prisma ORM
- 🐬 MySQL
- 🔐 dotenv for environment config
- 🎯 ts-node-dev for hot-reloading

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/movietv-app.git
cd movietv-app/server

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Configure Environment Variables

Create a .env file in the server folder:
DATABASE_URL="mysql://user:password@localhost:3306/your_db_name"
PORT=3000

Replace:
user = your MySQL username
password = your MySQL password
your_db_name = the database name (make sure it exists)

### 4️⃣ Generate Prisma Client

npx prisma generate

### 5️⃣ Run Migrations

npx prisma migrate dev --name init

This will create the initial database schema in your MySQL database.

### 6️⃣ Seed the Database

npx prisma db seed

This command runs the seed script and adds initial dummy data to your database.

### 7️⃣ Start the Development Server

npm run dev

Server will run at:
🌐 http://localhost:3000
