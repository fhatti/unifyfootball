import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Layout from "../Layout/Layout";
import Fixture from "../Fixture/Fixture";
import { useParams } from "react-router-dom";

function FixtureDetailed() {
  const { fixtureKey } = useParams();
  const fixtureDetailsUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&matchId=${fixtureKey}&timezone=EET`;
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(fixtureDetailsUrl, apiKey);
  console.log(data);
  useEffect(() => {}, [fixtureKey]);

  if (loading) {
    return (
      <div>
        <p>Loading detailed fixture data...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const fixture = data.result[0];

  return (
    <>
    <Layout>
      {fixture.event_final_result}
    </Layout>
    </>
  );
}

export default FixtureDetailed;
