// Array - A collection of items / String, boolean, number, object
var numbers =[30,70,90,20,50];
console.log(numbers);

//push => Add an item at the end of an array
numbers.push(40);
console.log(numbers);

//pop -> Remove an item at the end of an array
numbers.pop();
console.log(numbers);

//length -> size of an array
console.log(numbers.length);

// assesing an item from an array
console.log(numbers[0]);

// List down/ iterate all item in an array
for (var i = 0; i< numbers.length; i++){
    console.log( numbers[i]);
  }

//Remove at position 1, 1 item
numbers.splice(1,1);
console.log(numbers)

//Create a function minMaxAvg, that will retrieve an Array as parameter
//[20,10,30,40,15]

var num = [20,10,30,40,15];
var num1 = [3,1,2,4,2];

function MinMaxAvg(arr){
var length = arr.length;
//MIN
var min = arr[0];
for(j=0; j<length; j++){
  
  if(min>arr[j+1]){
    min = arr[j+1];
  }
}


//MAX
var max = arr[0];
for(j=0; j<length; j++){
  
  if(max< arr[j+1]){
    max = arr[j+1];
  }
}


//AVG
var avg = 0;
for(j=0; j<length; j++){
  avg = avg + arr[j];  
}
avg = avg / length;


return [min,max,avg];
}

console.log(MinMaxAvg(num))
console.log(MinMaxAvg(num1))
