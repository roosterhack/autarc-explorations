import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../../../components';
import type { RadiatorCategory } from '../data';
import { FormField } from './FormField';

type RadiatorAccordionProps = {
  categories: RadiatorCategory[];
  handleFormSubmit: (isSubmitted: boolean) => void;
};

export const RadiatorAccordion = ({ categories, handleFormSubmit }: RadiatorAccordionProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categories[0].id);
  const [formData, setFormData] = useState<Record<string, Record<string, string>>>({});
  const [showMore, setShowMore] = useState<Record<string, boolean>>({});
  console.log(formData, 'formData');
  const handleFieldChange = (categoryId: string, fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [fieldId]: value,
      },
    }));
  };

  const toggleShowMore = (id: string) => setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div>
      {categories.map((cat) => {
        const isActive = selectedCategoryId === cat.id;
        const categoryData = formData[cat.id] || {};
        const selectedType =
          categoryData[cat.requiredFields.find((f) => f.categorySelector)?.id || ''];
        const hasAllRequiredFilled = cat.requiredFields.every((field) =>
          categoryData[field.id]?.trim()
        );

        return (
          <div key={cat.id} className="overflow-hidden border-b border-gray-200 last:border-none">
            <button
              type="button"
              className="flex cursor-pointer gap-1 items-center w-full py-4 bg-white text-left font-semibold text-gray-800 "
              onClick={() => setSelectedCategoryId(cat.id)}
            >
              <ChevronDownIcon
                className={clsx(
                  'w-5 h-5 transform rotate-270 transition-transform',
                  isActive && 'rotate-360'
                )}
              />
              <div className="flex items-center gap-1">
                {cat.label}
                <InformationCircleIcon className="w-5 h-5 text-gray-500" />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.requiredFields.map((field) => (
                        <FormField
                          key={field.id}
                          field={field}
                          value={categoryData[field.id] || ''}
                          disabled={!selectedType && !field.categorySelector}
                          onChange={(value) => handleFieldChange(cat.id, field.id, value)}
                        />
                      ))}
                    </div>

                    {Array.isArray(cat.optionalFields) && cat.optionalFields.length > 0 && (
                      <div className="mb-6">
                        <Button
                          variant="transparent"
                          type="button"
                          className="flex items-center gap-1 text-sm font-medium text-gray-700 focus:outline-none"
                          onClick={() => toggleShowMore(cat.id)}
                        >
                          <span className="text-sm font-semibold text-gray-700">
                            {showMore[cat.id] ? 'Show less' : 'Show more'}
                          </span>
                          <ChevronDownIcon
                            className={clsx(
                              'w-4 h-4 transition-transform duration-200 stroke-gray-700',
                              showMore[cat.id] && 'rotate-180'
                            )}
                          />
                        </Button>

                        {showMore[cat.id] && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cat.optionalFields.map((field) => (
                              <FormField key={field.id} field={field} disabled={!selectedType} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Button
                        disabled={!hasAllRequiredFilled}
                        variant="primary"
                        onClick={() => handleFormSubmit(true)}
                        className="flex items-center gap-1"
                      >
                        <PlusIcon className="w-5 h-5" />
                        <span>Hinzufügen</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
