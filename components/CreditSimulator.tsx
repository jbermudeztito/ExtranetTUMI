import React, { useState, useMemo } from 'react';
import { ANNUAL_INTEREST_RATE } from '../constants';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(value);
};

const Slider: React.FC<{ label: string; value: number; min: number; max: number; step: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; displayValue: string; }> = 
({ label, value, min, max, step, onChange, displayValue }) => (
    <div>
        <label htmlFor={label} className="flex justify-between items-center text-sm font-medium text-gray-700">
            <span>{label}</span>
            <span className="font-bold text-blue-700 text-lg">{displayValue}</span>
        </label>
        <input
            id={label}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-blue-600"
        />
    </div>
);

const ResultItem: React.FC<{ label: string; value: string; isPrimary?: boolean }> = ({ label, value, isPrimary = false }) => (
    <div className={`flex justify-between items-center py-3 ${isPrimary ? '' : 'border-b border-gray-200'}`}>
        <span className="text-gray-600">{label}</span>
        <span className={`font-bold ${isPrimary ? 'text-3xl text-blue-700' : 'text-gray-800'}`}>{value}</span>
    </div>
);


const CreditSimulator: React.FC = () => {
    const [amount, setAmount] = useState(5000);
    const [term, setTerm] = useState(24);
    const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    
    const MIN_AMOUNT = 1000;
    const MAX_AMOUNT = 50000;
    const MIN_TERM = 6;
    const MAX_TERM = 60;

    const { monthlyPayment, totalInterest, totalPayment, scheduleData } = useMemo(() => {
        const principal = amount;
        const monthlyInterestRate = ANNUAL_INTEREST_RATE / 12;
        const numberOfPayments = term;
        let schedule = [];

        if (principal > 0 && monthlyInterestRate > 0) {
            const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
            const calculatedMonthlyPayment = (principal * x * monthlyInterestRate) / (x - 1);
            const calculatedTotalPayment = calculatedMonthlyPayment * numberOfPayments;
            const calculatedTotalInterest = calculatedTotalPayment - principal;
            
            let remainingBalance = principal;
            for (let i = 1; i <= numberOfPayments; i++) {
                const interestPayment = remainingBalance * monthlyInterestRate;
                const principalPayment = calculatedMonthlyPayment - interestPayment;
                remainingBalance -= principalPayment;
                schedule.push({
                    month: i,
                    payment: calculatedMonthlyPayment,
                    interest: interestPayment,
                    principal: principalPayment,
                    balance: remainingBalance > 0 ? remainingBalance : 0,
                });
            }

            return {
                monthlyPayment: calculatedMonthlyPayment,
                totalInterest: calculatedTotalInterest,
                totalPayment: calculatedTotalPayment,
                scheduleData: schedule,
            };
        }
        return { monthlyPayment: 0, totalInterest: 0, totalPayment: 0, scheduleData: [] };
    }, [amount, term]);
    
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Simulador de Créditos</h2>
                <p className="mt-2 text-gray-600">Ajusta el monto y el plazo para encontrar el crédito perfecto para ti.</p>
            </div>

            <div className="space-y-8">
                <Slider 
                    label="Monto del Préstamo"
                    value={amount}
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={100}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    displayValue={formatCurrency(amount)}
                />
                <Slider 
                    label="Plazo en Meses"
                    value={term}
                    min={MIN_TERM}
                    max={MAX_TERM}
                    step={1}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    displayValue={`${term} meses`}
                />
            </div>
            
            <div className="mt-8">
                <div className="bg-gray-50 rounded-xl p-6 flex flex-col">
                    <h3 className="font-semibold text-gray-700 mb-4 text-center">Resumen de tu Crédito</h3>
                    <div className="flex-grow">
                            <ResultItem 
                            label="Cuota Mensual"
                            value={formatCurrency(monthlyPayment)}
                            isPrimary
                        />
                        <ResultItem 
                            label="Tasa de Interés Anual"
                            value={`${(ANNUAL_INTEREST_RATE * 100).toFixed(0)}%`}
                        />
                            <ResultItem 
                            label="Total Intereses"
                            value={formatCurrency(totalInterest)}
                        />
                            <ResultItem 
                            label="Total a Pagar"
                            value={formatCurrency(totalPayment)}
                        />
                    </div>
                    <button className="mt-6 w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-lg shadow-sm">
                        Solicitar Crédito
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsScheduleVisible(!isScheduleVisible)}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                        {isScheduleVisible ? 'Ocultar Cronograma' : 'Ver Cronograma Detallado'}
                    </button>
                </div>
        
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isScheduleVisible ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Cronograma de Pagos</h3>
                    <div className="max-h-96 overflow-y-auto border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 sticky top-0">
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cuota</th>
                                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Interés</th>
                                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amortización</th>
                                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Saldo</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {scheduleData.map((row) => (
                                    <tr key={row.month} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{row.month}</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(row.payment)}</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-red-500 text-right">{formatCurrency(row.interest)}</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-green-600 text-right">{formatCurrency(row.principal)}</td>
                                        <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold text-gray-700 text-right">{formatCurrency(row.balance)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditSimulator;