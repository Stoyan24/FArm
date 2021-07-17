import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {RhymesDisplayComponent} from "./rhymes-display/rhymes-display.component";
import {LyricsGeneratorPipe} from "../services/pipes/lyrics-generator.pipe";



@NgModule({
  declarations: [
    RhymesDisplayComponent,
    LyricsGeneratorPipe
  ],
  exports: [
    RhymesDisplayComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class SharedComponentsModule { }
