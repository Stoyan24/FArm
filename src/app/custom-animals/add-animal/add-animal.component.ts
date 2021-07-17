import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../../services/animals.service";
import {AnimalInterface} from "../../interface/animal.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  public animalList: AnimalInterface[] = [];
  public selectedAnimals: AnimalInterface[] = [];
  public newAnimal: FormGroup;

  constructor(
    private readonly animalsService: AnimalsService,
    private readonly fb: FormBuilder,
  ) {
    this.newAnimal = this.fb.group({
      animal: ['', [Validators.required, Validators.maxLength(30)]],
      sound: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  ngOnInit(): void {
    this.animalList = this.animalsService.getAllAnimals();
  }

  public addAnimal(animal: AnimalInterface): void {
    this.animalsService.addAnimal(animal);
    this.newAnimal.reset();
  }

  public toggleAnimal(animal: AnimalInterface): void {
    if(this.selectedAnimals.find((a: AnimalInterface) => a.animal === animal.animal)){
      this.selectedAnimals = this.selectedAnimals.filter((a) => animal.animal !== a.animal);
    } else {
      this.selectedAnimals.push(animal)
    }
  }

}
