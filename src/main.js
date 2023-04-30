let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find(x => x.id === id) || []
      return `
        <figure id=product-id-${id} class="item">
                <img width="420" src="${img}" alt="Store item one">
                <figcaption class="details" >
                    <h3 class="item-name" >${name}</h3>
                    <p class="item-desc">${desc}</p>
                    <div class="price-quantity">
                        <h2 class="item-price">$${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
                            <div id=${id} class="quantity">
                            ${search.item === undefined ? 0 : search.item}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-square-fill"></i>
                        </div>
                    </div>
                </figcaption>
            </figure>
        `;
    })
    .join(""));
};

generateShop();

/* Inside the increment function, you can use this id value to look up the quantity div by calling document.getElementById(id). The id value passed as an argument to the function is the same as the id attribute of the quantity div, so JavaScript can use this value to find the correct quantity div using document.getElementById(id).
So you don't need to explicitly call document.getElementById(id) inside the increment function, because the id value is passed as an argument in a way that allows it to be used directly as an argument to document.getElementById(). */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  /* If basket doesn't cotain selected item, add to array. If it does, increase item by 1 */
  search === undefined ? basket.push({id: selectedItem.id, item: 1 }) : search.item += 1 
  
  update(selectedItem.id)
  localStorage.setItem("data", JSON.stringify(basket))  
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if(search === undefined) return 
  if(search.item === 0) return
  search.item -= 1;
  
  update(selectedItem.id)
  basket = basket.filter(x => x.item !== 0) /* removes item with quantity 0 from basket */
  localStorage.setItem("data", JSON.stringify(basket)) 
};

let update = id => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item

    calculation(search)
};

let calculation = x => {
    let cartAmount = document.getElementById('cartAmount')
    cartAmount.innerText = basket.map(x => x.item).reduce((acc,val) => acc + val,  0)
}

calculation()
