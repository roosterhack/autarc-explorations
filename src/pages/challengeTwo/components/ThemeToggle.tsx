import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  // load preference from localStorage (optional)
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored) {
      setEnabled(stored === 'true');
      document.documentElement.classList.toggle('dark', stored === 'true');
    }
  }, []);

  // toggle dark mode class + store
  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled);
    localStorage.setItem('darkMode', String(enabled));
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-gray-900' : 'bg-gray-300'
      } relative cursor-pointer inline-flex h-8 w-16 items-center rounded-full border-1 border-gray-100 px-1 transition-colors duration-300`}
    >
      <span className="sr-only">Toggle theme</span>
      <span className="absolute left-1 text-white w-5 h-5">
        <SunIcon className={` h-5 ${!enabled ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
      </span>
      <span className="absolute right-1 text-white w-5 h-5">
        <MoonIcon
          className={`w-5 h-5 ${!enabled ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        />
      </span>
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
    </Switch>
  );
};
