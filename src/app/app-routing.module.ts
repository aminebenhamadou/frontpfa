import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { AddFormateurComponent } from './components/formateur/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './components/formateur/edit-formateur/edit-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { BeneficiairegridComponent } from './components/beneficiairegrid/beneficiairegrid.component';
import { AddformationBeneficiaireComponent } from './components/beneficiaire/addformation-beneficiaire/addformation-beneficiaire.component';
import { CourComponent } from './components/cour/cour.component';
import { AddCourComponent } from './components/cour/add-cour/add-cour.component';
import { EditCourComponent } from './components/cour/edit-cour/edit-cour.component';
import { SalleComponent } from './components/salle/salle.component';
import { AddSalleComponent } from './components/salle/add-salle/add-salle.component';
import { EditSalleComponent } from './components/salle/edit-salle/edit-salle.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormateurgridComponent } from './components/formateurgrid/formateurgrid.component';
import { MapComponent } from './components/map/map.component';
import { TeachingHistoryComponent } from './components/chart/teachinghistory/teachinghistory.component';
const routes: Routes = [
  { path: 'beneficiaire', component: BeneficiaireComponent },
  { path: 'beneficiairegrid', component: BeneficiairegridComponent },
  { path: 'formateurgrid', component: FormateurgridComponent },
  { path: 'beneficiaire/add-beneficiaire', component: AddBeneficiaireComponent },
  { path: 'beneficiaire/edit/:id', component: EditBeneficiaireComponent } ,
  { path: 'formateur', component: FormateurComponent },
  { path: 'formateur/add-formateur', component: AddFormateurComponent },
  { path: 'formateur/edit/:id', component: EditFormateurComponent } ,
  { path: 'formation', component: FormationComponent },
  { path: 'formation/add-formation', component: AddFormationComponent },
  { path: 'formation/edit/:id', component: EditFormationComponent } ,
  { path: 'add-formation/:beneficiaireId', component: AddformationBeneficiaireComponent },
  { path: 'cour', component: CourComponent },
  { path: 'teachinghistory', component: TeachingHistoryComponent },

  {path : 'charts', component: ChartComponent},
  {path : 'map', component: MapComponent},
  { path: 'cour/add-cour', component: AddCourComponent },
  { path: 'cour/edit/:id', component: EditCourComponent },
  { path: 'salle', component:SalleComponent},
  { path: 'salle/add-salle' , component: AddSalleComponent},
  {path: 'salle/edit/:id' , component: EditSalleComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
