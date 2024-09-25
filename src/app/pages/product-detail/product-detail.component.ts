import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute) {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.product = PRODUCTS.find(p => p.id === +id);
  }

  addToCart(product: any) {
    const cart = JSON.parse(sessionStorage.getItem('cart') ?? '[]');
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));

      // Atualizar o evento do storage manualmente para o header refletir a mudança
    window.dispatchEvent(new Event('storage'));

    // alert(`${product.name} adicionado ao carrinho!`);
  }
}
