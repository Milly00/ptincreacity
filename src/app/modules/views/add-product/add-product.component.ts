import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../../core/domain/models/products.model';
import { RegularExpressions } from '../../../shared/regex';
import { MatSelectModule } from '@angular/material/select';
import { productUseCaseModule } from '../../../core/usecases/productModule.usecase';
@Component({
  selector: 'app-add-product',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  expressionsR = RegularExpressions;
  catgories = [
    { value: 'maquillaje', viewValue: 'Maquillaje' },
    { value: 'cuidadoPersonal', viewValue: 'Cuidado Personal' },
    { value: 'accesorios', viewValue: 'Accesorios' },
    { value: 'skincare', viewValue: 'Skincare' },
    { value: 'fragancias', viewValue: 'Fragancias' },
  ];

  form = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(this.expressionsR.text),
      Validators.required,
    ]),
    category: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(this.expressionsR.text),
      Validators.required,
    ]),
    code: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(6),
      Validators.pattern(this.expressionsR.text),
      Validators.required,
    ]),
    price: new FormControl(0, [Validators.min(1), Validators.required]),

    description: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(250),
      Validators.pattern(this.expressionsR.text),
      Validators.required,
    ]),
  });
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    private use: productUseCaseModule
  ) {}

  get f() {
    return this.form.controls;
  }

  getCategory(ev: string) {
    this.f.category.setValue(ev);
  }
  addProduct() {
    if (this.form.valid) {
      this.dialogRef.close();
      const { name, category, code, description, price } = this.form.value;
      const body: Product = {
        name: name!,
        category: category!,
        code: code!,
        description: description!,
        price: price!,
      };

      this.use.addProduct(body);
    }
  }
}
