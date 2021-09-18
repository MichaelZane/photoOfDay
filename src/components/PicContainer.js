import { useState, useEffect } from "react";
import axios from 'axios'
import PicCard from "./PicCard";


const PicList = ({likedPhoto, totalLikes}) => {
  const [pic, setPic] = useState([]);
  const [toggleLiked, setToggleLiked] = useState(likedPhoto)
  const [likes, setLikes] = useState(0)

  console.log("LIKES",likes)
  const handleToggleLiked = () => {
    setToggleLiked((toggleLiked) => !toggleLiked)
    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1))
  }
  
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
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
        url={pic.url}
        media_type={pic.media_type}
        date={pic.date}
        copyright={pic.copyright}
        handleToggleLiked={handleToggleLiked}
      />
      
    </>
  );
};

export default PicList;
