const product=document.querySelector(".product")
const productCard=document.querySelector(".product-card")

async function getProduct() {
    try{
        const response= await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        const product=data.map(item=>{
            return `
        
             <div>
            <center><img src= ${item.image} width="30" height="40"></center><hr><br>
        
            <h3>${item.title}</h3><br>
            <p>Price: ${item.price}</p><br>
            <p>Category: ${item.category}</p><br>
            <p>Description: ${item.description}</p>
        

           </div>
            `
            
            
    
        })
        productCard.innerHTML=product.join("")
        
    }catch(error){
            console.log(error)
        }
}
getProduct()








        