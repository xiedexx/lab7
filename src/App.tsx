import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function LoadingSpinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function ErrorFallback(): JSX.Element {
  return (
    <div className="error-fallback">
      <h2>⚠️ Something went wrong</h2>
      <p>We encountered an error while loading this component.</p>
      <p>This error has been caught by the Error Boundary.</p>
      <p>Click the "Try Again" button below to recover.</p>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Code Splitting + Error Handling</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <div style={{ padding: "2rem" }}>
                    <h1>Welcome Home</h1>
                    <p>This is the home page that loads immediately.</p>
                    <p>
                      Navigate to other pages to see lazy loading in action with error handling.
                    </p>
                    <div className="info-box">
                      <h3>Lab 07: Code Splitting with Suspense & Error Boundaries</h3>
                      <p>
                        This app combines lazy loading with Error Boundary error handling.
                        If a component fails to load, the Error Boundary will catch the
                        error and display a fallback UI with a "Try Again" button.
                      </p>
                      <h4>Features:</h4>
                      <ul>
                        <li>Lazy-loaded pages (Dashboard, Settings, Profile)</li>
                        <li>Suspense fallback UI with loading spinner</li>
                        <li>Error Boundary for error handling</li>
                        <li>Retry functionality</li>
                      </ul>
                    </div>
                  </div>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;

