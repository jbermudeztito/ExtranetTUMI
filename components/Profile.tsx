import React from 'react';
import type { User } from '../types';

interface ProfileProps {
  user: User;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

const DataCard: React.FC<{ title: string; children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white rounded-xl shadow-lg">
    <div className="p-6">
       <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-600">
            {icon}
        </div>
        <h3 className="text-lg font-bold leading-6 text-gray-800">{title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          {children}
        </dl>
      </div>
    </div>
  </div>
);

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <DataCard title="Datos Personales" icon={<UserCircleIcon />}>
        <InfoRow label="DNI" value={user.dni} />
        <InfoRow label="Nombres y Apellidos" value={user.name} />
        <InfoRow label="Fecha de Nacimiento" value={user.birthDate} />
        <InfoRow label="Sexo" value={user.gender} />
        <InfoRow label="Estado Civil" value={user.maritalStatus} />
        <InfoRow label="Teléfono" value={user.phone} />
        <InfoRow label="Correo Electrónico" value={user.email} />
        <InfoRow label="Dirección" value={user.address} />
      </DataCard>
      
      <DataCard title="Datos de Socio" icon={<IdentificationIcon />}>
        <InfoRow label="Fecha de Inscripción" value={user.inscriptionDate} />
        <InfoRow label="Código de Socio" value={user.memberId} />
        <InfoRow label="Oficina" value={user.office} />
        <InfoRow label="Ejecutora" value={user.executingUnit} />
      </DataCard>
    </div>
  );
};

const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IdentificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4m-6 6h6m-6 4h6m-6-8h6" /></svg>;

export default Profile;