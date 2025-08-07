# String Utilities

A versatile web-based tool for developers that provides a collection of string encoding, decoding, and manipulation utilities. This project includes a user-friendly interface for various operations and a decoupled backend, ready for extension.

## Features

- **Base64 Encode/Decode:** Standard Base64 encoding and decoding.
- **Base64Url Encode/Decode:** URL-safe Base64 encoding and decoding.
- **URL Encode/Decode:** Percent-encoding for URLs.
- **Hex Encode/Decode:** Convert strings to and from their hexadecimal representation.
- **JSON Pretty Print:** Format JSON strings for readability.
- **JWT Decoder:** Decode JSON Web Tokens to inspect their header and payload.

## Local Development

To run this project locally, you will need to run the frontend and the backend separately.

### Frontend

The frontend is a single, self-contained HTML file located in the `docs` directory. There is no build step required.

1.  **Serve the `docs` directory:** You can use any simple HTTP server to serve the `docs` directory. If you have Python installed, you can run one of the following commands from the root of the project:

    ```bash
    # For Python 3
    python3 -m http.server --directory docs 8080
    ```

    ```bash
    # For Python 2
    python -m SimpleHTTPServer 8080
    ```

2.  Open your browser and navigate to `http://localhost:8080`.

### Backend

The backend is a Node.js application located in the `backend` directory.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the server in development mode:**
    ```bash
    npm run dev
    ```

The backend server will start on `http://localhost:3001`.

## Deployment

This project is set up with a decoupled deployment process for the frontend and backend.

### Frontend (GitHub Pages)

The frontend is configured to be automatically deployed to GitHub Pages.

-   The content of the `docs` directory is served as the static site.
-   A GitHub Actions workflow (`.github/workflows/deploy-frontend.yml`) is set up to automatically deploy the site to the `gh-pages` branch on every push to the `main` branch.
-   To enable this, you will need to configure your repository's settings under "Pages" to use the `gh-pages` branch as the source for GitHub Pages.

### Backend (Vercel)

The backend is configured to be deployed to Vercel.

1.  **Create a Vercel account:** If you don't have one, sign up at [vercel.com](https://vercel.com).

2.  **Create a new project:** From your Vercel dashboard, click "Add New..." and select "Project".

3.  **Import your Git repository:** Connect your GitHub account and select this repository.

4.  **Configure the project:** Vercel will automatically detect the `vercel.json` file and configure the project accordingly. You shouldn't need to change any settings.

5.  **Deploy:** Click the "Deploy" button. Vercel will build and deploy your backend. After the deployment is complete, you will be given a URL where your API is live.
