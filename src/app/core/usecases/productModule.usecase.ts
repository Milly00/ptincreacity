import { Injectable } from '@angular/core';
import { Product } from '../domain/models/products.model';
import { map, Observable } from 'rxjs';
import { ProductsService } from '../../insfrastucture/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OfflineService } from '../../insfrastucture/services/offline.service';

@Injectable({
  providedIn: 'root',
})
export class productUseCaseModule {
  constructor(
    private repo: ProductsService,
    private snackbar: MatSnackBar,
    private syncService: OfflineService
  ) {}

  addProduct(product: Product): void {
    if (!navigator.onLine) {
      this.syncService
        .saveRequest({
          url: 'http://localhost:5100/products/',
          method: 'POST',
          body: product,
        })
        .then((data) => {
          alert(
            'Perdiste tu conexion, tu petición sera enviada cuando vuelvas a estar en linea'
          );
        })
        .catch((err) => console.log(err.message));
    } else {
      this.repo.addProduct(product).subscribe((res) => {
        this.snackbar.open(res.message, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'],
        });
      });
    }
  }
  editProduct(id: string, product: Product): void {
    if (!navigator.onLine) {
      this.syncService
        .saveRequest({
          url: `http://localhost:5100/products/${id}`,
          method: 'PUT',
          body: product,
        })
        .then((data) => {
          alert(
            'Perdiste tu conexion, tu petición sera enviada cuando vuelvas a estar en linea'
          );
        })
        .catch((err) => console.log(err.message));
    } else {
      this.repo.editProduct(id, product).subscribe((res) => {
        this.snackbar.open(res.message, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'success-snackbar',
        });
      });
    }
  }
  deleteProduct(id: string): void {
    if (!navigator.onLine) {
      this.syncService
        .saveRequest({
          url: `http://localhost:5100/products/${id}`,
          method: 'DELETE',
        })
        .then((data) => {
          alert(
            'Perdiste tu conexion, tu petición sera enviada cuando vuelvas a estar en linea'
          );
        })
        .catch((err) => console.log(err.message));
    } else {
      this.repo.deleteProduct(id).subscribe((res) => {
        this.snackbar.open(res.message, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'error-snackbar',
        });
      });
    }
  }
  getAllProducts(): Observable<Product[]> {
    return this.repo.getAllProducts();
  }
  getIdProduct(id: string): Observable<Product> {
    return this.repo.getIdProduct(id);
  }
}
