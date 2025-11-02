
import React from 'react';
import { MOCK_OFFICE_INFO } from '../constants';

const MyOffice: React.FC = () => {
  const { name, address, phone, mapUrl, imageUrl, accountExecutive, email } = MOCK_OFFICE_INFO;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={imageUrl} alt={`Foto de ${name}`} className="w-full h-48 md:h-64 object-cover" />
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-4 border-green-500 inline-block pb-2 mb-6">
            {name}
          </h2>
          <div className="space-y-5">
            <InfoItem icon={<LocationMarkerIcon />} title="Dirección" content={address} />
            <InfoItem icon={<WhatsAppIcon />} title="WhatsApp de Contacto" content={<a href={`https://wa.me/51${phone}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{phone}</a>} />
            {email && <InfoItem icon={<EnvelopeIcon />} title="Correo de Contacto" content={<a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>} />}
            <InfoItem icon={<UserCircleIcon />} title="Ejecutivo de Cuenta" content={accountExecutive} />
          </div>
          <div className="mt-8">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              <MapIcon className="w-5 h-5 mr-2" />
              Ver Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; content: React.ReactNode }> = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 text-gray-500">{icon}</div>
    <div className="ml-4">
      <p className="font-semibold text-gray-700">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);


// SVG Icons
const LocationMarkerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.138 4.167 4.274-1.119z"/></svg>;
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MapIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v-5.5m6 3v-5.5" /></svg>;
const EnvelopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default MyOffice;
