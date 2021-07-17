import {Component, Input, OnInit} from '@angular/core';
import {AnimalInterface} from "../../interface/animal.interface";
import {MatCardHarness} from "@angular/material/card/testing";

@Component({
  selector: 'app-rhymes-display',
  templateUrl: './rhymes-display.component.html',
  styleUrls: ['./rhymes-display.component.scss']
})
export class RhymesDisplayComponent {

  @Input() animalList: AnimalInterface[] = [];

  constructor() { }
}
