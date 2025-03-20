import { useState } from 'react';
import { 
  Leaf, 
  DollarSign, 
  BarChart3, 
  Building2,
  ThermometerSun,
  Wind,
  Droplets,
  AlertTriangle,
  TrendingUp,
  Award
} from 'lucide-react';

// Mock data for the dashboard
const metrics = {
  co2Reduction: {
    value: '3,700',
    unit: 'kg',
    trend: '+12%',
    description: 'vs. last month'
  },
  costSavings: {
    value: '2,300',
    unit: '€',
    trend: '+15%',
    description: 'vs. last month'
  },
  ecologicalScore: {
    value: '28',
    unit: '%',
    trend: '+5%',
    description: 'improvement'
  },
  activeBuildings: {
    value: '3',
    trend: '+1',
    description: 'new this month'
  }
};

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'High Energy Usage Detected',
    description: 'Building A showing 25% above normal consumption',
    location: 'Building A - Floor 3',
    time: '5 minutes ago'
  },
  {
    id: 2,
    type: 'success',
    title: 'Optimization Goal Achieved',
    description: 'Successfully reduced heating costs by 15%',
    location: 'Building B',
    time: '1 hour ago'
  }
];

const buildingMetrics = [
  {
    name: 'Temperature',
    value: '21.5°C',
    icon: ThermometerSun,
    color: 'text-orange-500'
  },
  {
    name: 'Humidity',
    value: '45%',
    icon: Wind,
    color: 'text-blue-500'
  },
  {
    name: 'Water Usage',
    value: '1,200 L/h',
    icon: Droplets,
    color: 'text-blue-500'
  }
];

const achievements = [
  {
    title: 'Carbon Reduction Leader',
    description: 'Top 10% in CO2 reduction',
    icon: Leaf
  },
  {
    title: 'Energy Efficiency',
    description: '25% below industry average',
    icon: TrendingUp
  },
  {
    title: 'Sustainability Award',
    description: 'Gold certification achieved',
    icon: Award
  }
];

function MetricCard({ title, value, unit, trend, description, icon: Icon }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400">{title}</div>
        <div className="text-green-600 dark:text-green-400">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
          <span className="ml-1 text-lg">{unit}</span>
        </div>
        <span className="ml-2 text-sm text-green-600 dark:text-green-400">
          {trend}
        </span>
      </div>
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hilton Hotels Dashboard
        </h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'overview'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('alerts')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'alerts'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            Alerts
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="CO2 Reduction"
          value={metrics.co2Reduction.value}
          unit={metrics.co2Reduction.unit}
          trend={metrics.co2Reduction.trend}
          description={metrics.co2Reduction.description}
          icon={Leaf}
        />
        <MetricCard
          title="Cost Savings"
          value={metrics.costSavings.value}
          unit={metrics.costSavings.unit}
          trend={metrics.costSavings.trend}
          description={metrics.costSavings.description}
          icon={DollarSign}
        />
        <MetricCard
          title="Ecological Score"
          value={metrics.ecologicalScore.value}
          unit={metrics.ecologicalScore.unit}
          trend={metrics.ecologicalScore.trend}
          description={metrics.ecologicalScore.description}
          icon={BarChart3}
        />
        <MetricCard
          title="Active Buildings"
          value={metrics.activeBuildings.value}
          trend={metrics.activeBuildings.trend}
          description={metrics.activeBuildings.description}
          icon={Building2}
        />
      </div>

      {/* Real-time Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Real-time Alerts
            </h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div className={`flex-shrink-0 ${
                    alert.type === 'warning' ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {alert.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {alert.description}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span>{alert.location}</span>
                      <span className="mx-2">•</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Building Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Current Building Metrics
          </h2>
          <div className="space-y-4">
            {buildingMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.name}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {metric.name}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {metric.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Recent Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-start space-x-3"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}