import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { SuggestionDetails } from './suggestion-details/suggestion-details';
import { ListSuggestion } from '../../core/list-suggestion/list-suggestion';
import { SuggestionForm } from './suggestion-form/suggestion-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListSuggestion, SuggestionDetails, SuggestionForm],
  imports: [CommonModule, FormsModule, SuggestionsRoutingModule, ReactiveFormsModule],
})
export class SuggestionsModule {}
