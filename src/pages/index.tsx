import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart2, TrendingUp, Activity, Leaf, DollarSign, Gauge, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SustainabilityCertificates from '@/components/dashboard/SustainabilityCertificates';
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

// ... (keep all the existing metrics, data, and helper functions)

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
                        {metric.change} {metric.description}
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
              <CardTitle>Energy Consumption Trend</CardTitle>
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
                    <Tooltip content={<CustomTooltip />} />
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
              <div className="mt-4 text-center text-sm text-gray-500">
                Energy consumption over the last 3 months
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
                <Link 
                  to="/belimo-optimize"
                  className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View All Optimizations
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sustainability Certificates Section */}
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