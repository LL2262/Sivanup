import { PipeTransform, Pipe } from '@angular/core';
import { Dptos } from '../../models/dptos';

@Pipe({
    name: 'FiltroDptos'
})
export class DptoFilterPipe implements PipeTransform {
    transform(dptos: Dptos[], searchTerm: string): Dptos[] {
        if (!dptos || !searchTerm) {
            return dptos;
        }

        return dptos.filter(employee =>
            employee.NombreDpto.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}