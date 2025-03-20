import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, TrendingUp, Clock, Battery, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  Legend
} from 'recharts';

const optimizations = [
  {
    id: 1,
    title: 'HVAC Optimierung',
    savings: '15%',
    status: 'active',
    nextAction: 'Temperaturanpassung um 18:00',
    icon: Zap,
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Beleuchtungsplan',
    savings: '8%',
    status: 'pending',
    nextAction: 'Dimmen in 30 Minuten',
    icon: TrendingUp,
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Spitzenlast-Management',
    savings: '12%',
    status: 'active',
    nextAction: 'Lastausgleich läuft',
    icon: Clock,
    color: 'text-purple-500',
  },
  {
    id: 4,
    title: 'Batteriespeicher',
    savings: '20%',
    status: 'charging',
    nextAction: 'Vollladung in 2 Stunden',
    icon: Battery,
    color: 'text-orange-500',
  },
];

// Forecast data for the next 6 months
const forecastData = [
  {
    month: 'Apr',
    actual: 1200,
    forecast: 1200,
    savings: 0,
    efficiency: 85,
  },
  {
    month: 'Mai',
    actual: 1150,
    forecast: 1180,
    savings: 30,
    efficiency: 87,
  },
  {
    month: 'Jun',
    actual: null,
    forecast: 1100,
    savings: 80,
    efficiency: 89,
  },
  {
    month: 'Jul',
    actual: null,
    forecast: 1050,
    savings: 130,
    efficiency: 91,
  },
  {
    month: 'Aug',
    actual: null,
    forecast: 980,
    savings: 200,
    efficiency: 93,
  },
  {
    month: 'Sep',
    actual: null,
    forecast: 920,
    savings: 280,
    efficiency: 95,
  },
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
      <div className="bg-white p-4 rounded-lg shadow-lg border">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name === 'Effizienz' ? '%' : '€'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function OptimizationPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {optimizations.map((opt) => {
          const Icon = opt.icon;
          return (
            <motion.div key={opt.id} variants={item}>
              <Card className="card-hover-effect">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gray-100 ${opt.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="hover:bg-gray-100 p-2 rounded-full">
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Details anzeigen</DropdownMenuItem>
                        <DropdownMenuItem>Einstellungen anpassen</DropdownMenuItem>
                        <DropdownMenuItem>Deaktivieren</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{opt.title}</p>
                    <h3 className="text-2xl font-bold mt-2">{opt.savings}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{opt.nextAction}</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className={`w-2 h-2 rounded-full ${
                      opt.status === 'active' ? 'bg-green-500' :
                      opt.status === 'pending' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <span className="ml-2 text-sm capitalize">{opt.status}</span>
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
              <CardTitle>Optimierungsplan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {optimizations.map((opt) => (
                  <motion.div
                    key={opt.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <opt.icon className={`w-5 h-5 ${opt.color}`} />
                      <div>
                        <p className="font-medium">{opt.title}</p>
                        <p className="text-sm text-muted-foreground">{opt.nextAction}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-500">{opt.savings}</p>
                      <p className="text-sm text-muted-foreground capitalize">{opt.status}</p>
                    </div>
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
          <Card className="card-hover-effect">
            <CardHeader>
              <CardTitle>Energieeinsparungsprognose</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={forecastData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="actual"
                      fill="#3b82f6"
                      stroke="#3b82f6"
                      name="Aktuell"
                      fillOpacity={0.3}
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="forecast"
                      fill="#22c55e"
                      stroke="#22c55e"
                      name="Prognose"
                      fillOpacity={0.3}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="savings"
                      fill="#8b5cf6"
                      name="Einsparungen"
                      opacity={0.8}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="efficiency"
                      stroke="#f59e0b"
                      name="Effizienz"
                      strokeWidth={2}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-500">45%</p>
                  <p className="text-sm text-muted-foreground">Tagesziel</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-500">€1.234</p>
                  <p className="text-sm text-muted-foreground">Monatliche Einsparungen</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-500">92%</p>
                  <p className="text-sm text-muted-foreground">Effizienz</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}