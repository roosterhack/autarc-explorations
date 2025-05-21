import { Link } from 'react-router-dom';
import { AIassitant } from './components/Assitant';
import { Button } from '../../components';
import { HomeModernIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './components/ThemeToggle';

export const ChallengeTwo = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-4">
        <nav>
          <Link to="/">
            <Button variant="transparent" className="flex items-center gap-2">
              <HomeModernIcon className="w-8 h-8 stroke-gray-700" />
              <span className="text-3xl font-semibold text-gray-700">Home</span>
            </Button>
          </Link>
        </nav>
        <ThemeToggle />
      </div>
      <div className="bg-stone-300 w-screen h-screen flex justify-center flex-col items-center">
        <AIassitant />
      </div>
    </>
  );
};
