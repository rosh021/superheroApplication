import React from "react";
import { searchSuperHero } from "../../pages/superHeroRedux/Action";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="mainBody ">
        <h3 className="mt-1">Search Your SuperHero by Name</h3>
        <div className="nameSearch">
            <input type="text" />

        </div>
      </div>
    </section>
  );
};
