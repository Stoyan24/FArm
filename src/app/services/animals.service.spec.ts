import { TestBed } from '@angular/core/testing';

import { AnimalsService } from './animals.service';

describe('AnimalsService', () => {
  let service: AnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('AnimalsArray should not be empty', () => {
    expect(service.animalsArray).toBeDefined()
  });

  it('addAnimal should add animal to animal array', () => {
    const animal = {animal: 'ant', sound: '...'};
    service.addAnimal(animal);
    expect(service.animalsArray).toContain(jasmine.objectContaining(animal));
  });

  it('getAllAnimals should returns all animals', () => {
    expect(service.animalsArray).toEqual(service.getAllAnimals());
  });
});
