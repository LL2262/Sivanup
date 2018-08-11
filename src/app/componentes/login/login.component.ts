import { Component, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { messaging } from '../../../../node_modules/firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  public titulo: string;
  public email: string;
  public password: string;

  constructor(private _authService: AuthService, private _router: Router, public _toast: ToastsManager, vcr: ViewContainerRef)
  {
    this.titulo="LOGIN"
    this._toast.setRootViewContainerRef(vcr);
  }

  ngOnInit() 
  {

  }

  onSubmitLogin()
  {
    this._authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this._toast.success('You are awesome!', 'Success!');
      this._router.navigate(['/privado']);
    }).catch( (err) => {
      console.log(err);
      this._toast.success('You are awesome!', 'Success!');
      this._router.navigate(['/login']);  
    });
  }

}
