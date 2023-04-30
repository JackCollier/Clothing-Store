let label = document.getElementById('label')
let shoppingCart = document.getElementById('shopping-cart')
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = (x) => {
  let cartAmount = document.getElementById("cartAmount");
  cartAmount.innerText = basket
    .map((x) => x.item)
    .reduce((acc, val) => acc + val, 0);
};
calculation();

let generateCartItems = () => {
    if(basket.length !== 0) {
        
    }
    else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
            <h2> Cart is Empty </h2>
            <a href='index.html'>
                <button class="homeBtn">Back to Home Page</button>
            </a>
        `
    }
}
generateCartItems()