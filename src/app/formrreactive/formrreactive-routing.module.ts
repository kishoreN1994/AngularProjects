import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormractiveComponent } from './formractive/formractive.component';

const routes: Routes = [
  {path:'',component:FormractiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormrreactiveRoutingModule { }
