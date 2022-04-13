var products = {
  pname: "Hp Laptop",
  price: 90000,
};

function printHpDetails() {
  if (products.price > 100000) {
    console.log("It is Macbook of Apple Brand");
  }

  if (products.price < 100000) {
    console.log("It is HP Brand");
  }
  console.log("Function got executed ");
}

printHpDetails();
