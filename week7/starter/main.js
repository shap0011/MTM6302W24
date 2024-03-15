/*** Object literals ***/

//Create your HTML file, link your JS file, and install Bootstrap.

//Create an array of objects (data structure) to manage store items. Use two properties (productName, price) in the object. Create two products.
const products = [
    {
        productName: 'laptop',
        price: 1000,
        updatePrice: function(newPrice) {
            this.price = newPrice
        }
    },
    {
        productName: 'tablet',
        price: 500
    }
]
//Print the first product in the console; retrieve the 'productName' property.
console.log(products[0].productName)
//Add one extra item to the 'products' array using a method
products.push({productName:'phone', price: 300})
console.log(products)
//Update the price of one of the products
//products[0]['price'] = 600
products[0].price = 600 // most common practice
//Add the property 'size' to any of the products
products[0].size = '15 inches'
const descriptions = [
    'First product description',
    'Second product description',
    'Third product description'
]
//Add the property 'description' to all the products(objects); use the 'descriptions' array
for(let i = 0; i < products.length; i++){
    products[i].description = descriptions[i]
}
//Delete the property 'size'
delete products[0].size
//Go back to the object definition and create a method(function), as a property, to update the 'price' of a product. Test it in the console.
//products[0].updatePrice(1000)
products[1].updatePrice = function
(newPrice){
    this.price = newPrice
}
//Do the same with a regular function
    //1.declare the function; identify the inputs that you need.
   function updatePrice(product, newPrice) {
        //2.find the right product
        // const foundProduct = products.find(function(prod){
        //     return prod.productName === product
        // })
        // const foundProduct = products.find(prod => prod.productName === product)
        const foundProduct = products.find(productObj => productObj.productName === product)

        //3.assign the new value
        foundProduct.price = newPrice
    } 
    updatePrice('tablet', 450)


//Display all the products in the 'document'. 

    //1.define variables; 'DOM element' and a empty array

    //2.define your 'html template'; push 'html code'(template) to the array.

    //3.join and insert the complete 'html template'
 

