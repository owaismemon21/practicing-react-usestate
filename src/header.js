import './App.css';

function Header(props) {
  return (
    <header className={`App-header ${props.isBulbOn ? 'yellow' : ''}`}>
      <h1>Counter with Bulb On/Off Effect</h1>
      <h2>Bulb is {props.isBulbOn ? 'ON' : 'OFF'}</h2>
    </header>
  );
}

export default Header;
