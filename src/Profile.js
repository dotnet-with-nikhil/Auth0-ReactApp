
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
  } = useAuth0();

  // Call secured .NET API
  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: "YOUR_AUDIENCE",
        scope: "read:messages",
      });

      const response = await fetch("https://localhost:5001/api/secure", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      console.log("API Response:", data);
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <div>
          <h2>User Profile</h2>

          <img
            src={user.picture}
            alt={user.name}
            style={{ width: "100px", borderRadius: "50%" }}
          />

          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(user, null, 2)}
          </pre>

          <br />

          <button onClick={callApi}>Call Secure API</button>

          <br /><br />

          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;	