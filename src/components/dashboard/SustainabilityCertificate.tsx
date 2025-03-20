import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Award, CheckCircle, AlertCircle } from 'lucide-react';

const certificates = [
  {
    name: 'Green Hotel Certification',
    progress: 85,
    requirements: [
      { name: 'Energieeffizienz', completed: true },
      { name: 'Wasserverbrauch', completed: true },
      { name: 'Abfallmanagement', completed: true },
      { name: 'Nachhaltige Beschaffung', completed: false },
    ],
    nextSteps: 'Implementierung nachhaltiger Lieferketten',
    icon: Leaf,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    name: 'LEED Zertifizierung',
    progress: 72,
    requirements: [
      { name: 'Energieoptimierung', completed: true },
      { name: 'Wassereffizienz', completed: true },
      { name: 'Materialien & Ressourcen', completed: false },
      { name: 'Innenraumqualität', completed: false },
    ],
    nextSteps: 'Verbesserung der Innenraumluftqualität',
    icon: Award,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'EU Ecolabel',
    progress: 90,
    requirements: [
      { name: 'Energieverbrauch', completed: true },
      { name: 'Wasserverbrauch', completed: true },
      { name: 'Abfallreduzierung', completed: true },
      { name: 'Chemikalienmanagement', completed: true },
    ],
    nextSteps: 'Jährliche Überprüfung im nächsten Monat',
    icon: CheckCircle,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
];

export default function SustainabilityCertificates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Nachhaltigkeitszertifizierungen</h2>
        <button className="text-sm text-blue-500 hover:text-blue-600">
          Alle anzeigen
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="card-hover-effect h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full ${cert.bgColor}`}>
                    <cert.icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <span className={`text-2xl font-bold ${cert.color}`}>
                    {cert.progress}%
                  </span>
                </div>
                <CardTitle className="mt-4">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                          {req.completed ? 'Erfüllt' : 'Ausstehend'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Nächste Schritte:</span><br />
                      {cert.nextSteps}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}