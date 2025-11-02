import React, { useState } from 'react';
import { INSTITUTIONAL_AGREEMENTS, PERU_DEPARTMENTS } from '../constants';
import type { Agreement } from '../types';
import Modal from './Modal';

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LocationMarkerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const InformationCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const AgreementCard: React.FC<{ agreement: Agreement; onDetailsClick: () => void }> = ({ agreement, onDetailsClick }) => {
  const hasDetails = agreement.address || agreement.phone || agreement.terms || agreement.websiteUrl;

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md p-5 flex flex-col">
      <div className="flex items-start space-x-4 flex-grow">
          <img src={agreement.logo} alt={`Logo de ${agreement.name}`} className="w-12 h-12 rounded-full object-cover border" />
          <div className="flex-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}>
                  {agreement.category}
              </span>
              <h3 className="text-md font-semibold text-gray-800 mt-2">{agreement.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{agreement.description}</p>
          </div>
      </div>
      {hasDetails && (
        <button
          onClick={onDetailsClick}
          className="mt-4 w-full text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-center bg-blue-50 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Ver Detalles
        </button>
      )}
    </div>
  );
};

const Agreements: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(PERU_DEPARTMENTS[0]);
  const [selectedAgreement, setSelectedAgreement] = useState<Agreement | null>(null);
  const agreements = INSTITUTIONAL_AGREEMENTS[selectedDepartment] || [];

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Convenios Institucionales</h2>
          <p className="mt-1 text-gray-600">Disfruta de beneficios exclusivos por ser socio de El Tumi.</p>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-4 overflow-x-auto" aria-label="Tabs">
              {PERU_DEPARTMENTS.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`${
                    selectedDepartment === department
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                >
                  {department}
                </button>
              ))}
            </nav>
          </div>
        </div>
        
        {agreements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agreements.map((agreement, index) => (
                <AgreementCard key={index} agreement={agreement} onDetailsClick={() => setSelectedAgreement(agreement)} />
              ))}
          </div>
          ) : (
              <div className="text-center py-12">
                  <p className="text-gray-500">No hay convenios disponibles en este departamento.</p>
              </div>
          )}
      </div>
      
      <Modal 
        isOpen={!!selectedAgreement} 
        onClose={() => setSelectedAgreement(null)} 
        title={selectedAgreement?.name || 'Detalles del Convenio'}
      >
        {selectedAgreement && (
          <div className="space-y-4">
            {selectedAgreement.address && (
                <div className="flex items-start space-x-3">
                    <LocationMarkerIcon />
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">Dirección:</span> {selectedAgreement.address}</p>
                </div>
            )}
            {selectedAgreement.phone && (
                <div className="flex items-start space-x-3">
                    <PhoneIcon />
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">Teléfono:</span> {selectedAgreement.phone}</p>
                </div>
            )}
            {selectedAgreement.terms && (
                <div className="flex items-start space-x-3">
                    <InformationCircleIcon />
                    <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">Términos:</span> {selectedAgreement.terms}</p>
                </div>
            )}
            {selectedAgreement.websiteUrl && (
                <a 
                    href={selectedAgreement.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full text-center bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Visitar Sitio Web
                </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Agreements;
