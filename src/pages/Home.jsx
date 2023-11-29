import React from "react";
import Homepages from "../components/Homepages";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Homepages />
      <Row rowId="1" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      {/* <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} /> */}
      <Row rowId="6" title="Animation" fetchURL={requests.requestAnimation} />
    </div>
  );
};

export default Home;
