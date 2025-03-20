import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface OptimizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  optimization: {
    title: string;
    description: string;
    suggestions: Array<{
      text: string;
      savings: string;
    }>;
  };
}

export function OptimizationModal({ isOpen, onClose, optimization }: OptimizationModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
          <div className="flex justify-between items-start">
            <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
              {optimization.title}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {optimization.description}
          </p>

          <div className="mt-6 space-y-4">
            {optimization.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 dark:text-gray-200">{suggestion.text}</p>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {suggestion.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Apply Optimization
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}