import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Droplets, Wind, Sun, AlertTriangle, AlertOctagon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SystemDiagram from '@/components/monitoring/SystemDiagram';

const sensors = [
  { id: 1, name: 'Temperature', value: '22°C', status: 'normal', icon: Thermometer, color: 'text-red-500' },
  { id: 2, name: 'Humidity', value: '45%', status: 'warning', icon: Droplets, color: 'text-blue-500' },
  { id: 3, name: 'Air Quality', value: 'Good', status: 'normal', icon: Wind, color: 'text-green-500' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'normal':
      return 'bg-green-500';
    case 'warning':
      return 'bg-yellow-500';
    case 'optimal':
      return 'bg-blue-500';
    case 'critical':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};
const criticalAlerts = [
  {
    type: 'Temperature Alert',
    location: 'Conference Room A',
    value: '27°C',
    threshold: '24°C',
    status: 'critical',
    message: 'Temperature exceeds comfort threshold',
    icon: Thermometer,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    time: '10 minutes ago'
  },
  {
    type: 'Air Quality Warning',
    location: 'Restaurant Area',
    value: 'Poor',
    threshold: 'Fair',
    status: 'warning',
    message: 'CO2 levels above recommended range',
    icon: Wind,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    time: '25 minutes ago'
  }
];

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
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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

      {/* Critical Alerts Section */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-red-100">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertOctagon className="w-5 h-5 mr-2" />
              Critical Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalAlerts.map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 ${alert.bgColor} rounded-lg border border-${alert.color.split('-')[1]}-100`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <Icon className={`w-5 h-5 ${alert.color} mr-3`} />
                        <div>
                          <h4 className="font-medium text-gray-900">{alert.type}</h4>
                          <p className="text-sm text-gray-500">{alert.location}</p>
                        </div>
                      </div>
                      <div className="text-right">

                <span className="text-sm text-muted-foreground">{alert.time}</span>
                <p className={`text-sm ${alert.status === 'resolved' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {alert.status}
                </p>
                </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Current Value:</span>
                        <span className="font-medium">{alert.value}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-gray-600">Threshold:</span>
                        <span className="font-medium">{alert.threshold}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">{alert.message}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
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
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
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
              <CardTitle>Alert History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                                    { time: '2h ago', issue: 'Temperature Alert', location: 'Main Building', status: 'resolved' },
                                    { time: '4h ago', issue: 'Humidity Warning', location: 'Conference Room', status: 'pending' },
                                    { time: '6h ago', issue: 'Air Quality Notice', location: 'Restaurant Area', status: 'resolved' }
                ].map((alert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${alert.status === 'resolved' ? 'bg-green-500' : 'bg-yellow-500'}`} />                      <div>
                        <p className="font-medium">{alert.issue}</p>
                        <p className="text-sm text-gray-500">{alert.location}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{alert.time}</span>
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
              <SystemDiagram />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">System Load</p>
                  <p className="text-lg font-bold text-blue-500">72%</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">Active Systems</p>
                  <p className="text-lg font-bold text-green-500">6/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}