import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart2, TrendingUp, Activity, Leaf, DollarSign, Gauge, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';
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

// ... (previous metrics and data definitions remain the same)

export default function IndexPage() {
  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* ... (previous metric cards section remains the same) ... */}

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
              {/* ... (chart content remains the same) ... */}
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
    </div>
  );
}