import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent{

  public titulo: string;
  public email: string;
  public password: string;
  public usuario: Usuarios;
  public fechaActual: Date;

  constructor(private _authService: AuthService, private _router: Router) 
  { 
    this.titulo = "REGISTRO"
    toastr.options = {
      "positionClass": "toast-top-center",
      "timeOut": "2000",
    }
    this.fechaActual = new Date();
    this.usuario=new Usuarios('0','','','','', '','',this.fechaActual, null, false);
  }

  ngOnInit() 
  {

  }

  onSubmitAddUser()
  {
    this._authService.registerUser(this.usuario.EmailUsuario, this.usuario.PasswordUsuario)
    .then( (res) => {
      toastr["success"]("", "Usuario reado correctamente");
      this._router.navigate(['/privado']);      
    }).catch( (err) => {
      console.log(err.code)
      if(err.code=="auth/email-already-in-use"){
        toastr["error"]("El email ya esta en uso", "Error");
        this._router.navigate(['/registrarse']); 
      }
      else{

      }
    });
  }
}
