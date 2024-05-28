import { Beneficiaire } from "./Beneficiaire";

export interface Certificat {
    id: number;
    title: string;
    description: string;
    beneficiaire: Beneficiaire;
}
