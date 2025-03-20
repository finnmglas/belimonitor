import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, TrendingUp, Clock, Battery, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const optimizations = [
  {
    id: 1,
    title: 'HVAC Optimization',
    savings: '15%',
    status: 'active',
    nextAction: 'Temperature adjustment at 18:00',
    icon: Zap,
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Lighting Schedule',
    savings: '8%',
    status: 'pending',
    nextAction: 'Dim lights in 30 minutes',
    icon: TrendingUp,
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Peak Load Management',
    savings: '12%',
    status: 'active',
    nextAction: 'Load balancing in progress',
    icon: Clock,
    color: 'text-purple-500',
  },
  {
    id: 4,
    title: 'Battery Storage',
    savings: '20%',
    status: 'charging',
    nextAction: 'Full charge in 2 hours',
    icon: Battery,
    color: 'text-orange-500',
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
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Adjust Settings</DropdownMenuItem>
                        <DropdownMenuItem>Disable</DropdownMenuItem>
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
              <CardTitle>Optimization Schedule</CardTitle>
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
              <CardTitle>Energy Savings Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
                  Forecast Chart
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Daily Target', value: '45%', color: 'text-green-500' },
                    { label: 'Monthly Savings', value: '€1,234', color: 'text-blue-500' },
                    { label: 'Efficiency', value: '92%', color: 'text-purple-500' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}