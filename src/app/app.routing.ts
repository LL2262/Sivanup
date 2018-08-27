import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { RegisterComponent } from './componentes/register/register.component';
import { CentrosComponent } from './componentes/centros/centros.component';
import { CentroNuevo } from './componentes/centros/centro-nuevo.component';

import { AuthGuard } from './guards/auth.guard'

const appRoutes: Routes = [
     {path: '', component: HomeComponent},
     {path: 'home', component: HomeComponent},
     {path: 'login', component: LoginComponent},
     {path: 'registrarse', component: RegisterComponent},
     {path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard]},
     {path: 'centros', component: CentrosComponent, canActivate: [AuthGuard]},
     {path: 'nuevoCentro', component: CentroNuevo, canActivate: [AuthGuard]},
     {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);