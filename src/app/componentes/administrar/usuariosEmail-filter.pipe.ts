import { PipeTransform, Pipe } from '@angular/core';
import { Usuarios } from '../../models/usuarios';

@Pipe({
    name: 'FiltroUsuariosEmail'
})
export class UsuariosEmailFilterPipe implements PipeTransform {
    transform(usuarios: Usuarios[], searchTerm: string): Usuarios[] {
        if (!usuarios || !searchTerm) {
            return usuarios;
        }

        return usuarios.filter(employee =>
            employee.EmailUsuario.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}
