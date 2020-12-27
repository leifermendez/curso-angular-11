import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value < 100) ? 'Menos de 100 visitas' : 'Más de 100 visitas';
  }

}
