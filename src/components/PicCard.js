import Card from "react-bootstrap/Card";
import {AiOutlineHeart} from 'react-icons/ai'
import ToggleExplanation from "./ToggleExplanation";
import { MediaTypes } from "./helpers/MediaTypes";
import Button from "react-bootstrap/Button";

const PicCard = ({ title, hdurl, url, explanation, date, media_type, handleToggleLiked }) => {

  return (
    
    <Card > 
      <Card.Title>Spacestagram</Card.Title> 

      <Card.Body>
      <Card.Subtitle>Astronomy Photo of the day</Card.Subtitle>
      <Card.Subtitle>{date}</Card.Subtitle>
      <ToggleExplanation className="explanation" explanation={explanation}/>
      {/* <div className="wrapper">
        <AiOutlineHeart className="heart" />
        </div> */}
        {MediaTypes({media_type, title, url, hdurl})}
        <div className="btn-wrapper">
        <Button
          variant="outline-dark"
          className="like"
          onClick={() => handleToggleLiked()}
        >Like</Button>
        </div>
        <h5 > 
        {title}
        </h5>
      </Card.Body>
    </Card>
  );
};
export default PicCard;
