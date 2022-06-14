import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { ProductResolver } from './resolvers/product.resolver';
import { SingleProductResolver } from './resolvers/single-product.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          data: ProductResolver,
        },
      },
      {
        path: 'product/:id',
        component: SingleProductComponent,
        resolve: {
          data: SingleProductResolver,
        },
      },
      { path: 'cart', component: CartComponent },
      { path: 'favorites', component: WishlistComponent },
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: 'login', component: RegisterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver, SingleProductResolver],
})
export class AppRoutingModule {}
