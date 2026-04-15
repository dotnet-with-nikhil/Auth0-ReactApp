
import React from "react";
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
const [apiLoading, setApiLoading] = useState(false);
  // Call secured .NET API
  const callApi = async () => {
    setApiLoading(true);
    try {
      const token = await getAccessTokenSilently({
        audience: "https://timesheet-api",
        scope: "read:messages",
      });
      
      const response = await fetch("https://localhost:7108/api/timesheet", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      console.log("API Response:", data.message);
      alert(data.message);
      setApiLoading(false);
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
         
          <button onClick={callApi} disabled={apiLoading}>
            {apiLoading ? "Loading..." : "Call API"}
          </button>

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