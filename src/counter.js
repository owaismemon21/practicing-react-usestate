import './App.css';

function Counter(props) {
  return (
    <div className='Counter'>
      <p>The Counter Value is</p>
      <h3>'{props.count}'</h3>
    </div>
  );
}

export default Counter;
