import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegularExpressions } from '../../../shared/regex';
@Component({
  selector: 'app-edit-product',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent {
  expressionsR = RegularExpressions;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      price: number;
      description: number;
      code: string;
    },
    public dialogRef: MatDialogRef<EditProductComponent>
  ) {
    console.log(data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
