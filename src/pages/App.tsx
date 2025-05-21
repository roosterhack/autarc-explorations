import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="grid grid-rows-2 h-screen text-center">
      <Link
        to="/challenge-1"
        className="flex items-center justify-center h-full bg-red-400 hover:bg-red-500 transition duration-300 ease-in-out"
      >
        <h1 className="text-8xl text-white">Challenge 1</h1>
      </Link>

      <Link
        to="/challenge-2"
        className="flex items-center justify-center h-full bg-teal-400 hover:bg-teal-500 transition duration-300 ease-in-out"
      >
        <h1 className="text-8xl text-white">Challenge 2</h1>
      </Link>
    </div>
  );
}

export default App;
