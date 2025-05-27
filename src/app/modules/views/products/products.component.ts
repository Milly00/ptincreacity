import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/domain/models/products.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { productUseCaseModule } from '../../../core/usecases/productModule.usecase';
import { ProductsService } from '../../../insfrastucture/services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private dialog: MatDialog, private use: productUseCaseModule) {}

  ngOnInit() {
    // ...

    this.use.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.use.editProduct(result._id, result);
      }
    });
  }

  getProduct(product: Product) {
    this.openDialog(product);
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
    });
  }

  deleteProduct(id: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: {
        title: 'Desea eliminar este producto',
        text: 'Al eliminar este producto no se puedra recuperarlo',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.use.deleteProduct(id);
      }
    });
  }
}
