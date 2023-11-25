import React from "react";
import Homepages from "../components/Homepages";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Homepages />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
