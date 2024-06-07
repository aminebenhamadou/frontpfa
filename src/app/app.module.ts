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
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeneficiairegridComponent } from './components/beneficiairegrid/beneficiairegrid.component';
import { AddformationBeneficiaireComponent } from './components/beneficiaire/addformation-beneficiaire/addformation-beneficiaire.component';
import { CourComponent } from './components/cour/cour.component';
import { AddCourComponent } from '../app/components/cour/add-cour/add-cour.component';
import { EditCourComponent } from '../app/components/cour/edit-cour/edit-cour.component';
import { SalleComponent } from './components/salle/salle.component';
import { AddSalleComponent } from '../app/components/salle/add-salle/add-salle.component';
import { BeneficiaireComponent } from './components/beneficiaire/beneficiaire.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgChartsModule, ThemeService } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormateurgridComponent } from './components/formateurgrid/formateurgrid.component';
import { MapComponent } from './components/map/map.component';
import { TeachingHistoryComponent } from './components/chart/teachinghistory/teachinghistory.component';
import { EditSalleComponent } from './components/salle/edit-salle/edit-salle.component';
Chart.register(...registerables);
Chart.register(ChartDataLabels);

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
    AddformationBeneficiaireComponent,
    CourComponent,
    AddCourComponent,
    EditCourComponent,
    AddSalleComponent,
    EditSalleComponent,
    BeneficiaireComponent,
    ChartComponent,
    MapComponent,
    SalleComponent,
    FormateurgridComponent,
    TeachingHistoryComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    NgChartsModule,
    LeafletModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
