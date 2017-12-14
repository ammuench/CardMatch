import { Component, OnInit } from '@angular/core';

import { Card } from './interfaces/card.interface';

import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardService]
})
export class AppComponent implements OnInit {
  cards: Card[]; // Array of all cards
  cardsClicked = []; // Currently selected cards (by index #)
  remainingMatches: number; // Number of remaining unmatched pairs of cards
  activeCard: Card; // Card being "matched"
  cardTimeout: any; // Puts timeout for hiding incorrect matches in top-level scope so it can be killed with a clearTimeout later

  constructor(
    private _cardService: CardService
  ) { }

  ngOnInit() {
    this.cards = this._cardService.getCards();
    this.remainingMatches = this.cards.length / 2;
  }

  /**
   * Handles click event on card, and reveals, matches, or re-flips it based on results
   *
   * @param {Card} card Card Object clicked
   * @param {number} index Index of clicked card
   */
  clickCard(card: Card, index: number) {
    if (!card.isMatched) {
      clearTimeout(this.cardTimeout); // Clears any current hide-card timeouts
      if (this.cardsClicked.length >= 2) {
        this._deselectAll();
        this._selectCard(card, index);
      } else if (this.cardsClicked.length === 1) {
        card.isSelected = true;
        if (this.cardsClicked[0] !== index) { // Prevent matching card to itself
          if (this.activeCard && this.activeCard.value === card.value) {
            this.cardsClicked.push(index);
            for (let i = 0, len = this.cardsClicked.length; i < len; i++) {
              this.cards[this.cardsClicked[i]].isMatched = true;
            }
            this.remainingMatches--;
            this.activeCard = undefined; // Clear active card from matching potential
          } else {
            this.cardsClicked.push(index);
            this.cardTimeout = setTimeout(() => {
              this._deselectAll();
            }, 500);
          }
        }
      } else {
        this._selectCard(card, index);
      }
    }
  }

  /**
   * Creates new games and reshuffles cards on screen
   */
  newGame() {
    this.cardsClicked = [];
    this.activeCard = undefined;
    this.cards = this._cardService.getCards();
    this.remainingMatches = this.cards.length / 2;
  }

  /**
   * Selects a card on the screen
   *
   * @param {Card} card Card Object clicked
   * @param {number} index Index of clicked card
   */
  private _selectCard(card: Card, index: number) {
    card.isSelected = true;
    this.cardsClicked.push(index);
    this.activeCard = card;
  }

  /**
   * Deselects all cards currently selected on screen
   */
  private _deselectAll() {
    for (let i = 0, len = this.cardsClicked.length; i < len; i++) {
      this.cards[this.cardsClicked[i]].isSelected = false;
    }
    this.cardsClicked = [];
  }
}
