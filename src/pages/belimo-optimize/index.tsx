import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OptimizationTable from '@/components/optimization/OptimizationTable';
import OptimizationModal from '@/components/optimization/OptimizationModal';
import { useState } from 'react';

export default function BelimoOptimizePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Belimo Optimize</h1>
            <p className="text-gray-500 mt-1">
              Identified optimization potential and recommended actions
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Savings Potential</p>
              <p className="text-2xl font-bold text-green-500">€450/month</p>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Optimization Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <OptimizationTable />
          </CardContent>
        </Card>

        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <div onClick={e => e.stopPropagation()}>
              <OptimizationModal />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}