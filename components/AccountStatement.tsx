import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ACCOUNT_MOVEMENTS } from '../constants';
import type { AccountMovement } from '../types';

const AccountStatement: React.FC = () => {
    const balance = ACCOUNT_MOVEMENTS.reduce((acc, mov) => {
        return mov.type === 'credit' ? acc + mov.amount : acc - mov.amount;
    }, 5000); // Starting with a mock base

    const chartData = ACCOUNT_MOVEMENTS.slice(0, 6).reverse().map(m => ({
        name: new Date(m.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }),
        Ingresos: m.type === 'credit' ? m.amount : 0,
        Egresos: m.type === 'debit' ? m.amount : 0,
    }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                  <BanknotesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                  <p className="text-gray-500">Saldo Actual de Aportes</p>
                  <p className="text-2xl font-bold text-gray-800">S/ {balance.toFixed(2)}</p>
              </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-sky-100 p-4 rounded-full">
                  <ArrowUpIcon className="h-8 w-8 text-sky-600" />
              </div>
              <div>
                  <p className="text-gray-500">Total Créditos (Últ. 90 días)</p>
                  <p className="text-2xl font-bold text-gray-800">S/ 1200.00</p>
              </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-full">
                  <ArrowDownIcon className="h-8 w-8 text-red-600" />
              </div>
              <div>
                  <p className="text-gray-500">Total Débitos (Últ. 90 días)</p>
                  <p className="text-2xl font-bold text-gray-800">S/ 925.50</p>
              </div>
          </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Resumen de Movimientos Recientes</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value: number) => `S/ ${value.toFixed(2)}`} />
              <Legend />
              <Bar dataKey="Ingresos" fill="#22c55e" />
              <Bar dataKey="Egresos" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Historial de Transacciones</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {ACCOUNT_MOVEMENTS.map((movement, index) => (
                <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movement.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{movement.description}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-semibold ${movement.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                    {movement.type === 'credit' ? '+' : '-'} S/ {movement.amount.toFixed(2)}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

const BanknotesIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-9.562a1.125 1.125 0 0 1-1.081-.675l-1.218-4.471a1.125 1.125 0 0 1 .53-1.332l4.298-2.518-2.298-2.199a1.125 1.125 0 0 1 .213-1.884l11.25-5.625m-18 15.75h.008v.008H2.25v-.008Z" /></svg>;
const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" /></svg>;
const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5" /><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 11.25 7.5 7.5 7.5-7.5" /></svg>;

export default AccountStatement;