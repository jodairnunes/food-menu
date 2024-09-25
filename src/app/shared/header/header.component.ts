import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount = 0;
  isHomePage = false; // Flag para determinar se está na página inicial

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateCartCount();
    this.checkIfHomePage();

    // Escutar mudanças no sessionStorage para atualizar o contador ao adicionar itens
    window.addEventListener('storage', () => this.updateCartCount());

      // Escutar mudanças na rota para verificar se é a página inicial
      this.router.events.subscribe(() => {
      this.checkIfHomePage();
    });
  }

  goBack() {
    this.router.navigate(['']);  // Vai para a página anterior ou principal
  }

  goToCart() {
    this.router.navigate(['/cart']);  // Navega para a página do carrinho
  }

  updateCartCount() {
    const cart = JSON.parse(sessionStorage.getItem('cart') ?? '[]');
    this.cartCount = cart.length;
  }

  checkIfHomePage() {
    this.isHomePage = this.router.url === '/';  // Verifica se a URL atual é a página inicial
  }
}
