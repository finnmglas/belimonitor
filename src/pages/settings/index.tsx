import { Bell, Mail, Shield, CreditCard, Building2, Users } from 'lucide-react';

const settings = [
  {
    section: 'Account Settings',
    items: [
      {
        title: 'Notifications',
        description: 'Manage your email and push notification preferences',
        icon: Bell,
        href: '/settings/notifications'
      },
      {
        title: 'Email Settings',
        description: 'Configure your email notifications and reports',
        icon: Mail,
        href: '/settings/email'
      },
      {
        title: 'Security',
        description: 'Update your password and security preferences',
        icon: Shield,
        href: '/settings/security'
      }
    ]
  },
  {
    section: 'Billing & Subscription',
    items: [
      {
        title: 'Payment Methods',
        description: 'Manage your payment methods and billing information',
        icon: CreditCard,
        href: '/settings/billing'
      }
    ]
  },
  {
    section: 'Organization',
    items: [
      {
        title: 'Building Management',
        description: 'Configure building settings and access controls',
        icon: Building2,
        href: '/settings/buildings'
      },
      {
        title: 'Team Members',
        description: 'Manage team members and their permissions',
        icon: Users,
        href: '/settings/team'
      }
    ]
  }
];

export default function Settings() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
        Settings
      </h1>

      <div className="space-y-8">
        {settings.map((section) => (
          <div key={section.section}>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {section.section}
            </h2>
            <div className="grid gap-4">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}