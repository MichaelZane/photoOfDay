import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {AiOutlineHeart} from 'react-icons/ai'




const PicCard = ({ title, hdurl, explanation }) => {
  return (
    
    <Card >
      
      <Card.Body>
      <h3>Nasa's Photo of the day</h3>
      <div className="wrapper">
        <AiOutlineHeart className="heart" />
        </div>
        <Card.Img variant="top" src={hdurl} fluid='true' />
        <h5 > 
        {title}
        </h5>

      </Card.Body>
    </Card>
  );
};
export default PicCard;
