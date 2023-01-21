const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

!shoppingCart.includes("Meat")
    ? shoppingCart.unshift("Meat")
    : shoppingCart

!shoppingCart.includes("Sugar")
    ? shoppingCart.push("Sugar")
    : shoppingCart

let alergicToHoney = true

alergicToHoney
    ? shoppingCart.splice(shoppingCart.indexOf("Honey"), shoppingCart.indexOf("Honey") + 1)
    : shoppingCart

shoppingCart[shoppingCart.indexOf("Tea")] =  "Green Tea"

export {shoppingCart}