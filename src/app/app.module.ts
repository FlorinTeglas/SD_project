import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductService} from './shared_service/product.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './shared_service/user.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './shared_service/login.service';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ClientProductsComponent } from './components/client-products/client-products.component';
import {CartService} from './shared_service/cart.service';
import { ListCartComponent } from './components/list-cart/list-cart.component';
import { ListCommComponent } from './components/list-comm/list-comm.component';
import {CommService} from './shared_service/comm.service';
import {AuthClientGuard} from './auth-client.guard';

const appRoutes: Routes = [
  {path: 'admin/products/op', component: ProductFormComponent},
  {path: 'admin/users', component: ListUserComponent},
  {path: 'admin/users/op', component: UserFormComponent},
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [{path: 'products', component: ListProductsComponent}]}
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductFormComponent,
    ListUserComponent,
    UserFormComponent,
    LoginComponent,
    AdminComponent,
    ClientProductsComponent,
    ListCartComponent,
    ListCommComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CartService, ProductService, UserService, LoginService, AuthGuard, CommService, AuthClientGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
