import React from "react";
import useFetch from "../../hooks/useFetch";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

import "./Table.css";

const Table = ({ numberOfTeamsToShow = 16 }) => {
  const leagueStandingUrl =
    "https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=272";
  const teamUrl =
    "https://apiv2.allsportsapi.com/football/?&met=Teams&leagueId=272&";
  const apiKey = import.meta.env.VITE_API_KEY;
  const {
    data: leagueData,
    loading: leagueLoading,
    error: leagueError,
  } = useFetch(leagueStandingUrl, apiKey);
  const {
    data: teamData,
    loading: teamLoading,
    error: teamError,
  } = useFetch(teamUrl, apiKey);

  if (leagueLoading || teamLoading) {
    return (
      <div className="center">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="1"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (leagueError || teamError) {
    return (
      <p>Error: {leagueError ? leagueError.message : teamError.message}</p>
    );
  }
  const totalStandings = leagueData.result.total;
  const topStandings = totalStandings.slice(0, numberOfTeamsToShow);
  const teamDetails = teamData.result;
  return (
    <table className="standings-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>MJ</th>
          <th>V</th>
          <th>E</th>
          <th>Î</th>
          <th>G</th>
          <th>P</th>
        </tr>
      </thead>
      <tbody>
        {topStandings.map((standing, index) => {
          const team = teamDetails.find(
            (team) => team.team_name === standing.standing_team
          );
          return (
            <tr key={index}>
              <td>{standing.standing_place}</td>
              <td>
                {team ? (
                  <img
                    src={team.team_logo}
                    alt={`Logo for ${standing.standing_team}`}
                    style={{ width: "30px", height: "30px" }}
                  />
                ) : (
                  <img
                    src="https://turneu.ipajr.ro/assets/images/ipa/shield2.png"
                    alt="Default Logo"
                    style={{ width: "30px", height: "30px" }}
                  />
                )}
              </td>
              <td>
                <Link to={`/team/${standing.team_key}`}>
                  {standing.standing_team}
                </Link>
              </td>
              <td>{standing.standing_P}</td>
              <td className="hidden">{standing.standing_W}</td>
              <td>{standing.standing_D}</td>
              <td>{standing.standing_L}</td>
              <td>{standing.standing_GD}</td>
              <td>{standing.standing_PTS}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
