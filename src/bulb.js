import bulbOff from './images/bulb-off.png';
import bulbOn from './images/bulb-on.png';
import './App.css';

function Bulb(props) {
  return (
    <div>
      {props.isBulbOn ? <img src={bulbOn} alt="bulb" height={300} /> : <img src={bulbOff} alt="bulb" height={300} />}
    </div>
  );
}

export default Bulb;
