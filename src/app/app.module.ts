import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'angular2-datatable'
import { DataTablesModule } from 'angular-datatables';

// Filtros
import { DataFilterPipe }   from './componentes/centros/centro-filter.pipe';
import { DptoFilterPipe }   from './componentes/departamentos/dpto-filter.pipe';
import { EncuestadoresFilterPipe }   from './componentes/encuestadores/encuestadores-filter.pipe';
import { EnfermedadesFilterPipe }   from './componentes/enfermedades/enfermedad-filter.pipe';
import { ProgramaFilterPipe }   from './componentes/programas/programa-filter.pipe';
import { TerritorioFilterPipe }   from './componentes/territorios/territorio-filter.pipe';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PrivadoComponent } from './componentes/privado/privado.component';
import { ErrorComponent } from './componentes/error/error.component';

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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import{ AdminUsers } from './componentes/administrar/admin-users.component';

// Servicios
import { AuthService } from './servicios/auth.service';
import { SivanupService } from './servicios/sivanup.service';

// Control de autentificación
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivadoComponent,
    ErrorComponent,
    CentrosComponent,
    DataFilterPipe,
    CentroNuevo,
    CentroEditar,
    DptoFilterPipe,
    DptosComponent,
    DptoNuevo,
    DptoEditar,
    EncuestadoresFilterPipe,
    EncuestadoresComponent,
    EncuestadorNuevo,
    EncuestadorEditar,
    EnfermedadesFilterPipe,
    EnfermedadesComponent,
    EnfermedadNuevo,
    EnfermedadEditar,
    ProgramaFilterPipe,
    ProgramasComponent,
    ProgramaNuevo,
    ProgramaEditar,
    TerritorioFilterPipe,
    TerritoriosComponent,
    TerritorioNuevo,
    TerritorioEditar,
    AdminUsers
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    DataTableModule,
    DataTablesModule
  ],
  providers: [appRoutingProviders, AuthService, AuthGuard, SivanupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
