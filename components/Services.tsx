import React from 'react';
import type { Service } from '../types';

interface ServicesProps {
    navigate: (route: string) => void;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
            <button 
                onClick={service.onClick}
                className="mt-auto w-full bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
            >
                {service.actionText}
            </button>
        </div>
    );
};


const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const services: Service[] = [
    {
      title: 'Créditos por Convenio',
      description: 'Accede a financiamiento rápido con tasas de interés preferenciales. Ideal para tus proyectos y necesidades urgentes.',
      icon: CreditCardIcon,
      actionText: 'Simular mi Crédito',
      onClick: () => navigate('simulator'),
    },
    {
      title: 'Canastas Navideñas',
      description: 'Como cada año, celebramos la navidad con una generosa canasta para ti y tu familia. ¡Inscríbete para recibir la tuya!',
      icon: GiftIcon,
      actionText: 'Más Información'
    },
    {
      title: 'Entradas para Eventos',
      description: 'Disfruta de los mejores conciertos y eventos culturales con descuentos exclusivos para socios. ¡No te quedes fuera!',
      icon: TicketIcon,
      actionText: 'Ver Eventos Disponibles'
    },
  ];

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Nuestros Servicios para Socios</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Te ofrecemos una variedad de servicios pensados para tu bienestar y el de tu familia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

const CreditCardIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const GiftIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
const TicketIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>;

export default Services;