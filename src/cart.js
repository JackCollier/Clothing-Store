let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = (x) => {
  let cartAmount = document.getElementById("cartAmount");
  cartAmount.innerText = basket
    .map((x) => x.item)
    .reduce((acc, val) => acc + val, 0);
};
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
            <div class="cart-item">
               <img width="100" src="${search.img}" alt="">
               <div class="details">
                 <div class="title-price-x">
                    <h4 class="title-price">
                       <p>${search.name}</p>
                       <p class="cart-item-price" >$${search.price}</p>
                    </h4>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                 </div>

                 <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
                    <div id=${id} class="quantity">${item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>
                </div>

                 <h3>$${item * search.price}</h3>
               </div>
            </div>
            `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
            <h2> Cart is Empty </h2>
            <a href='index.html'>
                <button class="homeBtn">Back to Home Page</button>
            </a>
        `;
  }
};
generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  /* If basket doesn't cotain selected item, add to array. If it does, increase item by 1 */
  search === undefined
    ? basket.push({ id: selectedItem.id, item: 1 })
    : (search.item += 1);
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  if (search.item === 0) return;
  search.item -= 1;

  update(selectedItem.id);
  basket = basket.filter(
    (x) => x.item !== 0
  ); /* removes item with quantity 0 from basket */
  generateCartItems(); /* rerender cards after filter */
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;

  calculation(search);
};

let removeItem = (id) => {
  let selectedItem = id
  basket = basket.filter(x => x.id !== selectedItem.id)
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket))
};
