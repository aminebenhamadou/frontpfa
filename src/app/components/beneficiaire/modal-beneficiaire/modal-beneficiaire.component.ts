import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-beneficiaire',
  templateUrl: './modal-beneficiaire.component.html',
  styleUrls: ['./modal-beneficiaire.component.css']
})
export class ModalBeneficiaireComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalBeneficiaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
