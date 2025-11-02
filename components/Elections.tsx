import React from 'react';

const CandidateCard: React.FC<{ name: string; listNumber: number; photoUrl: string; }> = ({ name, listNumber, photoUrl }) => {
    return (
        <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <img src={photoUrl} alt={`Foto de ${name}`} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">Lista N° {listNumber}</p>
            <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
                Votar
            </button>
        </div>
    );
}

const Elections: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 rounded-md mb-6 text-left">
          <p className="font-bold">¡Atención, socio!</p>
          <p>Tu participación en el proceso electoral es un derecho y una obligación. Ayúdanos a construir el futuro de nuestra cooperativa.</p>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Proceso Electoral Anual 2024</h2>
        <p className="mt-2 text-gray-600">Elección del Consejo de Administración y Consejo de Vigilancia</p>
        
        <div className="mt-6 border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Estado de tu Votación</h3>
            <div className="inline-flex items-center bg-red-100 text-red-800 text-lg font-semibold px-6 py-3 rounded-full">
                <ClockIcon className="w-6 h-6 mr-2"/>
                Voto Pendiente
            </div>
            <p className="text-sm text-gray-500 mt-2">Fecha límite para votar: 31 de Agosto, 2024</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">Candidatos Hábiles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CandidateCard name="Carlos Quispe" listNumber={1} photoUrl="https://picsum.photos/seed/candidate1/128/128" />
            <CandidateCard name="Mariela Flores" listNumber={2} photoUrl="https://picsum.photos/seed/candidate2/128/128" />
            <CandidateCard name="Luis Mendoza" listNumber={3} photoUrl="https://picsum.photos/seed/candidate3/128/128" />
        </div>
      </div>
    </div>
  );
};

const ClockIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default Elections;