import { LyricsGeneratorPipe } from './lyrics-generator.pipe';
import {AnimalInterface} from "../../interface/animal.interface";

describe('LyricsGeneratorPipe', () => {

  let pipe: LyricsGeneratorPipe;

  beforeEach(() => {
    pipe = new LyricsGeneratorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should change lyrics with different animal', () => {
    const animal: AnimalInterface = {animal: 'Dog', sound: 'bau'};
    const expectedText: string = `Old MacDonald had a farm. E-I-E-I-O.
And on that farm he had a Dog. E-I-E-I-O.
With an bau bau here.
And an bau bau there.
Here an bau.
There an bau.
Everywhere an bau bau.
Old MacDonald had a farm. E-I-E-I-O.`;

    const result: string = pipe.transform(animal);
    expect(result).toEqual(expectedText);
  });
});
