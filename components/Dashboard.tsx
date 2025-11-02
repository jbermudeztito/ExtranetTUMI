import React from 'react';
import type { User } from '../types';

interface DashboardProps {
  user: User;
  navigate: (route: string) => void;
}

const DashboardCard: React.FC<{ title: string; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ title, children, onClick, className = '' }) => {
    const isClickable = !!onClick;
    return (
        <div 
            className={`bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 ${isClickable ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : ''} ${className}`}
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
            {children}
        </div>
    );
};

const Dashboard: React.FC<DashboardProps> = ({ user, navigate }) => {
  return (
    <div>
      <div className="mb-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Bienvenido de nuevo, <span className="text-blue-700">{user.name.split(' ')[0]}</span>!
        </h2>
        <p className="mt-2 text-gray-600">Aquí tienes un resumen de tu actividad y beneficios en la cooperativa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Estado de Cuenta" onClick={() => navigate('statement')}>
          <p className="text-3xl font-bold text-blue-700">S/ 5,850.20</p>
          <p className="text-gray-500 mt-1">Saldo de Aportes</p>
          <button className="mt-4 w-full text-center bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            Ver Detalles
          </button>
        </DashboardCard>
        
        <DashboardCard title="Próximo Evento: Elecciones" className="bg-amber-50 border-l-4 border-amber-400">
            <div className="flex items-center space-x-4">
                 <div className="bg-amber-100 p-3 rounded-full">
                    <ClipboardCheckIcon />
                </div>
                <div>
                    <p className="font-semibold text-amber-800">Votación Anual Obligatoria</p>
                    <p className="text-sm text-amber-600">Fecha Límite: 31 de Agosto, 2024</p>
                </div>
            </div>
          <button onClick={() => navigate('elections')} className="mt-4 w-full text-center bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors">
            Ir a Votar
          </button>
        </DashboardCard>

        <DashboardCard title="Solicitar Crédito" onClick={() => navigate('services')}>
          <p className="text-gray-600 mb-4">Accede a créditos con tasas preferenciales por ser socio.</p>
           <button className="w-full text-center bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            Simular Crédito
          </button>
        </DashboardCard>

        <DashboardCard title="Convenios Destacados" className="md:col-span-2" onClick={() => navigate('agreements')}>
           <div className="space-y-3">
             <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                    <img src="https://picsum.photos/seed/udlima/48/48" alt="Logo Ulima" className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="font-medium text-gray-800">Universidad de Lima</p>
                        <p className="text-sm text-gray-500">20% de descuento en diplomados</p>
                    </div>
                </div>
                <ChevronRightIcon />
             </div>
             <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                 <div className="flex items-center space-x-3">
                    <img src="https://picsum.photos/seed/cineplanet/48/48" alt="Logo Cineplanet" className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="font-medium text-gray-800">Cineplanet</p>
                        <p className="text-sm text-gray-500">Entradas 2x1 los martes y jueves</p>
                    </div>
                </div>
                <ChevronRightIcon />
             </div>
           </div>
        </DashboardCard>

        <DashboardCard title="Acceso a Clubs" onClick={() => navigate('clubs')}>
            <div className="h-24 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://picsum.photos/seed/clubcarabayllo/600/400')"}}></div>
            <p className="mt-3 text-gray-600">Visita nuestros clubs recreacionales. ¡Tu familia te lo agradecerá!</p>
        </DashboardCard>
      </div>
    </div>
  );
};

const ClipboardCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>


export default Dashboard;