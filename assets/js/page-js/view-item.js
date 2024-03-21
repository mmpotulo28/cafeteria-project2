import { setViewItem } from "../helpers/helper_functions.js";
import { items } from "../helpers/items.js";
import { itemsBlock } from "../helpers/dom_elements.js";

const itemID = Number(window.location.href.split("id")[1].split("=")[1]);

items.map((item) => {
  if (item.id == itemID) {
    itemsBlock.viewItemDom.innerHTML = setViewItem({item});
    return;
  }
});
