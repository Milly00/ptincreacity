import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../core/domain/models/products.model';
import {
  ResponseCommon,
  ResponseGet,
  ResponseId,
} from '../../core/domain/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService  {
  url: string = `http://localhost:5100/products/`;
  constructor(private http: HttpClient) {}

  getIdProduct(id: string): Observable<Product> {
    return this.http
      .get<ResponseId<Product>>(`${this.url}${id}`)
      .pipe(map((res) => res.data));
  }

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<ResponseGet<Product[]>>(`${this.url}`)
      .pipe(map((res) => res.data));
  }

  addProduct(product: Product): Observable<ResponseCommon> {
    return this.http.post<ResponseCommon>(`${this.url}`, product);
  }

  editProduct(id: string, product: Product): Observable<ResponseCommon> {
    return this.http.put<ResponseCommon>(`${this.url}${id}`, product);
  }

  deleteProduct(id: string): Observable<ResponseCommon> {
    return this.http.delete<ResponseCommon>(`${this.url}${id}`);
  }
}
