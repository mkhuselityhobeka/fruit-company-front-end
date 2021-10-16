import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { UserRegistrationComponentComponent } from './user-registration-component/user-registration-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    UserLoginComponentComponent,
    UserRegistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
