import React from 'react';
import type { Benefit } from '../types';
import { SOCIAL_BENEFITS } from '../constants';

const BenefitDetailsSection: React.FC<{ title: string, items: any[] | undefined, renderItem: (item: any, index: number) => React.ReactNode }> = ({ title, items, renderItem }) => {
    if (!items || items.length === 0) return null;
    return (
        <div>
            <h4 className="text-md font-semibold text-gray-700 mb-2">{title}</h4>
            <ul className="space-y-2">
                {items.map(renderItem)}
            </ul>
        </div>
    );
};

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
    const hasDetails = benefit.coverage || benefit.requirements || benefit.documents;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-blue-100 p-5 rounded-full flex-shrink-0">
                    <benefit.icon className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 mt-2">{benefit.description}</p>
                </div>
            </div>
            {hasDetails && (
                 <div className="mt-6 border-t pt-6 space-y-6">
                    <BenefitDetailsSection
                        title="Cobertura"
                        items={benefit.coverage}
                        renderItem={(item, index) => (
                            <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                <span className="text-gray-600">{item.title}</span>
                                <span className="font-bold text-blue-700">{item.amount}</span>
                            </li>
                        )}
                    />
                     <BenefitDetailsSection
                        title="Requisitos"
                        items={benefit.requirements}
                        renderItem={(item, index) => (
                           <li key={index} className="flex items-start text-gray-600">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                           </li>
                        )}
                    />
                    <BenefitDetailsSection
                        title="Documentos a Presentar"
                        items={benefit.documents}
                        renderItem={(item, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                                <DocumentTextIcon className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

const Benefits: React.FC = () => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Beneficios Sociales</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Porque somos una cooperativa, nos cuidamos entre todos. Conoce los beneficios que te protegen.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {SOCIAL_BENEFITS.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

const CheckCircleIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
const DocumentTextIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

export default Benefits;