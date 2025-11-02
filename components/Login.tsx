import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const TumiLogo: React.FC = () => (
    <div className="flex flex-col items-center justify-center pt-8 pb-6">
        <div className="flex items-center">
            <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center rounded-lg shadow-lg">
                <svg className="h-10 w-10 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m-6.904-4.486a6.976 6.976 0 010-5.028m13.808 5.028a6.976 6.976 0 000-5.028" /></svg>
            </div>
            <div className="ml-4">
                <span className="text-gray-800 text-4xl font-bold tracking-wide">El Tumi</span>
            </div>
        </div>
        <span className="text-gray-500 text-sm mt-2 tracking-wider">Creciendo juntos</span>
    </div>
);

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dni || !password) {
      setError('Por favor, ingrese su DNI y clave.');
      return;
    }
    // Simulate successful login
    setError('');
    onLogin();
  };
  
  const handleForgotPassword = () => {
    alert("Funcionalidad de recuperación de clave no implementada.");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full">
            <TumiLogo />
            <div className="bg-white rounded-xl shadow-2xl p-8 mt-6">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Bienvenido a tu Extranet</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="dni" className="text-sm font-medium text-gray-700">DNI</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="dni"
                                type="text"
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Número de Documento"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password"className="text-sm font-medium text-gray-700">Clave</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LockClosedIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="********"
                            />
                        </div>
                    </div>
                    
                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="#" onClick={handleForgotPassword} className="font-medium text-blue-600 hover:text-blue-500">
                                Olvidé mi Clave
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-blue-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Cooperativa El Tumi. Todos los derechos reservados.
            </p>
        </div>
    </div>
  );
};

const UserIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const LockClosedIcon = (props: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>;

export default Login;
