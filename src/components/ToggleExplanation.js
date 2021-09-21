import { useState } from "react";
import { Collapse } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ToggleExplanation = ({ explanation }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="no-outline-info"
        onClick={() => setOpen(!open)}
        aria-controls="explanation-collapse-text"
        aria-expanded={open}
      >
        {!open ? "See Explanation" : "Close Explanation" }
      </Button>
      <Collapse in={open}>
        <div id="explanation-collapse-text">
          <Card.Text>{explanation}</Card.Text>
        </div>
      </Collapse>
    </>
  );
};

export default ToggleExplanation;
