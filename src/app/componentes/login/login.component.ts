import { Component, ViewContainerRef} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { messaging } from 'firebase';
import * as toastr from 'toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent{

  public titulo: string;
  public email: string;
  public password: string; 

  constructor(private _authService: AuthService, private _router: Router)
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
    this._authService.loginEmail(this.email, this.password)
    .then( (res) => {
      toastr["success"]("Usuario", "Hola!");
      this._router.navigate(['/privado']); 
    }).catch( (err) => {
      toastr["error"]("Datos invalidos", "Error");
      this._router.navigate(['/login']);  
    });
  }

}
