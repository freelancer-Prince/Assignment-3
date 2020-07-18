//problem Number-1
//convert feet to mile
function feetToMile (feet){
   var mile = feet / 5280;
   return mile; 
}
var result = feetToMile(28380);
console.log(result);


//problem Number-2
// wood calculator
function woodCalculator (chair, table, bed){
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount   =  bed  * 5;
    var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWoodCount;
}
var result = woodCalculator(4,3,6);
console.log(result);

//problem number-3
//brickCalculator
function brickCalculator (floor){
   if (floor <= 10) {
    var bricksCount = floor * 1000;
    return bricksCount;
   } else if (floor >10 && floor <= 20){
    var bricksCount = floor * 1000;
    return bricksCount;
   }else if (floor > 20){
    var bricksCount = floor * 1000;
    return bricksCount;
   }else{
      console.log('enter the valid number');
   }
}

 var result = brickCalculator(15);
 console.log(result);

//problem number-4
//tinyFriends
function tinyFriend(arry) {
    
	return arry.reduce(function(prevName,currName) {
		if (currName.length < prevName.length) {
			return currName;
		}
		else 
			return prevName;
	})
}
var result = tinyFriend(['helloWorld', 'shohag', 'sajidsss']);
console.log(result);