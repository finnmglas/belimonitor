import { Lock } from 'lucide-react';

interface Optimization {
  id: string;
  priority: 'high' | 'medium' | 'low';
  problem: string;
  location: string;
  co2Savings: string;
  costSavings: string;
  isPremium?: boolean;
}

interface OptimizationTableProps {
  optimizations: Optimization[];
  onOptimize: (id: string) => void;
  onPremiumClick: () => void;
}

export function OptimizationTable({ optimizations, onOptimize, onPremiumClick }: OptimizationTableProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Problem</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">CO2 Savings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cost Savings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {optimizations.map((opt) => (
            <tr key={opt.id} className={opt.isPremium ? 'opacity-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(opt.priority)}`}>
                  {opt.priority}
                </span>
              </td>
              <td className="px-6 py-4">{opt.problem}</td>
              <td className="px-6 py-4">{opt.location}</td>
              <td className="px-6 py-4">{opt.co2Savings}</td>
              <td className="px-6 py-4">{opt.costSavings}</td>
              <td className="px-6 py-4">
                {opt.isPremium ? (
                  <button
                    onClick={onPremiumClick}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
                  >
                    <Lock className="w-4 h-4 mr-1" />
                    Premium
                  </button>
                ) : (
                  <button
                    onClick={() => onOptimize(opt.id)}
                    className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Optimize now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}