const product=document.querySelector(".product")
const productCard=document.querySelector(".product-card")

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













        