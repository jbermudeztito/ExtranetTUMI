import React, { useState } from 'react';

type Route = 'dashboard' | 'statement' | 'agreements' | 'services' | 'clubs' | 'benefits' | 'elections' | 'my-office' | 'simulator' | 'profile';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, active, onClick }) => {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className={`flex items-center p-3 my-1 font-medium rounded-lg transition-colors duration-200 ${
        active
          ? 'bg-white text-blue-800 shadow-lg'
          : 'text-blue-100 hover:bg-blue-700 hover:text-white'
      }`}
    >
      {icon}
      <span className="mx-4">{text}</span>
    </a>
  );
};

const TumiLogo: React.FC = () => (
    <div className="flex flex-col items-center justify-center pt-8 pb-6">
        <div className="flex items-center">
            <div className="bg-yellow-400 w-12 h-12 flex items-center justify-center rounded-lg shadow-lg">
                <svg className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m-6.904-4.486a6.976 6.976 0 010-5.028m13.808 5.028a6.976 6.976 0 000-5.028" /></svg>
            </div>
            <div className="ml-3">
                <span className="text-white text-2xl font-bold tracking-wide">El Tumi</span>
            </div>
        </div>
        <span className="text-blue-200 text-xs mt-2 tracking-wider">Creciendo juntos</span>
    </div>
);


const Sidebar: React.FC<{ currentRoute: Route; navigate: (route: Route) => void; onLogout: () => void; }> = ({ currentRoute, navigate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { route: 'dashboard', text: 'Panel Principal', icon: <HomeIcon /> },
    { route: 'profile', text: 'Mi Perfil', icon: <UserCircleIcon /> },
    { route: 'statement', text: 'Estado de Cuenta', icon: <ChartBarIcon /> },
    { route: 'services', text: 'Créditos y Servicios', icon: <CreditCardIcon /> },
    { route: 'simulator', text: 'Simulador', icon: <CalculatorIcon /> },
    { route: 'agreements', text: 'Convenios', icon: <OfficeBuildingIcon /> },
    { route: 'my-office', text: 'Mi Oficina', icon: <MapPinIcon /> },
    { route: 'clubs', text: 'Clubs', icon: <SunIcon /> },
    { route: 'benefits', text: 'Beneficios', icon: <HeartIcon /> },
    { route: 'elections', text: 'Elecciones', icon: <ClipboardCheckIcon /> },
  ];

  return (
    <>
        <div className="hidden md:flex md:flex-col md:w-64 bg-blue-800 text-white">
            <TumiLogo />
            <nav className="flex-1 px-4 py-2">
            {navItems.map((item) => (
                <NavItem
                key={item.route}
                icon={item.icon}
                text={item.text}
                active={currentRoute === item.route}
                onClick={() => navigate(item.route as Route)}
                />
            ))}
            </nav>
            <div className="px-4 pb-2 mt-auto">
                 <NavItem
                    icon={<LogoutIcon />}
                    text="Cerrar Sesión"
                    active={false}
                    onClick={onLogout}
                />
            </div>
            <div className="p-4 border-t border-blue-900">
                <p className="text-center text-xs text-blue-200">
                    &copy; {new Date().getFullYear()} Cooperativa El Tumi.
                </p>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden fixed bottom-4 right-4 z-50 p-3 bg-blue-700 text-white rounded-full shadow-lg">
            <MenuIcon />
        </button>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 z-40 flex transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="w-64 bg-blue-800 text-white flex flex-col">
                <TumiLogo />
                <nav className="flex-1 px-4 py-2">
                {navItems.map((item) => (
                    <NavItem
                    key={item.route}
                    icon={item.icon}
                    text={item.text}
                    active={currentRoute === item.route}
                    onClick={() => { navigate(item.route as Route); setIsOpen(false); }}
                    />
                ))}
                 <NavItem
                    icon={<LogoutIcon />}
                    text="Cerrar Sesión"
                    active={false}
                    onClick={() => { onLogout(); setIsOpen(false); }}
                />
                </nav>
            </div>
            <div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        </div>
    </>
  );
};

// SVG Icons
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const ChartBarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const OfficeBuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.318-7.368a4.5 4.5 0 010-6.364z" /></svg>;
const ClipboardCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CalculatorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;


export default Sidebar;