import React, { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./Results.css";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}

function getDateRounds() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() - 3;
  return `${year}-${month}-${date}`;
}

const Results = () => {
  const resultsUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&leagueId=272&timezone=EET&from=${getDateRounds()}&to=${getDate()}`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(resultsUrl, apiKey);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <RotatingLines color="#000" />
      </div>
    );
  }

  if (error) {
   <p>error : {error}</p>
  }

  console.log(data);
  const dataForResults = data.result;
  return (
    <table className="standings-table">
      <thead>
        <tr>
          <th>Data</th>
          <th></th>
          <th>Rezultat</th>
          <th></th>
          <th>Sezon</th>
        </tr>
      </thead>
      <tbody>
        {dataForResults.map((result, index) => (
          <tr key={index}>
            <td className="fs-lv1">{result.event_date}</td>
            <td>{result.event_home_team}</td>
            <td>
              <span className="score">{result.event_final_result}</span>
            </td>
            <td>{result.event_away_team}</td>
            <td className="fs-lv1">{result.league_season}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
