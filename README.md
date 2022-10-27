# E-Commerce-React

This is my attempt to create basic e-commerce website using React.js framework. What it does is it gathers data about products from external javascript file that contains
an array of object in which each object is separate product with properties, like price, image of product, id number, name and rating. Then, script maps over said array and 
renders card for each object on main page of the website, each card also constains "add" button, with which you can add products into your cart. On top of the website on the 
right of the navbar you can see small number in circle which indicates how many products user has in his cart at the moment. Cart page reduces list of cart items so that you
don't see duplicates as different renders, more items of the same type are represented by quantity instead. For now app counts quantity, multiplies that by price of singular
product and return whole price. Script than sums those values up and the result can be seen under "Total price". Increasing and decreasing quantity of products in cart page
is about to be added.
