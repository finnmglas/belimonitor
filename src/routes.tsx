import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';

// Pages
import IndexPage from './pages/index';
import AnalyticsPage from './pages/analytics';
import BuildingsPage from './pages/buildings';
import MonitoringPage from './pages/monitoring';
import OptimizationPage from './pages/optimization';
import SettingsPage from './pages/settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'buildings',
        element: <BuildingsPage />,
      },
      {
        path: 'monitoring',
        element: <MonitoringPage />,
      },
      {
        path: 'optimization',
        element: <OptimizationPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);