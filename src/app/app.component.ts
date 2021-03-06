import { Component } from '@angular/core';
import { AuthService } from './servicios/auth.service';
import { SivanupService } from './servicios/sivanup.service';
import { Usuarios } from './models/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
  public sinFoto: boolean;
  public usuario: Usuarios;
  
  constructor(private _authService: AuthService, private _sivanupService: SivanupService)
  {
    this.usuario=new Usuarios('0','','','',false,'','','',0,null, null, false);
  }

  ngOnInit()
  {
    this._authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
        this._sivanupService.getUsuario(this.emailUsuario).subscribe(result=>{
        this.usuario = result.data;

        });
      }
      else{
        this.isLogin = false;         
      }

    });
    
  }

  ngAfterViewChecked()
  {

    $('.dropdown-menu li a').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    $('.home').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    $('.admin').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    $('.register').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    $('.login').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    $('.logout').click(function(){ 
      $('.navbar-toggle:visible').click();
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
