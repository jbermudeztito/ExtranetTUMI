import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AccountStatement from './components/AccountStatement';
import Agreements from './components/Agreements';
import Services from './components/Services';
import Clubs from './components/Clubs';
import Benefits from './components/Benefits';
import Elections from './components/Elections';
import MyOffice from './components/MyOffice';
import CreditSimulator from './components/CreditSimulator';
import Profile from './components/Profile';
import Login from './components/Login';
import { MOCK_USER } from './constants';
import type { User } from './types';

type Route = 'dashboard' | 'statement' | 'agreements' | 'services' | 'clubs' | 'benefits' | 'elections' | 'my-office' | 'simulator' | 'profile';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState<User>(MOCK_USER);
  const [route, setRoute] = useState<Route>('dashboard');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Route;
      if (['dashboard', 'statement', 'agreements', 'services', 'clubs', 'benefits', 'elections', 'my-office', 'simulator', 'profile'].includes(hash)) {
        setRoute(hash);
      } else {
        setRoute('dashboard');
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    if(isAuthenticated) {
        handleHashChange(); // Initial check only if authenticated
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, [isAuthenticated]);
  
  const navigate = useCallback((newRoute: Route) => {
    window.location.hash = newRoute;
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.hash = '';
  };

  const renderContent = () => {
    switch (route) {
      case 'dashboard':
        return <Dashboard navigate={navigate} user={user} />;
      case 'statement':
        return <AccountStatement />;
      case 'agreements':
        return <Agreements />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'clubs':
        return <Clubs />;
      case 'benefits':
        return <Benefits />;
      case 'elections':
        return <Elections />;
      case 'my-office':
        return <MyOffice />;
      case 'simulator':
        return <CreditSimulator />;
      case 'profile':
        return <Profile user={user} />;
      default:
        return <Dashboard navigate={navigate} user={user} />;
    }
  };
  
  const getTitle = () => {
    switch (route) {
        case 'dashboard': return 'Panel Principal';
        case 'statement': return 'Estado de Cuenta';
        case 'agreements': return 'Convenios Institucionales';
        case 'services': return 'Créditos y Servicios';
        case 'clubs': return 'Nuestros Clubs';
        case 'benefits': return 'Beneficios Sociales';
        case 'elections': return 'Proceso Electoral';
        case 'my-office': return 'Mi Oficina';
        case 'simulator': return 'Simulador de Créditos';
        case 'profile': return 'Mi Perfil';
        default: return 'Panel Principal';
    }
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar currentRoute={route} navigate={navigate} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getTitle()} user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;