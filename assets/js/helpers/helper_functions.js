const setDomItem = ({ className, item, btnClass }) => {
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
                <button class="price-btn">R${item.price}</button>
                    <a href="./pages/view-item.html?id=${item.id}"><button class="add-to-cart-btn ${btnClass}">order</button></a>
                </div>
            </div>
    `;

  return domItem;
};

const setViewItem = ({ item, btnClass }) => {
  const domItem = `
    <div class="view-item">
          <div class="top-block">
            <h2 class="item-name">${item.name}</h2>
            <p class="item-status">${item.status}</p>
          </div>

          <div class="main-block">
            <div class="img-block">
              <img src="" alt="" />
            </div>

            <div class="item-config">
              <form id="item-config-form">
                <div class="form-group">
                  <label for="sauce">Sauce: </label>
                  <select name="sauce" id="sauce">
                    <option value="chip">chip sauce</option>
                    <option value="bbq">BBQ</option>
                    <option value="chilli">chilli</option>
                    <option value="tomato">tomato</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="quantity">Quantity: </label>
                  <input min="0" max="10" type="number">
                </div>

                <div class="form-group">
                  <label for="plastic">Plastic: </label>
                  <input name="plastic"type="checkbox" checked>
                </div>

                <div class="form-group">
                  <label for="total">total: </label>
                  <p>R${item.price}</p>
                </div>

                <div class="form-group">
                  <button class="${btnClass}" type="submit">Place Order</button>
                </div>
              </form>
            </div>
          </div>

          .
        </div>
    `;

    return domItem
};

export { setDomItem, setViewItem };
