import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Settings, 
  Bell, 
  Menu,
  X,
  ChevronDown,
  LogOut
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Buildings', href: '/buildings', icon: Building2 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const notifications = [
    {
      id: 1,
      title: "High energy consumption detected",
      description: "Building A showing 25% above normal usage",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "New optimization achieved",
      description: "Successfully reduced CO2 by 500kg this week",
      time: "1h ago",
      unread: false,
    }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          {/* Logo and Navigation */}
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">EC</span>
                </div>
                <span className="text-xl font-semibold text-gray-900 dark:text-white">EcoControl</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-1.5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center">
            {/* Notifications */}
            <div className="relative ml-3">
              <button
                type="button"
                className="relative rounded-full p-1.5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500"></span>
                <Bell className="h-6 w-6" />
              </button>
            </div>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 rounded-full text-sm focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">JD</span>
                </div>
                <div className="hidden md:flex md:items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">John Doe</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <button
                    onClick={() => console.log('logout')}
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden ml-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-2" />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}