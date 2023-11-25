const apiKey = "1d4af138f791d9a8c5134d77a19a6b4f";
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  requestPopular: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  requestTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestTrending: `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
  requestHorror: `${baseUrl}/search/movie/?api_key=${apiKey}&language=en-US&page=1`,
  requestUpComing: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export default requests;
