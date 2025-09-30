# Express REST API

Features:
- TypeScript + Express
- MongoDB (Mongoose)
- JWT authentication (access token)
- Role-based authorization (user / admin)

Quick start:
1. Copy `.env.example` -> `.env` and set values.
2. Install deps: `npm install`
3. Run in dev: `npm run dev` (requires ts-node-dev)
4. Build: `npm run build` and start: `npm start`

Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/todos
- POST /api/todos
- GET /api/todos/:id
- PUT /api/todos/:id
- DELETE /api/todos/:id
