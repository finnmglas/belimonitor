import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Check, ChevronRight } from 'lucide-react';

interface OptimizationDetailProps {
  title: string;
  description: string;
  suggestions: {
    text: string;
    savings: string;
    isPremium?: boolean;
  }[];
}

const OptimizationDetail: React.FC<OptimizationDetailProps> = ({
  title,
  description,
  suggestions,
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">{title}</CardTitle>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={suggestion.isPremium ? 'filter blur-[2px]' : ''}
            >
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                {suggestion.isPremium ? (
                  <Lock className="w-5 h-5 text-gray-400 mt-1" />
                ) : (
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                )}
                <div className="ml-4 flex-1">
                  <p className="text-gray-900 font-medium">{suggestion.text}</p>
                  <p className="text-sm text-green-600 mt-1">Einsparung: {suggestion.savings}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="mt-6">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Weitere Optimierungsvorschläge freischalten
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Aktivieren Sie Premium und erhalten Sie Zugriff auf alle Optimierungsmöglichkeiten
              </p>
              <button className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full hover:from-blue-600 hover:to-green-600 transition-all">
                <span>Premium aktivieren</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Example usage:
export default function OptimizationModal() {
  return (
    <OptimizationDetail
      title="Unnötiges Heizen in der Nacht stoppen"
      description="Die Analyse zeigt, dass die Heizung nachts unnötig auf hoher Temperatur läuft. Dies führt zu erheblichen Energie- und Kostenverlusten."
      suggestions={[
        {
          text: "Temperatur nachts von 24°C auf 18°C reduzieren",
          savings: "100 kg CO₂/Woche"
        },
        {
          text: "Timer von 19:00 bis 06:00 Uhr aktivieren",
          savings: "20 kg CO₂/Woche"
        },
        {
          text: "Intelligente Temperatursteuerung implementieren",
          savings: "40 kg CO₂/Woche",
          isPremium: true
        },
        {
          text: "Zonenbasierte Heizungssteuerung einrichten",
          savings: "35 kg CO₂/Woche",
          isPremium: true
        }
      ]}
    />
  );
}