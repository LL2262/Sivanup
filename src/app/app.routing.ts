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
import { CentroEditar } from './componentes/centros/centro-editar.component';

import { DptosComponent } from './componentes/departamentos/dptos.component';
import { DptoNuevo } from './componentes/departamentos/dpto-nuevo.component';
import { DptoEditar } from './componentes/departamentos/dpto-editar.component';

import { AuthGuard } from './guards/auth.guard'

const appRoutes: Routes = [
     {path: '', component: HomeComponent},
     {path: 'home', component: HomeComponent},
     {path: 'login', component: LoginComponent},
     {path: 'registrarse', component: RegisterComponent},
     {path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard]},
     {path: 'centros', component: CentrosComponent, canActivate: [AuthGuard]},
     {path: 'nuevoCentro', component: CentroNuevo, canActivate: [AuthGuard]},
     {path: 'editarCentro/:id', component: CentroEditar, canActivate: [AuthGuard]},
     {path: 'departamentos', component: DptosComponent, canActivate: [AuthGuard]},
     {path: 'nuevoDpto', component: DptoNuevo, canActivate: [AuthGuard]},
     {path: 'editarDpto/:id', component: DptoEditar, canActivate: [AuthGuard]},
     {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);