# Express Starter

A minimal, reusable Express.js starter for building REST APIs and backend applications with a clean structure, security middleware, logging, centralized responses, and environment configuration.

> Start with the foundation and build your project your way.

## ✨ Features

* Express + Helmet + CORS + Morgan
* Custom response middleware (`res.success` / `res.error`)
* Centralized error handling
* dotenv environment variables
* Health check endpoint
* Clean folder structure
* CommonJS module system
* Native Node.js watch mode for development

## 🛠️ Tech Stack

* Node.js
* Express.js
* Helmet
* CORS
* Morgan
* dotenv

## 📁 Project Structure

```text
.
├── src/
│   ├── config/
│   │   └── index.js
│   │
│   ├── controllers/
│   │   └── api.controller.js
│   │
│   ├── middleware/
│   │   ├── error.middleware.js
│   │   └── response.middleware.js
│   │
│   ├── routes/
│   │   └── api.route.js
│   │
│   └── app.js
│
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## 🚀 Using This Starter

### Recommended: Use as a GitHub Template

The easiest way to start a new project from this repository is to use GitHub's template feature.

1. Open this repository on GitHub.
2. Click **Use this template**.
3. Select **Create a new repository**.
4. Choose your account or organization.
5. Give your project its own name.
6. Create the repository.

GitHub will create a new repository containing the starter files, but with unrelated Git history from the template. Your new repository is your own project.

Then clone **your newly created repository**, not this starter:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_PROJECT.git

cd YOUR_PROJECT

npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Configure it:

```env
PORT=3000
```

Start development:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

### Manual: Clone This Repository Directly

You can also clone this repository directly, but be careful:

```bash
git clone https://github.com/Nasim-developer/express-starter.git

cd express-starter
```

A normal `git clone` creates a remote named `origin` pointing to the repository you cloned.

That means you **should not push your project to `express-starter`**.

Create a new empty repository on your own GitHub account first, then change the remote:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_PROJECT.git
```

Verify it:

```bash
git remote -v
```

You should see your own repository for both `fetch` and `push`.

Then:

```bash
git add .
git commit -m "chore: initialize project"
git branch -M main
git push -u origin main
```

GitHub uses the remote name and branch name in `git push origin main` to determine where your commits are published.

> **Important:** If you cloned this starter manually, change `origin` to your own repository **before your first push**.

---

## ⚙️ Environment Variables

This starter uses environment variables through `dotenv`.

Create your `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Example:

```env
PORT=3000
```

Never commit your `.env` file.

The `.env.example` file is included so anyone using the starter knows which environment variables are required.

## 🔌 API

### Health Check

```http
GET /api/health
```

Example response:

```json
{
  "success": true,
  "message": "Server is alive",
  "data": null
}
```

## 📦 Response Format

Successful responses use:

```json
{
  "success": true,
  "message": "Success message",
  "data": {}
}
```

Error responses use:

```json
{
  "success": false,
  "message": "Error message"
}
```

Additional data can also be returned:

```json
{
  "success": false,
  "message": "Validation failed",
  "data": {}
}
```

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the server with Node.js watch mode and automatically restarts it when files change.

### Start

```bash
npm start
```

Starts the server normally.

## 🧱 Architecture

The starter keeps responsibilities separated:

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Controller
   ↓
Response
```

The structure is intentionally minimal.

Add the layers and tools your project actually needs as it grows.

For example:

```text
Database
Authentication
Validation
Services
Models
Repositories
Tests
File uploads
Caching
WebSockets
```

## 🎯 Why Use This Starter?

This repository is meant to remove the repetitive setup work at the beginning of a backend project.

Instead of starting with:

```text
npm init
install dependencies
create folders
configure middleware
create error handling
create response helpers
configure environment variables
```

you can start with the foundation already in place and focus on the actual application.

## 🤝 Contributing

Suggestions, improvements, and bug fixes are welcome.

For larger changes, open an issue first to discuss the proposed change.

## 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.
