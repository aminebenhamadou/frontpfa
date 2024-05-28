import { Cour } from './Cour';
import { Formateur } from './Formateur';
import { Salle } from './Salle';


export interface Formation {
    id: number;
    description: string;
    price: number;
    status: FormationStatus; 
    startDate: LocalDate;
    endDate: LocalDate;
    formateur: Formateur;
    cours: Cour[];
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
  
  