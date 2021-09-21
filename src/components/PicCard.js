import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import ToggleExplanation from "./ToggleExplanation";
import { MediaTypes } from "./helpers/MediaTypes";
import Button from "react-bootstrap/Button";
import { CheckLikes, handleToggleLiked } from "./helpers/CheckLikes";
import "animate.css";

const PicCard = ({ title, hdurl, url, date, explanation, media_type }) => {
  const [toggleLiked, setToggleLiked] = useState(CheckLikes(title));

  useEffect(() => {
    setToggleLiked(toggleLiked);
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ToggleExplanation
            className="explanation"
            explanation={explanation}
          />

          {MediaTypes({ media_type, title, url, hdurl })}

          <div className="btn-wrapper">
            <Button
              variant="outline-dark"
              className="like"
              value={toggleLiked}
              onClick={() =>
                handleToggleLiked(toggleLiked, setToggleLiked, title)
              }
            >
              {!toggleLiked ? (
                <AiOutlineHeart className="animate__heartBeat" />
              ) : (
                <AiTwotoneHeart className="animate__heartBeat" />
              )}
            </Button>
          </div>
          <Card.Title>{date}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default PicCard;
