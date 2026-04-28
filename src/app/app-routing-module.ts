import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';

const routes: Routes = [
    { path: '', component: ListSuggestion }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
