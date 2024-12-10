import React from "react";
import "./Profile.css";

function Profile({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt={profile.login} />
      <h2>{profile.name || "No Name Available"}</h2>
      <p>{profile.bio || "No Bio Available"}</p>
      <p><strong>Public Repos:</strong> {profile.public_repos}</p>
      <p><strong>Followers:</strong> {profile.followers}</p>
      <p><strong>Following:</strong> {profile.following}</p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default Profile;
