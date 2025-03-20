import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { LineChart, BarChart2, TrendingUp, Activity } from 'lucide-react';

const metrics = [
  { title: 'Energy Usage', value: '245 kWh', change: '-12%', icon: LineChart },
  { title: 'Cost Savings', value: '€1,234', change: '+15%', icon: TrendingUp },
  { title: 'CO2 Reduction', value: '2.5 tons', change: '-8%', icon: Activity },
  { title: 'Efficiency Score', value: '92%', change: '+5%', icon: BarChart2 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
                    <p className={`text-sm mt-2 ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change} from last month
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
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
        >
          <Card className="p-6 h-[400px]">
            <h3 className="text-lg font-semibold mb-4">Energy Consumption Trends</h3>
            {/* Chart placeholder */}
            <div className="h-full bg-muted/20 rounded-lg flex items-center justify-center">
              Chart Component
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 h-[400px]">
            <h3 className="text-lg font-semibold mb-4">Cost Analysis</h3>
            {/* Chart placeholder */}
            <div className="h-full bg-muted/20 rounded-lg flex items-center justify-center">
              Chart Component
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}