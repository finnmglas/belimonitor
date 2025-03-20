import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Droplets, Wind, Sun, AlertTriangle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sensors = [
  { id: 1, name: 'Temperature', value: '22°C', status: 'normal', icon: Thermometer, color: 'text-red-500' },
  { id: 2, name: 'Humidity', value: '45%', status: 'warning', icon: Droplets, color: 'text-blue-500' },
  { id: 3, name: 'Air Quality', value: 'Good', status: 'normal', icon: Wind, color: 'text-green-500' },
  { id: 4, name: 'Solar Input', value: '850W', status: 'optimal', icon: Sun, color: 'text-yellow-500' },
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function MonitoringPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          return (
            <motion.div key={sensor.id} variants={item}>
              <Card className="card-hover-effect">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gray-100 ${sensor.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="hover:bg-gray-100 p-2 rounded-full">
                        <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Set Alert</DropdownMenuItem>
                        <DropdownMenuItem>Configure</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{sensor.name}</p>
                    <h3 className="text-2xl font-bold mt-2">{sensor.value}</h3>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)}`} />
                    <span className="ml-2 text-sm capitalize">{sensor.status}</span>
                  </div>
                </CardContent>
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
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Real-time Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sensors.map((sensor) => (
                  <div key={sensor.id} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <sensor.icon className={`w-5 h-5 ${sensor.color}`} />
                      <span>{sensor.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{sensor.value}</span>
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(sensor.status)}`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Alerts History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span>Temperature Alert</span>
                    </div>
                    <span className="text-sm text-muted-foreground">2h ago</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="card-hover-effect h-full">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
                System Diagram
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}