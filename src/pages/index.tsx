import { Leaf, DollarSign, BarChart3, Building2 } from 'lucide-react';

const MetricCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div className="text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-green-600 dark:text-green-400">{icon}</div>
    </div>
    <div className="mt-2">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hilton Hotel - Sustainability Dashboard
        </h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Monthly CO2 Reduction"
          value="3,700 kg"
          icon={<Leaf className="w-6 h-6" />}
        />
        <MetricCard
          title="Cost Savings"
          value="€2,300"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="Ecological Score"
          value="28% Better"
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <MetricCard
          title="Active Buildings"
          value="3"
          icon={<Building2 className="w-6 h-6" />}
        />
      </div>

      {/* Simple Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Optimization Recommendations
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Problem</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    High
                  </span>
                </td>
                <td className="px-6 py-4">Unnecessary heating at night</td>
                <td className="px-6 py-4">Building A, room 203</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm font-medium">
                    Optimize now
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4">Excess temperature at weekend</td>
                <td className="px-6 py-4">Building B, room 5</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm font-medium">
                    Optimize now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}