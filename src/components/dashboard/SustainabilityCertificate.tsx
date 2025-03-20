import * as Progress from '@radix-ui/react-progress';
import { Download } from 'lucide-react';

interface SustainabilityCertificateProps {
  currentLevel: 'bronze' | 'silver' | 'gold';
  progress: number;
  onDownload: () => void;
}

export function SustainabilityCertificate({
  currentLevel,
  progress,
  onDownload,
}: SustainabilityCertificateProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'bronze':
        return 'text-amber-700';
      case 'silver':
        return 'text-gray-400';
      case 'gold':
        return 'text-yellow-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Sustainability Certificate
        </h3>
        <button
          onClick={onDownload}
          className="text-gray-400 hover:text-gray-500"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${getLevelColor(currentLevel)} capitalize`}>
            {currentLevel}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {progress}% to next level
          </span>
        </div>

        <Progress.Root
          className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-full w-full h-2 mt-2"
          value={progress}
        >
          <Progress.Indicator
            className="bg-green-600 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
    </div>
  );
}