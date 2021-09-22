
import './skeleton.css'

const Skeletontmp = ({ type }) => {

  const classes = `skeleton ${type}`

  return (
    <div className={classes}></div>
  );
};

export default Skeletontmp;
