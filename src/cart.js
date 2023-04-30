let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = x => {
    let cartAmount = document.getElementById('cartAmount')
    cartAmount.innerText = basket.map(x => x.item).reduce((acc,val) => acc + val,  0)
}
calculation()
