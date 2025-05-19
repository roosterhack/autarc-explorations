import { Link } from 'react-router-dom';

function App() {
  return (
    <ul>
      <li>
        <Link to="/challenge-1" className="text-blue-600 hover:underline">
          <h1 className="text-8xl">Challenge 1</h1>
        </Link>
      </li>
      <li>
        <Link to="/challenge-2" className="text-blue-600 hover:underline">
          <h1 className="text-8xl">Challenge 2</h1>
        </Link>
      </li>
    </ul>
  );
}

export default App;
