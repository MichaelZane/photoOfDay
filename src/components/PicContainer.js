import { useState, useEffect } from "react";
import axios from "axios";
import PicCard from "./PicCard";
import { GetCurrentDate } from "./helpers/GetCurrentDate";
import { GetPriorDates } from "./helpers/GetPriorDates";

const PicList = () => {
  const [pic, setPic] = useState([]);

  const apodKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apodKey}&end_date=${GetCurrentDate()}&start_date=${GetPriorDates()}`
      )
      .then((response) => {
        setPic(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Blasted outta sight, No Data", error);
      });
  }, []);

  return (
    <>
      {pic.map((card) => (
        <PicCard
          key={card.title}
          title={card.title}
          explanation={card.explanation}
          hdurl={card.hdurl}
          url={card.url}
          media_type={card.media_type}
          date={card.date}
          copyright={card.copyright}
        />
      ))}
    </>
  );
};

export default PicList;
