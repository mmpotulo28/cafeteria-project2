const sliderObject = {
  sliders: document.querySelector("#menu-slider"),
  slides: document.querySelectorAll(".slider-block"),
  btnLeft: document.querySelector("#slider-btn-left"),
  btnRight: document.querySelector("#slider-btn-right"),
  btnBlock: document.querySelector(".slider-btns-block"),
  speed: 0,
};

const updatesObject = {
  updateContainer: document.querySelector(".update-cont"),
  updateMsgs: document.querySelectorAll(".update-msg"),
  speed: 2,
};

const itemsBlock = {
  recommendedItemDom: document.querySelector('#recommended > .items-block'),
  categoriesItemDom: document.querySelector('#categories > .items-block'),
  viewItemDom: document.querySelector('.view-item-block')
}

export { sliderObject, updatesObject, itemsBlock };
