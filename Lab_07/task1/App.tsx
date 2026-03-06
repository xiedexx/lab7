import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Dashboard = lazy(() => import("./Dashboard"));
const Settings = lazy(() => import("./Settings"));
const Profile = lazy(() => import("./Profile"));

function LoadingSpinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Code Splitting App</h1>
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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ padding: "2rem" }}>
                  <h1>Welcome Home</h1>
                  <p>This is the home page that loads immediately.</p>
                  <p>
                    Navigate to other pages to see lazy loading in action. Each
                    page will show a loading spinner while the component loads.
                  </p>
                </div>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
