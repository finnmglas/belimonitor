import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart2, TrendingUp, Activity } from 'lucide-react';
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
  { title: 'Energy Usage', value: '245 kWh', change: '-12%', icon: LineChart, color: 'text-blue-500' },
  { title: 'Cost Savings', value: '€1,234', change: '+15%', icon: TrendingUp, color: 'text-green-500' },
  { title: 'CO2 Reduction', value: '2.5 tons', change: '-8%', icon: Activity, color: 'text-purple-500' },
  { title: 'Efficiency Score', value: '92%', change: '+5%', icon: BarChart2, color: 'text-orange-500' },
];

// Letzten 3 Monate Energieverbrauchsdaten
const energyData = [
  { name: 'Jan 1', consumption: 320, cost: 1200 },
  { name: 'Jan 15', consumption: 300, cost: 1150 },
  { name: 'Feb 1', consumption: 310, cost: 1100 },
  { name: 'Feb 15', consumption: 290, cost: 1050 },
  { name: 'Mar 1', consumption: 280, cost: 1000 },
  { name: 'Mar 15', consumption: 265, cost: 950 },
  { name: 'Apr 1', consumption: 245, cost: 900 },
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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-blue-500">
          Verbrauch: {payload[0].value} kWh
        </p>
      </div>
    );
  }
  return null;
};

const CostTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-green-500">
          Kosten: €{payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
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
                      <p className="text-sm font-medium text-muted-foreground">
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
              <div className="h-[400px] w-full">
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
                    <Tooltip content={<CustomTooltip />} />
                    <defs>
                      <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="consumption"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorConsumption)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Energieverbrauch der letzten 3 Monate in kWh
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
              <CardTitle>Kostenanalyse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
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
                    <Tooltip content={<CostTooltip />} />
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="cost"
                      stroke="#22c55e"
                      fillOpacity={1}
                      fill="url(#colorCost)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Kostenentwicklung der letzten 3 Monate in Euro
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
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Detaillierte Analyse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Spitzenlastzeiten</h4>
                <p className="text-sm text-muted-foreground mb-2">Höchster Verbrauch:</p>
                <p className="text-lg font-semibold text-blue-500">08:00 - 12:00 Uhr</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Einsparpotential</h4>
                <p className="text-sm text-muted-foreground mb-2">Mögliche Reduzierung:</p>
                <p className="text-lg font-semibold text-green-500">15% - 20%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">CO₂-Bilanz</h4>
                <p className="text-sm text-muted-foreground mb-2">Aktuelle Einsparung:</p>
                <p className="text-lg font-semibold text-purple-500">2.5 Tonnen</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}