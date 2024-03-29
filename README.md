# Authentication MERN Stack Application

This repository contains code for a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. The application includes authentication features that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.

## Features

- **User Authentication**: Users can sign up for a new account, log in with their credentials, and log out securely.
- **Protected Routes**: Certain routes in the application are protected and can only be accessed by authenticated users.
- **Profile Management**: Authenticated users can update their profile information and delete their account.

## Technologies Used

- **MongoDB**: NoSQL database used for storing user information.
- **Express**: Web framework for Node.js used for building the server-side application.
- **React**: JavaScript library for building the user interface of the client-side application.
- **Node.js**: JavaScript runtime environment used for server-side scripting.
- **Firebase**: Used for authentication and storage of user profile pictures.
- **Redux Toolkit**: State management library for managing application state.
- **JWT (JSON Web Tokens)**: Used for securely transmitting information between parties as a JSON object.

## Project Structure

The project is organized into the following directories:

- **api**: Contains the server-side code including the Express server, routes, controllers, and middleware.
- **client**: Contains the client-side code including React components, pages, and Firebase configuration.
- **utils**: Contains utility functions used within the server-side code.
- **models**: Contains Mongoose schemas for MongoDB models.

## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the `api` directory and install dependencies: `cd api && npm install`
3. Create a `.env` file in the `api` directory and add necessary environment variables (e.g., MongoDB connection string, JWT secret).
4. Navigate to the `client` directory and install dependencies: `cd ../client && npm install`
5. Create a Firebase project and configure Firebase authentication. Add the Firebase configuration to `src/firebase.js`.
6. Start the server: `npm start` (from the `api` directory)
7. Start the client: `npm start` (from the `client` directory)
8. Access the application in your web browser at `http://localhost:3000`

## Usage

- Navigate to `http://localhost:3000` to access the application.
- Sign up for a new account or log in with existing credentials.
- Update your profile information on the profile page.
- Log out securely when done.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
