# Simple Button Display APP

This project demonstrates how to create a simple web application, set up automated testing, and integrate with CircleCI for continuous integration. The application is built with basic HTML, JavaScript, and a test suite using Mocha and Chai.

# Project Overview
The goal of this project is to:

Create a single-page web application containing a button.
Display new text on the page when the button is clicked.
Write and run a test to verify the functionality of the button.
Push the application to a public GitHub repository and set up CircleCI for automated testing.

# Application Features
Web Page: Contains a single button and an area to display text.
Functionality: When the button is clicked, the text area updates with a new message.
Testing: Ensures the button click correctly updates the displayed text.

# Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/simple-web-app.git

cd simple-web-app

# Project Setup
2. Initialize the Project
Run the following commands to set up the project:

Initialize a new Node.js project:

bash
Copy code
npm init -y
Install testing dependencies:

bash
Copy code
npm install --save-dev mocha chai
Start a local development server (e.g., with Python or Node.js):

bash
Copy code
python3 -m http.server 8080
