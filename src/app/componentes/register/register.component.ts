import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent{

  public titulo: string;
  public email: string;
  public password: string;

  constructor(private _authService: AuthService, private _router: Router) 
  { 
    this.titulo = "REGISTRO"
    toastr.options = {
      "positionClass": "toast-top-center",
      "timeOut": "2000",
    }
  }

  ngOnInit() 
  {

  }

  onSubmitAddUser()
  {
    this._authService.registerUser(this.email, this.password)
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
