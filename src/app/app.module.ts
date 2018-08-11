import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { ErrorComponent } from './componentes/error/error.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Servicios
import { AuthService } from './servicios/auth.service';

// Control de autentificación
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
