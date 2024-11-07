# Excel Extract Formulas

This project allows you to extract formulas from Excel files efficiently using a Node.js server. It leverages the `xlsx` library to parse Excel files and makes use of `multer` to handle file uploads. This application is designed to help you automate the process of retrieving formulas from Excel sheets, whether for auditing, analysis, or integration into other workflows.

## Features
- Extract formulas from Excel files (`.xlsx`, `.xls` formats).
- Upload and process files via an API endpoint.
- Built-in development tools using `nodemon`.

## Prerequisites
To run this project, you will need:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd excel-extract-formulas
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory to configure environment variables (if needed). Example:
   ```
   NODE_ENV=development
   PORT=8000
   ```

## Usage
### Running the Application
- To start the server in development mode (with hot reloading):
  ```sh
  npm run dev
  ```

- To start the server in production mode:
  ```sh
  npm run prod
  ```

The server will be running by default at [http://localhost:3000](http://localhost:3000).

### File Upload API
- Endpoint: `POST /api/extract-formulas`
- Use `multer` to handle Excel file uploads.
- Supports `.xlsx` and `.xls` files.

#### Example Request
You can use tools like Postman or `curl` to test the file upload endpoint.

```sh
curl -X POST -F "file=@path/to/your/file.xlsx" http://localhost:8000/api/extract-formulas
```

## Project Structure
- `server.js`: Entry point of the application, handles routes and middleware.
- `package.json`: Defines dependencies and scripts.

## Scripts
- `start`: Runs the server in production mode.
- `dev`: Runs the server in development mode using `nodemon`.
- `prod`: Alias for starting the server in production mode.

## Dependencies
### Main Dependencies
- `xlsx`: Used to read and parse Excel files.
- `multer`: Middleware to handle file uploads.

### Dev Dependencies
- `dotenv`: Loads environment variables from a `.env` file.
- `express`: Minimal and flexible Node.js web application framework.
- `morgan`: HTTP request logger middleware for development.
- `nodemon`: Automatically restarts the server in development mode.

## Contributing
Feel free to open issues and contribute to the project. Contributions, suggestions, and improvements are always welcome.

## License
This project is licensed under the ISC License. See `LICENSE` for more information.


## To-Do
- Add support for handling multiple sheets.
- Implement unit tests to validate the extraction logic.
- Add authentication for secured endpoints.

