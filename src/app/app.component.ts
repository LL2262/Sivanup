import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  
  constructor(private _authService: AuthService)
  {

  }

  ngOnInit()
  {
    this._authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      }
      else{
        this.isLogin = false;
      }
    });
  }

  onClickLogout()
  {
    this._authService.logout()
    .then( (res) => {   
    }).catch( (err) => {
      console.log(err);
    });
  }

}
