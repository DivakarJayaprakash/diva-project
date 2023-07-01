import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-conformation-pop',
  templateUrl: './conformation-pop.component.html',
  styleUrls: ['./conformation-pop.component.css']
})
export class ConformationPopComponent {
  constructor(public dialogRef: MatDialogRef<ConformationPopComponent>, ){}

  deleteClick(id:number): void {
    this.dialogRef.close(id);
  }
}
