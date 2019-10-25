import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {AuthGuard} from './auth.guard';
import {ListProductsComponent} from './components/list-products/list-products.component';
import {ClientProductsComponent} from './components/client-products/client-products.component';
import {ListCartComponent} from './components/list-cart/list-cart.component';
import {ListCommComponent} from './components/list-comm/list-comm.component';
import {AuthClientGuard} from './auth-client.guard';

const routes: Routes = [
  {path: 'admin/products', component: ListProductsComponent, canActivate: [AuthGuard]},
  {path: 'admin/products/op', component: ProductFormComponent, canActivate: [AuthGuard]},
  {path: 'admin/users', component: ListUserComponent, canActivate: [AuthGuard]},
  {path: 'admin/users/op', component: UserFormComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'client', component: ClientProductsComponent, canActivate: [AuthClientGuard]},
  {path: 'client/orders', component: ListCartComponent, canActivate: [AuthClientGuard]},
  {path: 'client/comments', component: ListCommComponent, canActivate: [AuthClientGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
