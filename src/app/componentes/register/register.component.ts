import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { SivanupService } from '../../servicios/sivanup.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import { Usuarios } from '../../models/usuarios';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [SivanupService]
})

export class RegisterComponent{

  public titulo: string;
  public email: string;
  public password: string;
  public usuario: Usuarios;

  constructor(private _authService: AuthService, private _router: Router, private _sivanupService: SivanupService) 
  { 
    this.titulo = "REGISTRO"
    toastr.options = {
      "positionClass": "toast-top-center",
      "timeOut": "2000",
    }
    this.usuario=new Usuarios('0','','','','','','',0,null, null, false);
  }

  ngOnInit() 
  {

    $('.input-number').on('input', function () { 
      this.value = this.value.replace(/[^0-9]/g,'');
       });
  }

  onSubmitAddUser()
  {
    this.usuario.IdPermiso = 2;

    this._authService.registerUser(this.usuario.EmailUsuario, this.usuario.PasswordUsuario)
    .then( (res) => {

      this._sivanupService.addUsuario(this.usuario).subscribe(
        response => {
            if (response.code == 404) {
                console.log(response);
                }
              },
              error => {
                console.log(<any>error);
                }
            );

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
