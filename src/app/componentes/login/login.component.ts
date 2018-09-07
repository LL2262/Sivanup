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
      "positionClass": "toast-top-right",
      "timeOut": "2000",
    }
    
    this.usuario=new Usuarios('0','','','',false,'','','',0,null, null, false);
    
  }

  ngOnInit() 
  {

  }

  onSubmitLogin()
  {
    this.traerUsuario(); 
  }

  enviarCorreo() {
    this._sivanupService.email(this.usuario).subscribe(
      result => {
        if (result) {
          console.log(result.message);
        }
      },
      err => {
        console.log("Error grave");
      }
    );

  }

  traerUsuario() {
    this._sivanupService.getUsuario(this.email).subscribe(
      result => {
        if (result.code == 200) {
          this.usuario = result.data;
          if (this.usuario.EmailVerificated == false) {
            toastr["error"]("El administrador aun no dio de alta su sesión", "Error");
          }
          else {
            this.loginEmail();
            console.log(this.usuario.EmailVerificated);
          }
        }
        else {
          toastr["error"]("Datos invalidos", "Error");
          this._router.navigate(['/login']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  loginEmail()
  {
    this._authService.loginEmail(this.email, this.password)
    .then( (res) => {
      toastr["success"](this.usuario.NombreUsuario, "Hola!");
      this._router.navigate(['/privado']); 
    }).catch( (err) => {
      toastr["error"]("Datos invalidos", "Error");
      this._router.navigate(['/login']);  
    });
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
