import { PipeTransform, Pipe } from '@angular/core';
import { Usuarios } from '../../models/usuarios';

@Pipe({
    name: 'FiltroUsuarios'
})
export class UsuariosFilterPipe implements PipeTransform {
    transform(usuarios: Usuarios[], searchTerm: string): Usuarios[] {
        if (!usuarios || !searchTerm) {
            return usuarios;
        }

        return usuarios.filter(employee =>
            employee.NombreUsuario.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}
