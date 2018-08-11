import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

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
  }

  ngOnInit() 
  {

  }

  onSubmitLogin()
  {
    this._authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this._router.navigate(['/privado']);    
    }).catch( (err) => {
      console.log(err);
      this._router.navigate(['/login']);
    });
  }

}
