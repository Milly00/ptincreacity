import { Injectable } from '@angular/core';
import { Product } from '../domain/models/products.model';
import { map, Observable } from 'rxjs';
import { ProductsService } from '../../insfrastucture/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class productUseCaseModule  {
  constructor(private repo: ProductsService) {}

  addProduct(product: Product): void {
    this.repo.addProduct(product).subscribe({
      next(value) {},
      error(err) {
        console.log(err);
      },
    });
  }
  editProduct(id: string, product: Product): void {
    this.repo.editProduct(id, product).subscribe({
      next(value) {},
      error(err) {
        console.log(err);
      },
    });
  }
  deleteProduct(id: string): void {
    this.repo.deleteProduct(id).subscribe({
      next(value) {},
      error(err) {
        console.log(err);
      },
    });
  }
  getAllProducts(): Observable<Product[]> {
    return this.repo.getAllProducts();
  }
  getIdProduct(id: string): Observable<Product> {
    return this.repo.getIdProduct(id);
  }
}
