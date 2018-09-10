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

import { EncuestadoresComponent } from './componentes/encuestadores/encuestadores.component';
import { EncuestadorNuevo } from './componentes/encuestadores/encuestadores-nuevo.component';
import { EncuestadorEditar } from './componentes/encuestadores/encuestadores-editar.component';

import { EnfermedadesComponent } from './componentes/enfermedades/enfermedades.component';
import { EnfermedadNuevo } from './componentes/enfermedades/enfermedad-nuevo.component';
import { EnfermedadEditar } from './componentes/enfermedades/enfermedad-editar.component';

import { ProgramasComponent } from './componentes/programas/programas.component';
import { ProgramaNuevo } from './componentes/programas/programa-nuevo.component';
import { ProgramaEditar } from './componentes/programas/programa-editar.component';

import { TerritoriosComponent } from './componentes/territorios/territorios.component';
import { TerritorioNuevo } from './componentes/territorios/territorio-nuevo.component';
import { TerritorioEditar } from './componentes/territorios/territorio-editar.component';

import { AdminUsers } from './componentes/administrar/admin-users.component';

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
     {path: 'encuestadores', component: EncuestadoresComponent, canActivate: [AuthGuard]},
     {path: 'nuevoEncuestador', component: EncuestadorNuevo, canActivate: [AuthGuard]},
     {path: 'editarEncuestador/:id', component: EncuestadorEditar, canActivate: [AuthGuard]},
     {path: 'enfermedades', component: EnfermedadesComponent, canActivate: [AuthGuard]},
     {path: 'nuevaEnfermedad', component: EnfermedadNuevo, canActivate: [AuthGuard]},
     {path: 'editarEnfermedad/:id', component: EnfermedadEditar, canActivate: [AuthGuard]},
     {path: 'programas', component: ProgramasComponent, canActivate: [AuthGuard]},
     {path: 'nuevoPrograma', component: ProgramaNuevo, canActivate: [AuthGuard]},
     {path: 'editarPrograma/:id', component: ProgramaEditar, canActivate: [AuthGuard]},
     {path: 'territorios', component: TerritoriosComponent, canActivate: [AuthGuard]},
     {path: 'nuevoTerritorio', component: TerritorioNuevo, canActivate: [AuthGuard]},
     {path: 'editarTerritorio/:id', component: TerritorioEditar, canActivate: [AuthGuard]},
     {path: 'adminUsers', component: AdminUsers, canActivate: [AuthGuard]},
     {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);