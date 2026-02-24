# 🎬 Films Challenge -- ReactJS Concepts

Comprehensive technical documentation for the
**films-challenge-reactjs-concepts** project.

------------------------------------------------------------------------

## 📌 Overview

This project is a React application built as part of a Rocketseat Ignite
challenge.\
It demonstrates core React concepts, state management, component
structuring, and API consumption using a mock backend powered by
`json-server`.

------------------------------------------------------------------------

## 🧰 Tech Stack

### 🧠 Core Technologies

-   **React** -- UI library
-   **TypeScript** -- Static typing
-   **Webpack** -- Module bundler
-   **Babel** -- Transpiler (JSX + TS support)
-   **Sass (node-sass)** -- Styling
-   **Axios** -- HTTP client

### 🛠 Development Tools

-   **webpack-dev-server** -- Development server with hot reload
-   **React Refresh** -- Fast refresh for React components
-   **json-server** -- Mock REST API

------------------------------------------------------------------------

## 🏗 Architecture Overview

                      ┌─────────────────────┐
                      │     React App       │
                      │  (Frontend UI)      │
                      └──────────┬──────────┘
                                 │ HTTP (Axios)
                                 ▼
                      ┌─────────────────────┐
                      │   json-server API   │
                      │    (Mock Backend)   │
                      └─────────────────────┘

------------------------------------------------------------------------

## 📁 Project Structure (Simplified)

    films-challenge-reactjs-concepts/
    │
    ├── src/                # Application source code
    ├── server.json         # Mock API database
    ├── package.json        # Dependencies and scripts
    ├── webpack.config.js   # Webpack configuration
    └── babel.config.js     # Babel configuration

------------------------------------------------------------------------

## 🚀 Running the Project Locally

### 1️⃣ Prerequisites

Make sure you have installed:

-   Git
-   Node.js (v14 or higher recommended)
-   npm or Yarn

------------------------------------------------------------------------

### 2️⃣ Clone the Repository

``` bash
git clone https://github.com/threis/films-challenge-reactjs-concepts.git
cd films-challenge-reactjs-concepts
```

------------------------------------------------------------------------

### 3️⃣ Install Dependencies

Using npm:

``` bash
npm install
```

Using Yarn:

``` bash
yarn
```

------------------------------------------------------------------------

## 🔐 Environment Variables

✅ **No environment variables are required.**

The project runs entirely with a local mock API using `json-server`.

If you later integrate a real API (e.g., TMDB), you may introduce
variables such as:

    REACT_APP_API_KEY=your_api_key
    REACT_APP_API_URL=https://api.example.com

------------------------------------------------------------------------

## ▶️ Start the Mock API

The project depends on a local REST API powered by `json-server`.

Run:

``` bash
npm run server
```

or

``` bash
yarn server
```

The API will be available at:

    http://localhost:3333

------------------------------------------------------------------------

## 💻 Start the React Development Server

In a separate terminal:

``` bash
npm run dev
```

or

``` bash
yarn dev
```

The application will be available at:

    http://localhost:8080

Hot reload is enabled via Webpack Dev Server.

------------------------------------------------------------------------

## 🏗 Production Build

To generate a production-ready build:

``` bash
npm run build
```

or

``` bash
yarn build
```

The optimized bundle will be generated in the output directory
configured in `webpack.config.js`.

------------------------------------------------------------------------

## 🧪 Available Scripts

  Script     Description
  ---------- ---------------------------------
  `dev`      Starts React development server
  `server`   Starts json-server mock API
  `build`    Generates production build
  `test`     Runs tests (if configured)

------------------------------------------------------------------------

## 📦 Deployment Options

Since this is a static React app, it can be deployed to:

-   Vercel
-   Netlify
-   GitHub Pages
-   Any static hosting provider

For deployment, ensure:

1.  Run `npm run build`
2.  Deploy the generated build folder
3.  Replace mock API with real backend (if needed)

------------------------------------------------------------------------

## ⚠ Important Notes

-   This project does not include CI/CD configuration.
-   The backend is only a mock server for development purposes.
-   Production deployments require a real backend API.

------------------------------------------------------------------------

## 📄 License

This project was created for educational purposes as part of a coding
challenge.

------------------------------------------------------------------------
