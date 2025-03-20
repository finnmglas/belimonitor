import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { AlertTriangle, AlertCircle, AlertOctagon, Lock, ChevronRight, Zap, DollarSign, Leaf } from 'lucide-react';

interface OptimizationItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  problem: string;
  location: string;
  co2Savings: string;
  costSavings: string;
  optimizationPotential: number;
  isPremium?: boolean;
}

const optimizations: OptimizationItem[] = [
  {
    id: '1',
    priority: 'high',
    problem: 'Unnecessary heating at night',
    location: 'Building A, Room 203',
    co2Savings: '480 kg/month',
    costSavings: '€250/month',
    optimizationPotential: 85,
  },
  {
    id: '2',
    priority: 'medium',
    problem: 'Excess temperature on weekends',
    location: 'Building B, Room 5',
    co2Savings: '240 kg/month',
    costSavings: '€120/month',
    optimizationPotential: 65,
  },
  {
    id: '3',
    priority: 'low',
    problem: 'Inefficient ventilation',
    location: 'Building C, Hall 2',
    co2Savings: '120 kg/month',
    costSavings: '€80/month',
    optimizationPotential: 35,
    isPremium: true,
  },
  {
    id: '4',
    priority: 'low',
    problem: 'Lighting optimization',
    location: 'Building A, Corridor',
    co2Savings: '100 kg/month',
    costSavings: '€65/month',
    optimizationPotential: 25,
    isPremium: true,
  },
];

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'high':
      return <AlertOctagon className="w-5 h-5 text-red-500" />;
    case 'medium':
      return <AlertTriangle className="w-5 h-5 text-orange-500" />;
    case 'low':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    default:
      return null;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-50 border-red-100';
    case 'medium':
      return 'bg-orange-50 border-orange-100';
    case 'low':
      return 'bg-yellow-50 border-yellow-100';
    default:
      return '';
  }
};

const getPriorityText = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'High optimization potential';
    case 'medium':
      return 'Medium optimization potential';
    case 'low':
      return 'Low optimization potential';
    default:
      return '';
  }
};

export default function OptimizationTable() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {['high', 'medium', 'low'].map((priority) => (
          <Card key={priority} className={`p-4 ${getPriorityColor(priority)} border-2`}>
            <div className="flex items-center space-x-3">
              {getPriorityIcon(priority)}
              <div>
                <p className="text-sm font-medium text-gray-900">{getPriorityText(priority)}</p>
                <p className="text-xs text-gray-500">
                  {priority === 'high' ? '> 70%' : priority === 'medium' ? '40-70%' : '< 40%'}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {optimizations.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative ${item.isPremium ? 'filter blur-[2px]' : ''}`}
        >
          <Card className={`p-4 ${getPriorityColor(item.priority)} border-2`}>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-1">
                {getPriorityIcon(item.priority)}
              </div>
              <div className="col-span-3">
                <h3 className="font-medium text-gray-900">{item.problem}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center space-x-1">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <p className="text-sm font-medium text-gray-900">{item.co2Savings}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Monthly CO₂ Savings</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <p className="text-sm font-medium text-gray-900">{item.costSavings}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Monthly Cost Savings</p>
              </div>
              <div className="col-span-4 flex justify-end items-center space-x-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Optimization Potential</span>
                    <span className="font-medium">{item.optimizationPotential}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.optimizationPotential > 70 ? 'bg-red-500' :
                        item.optimizationPotential > 40 ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${item.optimizationPotential}%` }}
                    />
                  </div>
                </div>
                {item.isPremium ? (
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">
                    <Lock className="w-4 h-4 mr-2" />
                    Premium
                  </button>
                ) : (
                  <button 
                    onClick={() => console.log('Optimize:', item.id)}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Optimize Now
                  </button>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}

      <div className="mt-8 text-center">
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Unlock Premium Features
          </h3>
          <p className="text-gray-600 mb-4">
            Access full optimization potential and save up to 40% more energy & costs!
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-medium cursor-pointer hover:from-blue-600 hover:to-green-600 transition-all">
            <span>€0 + 15% of optimization savings</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </div>
        </Card>
      </div>
    </div>
  );
}