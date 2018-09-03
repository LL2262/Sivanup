import { PipeTransform, Pipe } from '@angular/core';
import { Enfermedades } from '../../models/enfermedades';

@Pipe({
    name: 'FiltroEnfermedades'
})
export class EnfermedadesFilterPipe implements PipeTransform {
    transform(enfermedad: Enfermedades[], searchTerm: string): Enfermedades[] {
        if (!enfermedad || !searchTerm) {
            return enfermedad;
        }

        return enfermedad.filter(employee =>
            employee.NombreEnfermedad.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}