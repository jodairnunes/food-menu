import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart = JSON.parse(sessionStorage.getItem('cart') ?? '[]');

  constructor(private router: Router) {}

  getTotal() {
    return this.cart.reduce((sum: number, product: any) => sum + product.price, 0);
  }

  finalizeOrder() {
    if (this.cart.length > 0) {
      sessionStorage.removeItem('cart');  // Limpa o carrinho do sessionStorage
      window.dispatchEvent(new Event('storage'));  // Atualiza o header
      alert('Pedido finalizado com sucesso!');
      this.router.navigate(['/']);  // Redireciona para a página principal
    } else {
      alert('O carrinho está vazio.');
    }
  }
}
