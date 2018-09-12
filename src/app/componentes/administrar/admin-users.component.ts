import { Component} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { SivanupService } from '../../servicios/sivanup.service';
import { Usuarios } from '../../models/usuarios';
import * as toastr from 'toastr';

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
  public buscador: string;


  constructor(private _authService: AuthService, private _sivanupService: SivanupService) 
  {
    this.titulo="Administrar Usuarios"
    this.usuarioAdmin=new Usuarios('0','','','',false,'','','',0,null, null, false);
    toastr.options = {
        "positionClass": "toast-top-right",
        "timeOut": "4000",
      }
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

      this.getUsuarios();
  }

  getUsuarios()
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

    HabilitarDeshabilitar(id, usuario: Usuarios)
    {   
        this._sivanupService.habilitarUsuario(id).subscribe(
            response => {
                if (response.code == 200) {
                    this.enviarCorreo(usuario)
                    this.getUsuarios();
                    toastr["success"]("El usuario se habilitó correctamente", "");
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    enviarCorreo(usuario: Usuarios) {
        this._sivanupService.email(usuario).subscribe(
          result => {
            if (result.code == 200) {
                console.log(result.message);
            }
          },
          err => {
            console.log("Error grave");
          }
        );
    
      }
    
      enviarSms() {
      }
}
