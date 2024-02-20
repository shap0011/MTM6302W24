/*** Object literals ***/

//Create your HTML file, link your JS file, and install Bootstrap.

//Create an array of objects (data structure) to manage store items. Use two properties (productName, price) in the object. Create two products.

const products = [
    {
        productName: 'laptop',
        price: 100,
        priceUpdate: function(newPrice){
            this.price = newPrice
        }
    },
    {
        productName: 'phone',
        price: 200
    }
]

//Print the first product in the console; retrieve the 'productName' property.
console.log( products[0].productName )
console.log( products[1]['productName'] )

//Add one extra product to the 'products' array using a method
products.push({
    productName: 'Third product',
    price: 300
})

//Update the price of one of the products
products[2].price = 350

//Add the property 'size' to any of the products
products[2].size = 'Large'

const descriptions = [
    'First product description',
    'Second product description',
    'Third product description'
]
//Add the property 'description' to all the products(objects); use the 'descriptions' array
// let i = 0

// for(const product of products){
//     product.description = descriptions[i]
//     i++
// } 

for(let i = 0; i < products.length; i++){
    products[i].description = descriptions[i]
}


//Delete the property 'size'
delete products[2].size



//Go back to the object definition and create a method(function), as a property, to update the 'price' of a product. Test it in the console.

//Do the same with a regular function
    //1.declare the function; identify the inputs that you need.
    function updatePrice(product, newPrice){
        //2.find the right product
        // const foundProduct = products.find( item => item.productName === product )
        const foundProduct = products.find( function(item){
            return item.productName === product
        })
        //3.assign the new value
        console.log(foundProduct)
        foundProduct.price = newPrice
    }
   
      


//Display all the products in the 'document'. 

    //1.define varibles; 'DOM element' and a empty array

    //2.define your 'html template'; push 'html code'(template) to the array.

    //3.join and insert the complete 'html template'
 

