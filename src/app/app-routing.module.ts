import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import your recipe detail component

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
