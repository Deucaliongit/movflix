import React from "react";
import Homepages from "../components/Homepages";
import Row from "../components/Row";
import requests from "../Request";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Homepages />
      <Row rowId="1" title="Top Week" fetchURL={requests.requestTrendingWeek} />
      <Row rowId="2" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row rowId="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="5" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="6" title="Animation" fetchURL={requests.requestAnimation} />
      <Footer />
    </div>
  );
};

export default Home;
