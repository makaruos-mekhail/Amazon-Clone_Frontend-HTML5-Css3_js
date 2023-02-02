let label=document.getElementById("label")
let shoppingcart= document.getElementById('shopping-cart')
let basket=JSON.parse(localStorage.getItem("data"))||[];

let calculation=()=>{
    let carticon=document.getElementById("cartamount")
    carticon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)   
    }


calculation()  

/*_______________________________________________________________________________*/
    let generatecartitem= ()=>{
        if(basket.length !==0){
            return shoppingcart.innerHTML=basket.map((x)=>{                   //(basket in JSON DAta)  
                let {id,item}=x
                let search=shopitemdata.find((y)=>y.id===id) || []       //y is comming from Data.js and id is comming from pasket
                let {img,name,price}=search
                return`  
                <div class="cart-item">
                <img width="100" src=${img} />
                <div class="Details">
                <div class="title-price-x">
                <h4 class="title-price">
                <p class="cart-name">${name}</p>
                <p class="cart-price">$${price}</p>
                </h4> 
                <i onclick="removeItem(${id})" class="fa-solid fa-xmark"></i>
                </div>
                <div class="Cart-buttons"> </div>
                <div class="cart-minus-plus">     
                <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="fa-regular fa-plus"></i>
                </div>
                <h3>$${item * search.price}</h3>
                </div>
                </div>`}).join("")  
        }

        else{
            shoppingcart.innerHTML ='';
            label.innerHTML=`<h2>Cart is Empty<h2>
            <a href="index.html">
            <button class="HomeBtn">
            Back To Home
            </button>
            </a>
            `
        }}

generatecartitem()

/*________increment amount of product________*/
let increment=function(id){
    let selectitem=id
    let search=basket.find((x)=> x.id=== selectitem.id)

    if (search===undefined){
        basket.push({
            id:selectitem.id,
            item:1
        })
    }else{
        search.item +=1
    }
    
    generatecartitem() 
    update(selectitem.id)
    localStorage.setItem("data",JSON.stringify(basket))             // local storage icrement
}

/*___________ decrement amount of product________*/
let decrement=function(id){

    let selectitem=id
    let search=basket.find((x)=> x.id=== selectitem.id)
    
 if(search===undefined)return                //(if decrement append Error)
 else if (search.item===0){
       return
    }else{
        search.item -=1
    }
  
    update(selectitem.id) 

    basket=basket.filter((x)=> x.item !==0)    // ________filter in local storage______

    generatecartitem()
    localStorage.setItem("data",JSON.stringify(basket))              //local storage decrement
}

/*________update amount of product above the amount that selected______*/
let update=function(id){
    let search=basket.find((x)=> x.id===id)
    // console.log(search.item);
    document.getElementById(id).innerHTML=search.item 
    calculation()
    TotalAmount()
}

let removeItem=(id)=>{
let selectitem=id
// console.log(selectitem.id);
basket=basket.filter((x)=>x.id !==selectitem.id)
generatecartitem()
TotalAmount() 
calculation()


localStorage.setItem("data",JSON.stringify(basket))     
}

let Clearcart=()=>{
    basket=[]
    generatecartitem()
localStorage.setItem("data",JSON.stringify(basket))
calculation()
}


let TotalAmount=()=>{
    if(basket.length !==0){
        let amount=basket.map((x)=>{
            let {item,id}=x
            let search=shopitemdata.find((y)=>y.id===id) || []  
            return item *search.price   
        }).reduce((x,y)=>x+y,0)
        label.innerHTML=`
        <h2>Totab bill:$${amount}</h2>
        <button class="checkout">checkout</button>
        <button onclick="Clearcart()" class="removeall">Clear Cart</button>
        `
    }
}
TotalAmount()
