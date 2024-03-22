import { setDomItem } from "../helpers/helper_functions.js";
import { itemsBlock } from "../helpers/dom_elements.js";
import { items } from "../helpers/items.js";

let btnClass = "";

function setItems() {
  items.forEach((item) => {
    item.status == "in-stock"
      ? (btnClass = "clickable")
      : (btnClass = "not-clickable");

    // set recommended items
    if (item.recommended) {
      itemsBlock.recommendedItemDom.innerHTML += setDomItem({
        className: "recommended-item item-card",
        item,
        btnClass,
      });
    }

    // set menu items, in categories
    itemsBlock.categoriesItemDom.innerHTML += setDomItem({
      className: "menu-item",
      item,
      btnClass,
    });

    console.log(btnClass);
  });
}

setItems();
