import { Observable } from 'rxjs';
import { Product } from '../models/products.model';

export interface ProductRepository {
  addProduct(product: Product): void;
  editProduct(id: string, product: Product): void;
  deleteProduct(id: string): void;
  getProducts(): Observable<Product[]>;
  getIdProduct(id: string): Observable<Product>;
}
