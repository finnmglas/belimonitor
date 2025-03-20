import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Award, CheckCircle, AlertCircle } from 'lucide-react';

const certificates = [
  {
    name: 'Green Hotel Certification',
    progress: 85,
    requirements: [
      { name: 'Energy Efficiency', completed: true },
      { name: 'Water Consumption', completed: true },
      { name: 'Waste Management', completed: true },
      { name: 'Sustainable Procurement', completed: false },
    ],
    nextSteps: 'Implementation of sustainable supply chains',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    dueDate: 'March 2024'
  },
  {
    name: 'LEED Certification',
    progress: 72,
    requirements: [
      { name: 'Energy Optimization', completed: true },
      { name: 'Water Efficiency', completed: true },
      { name: 'Materials & Resources', completed: false },
      { name: 'Indoor Air Quality', completed: false },
    ],
    nextSteps: 'Indoor air quality improvement required',
    icon: Award,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    dueDate: 'June 2024'
  },
  {
    name: 'EU Ecolabel',
    progress: 90,
    requirements: [
      { name: 'Energy Consumption', completed: true },
      { name: 'Water Consumption', completed: true },
      { name: 'Waste Reduction', completed: true },
      { name: 'Chemical Management', completed: true },
    ],
    nextSteps: 'Annual review next month',
    icon: CheckCircle,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    dueDate: 'April 2024'
  },
];

export default function SustainabilityCertificates() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Award className="w-6 h-6 mr-2 text-primary" />
          Sustainability Certification Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover-effect h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${cert.bgColor}`}>
                      <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <span className={`text-2xl font-bold ${cert.color}`}>
                      {cert.progress}%
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-4">{cert.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full rounded-full ${cert.color.replace('text', 'bg')}`}
                        style={{ width: `${cert.progress}%` }}
                      />
                    </div>

                    <div className="space-y-2">
                      {cert.requirements.map((req, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            {req.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                            )}
                            {req.name}
                          </span>
                          <span className={req.completed ? 'text-green-500' : 'text-yellow-500'}>
                            {req.completed ? 'Complete' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Due Date:</span>
                        <span className="font-medium">{cert.dueDate}</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Next Steps:</span><br />
                        {cert.nextSteps}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}