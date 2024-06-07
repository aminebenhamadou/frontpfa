import { Cour } from './Cour';
import { Formateur } from './Formateur';
import { Salle } from './Salle';

export interface Formation {
    id: number;
    description: string;
    price: number;
    status: FormationStatus; 
    startDate: Date;
    endDate: Date;
 // Ajouté
    formateur: Formateur;
    cour: Cour;
    salle: Salle;
}

export enum FormationStatus {
    PLANNED = 'PLANNED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}

export interface LocalDate {
    year: number;
    month: number;
    day: number;
}

export interface LocalTime {  // Ajouté
    hour: number;
    minute: number;
}
