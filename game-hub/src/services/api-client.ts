import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: "en",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export function makeImagePath(url: string) {
  return `https://image.tmdb.org/t/p/w500/${url}`;
}
