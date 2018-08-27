import { Component, ViewContainerRef} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router } from '@angular/router';
import { messaging } from 'firebase';
import * as toastr from 'toastr';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [SivanupService]
})

export class LoginComponent{

  public titulo: string;
  public email: string;
  public password: string; 
  public usuario: Usuarios;

  constructor(private _authService: AuthService, private _router: Router, private _sivanupService: SivanupService)
  {
    this.titulo="LOGIN"
    toastr.options = {
      "positionClass": "toast-top-center",
      "timeOut": "2000",
    }
  }

  ngOnInit() 
  {

  }

  onSubmitLogin()
  {
    this.traerUsuario();
    this._authService.loginEmail(this.email, this.password)
    .then( (res) => {
      toastr["success"](this.usuario.NombreUsuario, "Hola!");
      this._router.navigate(['/privado']); 
    }).catch( (err) => {
      toastr["error"]("Datos invalidos", "Error");
      this._router.navigate(['/login']);  
    });
  }

  traerUsuario()
    {
        this._sivanupService.getUsuario(this.email).subscribe(
            result => {         
              this.usuario = result.data;
            },
            error => {
              console.log(<any>error);
            }
        );
    }

  onClickGoogleLogin()
  {
    this._authService.loginGoogle()
    .then( (res) => {
      this._router.navigate(['/privado']); 
    }).catch( (err) => {
      this._router.navigate(['/login']);  
    });
  }

  onClickFacebookLogin()
  {
    this._authService.loginFacebook()
    .then( (res) => {
      this._router.navigate(['/privado']); 
    }).catch( (err) => {
      this._router.navigate(['/login']);  
    });
  }
}
