import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ToggleExplanation = ({explanation}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Button
      variant="no-outline-dark"
      onClick={() => setOpen(!open)}
      aria-controls="explanation-collapse-text"
      aria-expanded={open}
    >
      See Explanation
    </Button>
    <Collapse in={open}>
      <div id="explanation-collapse-text">
        {explanation}
      </div>
    </Collapse>
    </>
  )
}

export default ToggleExplanation
