const product=document.querySelector(".product")
const productCard=document.querySelector(".product-card")

//Product Page
async function getProduct() {
    try{
        const response= await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        const product=data.map(item=>{
            return `
        
            <div class="product-container" onclick="productItem(id)">
            
            <center><img src= ${item.image} width="30" height="40" class="product-img"></center><br>
            <h3>${item.title}</h3><br>
            <p><strong>Price: </strong>${item.price}</p><br>
            <p><strong>Category: </strong>${item.category}</p>
            
            </div>
            ` 
        })
        productCard.innerHTML=product.join("")
        
    }catch(error){
            console.log(error)
        }
}
getProduct()

//Product Item Page
async function productItem(id){
  const singleProduct=document.getElementById("single-container");
  console.log(id);
try{
    const response=await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    window.location.href="item.html"; 
    const res=`<div>
    <p>Title:${data.title}</p>
    </div>
    `;
    singleProduct.innerHTML=res;
    console.log(res);
    return res;
}
catch(error){
  console.log(error);
}
}

// Cart
//GET Method
const getButton=document.querySelector(".get-btn")
const postButton=document.querySelector(".post-btn")
const putButton=document.querySelector(".put-btn")
const deleteButton=document.querySelector(".delete-btn")
const result=document.querySelector(".result")

getButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/3")
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div class="get-container">

        <div class="get-img">
        <img src= "${data.image}" >
        </div>

        <div class="get-content">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>

        </div>
        `
    })
    .catch((error)=>{
        console.log(error)
    })
})

//POST Method
postButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products",{
        method:"POST",
        headers: {"Content-Type": "application/json"

            },
        body: JSON.stringify({
            title: "Classic Black Overdized T-shirt",
            price: "29.99",
            category: "Men's Fashion",
            description: "Comfortable oversized black t-shirt made with soft cotton fabric. Perfectfor casual daily wear and street style outfits.",
            image:"https://thfvnext.bing.com/th/id/OIP.QoO51bQbeb4_--xBWmO1NgHaJU?w=155&h=196&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3"
            
    })
    
    })
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div class="Cart-Container">
        <div class="Cart-img">
        <img src= "${data.image}" width="50">
        </div>
        <div class="Cart-content">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>
        </div>
        `   
    })
    .catch((error)=>{
        console.log(error)
    })
})

//PUT Method
putButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/1",{
        method:"PUT",
        headers: {"Content-Type": "application/json"

            },
        body: JSON.stringify({
            title: "Premium White Graphic T-Shirt",
            price: 34.99,
            category: "Unisex Fashion",
            description: "Updated version with premium cotton material, stylish graphic print, and a more comfortable oversized fit for everyday fashion.",
            image:"https://thfvnext.bing.com/th/id/OIP.s2yAEYxDps8tArT_6X8oTQHaHa?w=208&h=208&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3"
            
    })
    
    })
    .then((resolve)=>resolve.json())
    .then((data)=>{
        result.innerHTML=`
        <div class="Cart-Container">
        <div class="Cart-img">        
        <img src="${data.image}" width="50">
        </div>
        <div class="Cart-content">
        <h2><strong>Title : ${data.title}</strong></h2><br>
        <p><strong>Price : </strong>${data.price}</p><br>
        <p><strong>Category : </strong>${data.category}</p><br>
        <p><strong>Description : </strong>${data.description}</strong></p>
        </div>
        </div>
        ` 
    })
    .catch((error)=>{
        console.log(error)
    })
})


//DELETE Method
deleteButton.addEventListener("click",()=>{
    fetch("https://fakestoreapi.com/products/1",{
        method : "DELETE"
    })
    .then((response)=>{
        if(response.ok){
            result.innerHTML= `
            <div class="delete-content">
            <h2>Deleted Successfully</h3><br>
            <p>The selected t-shirt product has been successfully removed from the store inventory.</p>
            </div>
            `
        }
    })
})














        