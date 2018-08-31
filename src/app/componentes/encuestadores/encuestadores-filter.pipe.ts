import { PipeTransform, Pipe } from '@angular/core';
import { Encuestadores } from '../../models/encuestadores';

@Pipe({
    name: 'FiltroEncuestadores'
})
export class EncuestadoresFilterPipe implements PipeTransform {
    transform(encuestadores: Encuestadores[], searchTerm: string): Encuestadores[] {
        if (!encuestadores || !searchTerm) {
            return encuestadores;
        }

        return encuestadores.filter(employee =>
            employee.Encuestador.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}