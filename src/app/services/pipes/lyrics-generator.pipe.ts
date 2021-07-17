import {Pipe, PipeTransform} from '@angular/core';
import {AnimalInterface} from "../../interface/animal.interface";

@Pipe({
  name: 'lyricsGenerator',
})
export class LyricsGeneratorPipe implements PipeTransform {

  transform(value: AnimalInterface, ...args: unknown[]): string {
    return `Old MacDonald had a farm. E-I-E-I-O.
And on that farm he had a ${value.animal}. E-I-E-I-O.
With an ${value.sound} ${value.sound} here.
And an ${value.sound} ${value.sound} there.
Here an ${value.sound}.
There an ${value.sound}.
Everywhere an ${value.sound} ${value.sound}.
Old MacDonald had a farm. E-I-E-I-O.`;
  }

}
