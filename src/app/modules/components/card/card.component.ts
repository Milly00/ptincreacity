import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/domain/models/products.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) product!: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();

  img: string = '../../../shared/images/product.png';

  sendProduct(product: Product) {
    console.log(product);
    this.edit.emit(product);
  }

  deleteProduct(id?: string) {
    console.log(id);
    this.delete.emit(id);
  }
}
