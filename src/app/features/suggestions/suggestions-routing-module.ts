import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from '../../core/list-suggestion/list-suggestion';
import { SuggestionDetails } from './suggestion-details/suggestion-details';
import { SuggestionForm } from './suggestion-form/suggestion-form';

const routes: Routes = [
  { path: '', component: ListSuggestion },
    { path: 'new', component: SuggestionForm },
  { path: ':id', component: SuggestionDetails },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }