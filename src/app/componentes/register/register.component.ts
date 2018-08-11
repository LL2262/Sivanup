import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

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
  }

  ngOnInit() 
  {

  }

  onSubmitAddUser()
  {
    this._authService.registerUser(this.email, this.password)
    .then( (res) => {
      this._router.navigate(['/privado']);      
    }).catch( (err) => {
      console.log(err);
    });
  }
}
