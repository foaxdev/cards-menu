import {Cards} from "./models/cards";
import {CardsComponent} from "./components/cards";
import {render} from "./utils/render";
import {Card} from "./models/card";

const cardsModel = new Cards();
const cardsBlock = document.querySelector(".cards");

const cardsComponent = new CardsComponent(Card.parseCards(cardsModel.cards));
render(cardsBlock, cardsComponent);

document.addEventListener("selectstart", (evt) => {
  evt.preventDefault();
  return false;
});
document.addEventListener("contextmenu", (evt) => {
  evt.preventDefault();
  return false;
});
