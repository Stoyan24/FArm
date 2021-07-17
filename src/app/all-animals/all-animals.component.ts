import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "../services/animals.service";
import {AnimalInterface} from "../interface/animal.interface";

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.scss']
})
export class AllAnimalsComponent implements OnInit {

  public animalsList: AnimalInterface[] = [];
  constructor(
    private readonly animalsService: AnimalsService,
  ) {}

  ngOnInit(): void {
    this.animalsList = this.animalsService.getAllAnimals();
  }

}
