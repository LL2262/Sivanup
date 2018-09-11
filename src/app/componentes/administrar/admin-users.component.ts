import { Component} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { SivanupService } from '../../servicios/sivanup.service';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'admin-users',
  templateUrl: './admin-users.component.html',
})
export class AdminUsers{

  public titulo: string;
  public isAdmin: boolean;
  public emailUsuario: string;
  public usuarioAdmin: Usuarios;
  public data;


  constructor(private _authService: AuthService, private _sivanupService: SivanupService) 
  {
    this.titulo="Administrar Usuarios"
    this.usuarioAdmin=new Usuarios('0','','','',false,'','','',0,null, null, false);
  }

  ngOnInit() {
    this._authService.getAuth().subscribe( auth =>{
        if(auth){
          this.emailUsuario = auth.email;
          this._sivanupService.getUsuario(this.emailUsuario).subscribe(result=>{
            this.usuarioAdmin = result.data;
            if(this.usuarioAdmin.IdPermiso==1){
                this.isAdmin = true;
            }else{
                this.isAdmin = false;
            }
          });
        }
      });

      this.getCentros();
  }

  getCentros()
    {
        this._sivanupService.getUsuarios().subscribe(
            result => {
                this.data = result.data;
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
