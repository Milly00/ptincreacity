import { Injectable } from '@angular/core';
import { Product } from '../domain/models/products.model';
import { map, Observable } from 'rxjs';
import { ProductsService } from '../../insfrastucture/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class productUseCaseModule {
  constructor(private repo: ProductsService, private snackbar: MatSnackBar) {}

  addProduct(product: Product): void {
    this.repo.addProduct(product).subscribe((res) => {
      this.snackbar.open(res.message, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'success-snackbar',
      });
    });
  }
  editProduct(id: string, product: Product): void {
    this.repo.editProduct(id, product).subscribe((res) => {
      this.snackbar.open(res.message, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'success-snackbar',
      });
    });
  }
  deleteProduct(id: string): void {
    this.repo.deleteProduct(id).subscribe((res) => {
      this.snackbar.open(res.message, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'error-snackbar',
      });
    });
  }
  getAllProducts(): Observable<Product[]> {
    return this.repo.getAllProducts();
  }
  getIdProduct(id: string): Observable<Product> {
    return this.repo.getIdProduct(id);
  }
}
