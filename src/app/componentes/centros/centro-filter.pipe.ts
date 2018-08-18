import { PipeTransform, Pipe } from '@angular/core';
import { Centros } from '../../models/centros';

@Pipe({
    name: 'FiltroCentros'
})
export class DataFilterPipe implements PipeTransform {
    transform(centros: Centros[], searchTerm: string): Centros[] {
        if (!centros || !searchTerm) {
            return centros;
        }

        return centros.filter(employee =>
            employee.NombreCentro.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}