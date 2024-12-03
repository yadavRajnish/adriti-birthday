import React from "react";
import adriti from "../assest/aditi.png"

const Card = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">🎉 HAPPY BIRTHDAY, Adriti </h3>
        <div className="girl">
          <img src={adriti} alt="" />
        </div>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">You're Invited!</h3>
        <p className="message">
          Our little princess Adriti is turning 5! Come and join us
          for a fun-filled birthday party!
        </p>
        <div className="details-container">
        <div className="details">
          <p>
            <strong>🎂 Date:</strong> 5th December
          </p>
          <p>
            <strong>⏰ Time:</strong> 8 PM onwards
          </p>
          <p>
            <strong>📍 Venue:</strong> Rashmi Garden, Manvel Pada, Virar East
          </p>
        </div>
        </div>
 
        <p className="name">From: Yadav Family</p>
      </div>
    </div>
  );
};

export default Card;
