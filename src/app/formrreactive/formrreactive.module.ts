import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormrreactiveRoutingModule } from './formrreactive-routing.module';
import { FormractiveComponent } from './formractive/formractive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormractiveComponent
  ],
  imports: [
    CommonModule,
    FormrreactiveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormrreactiveModule { }
