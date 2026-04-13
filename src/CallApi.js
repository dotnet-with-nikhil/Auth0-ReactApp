import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CallApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState(null);

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch("https://localhost:7133/api/GetResume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={callApi}>Call Secure API</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default CallApi;