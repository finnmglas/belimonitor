import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Zap, TrendingUp, Clock, Battery } from 'lucide-react';

const optimizations = [
  {
    id: 1,
    title: 'HVAC Optimization',
    savings: '15%',
    status: 'active',
    nextAction: 'Temperature adjustment at 18:00',
    icon: Zap,
  },
  {
    id: 2,
    title: 'Lighting Schedule',
    savings: '8%',
    status: 'pending',
    nextAction: 'Dim lights in 30 minutes',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Peak Load Management',
    savings: '12%',
    status: 'active',
    nextAction: 'Load balancing in progress',
    icon: Clock,
  },
  {
    id: 4,
    title: 'Battery Storage',
    savings: '20%',
    status: 'charging',
    nextAction: 'Full charge in 2 hours',
    icon: Battery,
  },
];

export default function OptimizationPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {optimizations.map((opt, index) => {
          const Icon = opt.icon;
          return (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-green-500 font-medium">{opt.savings}</span>
                </div>
                <h3 className="font-semibold">{opt.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{opt.nextAction}</p>
                <div className="mt-4 flex items-center">
                  <div className={`w-2 h-2 rounded-full ${
                    opt.status === 'active' ? 'bg-green-500' :
                    opt.status === 'pending' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <span className="ml-2 text-sm capitalize">{opt.status}</span>
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
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Optimization Schedule</h3>
            <div className="space-y-4">
              {optimizations.map((opt) => (
                <div key={opt.id} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <opt.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{opt.title}</p>
                      <p className="text-sm text-muted-foreground">{opt.nextAction}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-500">{opt.savings}</p>
                    <p className="text-sm text-muted-foreground capitalize">{opt.status}</p>
                  </div>
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
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Energy Savings Forecast</h3>
            <div className="space-y-6">
              <div className="h-[200px] bg-muted/20 rounded-lg flex items-center justify-center">
                Forecast Chart
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-500">45%</p>
                  <p className="text-sm text-muted-foreground">Daily Target</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-500">€1,234</p>
                  <p className="text-sm text-muted-foreground">Monthly Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-500">92%</p>
                  <p className="text-sm text-muted-foreground">Efficiency</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}