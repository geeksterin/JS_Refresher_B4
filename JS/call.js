var obj1 = {
  num3: 100,
};

var obj2 = {
  num3: 500,
};

var obj3 = {
  num3: 100,
};

function fnAdd(num1, num2, num4) {
  var x = num1;
  var y = num2;
  var z = num4;
  //   console.log(this.num3);

  var results = x + y + this.num3 + z; //  50 + 50 + undefined
  console.log(results);
}

fnAdd.call(obj1, 50, 50, 100); //200 //300 // JSX

fnAdd.call(obj2, 100, 100, 100); //700 //800

fnAdd.apply(obj3, [30, 30, 100]); //160 //260

var fn = fnAdd.bind(obj3);
fn(1, 1, 1); //103

var fn = fnAdd.bind(obj3, 10, 10, 10);
fn(); //130

fnAdd.bind(obj3, 10, 20, 30)(); //160

fnAdd.bind(obj3)(100, 100, 100); //400
