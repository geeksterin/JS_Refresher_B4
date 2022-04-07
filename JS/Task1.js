var products = {
  appleMobile: {
    brandName: "Apple",
    modelName: "Iphone 12",
    price: 90000,
    reviews: ["Best", "Superb", "High Price"], //     products.appleMobile.reviews[2]
  },
  vivoMobile: {
    brandName: "Vivo",
    modelName: "Vivo A23",
    price: 50000,
    reviews: ["bad Screen", "Superb", "High Price"],
  },
  samsungMobile: {
    brandName: "Samsung",
    modelName: "Note 11",
    price: 100000, //products.samsungMobile.price
    reviews: ["Excellent", "Superb", "High Price", "Great Technologies"],
  },
};

console.log(products.appleMobile.reviews[2]);
console.log(products.samsungMobile.price);
