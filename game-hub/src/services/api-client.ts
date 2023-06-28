import axios from "axios";

export const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    language: "en",
  },
});

export async function fetchMovies() {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=32d1fdd15a2e73be30c8996ea6d32aa1`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function makeImagePath(url: string) {
  return `https://image.tmdb.org/t/p/w500/${url}`;
}
