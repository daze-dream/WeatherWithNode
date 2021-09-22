// Object prop shorthand

// Normal way
// const name = 'Kylen'
// const userAge = '607'

// const user = {
//     name: name,
//     age: userAge,
//     location: 'Outer Rim'
// }


// shorthand way

const name = 'Kylen'
const userAge = '607'

const user = {
    name,
    age: userAge,
    location: 'Outer Rim'
}


console.log(user)

//Object Destructure
const product = {
    label: 'dog',
    price: 3,
    stock: 201,
    salePrice: undefined

}
//this syntax builds out variables from an object automatically. You list out what values you want.
//      aliasing                                              default values
const {label: productLabel, price, stock: inStock, salePrice, rating = 5} = product
console.log(productLabel)

//can destruct right in the function signature itself
const transaction = (type, {label: transLabel, stock, price = 0} /* instead of productInfo*/) => {
    console.log(type, transLabel, price, stock)
}

transaction('order', product)