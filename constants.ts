// FIX: Import React to enable JSX syntax for icon components.
import React, { ComponentType } from 'react';
import type { User, AccountMovement, Agreement, Club, OfficeInfo, Benefit } from './types';

// Icons - Moved here for use in constants
// FIX: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
const HeartIcon = (props: { className?: string }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: props.className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.318-7.368a4.5 4.5 0 010-6.364z" }));
const ShieldCheckIcon = (props: { className?: string }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: props.className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.5-5.5a12.025 12.025 0 013.118-1.543A12.001 12.001 0 0112 11c1.657 0 3.18.347 4.586.973a11.962 11.962 0 013.02 1.538l5.5 5.5A12.02 12.02 0 0021 8.984a11.955 11.955 0 01-2.382-3.016z" }));


export const MOCK_USER: User = {
  name: 'Ana García López',
  memberId: 'Socio N° 789123',
  avatarUrl: 'https://picsum.photos/seed/user123/100/100',
  // Personal Data
  dni: '45678912',
  birthDate: '15 de Mayo de 1985',
  gender: 'Femenino',
  maritalStatus: 'Casada',
  phone: '987654321',
  email: 'ana.garcia@email.com',
  address: 'Av. Siempre Viva 742, Lima',
  // Member Data
  inscriptionDate: '10 de Enero de 2010',
  office: 'Oficina Disa Callao',
  executingUnit: 'MINSA',
};

export const ACCOUNT_MOVEMENTS: AccountMovement[] = [
  { date: '2024-07-20', description: 'Pago de Cuota Préstamo', amount: 250.00, type: 'debit' },
  { date: '2024-07-15', description: 'Aporte Mensual', amount: 50.00, type: 'debit' },
  { date: '2024-07-10', description: 'Crédito Campaña Escolar', amount: 1200.00, type: 'credit' },
  { date: '2024-07-05', description: 'Consumo Convenio Restaurante "El Buen Sabor"', amount: 75.50, type: 'debit' },
  { date: '2024-06-20', description: 'Pago de Cuota Préstamo', amount: 250.00, type: 'debit' },
  { date: '2024-06-15', description: 'Aporte Mensual', amount: 50.00, type: 'debit' },
  { date: '2024-05-20', description: 'Pago de Cuota Préstamo', amount: 250.00, type: 'debit' },
  { date: '2024-05-15', description: 'Aporte Mensual', amount: 50.00, type: 'debit' },
];

export const INSTITUTIONAL_AGREEMENTS: Record<string, Agreement[]> = {
  'Lima': [
    { 
      name: 'Universidad de Lima', 
      category: 'Universidad', 
      description: '20% de descuento en diplomados.', 
      logo: 'https://picsum.photos/seed/udlima/48/48',
      websiteUrl: 'https://www.ulima.edu.pe/',
      phone: '(01) 4376767',
      address: 'Av. Javier Prado Este 4600, Santiago de Surco 15023',
      terms: 'El descuento aplica para socios y familiares directos (cónyuge e hijos). No acumulable con otras promociones.'
    },
    { 
      name: 'Restaurante Central', 
      category: 'Restaurante', 
      description: '15% de descuento en consumo total.', 
      logo: 'https://picsum.photos/seed/central/48/48',
      websiteUrl: 'https://centralrestaurante.com.pe/',
      phone: '(01) 2428515',
      address: 'Av. Pedro de Osma 301, Barranco 15063',
      terms: 'Descuento no aplica en bebidas alcohólicas. Válido de lunes a jueves.'
    },
    { name: 'Clínica Internacional', category: 'Clínica', description: 'Tarifas preferenciales en consultas.', logo: 'https://picsum.photos/seed/clinica/48/48' },
    { name: 'Cineplanet', category: 'Entretenimiento', description: 'Entradas 2x1 los martes y jueves.', logo: 'https://picsum.photos/seed/cineplanet/48/48' },
  ],
  'Arequipa': [
    { name: 'Universidad Católica San Pablo', category: 'Universidad', description: '15% de descuento en programas de postgrado.', logo: 'https://picsum.photos/seed/ucsp/48/48' },
    { name: 'La Nueva Palomino', category: 'Restaurante', description: '10% de descuento en picantería.', logo: 'https://picsum.photos/seed/palomino/48/48' },
  ],
  'Cusco': [
    { name: 'Universidad Andina del Cusco', category: 'Universidad', description: 'Matrícula preferencial para socios e hijos.', logo: 'https://picsum.photos/seed/uandina/48/48' },
    { name: 'Chicha por Gastón Acurio', category: 'Restaurante', description: 'Postre de cortesía.', logo: 'https://picsum.photos/seed/chicha/48/48' },
  ],
  'Ica': [
    { name: 'Bodega Tacama', category: 'Entretenimiento', description: '20% de descuento en tours y catas.', logo: 'https://picsum.photos/seed/tacama/48/48' },
    { name: 'Hotel Las Dunas', category: 'Entretenimiento', description: '15% de descuento en alojamiento.', logo: 'https://picsum.photos/seed/dunas/48/48' },
  ],
  'La Libertad': [
    { name: 'Universidad Privada del Norte', category: 'Universidad', description: '10% de descuento en pensiones.', logo: 'https://picsum.photos/seed/upn/48/48' },
  ],
};

export const PERU_DEPARTMENTS = Object.keys(INSTITUTIONAL_AGREEMENTS);

export const CLUBS_DATA: Club[] = [
    { 
        name: 'Club El Tumi Tarapoto',
        status: 'MUY PRONTO',
        imageUrl: 'https://picsum.photos/seed/tumi-tarapoto/800/600',
        buttonColor: 'green',
        services: ['Próximamente nuevas instalaciones para la familia Tumi.'],
    },
    { 
        name: 'Club El Tumi Lima',
        status: 'BIENVENIDOS',
        imageUrl: 'https://picsum.photos/seed/tumi-lima/800/600',
        buttonColor: 'cyan',
        services: ['Piscinas para adultos y niños', 'Canchas de fulbito y voley', 'Zona de parrillas', 'Juegos recreativos'],
        websiteUrl: 'https://www.clubeltumi.com/sede-lima/'
    },
    { 
        name: 'Club El Tumi Ica',
        status: 'BIENVENIDOS',
        imageUrl: 'https://picsum.photos/seed/tumi-ica/800/600',
        buttonColor: 'yellow',
        services: ['Piscina', 'Bungalows', 'Restaurante campestre', 'Canchas de tenis'],
        websiteUrl: 'https://www.clubeltumi.com/sede-ica/'
    },
    { 
        name: 'Club El Tumi Chiclayo',
        status: 'BIENVENIDOS',
        imageUrl: 'https://picsum.photos/seed/tumi-chiclayo/800/600',
        buttonColor: 'orange',
        services: ['Piscina con toboganes', 'Juegos para niños', 'Salón de eventos', 'Cancha de grass sintético'],
        websiteUrl: 'https://www.clubeltumi.com/sede-chiclayo/'
    },
];

export const MOCK_OFFICE_INFO: OfficeInfo = {
  name: 'Oficina Disa Callao',
  address: 'Jr. Colina N° 879, Bellavista Callao - Al Interior De La Dirección Regional De Salud Del Callao',
  phone: '924914977',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jr.+Colina+N°+879,+Bellavista+Callao',
  imageUrl: 'https://picsum.photos/seed/oficina-disa-callao/1200/400',
  accountExecutive: 'Juan Pérez',
  email: 'oficina-disa@coopeltumi.com'
};

export const SOCIAL_BENEFITS: Benefit[] = [
  {
    title: 'Fondo de Sepelio',
    description: 'Brindamos apoyo económico a los familiares directos en los momentos más difíciles. Como socio titular, tus beneficiarios obtendrán el beneficio de sepelio según los años de aporte, con un máximo de S/ 10,000.00 para el titular.',
    icon: HeartIcon,
    coverage: [
      { title: 'Titular', amount: 'Hasta S/ 10,000.00' },
      { title: 'Cónyuge', amount: 'S/ 3,000.00' },
      { title: 'Hijos', amount: 'S/ 1,500.00' },
      { title: 'Padres', amount: 'S/ 800.00' },
    ],
    requirements: [
      'Ser socio hábil y estar al día en todas las obligaciones económicas.',
      'El beneficio debe ser solicitado dentro de los 90 días de ocurrido el deceso.'
    ],
    documents: [
      'Copia simple del Acta o Certificado de Defunción.',
      'Copia del DNI del socio fallecido.',
      'Copia del DNI del o los beneficiarios.',
      'Declaratoria de herederos o testamento (de ser el caso).'
    ]
  },
  {
    title: 'AES (Ayuda Extraordinaria Solidaria)',
    description: 'Un fondo solidario para apoyar a nuestros socios frente a emergencias o situaciones imprevistas de salud o desastres naturales.',
    icon: ShieldCheckIcon,
    coverage: [
      { title: 'Monto único de hasta', amount: 'S/ 100.00' },
    ],
    requirements: [
      'Ser socio hábil con un mínimo de 24 aportaciones.',
      'No tener deudas pendientes con la cooperativa.',
      'Aplica para enfermedades graves, intervenciones quirúrgicas complejas, invalidez, etc.',
      'El evento debe haber ocurrido en los últimos 6 meses.'
    ],
    documents: [
      'Solicitud dirigida al Consejo de Administración.',
      'Copia del DNI del socio.',
      'Informe médico detallado y actualizado.',
      'Recibos originales de gastos médicos (boletas, facturas).'
    ]
  },
];

export const ANNUAL_INTEREST_RATE = 0.15; // 15% Annual Interest Rate