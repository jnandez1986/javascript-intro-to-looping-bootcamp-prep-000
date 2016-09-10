function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if(i === 1){
      array.push("I am " + i + " strange loop.");
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}
