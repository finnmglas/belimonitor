import { Building2, ThermometerSun, Wind, Droplets, Zap } from 'lucide-react';

const buildings = [
  {
    id: 1,
    name: 'Hilton Downtown',
    location: '123 Main Street, New York',
    rooms: 450,
    status: 'optimal',
    metrics: {
      temperature: '21.5°C',
      humidity: '45%',
      energy: '250 kWh',
      water: '1,200 L'
    },
    savings: {
      co2: '1,200 kg',
      cost: '€1,500'
    }
  },
  {
    id: 2,
    name: 'Hilton Business Center',
    location: '456 Park Avenue, Chicago',
    rooms: 300,
    status: 'warning',
    metrics: {
      temperature: '23.8°C',
      humidity: '52%',
      energy: '180 kWh',
      water: '800 L'
    },
    savings: {
      co2: '800 kg',
      cost: '€950'
    }
  },
  {
    id: 3,
    name: 'Hilton Resort & Spa',
    location: '789 Beach Road, Miami',
    rooms: 600,
    status: 'optimal',
    metrics: {
      temperature: '22.1°C',
      humidity: '48%',
      energy: '320 kWh',
      water: '1,500 L'
    },
    savings: {
      co2: '1,700 kg',
      cost: '€2,100'
    }
  }
];

export default function Buildings() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Building Management
        </h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Building2 className="w-5 h-5 mr-2" />
          Add Building
        </button>
      </div>

      <div className="grid gap-6">
        {buildings.map((building) => (
          <div 
            key={building.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {building.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {building.location}
                  </p>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    building.status === 'optimal' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400'
                  }`}
                >
                  {building.status === 'optimal' ? 'Running Optimally' : 'Needs Attention'}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <ThermometerSun className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Temperature</div>
                    <div className="font-medium text-gray-900 dark:text-white">{building.metrics.temperature}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Wind className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Humidity</div>
                    <div className="font-medium text-gray-900 dark:text-white">{building.metrics.humidity}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Energy Usage</div>
                    <div className="font-medium text-gray-900 dark:text-white">{building.metrics.energy}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Water Usage</div>
                    <div className="font-medium text-gray-900 dark:text-white">{building.metrics.water}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-8">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CO2 Savings</div>
                    <div className="font-medium text-green-600 dark:text-green-400">{building.savings.co2}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Cost Savings</div>
                    <div className="font-medium text-green-600 dark:text-green-400">{building.savings.cost}</div>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}