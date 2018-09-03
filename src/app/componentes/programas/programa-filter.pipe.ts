import { PipeTransform, Pipe } from '@angular/core';
import { Programas } from '../../models/programas';

@Pipe({
    name: 'FiltroProgramas'
})
export class ProgramaFilterPipe implements PipeTransform {
    transform(programas: Programas[], searchTerm: string): Programas[] {
        if (!programas || !searchTerm) {
            return programas;
        }

        return programas.filter(employee =>
            employee.NombrePrograma.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}