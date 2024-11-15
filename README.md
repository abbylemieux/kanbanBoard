# Kanban Board with JWT Authentication

A full-stack Kanban board application that includes a secure login page and JWT-based authentication for managing user sessions. This project allows users to log in, manage tasks in a Kanban format, and stay logged in securely with JWT tokens.

## Table of Contents

- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Features

- Secure login with JWT-based authentication.
- Kanban board with tasks organized in columns (To Do, In Progress, Done).
- Authenticated routes to protect sensitive data and manage sessions.
- Automatic session expiration after inactivity.

## User Story

As a member of an agile team, I want a Kanban board with a secure login page so that I can securely access and manage my work tasks.

## Acceptance Criteria

- **Login Page**: Displays form inputs for username and password.
- **Successful Login**: Authenticates the user and redirects to the Kanban board.
- **Failed Login**: Displays an error message for invalid credentials.
- **JWT Storage**: Stores JWT in client’s `localStorage` for secure authenticated requests.
- **Logout**: Removes JWT from `localStorage` and redirects to the login page.
- **Access Control**: Redirects unauthenticated users to the login page.
- **Session Expiration**: Logs the user out after a period of inactivity.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
DB_USERNAME=<your_database_username>
DB_PASSWORD=<your_database_password>
JWT_SECRET=<your_jwt_secret>

```
##Installation
Clone the Repository:
```
git clone <your_repository_url>
cd kanbanBoard

```
Install Server Dependencies:
```
cd server
npm install

```
Install Client Dependencies:
```
cd ../client
npm install
Usage
```
Start the Server:
```
cd server
npm run dev
```
Start the Client:
```
cd ../client
npm start
```
##Usage
Start the Server:
```
cd server
npm run dev
```
Start the Client:
```
cd ../client
npm start
```
Access the Application: Open your browser and navigate to http://localhost:3000 to access the application.

## Testing

To test the server API, you can use Insomnia or a similar tool. Import the provided JSON file to test the login, authentication, and API routes directly.

- **Login API**: `/auth/login`
  - **Method**: `POST`
  - **Body**:
    ```json
    { "username": "<username>", "password": "<password>" }
    ```

- **Protected Routes**: Include the `Authorization` header with `Bearer <token>` in requests to access protected routes.

## Deployment

To deploy on Render:

1. Create a new Render service and add your Git repository.
2. Set up environment variables (`DB_USERNAME`, `DB_PASSWORD`, and `JWT_SECRET`) in Render’s environment settings.
3. Deploy the application.

For detailed steps, refer to Render’s [Deploy with PostgreSQL guide](https://render.com/docs/deploy-postgresql).

## Technologies Used

- **Frontend**: React, TypeScript
- **Backend**: Express, TypeScript, JWT, bcrypt, PostgreSQL
- **Deployment**: Render


