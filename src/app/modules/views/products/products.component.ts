import { Component } from '@angular/core';
import { Product } from '../../../core/domain/models/products.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../../components/edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Crema Hidratante',
      price: 32000,
      description: 'Crema ligera para piel mixta con aloe vera.',
      category: 'Maquillaje',
      code: 'CH-002',
    },
    {
      name: 'Crema Hidratante',
      price: 32000,
      description: 'Crema ligera para piel mixta con aloe vera.',
      category: 'Maquillaje',
      code: 'CH-002',
    },
    {
      name: 'Crema Hidratante',
      price: 32000,
      description: 'Crema ligera para piel mixta con aloe vera.',
      category: 'Maquillaje',
      code: 'CH-002',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result);
      }
    });
  }

  getProduct(product: Product) {
    console.log(product);
    this.openDialog(product);
  }
}
