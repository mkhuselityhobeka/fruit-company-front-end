import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { UserRegistrationComponentComponent } from './user-registration-component/user-registration-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';


const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:'full'},
  {path:'home', component:HomeComponentComponent},
  {path:'products', component:ProductComponentComponent},
  {path:'login', component:UserLoginComponentComponent},
  {path:'registration', component:UserRegistrationComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
