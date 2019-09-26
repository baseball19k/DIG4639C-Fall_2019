import Card from "./components/Card/index.js";
import Element from "./Element.js";

let card = new Card({content: "I wish my car ran this fast!"});
let element = new Element("div");

element.render(card.render());
