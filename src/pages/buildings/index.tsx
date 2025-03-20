import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Thermometer, Zap } from 'lucide-react';

const buildings = [
  {
    id: 1,
    name: 'Main Building',
    location: '123 Business Street',
    occupancy: '85%',
    temperature: '22°C',
    energy: '280 kWh/m²',
    status: 'optimal',
  },
  {
    id: 2,
    name: 'Conference Center',
    location: '456 Meeting Avenue',
    occupancy: '60%',
    temperature: '23°C',
    energy: '220 kWh/m²',
    status: 'warning',
  },
  {
    id: 3,
    name: 'Restaurant Building',
    location: '789 Dining Road',
    occupancy: '90%',
    temperature: '24°C',
    energy: '310 kWh/m²',
    status: 'attention',
  },
  {
    id: 4,
    name: 'Wellness Center',
    location: '321 Spa Lane',
    occupancy: '75%',
    temperature: '25°C',
    energy: '260 kWh/m²',
    status: 'optimal',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'optimal':
      return 'bg-green-500';
    case 'warning':
      return 'bg-yellow-500';
    case 'attention':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default function BuildingsPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Buildings Overview</h1>
          <p className="text-gray-500 mt-1">Monitor and manage building performance</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
          Add Building
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {buildings.map((building) => (
          <motion.div
            key={building.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="card-hover-effect">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{building.name}</h3>
                    <p className="text-sm text-gray-500">{building.location}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(building.status)}`} />
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Occupancy:</span>
                    <span className="ml-auto font-medium">{building.occupancy}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Thermometer className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Temperature:</span>
                    <span className="ml-auto font-medium">{building.temperature}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Zap className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Energy Usage:</span>
                    <span className="ml-auto font-medium">{building.energy}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-full transition-colors">
                  View Details
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Building Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Average Energy Usage</p>
              <p className="text-2xl font-bold text-primary mt-1">267.5 kWh/m²</p>
              <p className="text-sm text-gray-500 mt-1">Across all buildings</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Total Occupancy</p>
              <p className="text-2xl font-bold text-primary mt-1">77.5%</p>
              <p className="text-sm text-gray-500 mt-1">Average utilization</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Building Status</p>
              <p className="text-2xl font-bold text-primary mt-1">2/4</p>
              <p className="text-sm text-gray-500 mt-1">Buildings need attention</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}