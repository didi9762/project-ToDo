import React from "react";
import './card.css'

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img src={props.imageSrc} alt={`${props.name}'s profile`} />
      </div>
      <div className="profile-details">
      <h2>{props.name}</h2>
        <h2>{props.lastName}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;