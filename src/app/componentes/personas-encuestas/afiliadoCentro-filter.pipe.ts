import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'FiltroAfiliadoCentro'
})
export class afiliadoCentroFilterPipe implements PipeTransform {
    transform(personas: any[], searchTerm: string): any[] {
        if (!personas || !searchTerm) {
            return personas;
        }

        return personas.filter(employee =>
            employee.NombreCentro.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}