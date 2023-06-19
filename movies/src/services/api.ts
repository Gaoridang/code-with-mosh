import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";

const options = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmQxZmRkMTVhMmU3M2JlMzBjODk5NmVhNmQzMmFhMSIsInN1YiI6IjY0OGZmYTU1YzJmZjNkMDBlMmUxNGE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6LOyXUvigk1J9IsvP9PbO49Hc6kc90k93s9LF9BG4w",
  },
};

export const getNowPlayings = () => {
  return axios.get(`${BASE_URL}/now_playing`, options).then((res) => res.data);
};
