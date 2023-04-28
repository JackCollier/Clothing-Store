let shop = document.getElementById('shop')
let shopItemsData = [{
    id:'S1',
    name:'Tube Tee',
    price:45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/Tubes mock.png'
},{
    id:'S2',
    name:'Marcolina Tee ',
    price:49,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/Marcolina invert mock.png'
},{
    id:'S3',
    name:'Window Tee',
    price:40,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/Window mockup.png'
},{
    id:'S4',
    name:'Berlin Tee',
    price:48,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/BERLIN Mockup.png'
}]

let generateShop = () => {
    return shop.innerHTML = shopItemsData.map(x => {
        let {id,name,price,desc,img} = x
        return `
        <figure class="item">
                <img width="220" src="${img}" alt="Store item one">
                <figcaption class="details" >
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-square-fill"></i>
                            <div class="quantity">0</div>
                            <i class="bi bi-plus-square-fill"></i>
                        </div>
                    </div>
                </figcaption>
            </figure>
        `
    }).join("")
}

generateShop()