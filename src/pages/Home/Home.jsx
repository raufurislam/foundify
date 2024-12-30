import React from "react";
import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import HowItWorks from "./HowItWorks";
import GetMoreUpdates from "./GetMoreUpdates";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <LatestLostAndFound></LatestLostAndFound>
      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>
      <div>
        <GetMoreUpdates></GetMoreUpdates>
      </div>
    </div>
  );
};

export default Home;
