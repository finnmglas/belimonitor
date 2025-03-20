interface MetricCardProps {
  title: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

export function MetricCard({ title, value, trend, icon }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400">{title}</div>
        <div className="text-green-600 dark:text-green-400">{icon}</div>
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</div>
        {trend && (
          <span className={`ml-2 text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
        )}
      </div>
    </div>
  );
}