import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{
  path:'',component:HomeLayoutComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'product/:id',component:SingleProductComponent},
    {path:'cart',component:CartComponent},
    {path:'favorites',component:WishlistComponent}
  ]
},
{
  path:'',component:LoginLayoutComponent,
  children:[
    {path:'login',component:RegisterComponent},

  ]
}
];





// const routes: Routes = [
//   {
//     path: '',                       // {1}
//     component: HomeLayoutComponent,
//     canActivate: [AuthGuard],       // {2}
//     children: [
//       {
//         path: '',
//         component: HomeComponent   // {3}
//       }
//     ]
//   },
//   {
//     path: '',
//     component: LoginLayoutComponent, // {4}
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent   // {5}
//       }
//     ]
//   }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
