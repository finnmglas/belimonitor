import { Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;