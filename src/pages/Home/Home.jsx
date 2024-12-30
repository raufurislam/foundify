import React from "react";
import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";

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
        <LatestLostAndFound></LatestLostAndFound>
      </div>
    </div>
  );
};

export default Home;
