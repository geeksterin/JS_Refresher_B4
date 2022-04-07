var products = ["Apple", "Iphone 13", "Electronics", 90000, true];

console.log(products);

//Access PArticular Element in the Array
console.log(products[2], products[3]);

//Adding Element at last position  // push()          80% - Object Redux,state,props,contextapi
products.push(4);
products.push("It best Mobile uptodate");
console.log(products);

//Adding Element at the start Position
//unshift
products.unshift("Geekster");
products.unshift("Gurugram");
console.log(products);

//Length
// Length indicate no of elements in array
console.log(products.length);

//pop() will remove last element from array

products.pop();
products.pop();
console.log(products);

//shift() will remove starting elements

products.shift();
products.shift();
console.log(products);
