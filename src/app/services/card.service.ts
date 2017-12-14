import { Injectable } from '@angular/core';

import { Card } from '../interfaces/card.interface';

@Injectable()
export class CardService {

  private _CardData: Card[] = [
    {
      value: 'A',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'B',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'C',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'D',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'E',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'F',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'G',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'H',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'I',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'J',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'K',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'L',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'A',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'B',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'C',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'D',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'E',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'F',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'G',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'H',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'I',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'J',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'K',
      isMatched: false,
      isSelected: false
    },
    {
      value: 'L',
      isMatched: false,
      isSelected: false
    }
  ];

  /**
   * Shuffles and returns an array of cards
   *
   * @returns {Card[]} Array of shuffled cards
   */
  getCards(): Card[] {
    return this._randomize(this._CardData);
  }

  /**
   * Shuffles and returns an array
   *
   * @param {any[]} array Array to be shuffled
   * @returns Shuffled array
   */
  private _randomize(array: any[]): any[] {
    const randomArray = JSON.parse(JSON.stringify(array)); // Makes deep copy of passed array, so selected/match state isn't saved
    let currentIndex = randomArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = randomArray[currentIndex];
      randomArray[currentIndex] = randomArray[randomIndex];
      randomArray[randomIndex] = temporaryValue;
    }

    return randomArray;
  }

  constructor() { }
}
