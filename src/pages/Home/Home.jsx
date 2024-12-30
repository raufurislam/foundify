import React from "react";
import Banner from "./Banner";
import LatestLostAndFound from "./LatestLostAndFound";
import HowItWorks from "./HowItWorks";
import GetMoreUpdates from "./GetMoreUpdates";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="lg:space-y-20 space-y-12">
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
      <div>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
