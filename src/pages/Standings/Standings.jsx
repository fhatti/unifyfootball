import React from "react";
import { FaXmark } from "react-icons/fa6";
import "./Standings.css";

import Header from "../../components/Header/Header";
import headerImg from "../../assets/test6.png";
import Fixture from "../../components/Fixture/Fixture";
import Table from "../../components/Table/Table";
import Results from "../../components/Results/Results";
import Layout from "../../components/Layout/Layout";

const Standings = () => {
  const headerProps = {
    title: "CLASAMENT",
    imageUrl: [headerImg],
    subtitle: "",
    lowercase: true,
    shadow: false,
  };

  return (
    <div className="standings">
      <Header {...headerProps} />
      <Layout>
        <div className="img-wrapper">
          <section className="main-txt">
            <p className="txt">
              Aici veți găsi informații actualizate în timp real despre
              pozițiile echipelor în clasamentul SuperLiga, oferindu-vă o
              perspectivă detaliată asupra performanței lor.{" "}
            </p>
            <p className="txt">
              Descoperiți rezultatele și statistici relevante pentru fiecare
              echipă, iar în secțiunea "Meciurile Zilei" vă așteaptă anticipări,
              analize și rezumate ale partidelor programate pentru ziua în curs.
            </p>
            <p className="txt">
              Rămâneți conectați cu pasiunea pentru fotbal și bucurați-vă de
              experiența completă a competiției SuperLiga prin intermediul
              acestei secțiuni captivante.
            </p>
          </section>
          <section className="standings-container">
            <section className="standings-container-top">
              <section className="standing-item">
                <h2 className="standings-container-header">
                  Clasament Superliga
                </h2>
                <section className="table-container">
                  <Table />
                </section>
                <section className="table-legend">
                  <p className="table-legend-info">
                    <span>
                      <FaXmark className="legend-icon" />
                    </span>
                    Locurile 1-6 intră în play-off (tur-retur, in total 10
                    etape)
                  </p>
                  <p className="table-legend-info">
                    <span>
                      <FaXmark className="legend-icon" />
                    </span>
                    Locurile 7-16 vor continua în play-out (manșă unică, in
                    total 9 etape).
                  </p>
                  <p className="table-legend-info">
                    <span>
                      <FaXmark className="legend-icon" />
                    </span>
                    Locul 1 din play-off participă în Liga Campionilor, iar
                    locul 2 și 3 din play-off în Europa Conference League.
                  </p>
                  <p className="table-legend-info">
                    <span>
                      <FaXmark className="legend-icon" />
                    </span>
                    Locul 3 din play-off va juca baraj cu caștigatoarea
                    barajului dintre locurile 1 si 2 din play-out pentru un loc
                    în Europa Conference League.
                  </p>
                  <p className="table-legend-info">
                    <span>
                      <FaXmark className="legend-icon" />
                    </span>
                    Locurile 9 si 10 din play-out retrogradează direct. Locurile
                    retrogradabile 7/8 din play-out joacă baraj cu locurile 3/4
                    din Liga 2.
                  </p>
                </section>
              </section>
              <section className="standings-item">
                <h2 className="standings-container-header">
                  Rezultate Runda Anterioară
                </h2>
                <section className="table-container">
                  <Results />
                </section>
              </section>
            </section>
            <aside className="standings-widget">
              <h2 className="widget-header">Meciurile Zilei</h2>
              <section className="widget">
                <Fixture />
              </section>
            </aside>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Standings;
