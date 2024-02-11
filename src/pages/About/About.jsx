import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Header from "../../components/Header/Header";

const About = () => {
  const headerProps = {
    title: "Despre noi",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/678d/8474/1aac7151346b1b7026812b4c37508d15?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLsqwuDWRbiR3EZFs7l~zIJuObtRfordNr6uxwMi63mOOXRKWRetCDBuuSH~stclpbNFgbbr2tHnV0LlJpCOYoabfCCMDK0zW~WMNupdarGrgm3PGyrM9Rq2tPthnNOiB-itWfR0x8r8U2hezbDncn4VXoKTrbrk504LYmjDyk7LBF0gUIqU4qa9siHLIaBZ0D0F2PLLTzhxACPMBSdPlgasAfxLZFqqpN9XUg0VgdRgXGnwrk4rClHVQidIYiilz9XvzEc6xY-XkSDokSu2RBPv99pZyVkcy0QuFYzmQWfsY3xRicYoyf76ukma-6jmQsI4dRweQzCamfmLf~PuNA__",
    subtitle: "",
    shadow: true,
  };
  return (
    <div>
      <Header {...headerProps} />
      <section className="about-us-section">
        <p className="about-us-txt">
          Fotbalul este{" "}
          <span className="unify-forms">mai mult decât un sport</span>, are
          puterea de a aduce oamenii împreună din toate categoriile de viață.
        </p>
        <p className="about-us-txt">
          Scopul nostru este să aducem împreună fani de fotbal din întreaga lume
          pentru a-și împărtăși dragostea pentru acest joc frumos și a construi
          un sentiment de comunitate și apartenență. Așadar, alăturați-vă nouă
          și să sărbătorim sportul care ne unește pe toți!
        </p>
      </section>
      <section className="about-us-contact-section">
        <h2 className="about-us-header">Vrei să colaborezi cu noi?</h2>
        <p className="about-us-txt">
          <span className="bold">
            Colaborăm pentru a face Fotbalul adevărat
          </span>
          : Suntem întotdeauna deschiși pentru noi oportunități de colaborare cu
          entuziaști și organizații care împărtășesc aceeași pasiune pentru
          fotbal.
        </p>
        <p className="about-us-txt">
          {" "}
          Dacă aveți idei pentru proiecte comune, evenimente sau inițiative, sau
          sunteți interesați să deveniți parteneri,{" "}
          <span className="bold">ne-ar plăcea să auzim de la voi.</span>
        </p>
        <Link to="/contact" className="contact-btn">
          Contactează-ne!
        </Link>
      </section>
      <section className="about-us-contact-section">
        <p className="about-us-txt">
          Fotbalul este mai mult decât un sport, are puterea de a aduce oamenii
          împreună din toate categoriile de viață. Creează o senzație comună de
          entuziasm, pasiune și comunitate care depășește granițele și unește
          oamenii într-un scop comun. Exact acest lucru ne propunem să realizăm
          cu această comunitate. Scopul nostru este să aducem împreună fani de
          fotbal din întreaga lume pentru a-și împărtăși dragostea pentru acest
          joc frumos și a construi un sentiment de comunitate și apartenență
        </p>
      </section>{" "}
      <section className="about-us-contact-section">
        <p className="about-us-txt">
          Credem în forța colaborării și suntem mereu deschiși pentru a explora
          noi oportunități împreună cu alți entuziaști și organizații pasionate
          de fotbal. Dacă aveți idei pentru proiecte comune, evenimente sau
          inițiative inovatoare, suntem cu inima deschisă să ascultăm și să
          vedem cum putem contribui la creșterea frumosului nostru sport.
        </p>
      </section>
      <section className="about-us-contact-section">
        <p className="about-us-txt">
          Dacă împărtășiți aceeași pasiune pentru fotbal și sunteți interesați
          să vă alăturați comunității noastre sau să colaborați cu noi, nu
          ezitați să ne contactați. Suntem nerăbdători să auzim ideile voastre
          și să vedem cum putem construi împreună o experiență fotbalistică
          autentică și memorabilă.
        </p>
      </section>
    </div>
  );
};

export default About;
