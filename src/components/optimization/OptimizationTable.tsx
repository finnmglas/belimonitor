import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { AlertTriangle, AlertCircle, AlertOctagon, Lock, ChevronRight, Zap } from 'lucide-react';

interface OptimizationItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  problem: string;
  location: string;
  co2Savings: string;
  costSavings: string;
  isPremium?: boolean;
}

const optimizations: OptimizationItem[] = [
  {
    id: '1',
    priority: 'high',
    problem: 'Unnötiges Heizen in der Nacht',
    location: 'Gebäude A, Raum 203',
    co2Savings: '120 kg/Woche',
    costSavings: '250 €/Monat',
  },
  {
    id: '2',
    priority: 'medium',
    problem: 'Übertemperatur am Wochenende',
    location: 'Gebäude B, Raum 5',
    co2Savings: '60 kg/Woche',
    costSavings: '120 €/Monat',
  },
  {
    id: '3',
    priority: 'low',
    problem: 'Ineffiziente Lüftung',
    location: 'Gebäude C, Halle 2',
    co2Savings: '30 kg/Woche',
    costSavings: '80 €/Monat',
    isPremium: true,
  },
  {
    id: '4',
    priority: 'low',
    problem: 'Beleuchtungsoptimierung',
    location: 'Gebäude A, Flur',
    co2Savings: '25 kg/Woche',
    costSavings: '65 €/Monat',
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

export default function OptimizationTable() {
  return (
    <div className="space-y-4">
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
                <p className="text-sm font-medium text-gray-900">{item.co2Savings}</p>
                <p className="text-xs text-gray-500">CO₂ Einsparung</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-gray-900">{item.costSavings}</p>
                <p className="text-xs text-gray-500">Kosteneinsparung</p>
              </div>
              <div className="col-span-4 flex justify-end">
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
                    Jetzt optimieren
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
            Schalten Sie Premium frei
          </h3>
          <p className="text-gray-600 mb-4">
            Nutzen Sie das volle Optimierungspotential und sparen Sie bis zu 40% mehr Energie & Kosten!
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-medium cursor-pointer hover:from-blue-600 hover:to-green-600 transition-all">
            <span>0€ + 15% der Optimierungseinsparungen</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </div>
        </Card>
      </div>
    </div>
  );
}