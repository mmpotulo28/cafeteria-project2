import { setViewItem } from "../helpers/helper_functions.js";
import { items } from "../helpers/items.js";
import { itemsBlock } from "../helpers/dom_elements.js";
import { setDomItem } from "../helpers/helper_functions.js";

let itemID = 0;

if (window.location.href.indexOf("id") == -1) {
  alert("invalid item id");
} else {
  itemID = Number(window.location.href.split("id")[1].split("=")[1]);
}

let currentItem = "",
  btnClass = "";

const setCurrentItem = () => {
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
};

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
      path: "..",
    });
  });
};

// call functions by order
setCurrentItem();
setSimilarItems();

// get form values
const viewItemDom = {
  form: document.querySelector("#item-config-form"),
  sauceDom: document.querySelector("#item-config-form #sauce"),
  quantityDom: document.querySelector("#item-config-form #quantity"),
  plasticDom: document.querySelector("#item-config-form #plastic"),
  totalDom: document.querySelector("#item-config-form #total"),
  formInput: document.querySelectorAll(".form-input"),
};

viewItemDom.formInput.forEach((input) => {
  input.onchange = () => {
    setCartItem();
  };
});

const setCartItem = () => {
  const cartItem = {
    id: itemID,
    sauce: viewItemDom.sauceDom.value,
    quantity: viewItemDom.quantityDom.value,
    plastic: viewItemDom.plasticDom.value,
    total: viewItemDom.totalDom.innerText,
  };

  cartItem.total = cartItem.quantity * currentItem.price;
  if (cartItem.total < 1 || cartItem.quantity < 1) {
    alert("quantity and total cannot be zero or less");
    viewItemDom.quantityDom.value = 1;
    viewItemDom.totalDom.textContent = "R" + currentItem.price;
    return;
  }

  viewItemDom.totalDom.innerText = "R" + cartItem.total;
};
