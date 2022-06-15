import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { CartResolver } from './resolvers/cart.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { SingleProductResolver } from './resolvers/single-product.resolver';
import { WishlistResolver } from './resolvers/wishlist.resolver';

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
      {
        path: 'cart',
        component: CartComponent,
        resolve: {
          data: CartResolver,
        },
      },
      {
        path: 'favorites',
        component: WishlistComponent,
        resolve: {
          data: WishlistResolver,
        },
      },
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{ path: 'login', component: RegisterComponent }],
  },
  {
    path:'**',redirectTo:'/home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProductResolver,
    SingleProductResolver,
    WishlistResolver,
    CartResolver,
  ],
})
export class AppRoutingModule {}
