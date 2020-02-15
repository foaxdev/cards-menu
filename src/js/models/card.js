export class Card {

  constructor(data) {
    this.type = data[`type`];
    this.number = data[`number`];
  }

  static parseCard(data) {
    return new Card(data);
  }

  static parseCards(data) {
    return data.map(Card.parseCard);
  }
}
