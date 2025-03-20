import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart2, TrendingUp, Activity, Leaf, DollarSign, Gauge, AlertOctagon } from 'lucide-react';
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
} from 'recharts';

const metrics = [
  { 
    title: 'Total Energy Usage', 
    value: '280 kWh/m²', 
    change: '-12%', 
    icon: LineChart, 
    color: 'text-blue-500',
    description: 'Current annual consumption'
  },
  { 
    title: 'Cost Savings', 
    value: '€7,500', 
    change: '+15%', 
    icon: DollarSign, 
    color: 'text-green-500',
    description: 'Monthly optimization savings'
  },
  { 
    title: 'CO2 Reduction', 
    value: '12,000 kg', 
    change: '-18%', 
    icon: Leaf, 
    color: 'text-purple-500',
    description: 'Monthly carbon savings'
  },
  { 
    title: 'System Efficiency', 
    value: '92%', 
    change: '+5%', 
    icon: Gauge, 
    color: 'text-orange-500',
    description: 'Current HVAC performance'
  },
];

// Energy consumption data (MWh)
const energyData = [
  { month: 'Jan', actual: 320, target: 300, savings: 20 },
  { month: 'Feb', actual: 300, target: 290, savings: 10 },
  { month: 'Mar', actual: 290, target: 280, savings: 10 },
  { month: 'Apr', actual: 270, target: 270, savings: 0 },
  { month: 'May', actual: 260, target: 260, savings: 0 },
  { month: 'Jun', actual: 250, target: 250, savings: 0 },
];

// High priority optimizations
const urgentOptimizations = [
  {
    issue: 'HVAC System Optimization Required',
    location: 'Main Building, Floors 1-3',
    savings: '€4,000/month',
    co2: '6,400 kg/month',
  },
  {
    issue: 'Excess Heating in Restaurant Area',
    location: 'Restaurant & Bar, Ground Floor',
    savings: '€2,000/month',
    co2: '3,200 kg/month',
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
                        {metric.change} vs. last month
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
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
              <CardTitle>Energy Consumption Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 rounded-lg shadow-lg border">
                              <p className="text-sm font-medium">{label}</p>
                              {payload.map((entry: any, index: number) => (
                                <p key={index} className="text-sm" style={{ color: entry.color }}>
                                  {entry.name}: {entry.value} MWh
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      fill="url(#colorActual)"
                      stroke="#3b82f6"
                      name="Actual"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#22c55e"
                      strokeWidth={2}
                      name="Target"
                    />
                    <defs>
                      <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </ComposedChart>
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
              <CardTitle className="flex items-center">
                <AlertOctagon className="w-5 h-5 text-red-500 mr-2" />
                High Priority Optimizations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {urgentOptimizations.map((opt, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-red-50 border border-red-100 rounded-lg"
                  >
                    <h3 className="font-medium text-gray-900">{opt.issue}</h3>
                    <p className="text-sm text-gray-500 mt-1">{opt.location}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">{opt.savings}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Leaf className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">{opt.co2}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View All Optimizations
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}