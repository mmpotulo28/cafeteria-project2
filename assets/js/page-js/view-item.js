import { setViewItem } from "../helpers/helper_functions.js";
import { items } from "../helpers/items.js";
import { itemsBlock } from "../helpers/dom_elements.js";
import { setDomItem } from "../helpers/helper_functions.js";

let itemID = 0

if (window.location.href.indexOf("id") == -1) {
  alert("invalid item id");
} else {
  itemID = Number(window.location.href.split("id")[1].split("=")[1]);
}

let currentItem = "",
  btnClass = "";

// get current item
items.map((item) => {
  if (item.id == itemID) {
    currentItem = item;
    item.status == "in-stock"
      ? (btnClass = "clickable")
      : (btnClass = "not-clickable");

    itemsBlock.viewItemDom.innerHTML = setViewItem({
      item: currentItem,
      btnClass,
    });
    return;
  }
});

// set similar items
const setSimilarItems = () => {
  const similarItems = items.filter(
    (item) => item.category === currentItem.category
  );

  similarItems.map((item) => {
    item.status == "in-stock"
      ? (btnClass = "clickable")
      : (btnClass = "not-clickable");

    itemsBlock.similarItems.innerHTML += setDomItem({
      className: "similar-item item-card",
      item,
      btnClass,
    });
  });
};

setSimilarItems();
