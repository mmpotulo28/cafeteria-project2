import { setDomItem } from "../helpers/helper_functions.js";
import { itemsBlock } from "../helpers/dom_elements.js";
import { items } from "../helpers/items.js";

function setItems() {
  items.forEach((item) => {

    // set recommended items
    if (item.recommended) {
      itemsBlock.recommendedItemDom.innerHTML += setDomItem({
        className: "recommended-item",
        item,
      });
    }

    // set menu items, in categories
    itemsBlock.categoriesItemDom.innerHTML += setDomItem({
      className: "menu-item",
      item,
    });
  });
}

setItems();
