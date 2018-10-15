import { PipeTransform, Pipe } from '@angular/core';
import { Personas } from '../../models/personas';

@Pipe({
    name: 'FiltroAfiliadoNombre'
})
export class afiliadoNombreApellidoFilterPipe implements PipeTransform {
    transform(personas: any[], searchTerm: string): any[] {
        if (!personas || !searchTerm) {
            return personas;
        }

        return personas.filter(employee =>
            employee.ApellidoNombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}