var brand = {
  brand1: "Apple",
  brand2: "Samsung",
  brand3: "Vivo",
};

//access the data or property value
console.log(brand.brand1);
console.log(brand.brand3);

//Inserting the new Property
brand.brand4 = "Oneplus";
console.log(brand);

//Updat the property
brand.brand1 = "Oppo";
console.log(brand);

//delete the property
delete brand.brand2;

console.log(brand);
