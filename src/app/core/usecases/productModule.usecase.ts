import { Injectable } from '@angular/core';
import { ProductRepository } from '../domain/respositories/product.repository';

@Injectable()
export class productUseCaseModuleClass {
  constructor(private repo: ProductRepository) {}

  
}
