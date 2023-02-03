//  let product =JSON.stringify(shopitemdata);
// var y=localStorage.setItem("ProductData",product);

let Getallproduct = JSON.parse(localStorage.getItem("Product")) || [];

// var x =JSON.parse(localStorage.getItem("ProductData")) ;
console.log(basket);
console.log(Getallproduct);
let element = document.getElementById('samir');

// console.log(test)





function Detailspage() {
  newwin = window.open("detalis.html", "_self" )

}

let sendproduct=function(id) {
  let selectitem2 = id
  let search2 = Getallproduct.find((x) => x.id === selectitem2.id)

  if (search2 === undefined) {
    Getallproduct.push({
      id: selectitem2.id
     

    })
  }

  //  GeneratProduct() 
  // update(selectitem.id)
  localStorage.setItem("Product", JSON.stringify(Getallproduct))             // local storage icrement
}

function showproduct()
{

}





let GeneratProduct = () => {
  if (Getallproduct.length !== 0) {
    return (element.innerHTML = Getallproduct.map((x) => {
    let {id}=x
    // console.log(x)
      let search = shopitemdata.find((y) => y.id === id) || [] 
      let { name, price, desc, img } = search
// console.log(id)
      return `<div class = "card-wrapper">
                        <div class = "card">
                          <!-- card left -->
                          <div class = "product-imgs">
                            <div class = "img-display">
                              <div class = "img-showcase">
                                
                                 <img src = ${img} > 
                              </div>
                            </div>
                            <div class = "img-select">
                              <div class = "img-item">
                                <a href = "#" data-id = "1">
                                  
                                </a>
                              </div>
                              <div class = "img-item">
                                <a href = "#" data-id = "2">
                                 
                                </a>
                              </div>
                              <div class = "img-item">
                                <a href = "#" data-id = "3">
                                 
                                </a>
                              </div>
                             
                            </div>
                          </div>
                          <!-- card right -->
                          <div class = "product-content">
                            <h2 class = "product-title">${name}</h2>
                            <!-- <a href = "#" class = "product-link">visit nike store</a> -->
                            <div class = "product-rating">
                              <i class = "fas fa-star"></i>
                              <i class = "fas fa-star"></i>
                              <i class = "fas fa-star"></i>
                              <i class = "fas fa-star"></i>
                              <i class = "fas fa-star-half-alt"></i>
                              <span>4.7(21)</span>
                            </div>
                      
                            <div class = "product-price">
                              <p class = "last-price">Old Price: <span>${price - 5}</span></p>
                              <p class = "new-price">New Price: <span>${price}</span></p>
                            </div>
                      
                            <div class = "product-detail">
                              <h2>about this item: </h2>
                              
                              <p>${desc}</p>
                              <ul>
                                <!-- <li>Color: <span>Black</span></li> -->
                                <li>Available: <span>in stock</span></li>
                                <!-- <li>Category: <span>Shoes</span></li> -->
                                <li>Shipping Area: <span>All over the world</span></li>
                                <li>Shipping Fee: <span>Free</span></li>
                              </ul>
                            </div>
                      
                            <div class = "purchase-info">
                              <!-- <input type = "number" min = "0" value = "1"> -->
                              
                              <!-- <button type = "button" class = "btn">Compare</button> -->
                            </div>
                      
                            <div class = "social-links">
                              <p>Share At: </p>
                              <a href = "#">
                                <i class = "fab fa-facebook-f"></i>
                              </a>
                              <a href = "#">
                                <i class = "fab fa-twitter"></i>
                              </a>
                              <a href = "#">
                                <i class = "fab fa-instagram"></i>
                              </a>
                              <a href = "#">
                                <i class = "fab fa-whatsapp"></i>
                              </a>
                              <a href = "#">
                                <i class = "fab fa-pinterest"></i>
                              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                     `})).join("")
  }
}
GeneratProduct()
function clear ()
{
    Getallproduct=[];
  localStorage.setItem("Product",JSON.stringify(Getallproduct))
}
clear()

let increment2 = function (id) {
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
  // update2(selectitem.id)
  localStorage.setItem("data", JSON.stringify(basket))             // local storage icrement
}

/*___________ decrement amount of product________*/


/*________update amount of product above the amount that selected______*/
let update2 = function (id) {
  let search = basket.find((x) => x.id === id)
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item
  // calculation2()
}


/*_____calculation the amount of all select product in cart icon______*/
let calculation2 = () => {
  let carticon = document.getElementById("cartamount")
  carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)  // 0is a default number 
  // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0)) // 0is a default number

}
calculation2()  // for select the same amount in calculation cart
