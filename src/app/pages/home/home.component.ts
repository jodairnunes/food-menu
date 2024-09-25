import { Component } from '@angular/core';
import { PRODUCTS } from '../../../products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = PRODUCTS;
  searchQuery = '';

  constructor(private router: Router) {}

  filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  goToDetails(productId: number) {
    this.router.navigate(['/product', productId]);  // Navega para a página de detalhes
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
