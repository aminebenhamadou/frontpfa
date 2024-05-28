import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBeneficiaireComponent } from './components/beneficiaire/add-beneficiaire/add-beneficiaire.component';
import { EditBeneficiaireComponent } from './components/beneficiaire/edit-beneficiaire/edit-beneficiaire.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { AddFormateurComponent } from './components/formateur/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './components/formateur/edit-formateur/edit-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation.component';
import { EditFormationComponent } from './components/formation/edit-formation/edit-formation.component';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeneficiairegridComponent } from './components/beneficiairegrid/beneficiairegrid.component';
import { FormateurgridComponent } from './formateurgrid/formateurgrid.component';
import { AddformationBeneficiaireComponent } from './components/beneficiaire/addformation-beneficiaire/addformation-beneficiaire.component';
import { CourComponent } from './cour/cour.component';
import { AddCourComponent } from './cour/add-cour/add-cour.component';
import { EditCourComponent } from './cour/edit-cour/edit-cour.component';
import { SalleComponent } from './salle/salle.component';
import { AddSalleComponent } from './salle/add-salle/add-salle.component';
import { EditSalleComponent } from './salle/edit-salle/edit-salle.component';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalBeneficiaireComponent } from './components/beneficiaire/modal-beneficiaire/modal-beneficiaire.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBeneficiaireComponent,
    EditBeneficiaireComponent,
    FormateurComponent,
    AddFormateurComponent,
    EditFormateurComponent,
    FormationComponent,
    AddFormationComponent,
    EditFormationComponent,
    BeneficiairegridComponent,
    FormateurgridComponent,
    AddformationBeneficiaireComponent,
    CourComponent,
    AddCourComponent,
    EditCourComponent,
    SalleComponent,
    AddSalleComponent,
    EditSalleComponent,
    BeneficiaireComponent,
    ModalBeneficiaireComponent,
    
  ],
  imports:[
    BrowserModule,
    RouterModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
