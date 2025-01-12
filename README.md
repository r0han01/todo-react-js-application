Todo React JS Application
A simple and efficient to-do list application built with React. This app allows users to manage their tasks by adding, displaying, and removing items from a list.

Features:
Add Tasks: Users can add tasks to the list by typing in the input field and pressing the "Add Task" button.
Remove Tasks: Each task has a "Remove" button to delete it from the list.
Responsive Design: The app is designed to be fully responsive and works well on different screen sizes.
Interactive UI: Built with React to create a smooth and dynamic user interface.
Methods Followed:
React Functional Components: Used functional components for a modern approach to building the app.
useState Hook: Managed the list of tasks and input field using React’s useState hook to handle state changes.
Event Handling: Handled user input and task removal by passing event handlers to buttons.
Conditional Rendering: Ensured tasks are only added if the input is not empty and handled task deletion dynamically.
Technologies Used:
React: JavaScript library for building user interfaces.
CSS: Custom styles to make the app visually appealing and responsive.
How to Run:
1. Local Setup:
To run the app locally:

Clone this repository:
bash
Copy code
git clone https://github.com/r0han01/todo-react-js-application.git
Navigate to the project folder:
bash
Copy code
cd todo-react-js-application
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to use the app.
2. Docker Setup:
For an easier way to run the app, a Dockerfile has been included. You can run the app inside a Docker container without needing to install Node.js or dependencies manually.

Steps to Run with Docker:
Build the Docker image:
bash
Copy code
docker build -t todo-react-app .
Run the Docker container:
bash
Copy code
docker run -d -p 3000:80 todo-react-app
Open your browser and go to http://localhost:3000 to access the app running inside the container.