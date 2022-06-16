import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
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
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
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
        canActivate:[AuthGuard],
      
      },
      {
        path: 'favorites',
        component: WishlistComponent,
        canActivate:[AuthGuard],
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
  ],
})
export class AppRoutingModule {}
