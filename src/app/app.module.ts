import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ErrorComponent } from './componentes/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivadoComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
