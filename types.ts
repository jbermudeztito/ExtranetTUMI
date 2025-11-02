import type { ComponentType } from 'react';

export interface User {
  name: string;
  memberId: string;
  avatarUrl: string;
  // Personal Data
  dni: string;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  email: string;
  address: string;
  // Member Data
  inscriptionDate: string;
  office: string;
  executingUnit: string;
}

export interface AccountMovement {
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

export interface Agreement {
  name: string;
  category: 'Universidad' | 'Restaurante' | 'Clínica' | 'Entretenimiento' | 'Tienda';
  description: string;
  logo: string;
  websiteUrl?: string;
  phone?: string;
  address?: string;
  terms?: string;
}

export interface Club {
    name: string;
    imageUrl: string;
    status: string;
    buttonColor: string;
    services: string[];
    websiteUrl?: string;
}

export interface Service {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    actionText: string;
    onClick?: () => void;
}

export interface Benefit {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    coverage?: { title: string; amount: string; }[];
    requirements?: string[];
    documents?: string[];
}

export interface OfficeInfo {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  imageUrl: string;
  accountExecutive: string;
  email?: string;
}