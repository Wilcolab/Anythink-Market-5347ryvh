We need to edit the docker-compose.yml file to run both the Python server (on port 8000) and the Node server (on port 8001) together. # Express Server Project

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js
├── package.json
├── Dockerfile
└── README.md
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can use either npm (comes with Node.js) or [Yarn](https://yarnpkg.com/).

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-5347ryvh.git
   cd express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   # or
   npm install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
# or
npm start
```

The server will be running on [http://localhost:8001](http://localhost:8001).

## API Endpoints

The server provides the following endpoints:

- **GET /** - Returns a welcome message
  ```json
  { "message": "Express server is running" }
  ```

- **GET /tasks** - Returns a list of tasks
  ```json
  [
    { "id": 1, "title": "Task 1", "completed": false },
    { "id": 2, "title": "Task 2", "completed": true },
    { "id": 3, "title": "Task 3", "completed": false }
  ]
  ```

- **POST /tasks** - Creates a new task
  ```json
  { "message": "Task created successfully" }
  ```

- **GET /health** - Health check endpoint
  ```json
  { "status": "ok" }
  ```

## Environment Variables

- `PORT` - Server port (default: 8001)
- `NODE_ENV` - Environment mode (development/production)

### Building the Docker Image

To build the Docker image for the application, run:

```
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 express-server
```

The server will be accessible at [http://localhost:8001](http://localhost:8001) from your host machine.