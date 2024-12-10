import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./Profile"; 
function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    if (!username) {
      setError("Please enter a username.");
      setProfile(null);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
      setError("");
    } catch (err) {
      setError("User not found. Please try again.");
      setProfile(null);
    }
  };

  return (
    <div className="app">
      <h1>GitHub Profile Viewer</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchProfile}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {profile && <Profile profile={profile} />}
    </div>
  );
}

export default App;
