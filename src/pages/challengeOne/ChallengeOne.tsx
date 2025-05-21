import { Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { HomeModernIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { Button } from '../../components';
import { AddHeatingCircuitForm } from './components/AddHeatingForm';
import { Link } from 'react-router-dom';

export const ChallengeOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="pt-6 px-6">
        <Link to="/">
          <Button variant="transparent" className="flex items-center gap-2">
            <HomeModernIcon className="w-8 h-8 stroke-gray-700" />
            <span className="text-3xl font-semibold text-gray-700">Home</span>
          </Button>
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl mb-8">Challenge 1</h1>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Hinzufügen
        </Button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [, setIsFormSubmitted] = useState(false);
  const handleFormSubmit = (isSubmitted: boolean) => {
    setIsFormSubmitted(isSubmitted);
    setIsOpen(false);
  };

  return (
    <Dialog
      as="div"
      open={isOpen}
      className="relative z-50 focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-180"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/45 backdrop-blur-sm" />
      </TransitionChild>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6">
          <DialogPanel
            transition
            className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white shadow-lg transition-all  border-gray-100"
          >
            <header className="border-b py-6 px-6 border-gray-200">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-lg font-medium text-gray-900">
                  Heizflächen hinzugügen
                </DialogTitle>
                {/* The current reusable Button component doesn't support icon button in this test, so I use a button instead */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </header>

            <main className="px-6 py-6">
              <AddHeatingCircuitForm handleFormSubmit={handleFormSubmit} />
            </main>

            <footer className="flex justify-end gap-3 border-t px-6 py-6 border-gray-200">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Schließen
              </Button>
            </footer>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
