import { useState, useEffect } from "react";
import axios from 'axios'
import PicCard from "./PicCard";


const PicList = () => {
  const [pic, setPic] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=XN8typFRIwztacRy1AFDd2cTogqIOQ73U2hU8eeo"
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
      <PicCard
        title={pic.title}
        explanation={pic.explanation}
        hdurl={pic.hdurl}
      >
      </PicCard>
    </>
  );
};

export default PicList;
