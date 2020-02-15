export class Cards {

  constructor() {
    this._cards = [
      {
        "type": "mastercard",
        "number": "0000 0000 0000 5674"
      },
      {
        "type": "visa",
        "number": "0000 0000 0000 5674"
      },
      {
        "type": "mir",
        "number": "0000 0000 0000 6722"
      },
      {
        "type": "visa",
        "number": "0000 0000 0000 3312"
      },
      {
        "type": "mastercard",
        "number": "0000 0000 0000 8922"
      },
    ];
  }

  get cards() {
    return this._cards;
  }
}
