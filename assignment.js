 //A function that converts Feet into Mile

function feetToMile(feet){
    if(feet<0){
        return "Hey! Distance can never be in minus figure "
    }
    else{
        var  mile = feet / 5280 ; // 1 Mile = 5280 Feet
        mile = mile.toFixed(2);
        var outPut = "miles"
        var outPut2 = mile +" "+outPut
        return  outPut2;
    }
}
var resultOfFeetToMile = feetToMile(2056006);
  console.log(resultOfFeetToMile);

// End Of feetToMile Function 

// A function that calculate total amount of wood for your Furniture
function woodCalculator(numOfChair , numOfTable , numOfBed){
var amountOfWoodForChair = numOfChair * 1;
var amountOfWoodForTable = numOfTable * 3;
var amountOfWoodForBed = numOfBed * 5;
var TotalAmountOfWood = amountOfWoodForChair + amountOfWoodForTable + amountOfWoodForBed;
var outPut = "qf";
var outPut2 = TotalAmountOfWood +" "+ outPut
return outPut2;
}
 var TotalWood = woodCalculator(14, 5 , 12) ;
 console.log(TotalWood);

//  End Of woodCalcolator Function 

// A function that calculate the amount of brick of your building 

function brickCalculator(numberOfFloor){
if(numberOfFloor < 11 && numberOfFloor > 0){
    var firstTenFloor = numberOfFloor * 15 * 1000;
    var outPut = "Bricks You Need";
    var outPut2 = outPut +" "+ firstTenFloor
    return outPut2;
    
}
else if(numberOfFloor > 10 && numberOfFloor < 21){
var secondTenFloors1 = (numberOfFloor - 10) * 12 * 1000;
var firstTenFloors2 = 150000 ; // 10 * 15 * 1000
var totalBricks1 = secondTenFloors1 + firstTenFloors2 ;
var outPut = "Bricks You Need";
var outPut2 = outPut +" "+ totalBricks1
return outPut2;
}
else if(numberOfFloor > 20 ){
var highestFloors = (numberOfFloor - 20) * 10 * 1000;
var secondTenFloors2 = 120000 ;// 10 * 12 * 1000
var firstTenFloors3 = 150000 ; // 10 * 15 * 1000
totalBricks2 = highestFloors + secondTenFloors2 + firstTenFloors3;
var outPut = "Bricks You need";
var outPut2 =  outPut +" "+totalBricks2;
return outPut2 ;
}
else{
    return "Please write a valid number of floor "
}
}
var result = brickCalculator(19);
 console.log(result)

// A function that Tells which of your friend has the tiniest name  

function tinyFriend(nameOfFriends)
{
  var temp = nameOfFriends.split(",");
  var tiniest = temp[0];

  for(var i = 1 ; i < temp.length ; i++)
  {
    if(tiniest.length > temp[i].length)
    {
        tiniest = temp[i];
    } 
  }
  return tiniest;
}
var name = tinyFriend('Mohammad , Nafis , Anas , Fuad, Chowdhury, Prapto')
var  outPut = "Tiniest name is"+" ";
var outPut2 = outPut + name;
console.log(outPut2)

// End Of tinyFriend Function 


