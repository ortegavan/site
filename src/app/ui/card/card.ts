import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  public title = input<string>();
  public icon = input<string>();
  public hovered = signal(false);
}
