import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function App() {
 
  const {isAuthenticated, isLoading} = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div  style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auth0 React App</h1>
      <LoginButton />
      <LogoutButton />
       {isAuthenticated && <Profile />}
    </div>
  )

}

export default App;
