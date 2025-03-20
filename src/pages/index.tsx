import { useState } from 'react';
import { AreaChart, Card, Title } from '@tremor/react';
import { Leaf, DollarSign, BarChart3, Building2 } from 'lucide-react';
import { MetricCard } from '../components/dashboard/MetricCard';
import { OptimizationTable } from '../components/dashboard/OptimizationTable';
import { OptimizationModal } from '../components/dashboard/OptimizationModal';
import { SustainabilityCertificate } from '../components/dashboard/SustainabilityCertificate';

// Mock data - replace with actual API data later
const co2Data = [
  { date: '2023-01', 'CO2 Reduction': 2400 },
  { date: '2023-02', 'CO2 Reduction': 2800 },
  { date: '2023-03', 'CO2 Reduction': 3200 },
  { date: '2023-04', 'CO2 Reduction': 3000 },
  { date: '2023-05', 'CO2 Reduction': 3500 },
  { date: '2023-06', 'CO2 Reduction': 3700 },
];

const optimizations = [
  {
    id: '1',
    priority: 'high',
    problem: 'Unnecessary heating at night',
    location: 'Building A, room 203',
    co2Savings: '120 kg/week',
    costSavings: '250 €/month',
  },
  {
    id: '2',
    priority: 'medium',
    problem: 'Excess temperature at weekend',
    location: 'Building B, room 5',
    co2Savings: '60 kg/week',
    costSavings: '120 €/month',
  },
  {
    id: '3',
    priority: 'low',
    problem: 'Inefficient ventilation',
    location: 'Building C, Hall 2',
    co2Savings: '30 kg/week',
    costSavings: '80 €/month',
    isPremium: true,
  },
] as const;

export default function Dashboard() {
  const [selectedOptimization, setSelectedOptimization] = useState<string | null>(null);
  
  const handleOptimize = (id: string) => {
    setSelectedOptimization(id);
  };

  const handlePremiumClick = () => {
    // Implement premium upgrade flow
    console.log('Premium clicked');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Hilton Hotel - Sustainability Dashboard
        </h1>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Monthly CO2 Reduction"
          value="3,700 kg"
          trend={{ value: 5.7, isPositive: true }}
          icon={<Leaf className="w-6 h-6" />}
        />
        <MetricCard
          title="Cost Savings"
          value="€2,300"
          trend={{ value: 12, isPositive: true }}
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="Ecological Score"
          value="28% Better"
          trend={{ value: 28, isPositive: true }}
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <MetricCard
          title="Active Buildings"
          value="3"
          icon={<Building2 className="w-6 h-6" />}
        />
      </div>

      {/* CO2 Reduction Chart */}
      <Card className="mb-8">
        <Title>CO2 Reduction Trend</Title>
        <AreaChart
          className="h-72 mt-4"
          data={co2Data}
          index="date"
          categories={['CO2 Reduction']}
          colors={['green']}
          valueFormatter={(number: number) => `${number.toLocaleString()} kg`}
        />
      </Card>

      {/* Optimizations */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Optimization Recommendations
        </h2>
        <OptimizationTable
          optimizations={optimizations}
          onOptimize={handleOptimize}
          onPremiumClick={handlePremiumClick}
        />
      </div>

      {/* Sustainability Certificate */}
      <div className="mb-8">
        <SustainabilityCertificate
          currentLevel="silver"
          progress={88}
          onDownload={() => console.log('Download certificate')}
        />
      </div>

      {/* Optimization Modal */}
      {selectedOptimization && (
        <OptimizationModal
          isOpen={!!selectedOptimization}
          onClose={() => setSelectedOptimization(null)}
          optimization={{
            title: 'Stop unnecessary heating at night',
            description: 'The heating system continues to operate at full capacity during nighttime hours when the building is unoccupied.',
            suggestions: [
              {
                text: 'Reduce temperature at night from 24°C to 18°C',
                savings: 'Saving: 100 kg CO2/week',
              },
              {
                text: 'Activate timer from 7 pm to 6 am',
                savings: 'Saving: 20 kg CO2/week',
              },
            ],
          }}
        />
      )}
    </div>
  );
}