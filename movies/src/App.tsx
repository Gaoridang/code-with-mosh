import "./App.css";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://streaming-availability.p.rapidapi.com/v2/services",
  headers: {
    "X-RapidAPI-Key": "b1bfbd60camshbc4e34ecf508454p1558e2jsn98def5fb1712",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

function App() {
  return <></>;
}

export default App;
