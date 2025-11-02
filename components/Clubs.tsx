
import React, { useState } from 'react';
import { CLUBS_DATA } from '../constants';
import type { Club } from '../types';
import Modal from './Modal';

const getStatusClasses = (status: string) => {
    if (status === 'BIENVENIDOS') {
        return 'bg-green-100 text-green-800';
    }
    return 'bg-yellow-100 text-yellow-800';
};

const getButtonClasses = (color: string) => {
    switch (color) {
        case 'green': return 'bg-green-500 hover:bg-green-600 text-white';
        case 'cyan': return 'bg-cyan-500 hover:bg-cyan-600 text-white';
        case 'yellow': return 'bg-yellow-400 text-blue-900 hover:bg-yellow-500';
        case 'orange': return 'bg-orange-400 hover:bg-orange-500 text-white';
        default: return 'bg-gray-500 text-white';
    }
};

const ClubCard: React.FC<{ club: Club; onDetailsClick: () => void }> = ({ club, onDetailsClick }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <img className="h-48 w-full object-cover" src={club.imageUrl} alt={`Imagen de ${club.name}`} />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{club.name}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClasses(club.status)}`}>
                        {club.status}
                    </span>
                </div>
                <div className="flex-grow"></div>
                <button 
                    onClick={onDetailsClick}
                    className="mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center"
                >
                    Ver Servicios
                </button>
            </div>
        </div>
    );
};

const Clubs: React.FC = () => {
    const [selectedClub, setSelectedClub] = useState<Club | null>(null);

    return (
        <div>
            <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Nuestros Clubs Recreacionales</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Espacios pensados para el descanso y la diversión de toda la familia.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {CLUBS_DATA.map((club, index) => (
                    <ClubCard key={index} club={club} onDetailsClick={() => setSelectedClub(club)} />
                ))}
            </div>
            <Modal
                isOpen={!!selectedClub}
                onClose={() => setSelectedClub(null)}
                title={`Servicios en ${selectedClub?.name}`}
            >
                {selectedClub && (
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Instalaciones y Servicios:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 text-left mb-6">
                           {selectedClub.services.map((service, index) => <li key={index}>{service}</li>)}
                        </ul>
                        {selectedClub.websiteUrl && (
                            <a 
                                href={selectedClub.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`w-full block text-center py-2 px-4 rounded-lg font-semibold transition-colors ${getButtonClasses(selectedClub.buttonColor)}`}
                            >
                                Visitar Web
                            </a>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Clubs;
