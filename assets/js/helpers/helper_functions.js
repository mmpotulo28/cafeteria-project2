const setDomItem = ({ className, item }) => {
  const domItem = `
    <div class="${className}" id="${item.id}">
            <div class="status-block">
                <p class="item-status">${item.status}</p>
            </div>
            
            <div class="img-block">
                <img src="" alt="" />
            </div>
            
            <div class="details">
                <a href="./pages/view-item.html?id=${item.id}"><h2 class="item-name">${item.name}</h2></a>
                <div class="buttons">
                    <a href="./pages/view-item.html?id=${item.id}"><button class="add-to-cart-btn">order</button></a>
                    <button class="price-btn">R${item.price}</button>
                </div>
            </div>
    `;

  return domItem;
};

export { setDomItem };
