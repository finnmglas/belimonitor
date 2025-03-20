import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart2, TrendingUp, Activity } from 'lucide-react';
import SustainabilityCertificates from '@/components/dashboard/SustainabilityCertificate';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const metrics = [
  { title: 'Energieverbrauch', value: '245 kWh', change: '-12%', icon: LineChart, color: 'text-blue-500' },
  { title: 'Kosteneinsparung', value: '€1,234', change: '+15%', icon: TrendingUp, color: 'text-green-500' },
  { title: 'CO2 Reduktion', value: '2.5 t', change: '-8%', icon: Activity, color: 'text-purple-500' },
  { title: 'Effizienz', value: '92%', change: '+5%', icon: BarChart2, color: 'text-orange-500' },
];

const energyData = [
  { name: 'Jan 1', value: 320 },
  { name: 'Jan 15', value: 300 },
  { name: 'Feb 1', value: 310 },
  { name: 'Feb 15', value: 290 },
  { name: 'Mar 1', value: 280 },
  { name: 'Mar 15', value: 265 },
  { name: 'Apr 1', value: 245 },
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

export default function IndexPage() {
  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div key={metric.title} variants={item}>
              <Card className="card-hover-effect">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {metric.title}
                      </p>
                      <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
                      <p className={`text-sm mt-2 ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {metric.change} vom letzten Monat
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
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
        >
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Energieverbrauch Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={energyData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 rounded-lg shadow-lg border">
                              <p className="text-sm font-medium">{label}</p>
                              <p className="text-sm text-blue-500">
                                {payload[0].value} kWh
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Tagesauslastung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { time: '00:00', load: 30 },
                      { time: '04:00', load: 25 },
                      { time: '08:00', load: 65 },
                      { time: '12:00', load: 85 },
                      { time: '16:00', load: 70 },
                      { time: '20:00', load: 45 },
                      { time: '23:59', load: 35 },
                    ]}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 rounded-lg shadow-lg border">
                              <p className="text-sm font-medium">{label}</p>
                              <p className="text-sm text-green-500">
                                Auslastung: {payload[0].value}%
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <defs>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="load"
                      stroke="#22c55e"
                      fillOpacity={1}
                      fill="url(#colorLoad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <SustainabilityCertificates />
      </motion.div>
    </div>
  );
}