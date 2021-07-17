import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddAnimalComponent} from "./add-animal/add-animal.component";
import {CustomAnimalsRoutingModule} from "./custom-animals-routing.module";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    AddAnimalComponent
  ],
  imports: [
    CommonModule,
    CustomAnimalsRoutingModule,
    SharedComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ]
})
export class CustomAnimalsModule { }
