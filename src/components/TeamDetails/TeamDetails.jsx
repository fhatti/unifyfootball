// TeamDetails.jsx
import React, { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import "./TeamDetails.css"


import headerImg from "../../assets/test6.png";

const TeamDetails = () => {
  let playersNumber = 1;
  const { teamId } = useParams(); // Use useParams to get the teamId from the route parameters
  const teamUrl = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamId}`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(teamUrl, apiKey);

  useEffect(() => {
    // You may want to add additional logic here if you need to perform actions on teamId change
    // For example, refetching data when teamId changes
  }, [teamId]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <RotatingLines color="#000" />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const team = data.result[0]; // Adjust this based on the actual structure of your API response

  const headerProps = {
    title: [team.team_name],
    imageUrl: [headerImg],
    logo: [team.team_logo],
    lowercase: false,
    shadow: true,
  };

  const sortedPlayers = team.players.sort((a, b) => {
    const positionsOrder = [
      "Goalkeepers",
      "Defenders",
      "Midfielders",
      "Forwards",
    ];
    return (
      positionsOrder.indexOf(a.player_type) -
      positionsOrder.indexOf(b.player_type)
    );
  });



  return (
    <div>
      <Header {...headerProps} />
      <div>
        <h2>Players</h2>
       <div className="players-container">
       {sortedPlayers.map((player, index, array) => (
          <div key={player.player_key} className="player-card">
            {index === 0 ||
            player.player_type !== array[index - 1].player_type ? (
              <h3>{player.player_type}:</h3>
            ) : null}
            {player.player_image ? (
              <img
                src={player.player_image}
                alt={player.player_name}
                onError={(e) => {
                  e.target.src =
                    "https://howsmydealing.com/wp-content/uploads/2016/12/anonymous-icon.jpg";
                }}
                style={{ width: "150px", height: "150px", background: "transparent" }}
              />
            ) : (
              <img
                src="https://howsmydealing.com/wp-content/uploads/2016/12/anonymous-icon.jpg"
                alt={player.player_name}
                style={{ width: "150px", height: "150px" }}
              />
            )}
            <p className="name">Name: {player.player_name}</p>
            <p>Number: {player.player_number}</p>
            <p>Age:{player.player_age}</p>
            {player.player_goals > 5 ? (<p>Goluri marcate : {player.player_goals}</p>):null}
            {playersNumber++}
            <img src={team.team_logo} alt="" />
          </div>
        ))}
       </div>
        {console.log(`Numarul de jucatori echipei ${team.team_name} este ${playersNumber} de jucatori`)}
      </div>
    </div>
  );
};

export default TeamDetails;
