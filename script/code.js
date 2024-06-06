//Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
//In order to make the string into an array you need to use JSON.parse
let products = JSON.parse(localStorage.getItem('products'))  

 //Ternary operator is used to check if we have data in the local storage
? JSON.parse(localStorage.getItem('products'))  : localStorage.setItem('products', JSON.stringify
    (
        [
            {
            id: 1,
            productName: "Gemstone",
            category: "Ring",
            Material: "Gold",
            Amount: 1000,
            img_url: "https://leahbasson.github.io/MyImages/jsProject/circle1.jpg"
            },
            {
                id: 2,
                productName : "Chunky Silver",
                category: "Bracelet",
                Material: "Silver",
                Amount: 300,
                img_url: "https://leahbasson.github.io/MyImages/jsProject/circle2.png"
            },
            {
                id: 3,
                productName: "Chain Necklace",
                category: "Necklace",
                Material: "Gold",
                Amount: 600,
                img_url: "https://leahbasson.github.io/MyImages/jsProject/circle3.jpg"
            },
            {
                id: 4,
                productName: "Pear Shaped Pearls",
                category: "Earrings",
                Material: "Pearls, Gold",
                Amount: 300,
                img_url: "https://leahbasson.github.io/MyImages/jsProject/circle4.jpg"
            },
            {
                id: 5,
                productName: "Heart Shaped Earrings",
                category: "Earrings",
                Material: "Gold, Diamond",
                Amount: 500,
                img_url: "https://leahbasson.github.io/MyImages/jsProject/homeLimited.jpg"
            }
        ]  
    )
) 

//Code for everytime you add a recent product
function recentProducts(){
    let arrSize = products.length;
    let latestProducts = products.reverse().slice(0, arrSize >> 1);
    console.log(latestProducts);
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${[product.img_url]}" class="card-img-top" alt="${product.productName}">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.Material}</p>
            </div>
        </div> `
        
    })
}

recentProducts()