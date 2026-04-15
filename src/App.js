import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import "./App.css";

function App() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">⏱ TimeSheet App</h2>

        {isAuthenticated && (
          <button
            className="btn logout"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        )}
      </nav>

      {/* Login Page */}
      {!isAuthenticated ? (
        <div className="login-page">
          <div className="login-card">
            <h1>🔐 Auth0 React Demo</h1>

            <p className="subtitle">
              Example of secure authentication using Auth0 with React
            </p>

            <p className="description">
              This application demonstrates login, logout, and user profile
              management using Auth0. It provides a clean and modern UI along
              with secure token-based authentication.
            </p>

            <p className="tag">
              🚀 React • Auth0 • Secure Authentication
            </p>

            <button
              className="btn primary"
              onClick={() => loginWithRedirect()}
            >
              Login with Auth0
            </button>
          </div>
        </div>
      ) : (
        /* Dashboard */
        <div className="dashboard">
          <div className="profile">
            <img src={user?.picture} alt="profile" />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>📝 Submit Timesheet</h3>
              <p>Log your daily work efficiently</p>
            </div>

            <div className="card">
              <h3>📊 Reports</h3>
              <p>Analyze productivity and performance</p>
            </div>

            <div className="card">
              <h3>✅ Tasks</h3>
              <p>Manage and track your tasks</p>
            </div>
          </div>
          <Profile />
        </div>
      )}
    </div>
  );
}

export default App;