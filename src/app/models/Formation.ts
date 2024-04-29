import { Formateur } from './Formateur';


export interface Formation {
    id: number;
    description: string;
    price: number;
    status: FormationStatus; 
    startDate: LocalDate;
    endDate: LocalDate;
    formateur: Formateur;
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
  
  