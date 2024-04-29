import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { BeneficiaireService } from 'src/app/services/BeneficiaireService';
import { FormationService } from 'src/app/services/FormationService';

@Component({
    selector: 'app-addformation-beneficiaire',
    templateUrl: './addformation-beneficiaire.component.html',
    styleUrls: ['./addformation-beneficiaire.component.css']
})
export class AddformationBeneficiaireComponent implements OnInit {
    form: FormGroup;
    beneficiaireId!: number;
    beneficiaireName: string | undefined;
    formations: Formation[] | undefined;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private beneficiaireService: BeneficiaireService,
        private formationService: FormationService
    ) {
        this.form = this.fb.group({
            formationId: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        const beneficiaireId = this.route.snapshot.params['beneficiaireId'];
        this.beneficiaireId = beneficiaireId; // Assign to the component property
        this.beneficiaireService.getBeneficiaireById(beneficiaireId).subscribe(beneficiaire => {
            this.beneficiaireName = beneficiaire.firstName + ' ' + beneficiaire.lastName;
        });

        this.formationService.getFutureFormations().subscribe(formations => {
            this.formations = formations;
        });
    }

    onSubmit(): void {
        if (this.form.valid) {
            const formationId = this.form.get('formationId')!.value;
            this.beneficiaireService.addFormationToBeneficiaire(this.beneficiaireId, formationId).subscribe(updatedBeneficiaire => {
                console.log('Formation added to beneficiary:', updatedBeneficiaire);
                // Navigate back to the BeneficiaireComponent
                this.router.navigate(['/beneficiaire']);
            }, error => {
                console.error('Failed to add formation to beneficiary:', error);
                // You can handle error here (e.g., show an error message)
            });
        }
    }
}
