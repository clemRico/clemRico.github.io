//
//
// var todo = [""];
//
// function todoList(){
//
// do{
// var choice = prompt("Enter Task");
// if(choice === "reverse")
// {
//  reverseArray();
// }
//
// }while(choice==="reverse");
//   alert("comeback again!");
//   return;
// }
//
//
//
// function reverseArray(){
  var arr = [1,2,9,4,5];
  var arrEqual = [5, 5, 5, 5];
  var arr1 = [];
  var max = 0;
  var equality = true;
  console.log("This is the original order of the array: " +arr);
  for (var i = 0; i < arr.length; i++)
  {
      arr1.unshift(arr[i]);
      if(max < arr[i]){
        max = arr[i];
      }

  }

  console.log("This is the reversed order: " +arr1);
  console.log("The highest number in the array is: " +max);
   if(arrEqual.length<=1){
     console.log("nothing to compare here..");
   }
   else{
       var temp = arrEqual[0];
     for (var i = 0; i < arrEqual.length; i++)
     {
      if(temp !== arrEqual[i] )
        equality = false;
      }
   }
   if(equality === false){
     console.log("The numbers in the are array not all equal..");
   }
   else {
     console.log("all numbers in the array are equal");
   }
// }
