import { PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '../../../components';
import { radiatorCategories } from '../data';
import { RadiatorAccordion } from './RadiatorAccordion';

type AddHeatingCircuitFormProps = {
  handleFormSubmit: (isSubmitted: boolean) => void;
};

export const AddHeatingCircuitForm = ({ handleFormSubmit }: AddHeatingCircuitFormProps) => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-8">
          <label className="block text-sm font-medium">Heizkreis</label>
          <select id="heizkreis" className="mb-2">
            <option>Heating circuit 1</option>
          </select>

          <Button variant="transparent" className="flex items-center gap-1 pl-0">
            <PlusIcon className="w-4 h-4" /> <span className="text-sm">Heizkreis hunzufügen</span>
          </Button>
        </div>
      </div>

      <RadiatorAccordion categories={radiatorCategories} handleFormSubmit={handleFormSubmit} />
    </form>
  );
};
