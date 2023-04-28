let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "S1",
    name: "Tube Tee",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/Tubes mock.png",
  },
  {
    id: "S2",
    name: "Marcolina Tee ",
    price: 49,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/Marcolina invert mock.png",
  },
  {
    id: "S3",
    name: "Window Tee",
    price: 40,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/Window mockup.png",
  },
  {
    id: "S4",
    name: "Berlin Tee",
    price: 48,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/BERLIN Mockup.png",
  },
];
let basket = [];
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
        <figure id=product-id-${id} class="item">
                <img width="220" src="${img}" alt="Store item one">
                <figcaption class="details" >
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-square-fill"></i>
                            <div id=${id} class="quantity">0</div>
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
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if(search.item === 0) return
  search.item -= 1;
  
  
  update(selectedItem.id)
};

let update = id => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item
};
