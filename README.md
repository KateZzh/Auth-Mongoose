# Auth-Mongoose

Auth-Mongoose is an application created to implement registration and authorization using Mongoose.

## Tech Stack

### Server-Side:
- JavaScript
- Node.js
- Express
- MongoDB (as the database)
- Swagger (for API documentation)
- ESLint and Prettier (for code formatting and linting)

### Client-Side:
- Next.js
- Material UI (for the user interface)

### Getting Started

To set up and run Auth-Mongoose on your local machine, follow these steps:

1. Clone this repository:
git clone https://github.com/KateZzh/Auth-Mongoose.git

2. Install the dependencies for the server and client:
```bash
cd Auth-Mongoose/server
npm install


cd ../client
npm install
```
3. Start the server and client applications:
```bash
# Start the server
cd ./server
nodemon index

# Start the client
cd ./client
npm run dev
```

4. Access the application in your web browser: [http://localhost:3000](http://localhost:3000)

## API Documentation

API documentation is provided using Swagger. After starting the server, you can access the Swagger documentation at: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)
