import { Observable } from 'rxjs';
import { Product } from '../models/products.model';
import { ResponseCommon, ResponseGet } from '../models/response.model';

export interface ProductRepository {
  addProduct(product: Product): Observable<ResponseCommon>;
  editProduct(id: string, product: Product): Observable<ResponseCommon>;
  deleteProduct(id: string): Observable<ResponseCommon>;
  getAllProducts(): Observable<Product[]>;
  getIdProduct(id: string): Observable<Product>;
}


