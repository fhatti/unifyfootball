import React, { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import leagueLogo from "../../assets/superliga-logo.png"
import "./Fixture.css";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}

const Fixture = ({ numberOfFixturesToShow = 20 }) => {
  // change date parameters in fixtureUrl !!!
  const fixtureUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&leagueId=272&timezone=EET&from=${getDate()}&to=${getDate()}`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(fixtureUrl, apiKey);

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

  const fixtures = data.result;

  if (!fixtures || fixtures.length === 0) {
    return (
      <div className="fixture-container error">
        <p className="fixture-error-msg">
          Din păcate, astăzi nu este niciun meci valabil! Te invităm să citești{" "}
          <Link to="/news">ultimele știri</Link>!
        </p>
      </div>
    );
  }
  const sliced = fixtures.slice(0, numberOfFixturesToShow);
  return (
    <div className="fixture-widget-container">
      {fixtures && fixtures.length > 0 ? (
        sliced.map((meci) => (
          <div className="fixture-container" key={meci.event_key}>
            <div className="fixture-header">
              <div className="match-status">
                {meci.event_live === "1" ? "Live" : meci.league_round}
              </div>
              <div className="match-league">
                <img
                  src={leagueLogo}
                  alt="superliga-logo"
                  className="superliga-logo"
                />
              </div>
              <div className="match-location">
                <FaLocationDot className="match-location-icon" />
                <span>{meci.event_stadium}</span>
              </div>
            </div>
            <div className="fixture-body">
              <div className="col">
                <div className="team home-team">
                  <div className="team-logo">
                    {meci.home_team_logo ? (
                      <img
                        src={meci.home_team_logo}
                        alt={`${meci.event_home_team}-logo`}
                      />
                    ) : (
                      <img
                        src="https://turneu.ipajr.ro/assets/images/ipa/shield2.png"
                        alt="Default Logo"
                      />
                    )}
                  </div>
                  <p className="team-name">{meci.event_home_team}</p>
                </div>
              </div>
              <div className="col">
                <div className="match-details">
                  <div className="match-date">{meci.event_date}</div>
                  <div className="match-score">
                    {meci.event_final_result ? (
                      <span className="match-score-number">
                        {meci.event_final_result}
                      </span>
                    ) : (
                      <span className="match-score-divider">-</span>
                    )}
                  </div>
                  <div className="match-time">
                    {meci.event_status ? meci.event_status : meci.event_time}
                  </div>
                  <div className="match-referee">
                    <span>Arbitru:</span>
                    <strong>
                      {meci.event_referee
                        ? meci.event_referee
                        : "Ovidiu Hațegan"}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="team">
                  <div className="team-logo away-team">
                    <img
                      src={meci.away_team_logo}
                      alt={`${meci.event_away_team}-logo`}
                    />
                  </div>
                  <p className="team-name">{meci.event_away_team}</p>
                </div>
              </div>
            </div>
            {meci.event_status === "Finished" ? (
              <button className="see-more-btn" s>
                <Link
                 target={"_blank"} 
                  to={{
                    pathname: `/standings/${meci.event_key}`,
                  }}
                >
                  Vezi mai multe detalii
                </Link>
              </button>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <div className="fixture-container error">
          <p className="fixture-error-msg">
            Din păcate, astăzi nu este niciun meci valabil! Te invităm să
            citești <Link to="/news">ultimele știri</Link>!
          </p>
        </div>
      )}
    </div>
  );
};

export default Fixture;
