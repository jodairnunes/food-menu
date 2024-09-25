import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },               // Página principal
	{ path: 'cart', component: CartComponent },           // Página do carrinho
	{ path: 'product/:id', component: ProductDetailComponent }, // Página de detalhes do produto
	{ path: '**', redirectTo: '' }  // Redireciona rotas inválidas para a Home
];
