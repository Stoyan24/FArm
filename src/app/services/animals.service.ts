import { Injectable } from '@angular/core';
import animalsArray from "../data/animals";
import {AnimalInterface} from "../interface/animal.interface";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  public animalsArray;
  constructor() {
    this.animalsArray = animalsArray
  }

  public getAllAnimals(): AnimalInterface[] {
    return animalsArray;
  }

  public addAnimal(animal: AnimalInterface): AnimalInterface[] {
    animalsArray.push(animal);
    return animalsArray;
  }
}
