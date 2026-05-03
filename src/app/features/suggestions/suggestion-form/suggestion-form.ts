import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  standalone: false,
  templateUrl: './suggestion-form.html',
  styleUrl: './suggestion-form.css',
})
export class SuggestionForm implements OnInit {

  suggestionForm!: FormGroup;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[A-Z][a-zA-Z]*$')
        ]
      ],
      description: [
        '',
        [Validators.required, Validators.minLength(30)]
      ],
      category: ['', Validators.required],
      date: [{ value: new Date().toLocaleDateString('fr-FR'), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  // Getters pour accéder facilement aux champs dans le template
  get title() { return this.suggestionForm.get('title'); }
  get description() { return this.suggestionForm.get('description'); }
  get category() { return this.suggestionForm.get('category'); }

  onSubmit(): void {
    if (this.suggestionForm.invalid) return;

    // Récupère les valeurs y compris les champs disabled
    const raw = this.suggestionForm.getRawValue();

    const newSuggestion: Suggestion = {
      id: Date.now(),           // auto-increment simple côté client
      title: raw.title,
      description: raw.description,
      category: raw.category,
      date: new Date(),
      status: 'en attente',
      nbLikes: 0
    };

    // Si tu utilises un service partagé, appelle-le ici :
    // this.suggestionService.addSuggestion(newSuggestion);

    // Sinon, utilise l'historique de navigation pour passer la suggestion :
    this.router.navigate(['/suggestions'], { state: { newSuggestion } });
  }
}