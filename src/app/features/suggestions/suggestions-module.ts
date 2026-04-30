import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { SuggestionDetails } from './suggestion-details/suggestion-details';
import { ListSuggestion } from '../../core/list-suggestion/list-suggestion';


@NgModule({
  declarations: [
    ListSuggestion,
    SuggestionDetails
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }