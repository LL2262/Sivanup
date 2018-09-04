import { PipeTransform, Pipe } from '@angular/core';
import { Territorios } from '../../models/territorios';

@Pipe({
    name: 'FiltroTerritorios'
})
export class TerritorioFilterPipe implements PipeTransform {
    transform(territorios: Territorios[], searchTerm: string): Territorios[] {
        if (!territorios || !searchTerm) {
            return territorios;
        }

        return territorios.filter(employee =>
            employee.NombreTerritorio.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}