# angular-jwt-auth
Sécuriser l’accès à l’application en utilisant json web token (jwt)

This project demonstrates securing an Angular application using JSON Web Tokens (JWT) for authentication. It includes a login form and route guards to protect application routes. The backend uses `json-server` and `json-server-auth`.

## Objectives
- Secure the application using JWT.
- Create an authentication form.
- Apply course concepts.

---

## Prerequisites
Before setting up the project, ensure the following are installed:
- [Node.js](https://nodejs.org)
- [Angular CLI](https://angular.io/cli)  
  Install Angular CLI globally:  
  ```bash
  npm install -g @angular/cli
Setup Instructions
1. Clone the Repository
Clone this project locally using:

git clone https://github.com/hamza10tn/angular-jwt-auth.git
cd angular-jwt-auth
2. Install Angular Dependencies
Run the following command to install required dependencies:

npm install
3. Install JSON Server and JSON Server Auth
Install json-server and json-server-auth globally:

npm i -g json-server@0.17.4
npm install -g json-server-auth
4. Create the db.json File
In the project root directory, create a file named db.json with the following content:


{
  "users": [
    {
      "email": "user@example.com",
      "password": "password123"
    }
  ]
}
5. Start the Backend Server
Run the following command to start the JSON server with authentication:

json-server-auth db.json
The backend will be available at http://localhost:3000.

6. Start the Angular Application
In a separate terminal, run:

ng serve
The Angular app will be accessible at http://localhost:4200.

Features
Authentication Form: A login form validates user credentials using JWT.
Protected Routes: Guards secure routes, allowing access only to authenticated users.
Backend Authentication: Uses json-server-auth for user management.
Project Structure
Frontend: Angular-based application for the UI.
Backend: json-server with json-server-auth to simulate a real authentication system.
How to Use the Project
Login:

Navigate to http://localhost:4200.
Use the following credentials:
Email: user@example.com
Password: password123
Secured Pages:

Attempt to access a protected route without logging in to verify the guard functionality.
Backend API:

Access API endpoints like http://localhost:3000/users to view or modify users.
