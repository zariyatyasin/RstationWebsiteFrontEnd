import React from "react";
import BikeFeatures from "./BikeFeatures/BikeFeatures";
import Facilities from "./Facilities/Facilities";
import LandingPage from "./LandingPage/LandingPage";
import NewBike from "./NewBike/NewBike";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <BikeFeatures />
      <Facilities />
      <NewBike />
    </div>
  );
};

export default Home;
