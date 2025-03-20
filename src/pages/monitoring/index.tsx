import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Thermometer, Droplets, Wind, Sun } from 'lucide-react';

const sensors = [
  { id: 1, name: 'Temperature', value: '22°C', status: 'normal', icon: Thermometer },
  { id: 2, name: 'Humidity', value: '45%', status: 'warning', icon: Droplets },
  { id: 3, name: 'Air Quality', value: 'Good', status: 'normal', icon: Wind },
  { id: 4, name: 'Solar Input', value: '850W', status: 'optimal', icon: Sun },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'normal':
      return 'bg-green-500';
    case 'warning':
      return 'bg-yellow-500';
    case 'optimal':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
};

export default function MonitoringPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {sensors.map((sensor, index) => {
          const Icon = sensor.icon;
          return (
            <motion.div
              key={sensor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${getStatusColor(sensor.status)}/10`}>
                    <Icon className={`w-6 h-6 text-${getStatusColor(sensor.status)}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{sensor.name}</p>
                    <h3 className="text-2xl font-bold mt-1">{sensor.value}</h3>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)}`} />
                  <span className="ml-2 text-sm capitalize">{sensor.status}</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Real-time Monitoring</h3>
            <div className="space-y-4">
              {sensors.map((sensor) => (
                <div key={sensor.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <sensor.icon className="w-5 h-5 text-muted-foreground" />
                    <span>{sensor.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{sensor.value}</span>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)}`} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Alerts History</h3>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span>Temperature Alert</span>
                  </div>
                  <span className="text-sm text-muted-foreground">2h ago</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 h-full">
            <h3 className="text-lg font-semibold mb-4">System Overview</h3>
            <div className="h-[500px] bg-muted/20 rounded-lg flex items-center justify-center">
              System Diagram
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}