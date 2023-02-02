let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateshop = function () {
    return (shop.innerHTML = shopitemdata.map((x) => {
        let { id, name, price, desc, img } = x

        let search = basket.find((x) => x.id === id) || []  //if not found the item return zero else search 
        //لو المنتج مش موجود رجعلي صفر فى ابديت الصفحة لو موجود رجعلي نفس الكمية اللي اخترتها 
        return `<div id=product-id-${id} class="item" >
                <h2 style="padding: 15px;">${name}</h2>
                <br>
                <a href="detalis.html"><img src=${img} class="img-width"></a>
                <div class="details">
                <p>${desc}</p>
                <div class="priceQuantity">
                <h2>$ ${price}</h2>
                <div class="bottons">
                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                <div id=${id} class="quantity">
                ${search.item === undefined ? 0 : search.item}     
                </div>
                <i onclick="increment(${id})" class="fa-regular fa-plus"></i>
                </div>
                </div>
                </div>
                </div>`}).join(""))}
                
generateshop()

/*________increment amount of product________*/
let increment = function (id) {
    let selectitem = id
    let search = basket.find((x) => x.id === selectitem.id)

    if (search === undefined) {
        basket.push({
            id: selectitem.id,
            item: 1
        })
    } else {
        search.item += 1
    }
    // console.log(basket); 
    update(selectitem.id)
    localStorage.setItem("data", JSON.stringify(basket))             // local storage icrement
}

/*___________ decrement amount of product________*/
let decrement = function (id) {

    let selectitem = id
    let search = basket.find((x) => x.id === selectitem.id)

    if (search === undefined) return                //(if decrement append Error)
    else if (search.item === 0) {
        return
    } else {
        search.item -= 1
    }
    // console.log(basket);
    update(selectitem.id)

    basket = basket.filter((x) => x.item !== 0)    // ________filter in local storage______


    localStorage.setItem("data", JSON.stringify(basket))              //local storage decrement
}

/*________update amount of product above the amount that selected______*/
let update = function (id) {
    let search = basket.find((x) => x.id === id)
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    calculation()
}


/*_____calculation the amount of all select product in cart icon______*/
let calculation = () => {
    let carticon = document.getElementById("cartamount")
    carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)  // 0is a default number 
    // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0)) // 0is a default number

}
calculation()  // for select the same amount in calculation cart