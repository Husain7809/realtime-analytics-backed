## Project info

Backend - Real-Time Analytics Server (Node.js + Express)

👥 A WebSocket connection (via Socket.IO) for real-time metrics updates every 2 minutes

**URL**: https://github.com/Husain7809/realtime-analytics-web.git

The only requirement is having Node.js & npm installed -

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/Husain7809/realtime-analytics-backed.git

# Step 2: Navigate to the project directory.
cd realtime-analytics-backend

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Nodejs
- TypeScript
- Expressjs
- Socket.io

```
realtime-analytics-backend/
├── src/
│   ├── controllers/              # Logic for handling requests (metrics.controller.ts)
│   ├── routes/                   # Express route definitions
│   │   ├── index.ts              # Main router entry
│   │   └── metrics.route.ts      # Metrics-specific endpoints
│   ├── utils/                    # Helper functions (e.g., mock data, error handling)
│   │   ├── catchAsyncWrapper.ts
│   │   └── mockData.ts
│   ├── ws/                       # WebSocket logic
│   │   ├── socket.ts             # Socket.IO server setup
│    app.ts                # Main Express app entry point
├── .env                          # Environment variables
├── .gitignore
├── package.json                  # Backend dependencies and scripts
├── tsconfig.json                 # TypeScript compiler options
├── eslint config files
└── README.md


```
