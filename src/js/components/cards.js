import AbstractComponent from "./abstract-component";
import {createItems} from "../utils/render";
import {CardNames} from "../const";

const CARD_NUMBERS_QUANTITY = 5;

const getCardsBlockHtml = (cardData) => {
  const cardNumber = cardData.number.slice(-4).padStart(CARD_NUMBERS_QUANTITY, '*');

  return (`
    <li class="cards-list__item">
      <b class="cards-list__title cards-list__title--${cardData.type}">${CardNames[cardData.type]}</b>
      <span class="cards-list__number">${cardNumber}</span>
    </li>
  `);
};

const createCardsTemplate = (cardsData) => {
  return (`
    <ul class="cards-list">
      ${createItems(cardsData, getCardsBlockHtml)}
    </ul>
  `);
};

export class CardsComponent extends AbstractComponent {

  constructor(cardsData) {
    super();
    this._cardsData = cardsData;
  }

  getTemplate() {
    return createCardsTemplate(this._cardsData);
  }
}
