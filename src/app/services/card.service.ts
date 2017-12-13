import { Injectable } from '@angular/core';

import { Card } from '../interfaces/card.interface';

@Injectable()
export class CardService {

  constructor() { }

  private CardData: Card[] = [
    {
      value: "A",
      display: "A",
      isMatched: false
    },
    {
      value: "B",
      display: "B",
      isMatched: false
    },
    {
      value: "C",
      display: "C",
      isMatched: false
    },
    {
      value: "D",
      display: "D",
      isMatched: false
    },
    {
      value: "E",
      display: "E",
      isMatched: false
    },
    {
      value: "F",
      display: "F",
      isMatched: false
    },
    {
      value: "G",
      display: "G",
      isMatched: false
    },
    {
      value: "H",
      display: "H",
      isMatched: false
    },
    {
      value: "I",
      display: "I",
      isMatched: false
    },
    {
      value: "J",
      display: "J",
      isMatched: false
    },
    {
      value: "K",
      display: "K",
      isMatched: false
    },
    {
      value: "L",
      display: "L",
      isMatched: false
    },
    {
      value: "A",
      display: "A",
      isMatched: false
    },
    {
      value: "B",
      display: "B",
      isMatched: false
    },
    {
      value: "C",
      display: "C",
      isMatched: false
    },
    {
      value: "D",
      display: "D",
      isMatched: false
    },
    {
      value: "E",
      display: "E",
      isMatched: false
    },
    {
      value: "F",
      display: "F",
      isMatched: false
    },
    {
      value: "G",
      display: "G",
      isMatched: false
    },
    {
      value: "H",
      display: "H",
      isMatched: false
    },
    {
      value: "I",
      display: "I",
      isMatched: false
    },
    {
      value: "J",
      display: "J",
      isMatched: false
    },
    {
      value: "K",
      display: "K",
      isMatched: false
    },
    {
      value: "L",
      display: "L",
      isMatched: false
    }

  ]

  private randomize(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
