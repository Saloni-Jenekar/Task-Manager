Task Manager Application

A simple and lightweight task management application built with Node.js and Express.js. This application allows users to create, view, edit, and delete tasks without requiring a database. Tasks are stored in memory, making it perfect for learning or small-scale use.

Features

- Add Tasks: Create new tasks with a title and description.
- View Tasks: Display all tasks in a clean and simple interface.
- Edit Tasks: Update the title or details of any task.
- Delete Tasks: Remove unwanted tasks.
- In-Memory Storage: All data is stored in memory and resets when the server restarts.

 Technologies Used

- Backend: Node.js, Express.js
- Frontend: HTML, CSS, JavaScript
- Storage: In-memory (no database)

## Getting Started

Prerequisites

- Node.js installed on your machine.

Installation

1. Clone the repository:
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

2.Initialize the project with npm:
   npm init -y
   
3.Install Express.js:
  npm install express
  
4.Create the app:
  Create the main app.js file and set up your Express.js server (or copy your existing app.js file).

5.Start the server:
  node app.js

6.Open your browser and navigate to:
  http://localhost:3001
 
## Project Structure
task-manager/
├── public/          # Static files (CSS, JS)
├── views/           # EJS templates for frontend
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation


Limitations

- Tasks are stored in memory and will reset when the server restarts.
- No user authentication or database integration.

Future Enhancements

- Integrate a database for persistent storage.
- Add user authentication for personalized task management.
- Improve the user interface with modern frameworks.
