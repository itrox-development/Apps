

/*************************
MAIN CODE FUNCTIONALITY
*************************/


// calculate each players passes per minute 
function CalPassesPerMinute(playerInstance) // holds on argument of the current player item in the "players" array 
{
  
//Object with passes per minute formula
formulaObj = {

 // (backward_pass + fwd_pass) / mins_played

 formula:(playerInstance.stats[8].value + playerInstance.stats[4].value) / playerInstance.stats[7].value

}

result = formulaObj.formula.toFixed(2); // fixing the integer length of the double to three digits

return result // returning the new result 
  
}




// calculate each players goals per match
function CalGoalsPerMatch(playerInstance)
{
  
// Object with goals per match formula

formulaObj = {

// goals / (losses + wins + draws);
  formula:playerInstance.stats[0].value / (playerInstance.stats[1].value + playerInstance.stats[2].value + playerInstance.stats[3].value)

}

result = formulaObj.formula.toFixed(2); ; // fixing the integer length of the double to three integers

return result // returning the new result 
  
}




// Displays JSON data for all player information

function changeData(arrayItemObject) // takes an arguments of the player array instance to access the data in that players object 
{

document.getElementById("name").innerHTML = arrayItemObject.player.name.first + " " + arrayItemObject.player.name.last;
document.getElementById("position").innerHTML = arrayItemObject.player.info.positionInfo;
document.getElementById("appearances").innerHTML = arrayItemObject.stats[6].value;
document.getElementById("goals").innerHTML = arrayItemObject.stats[0].value;
document.getElementById("assists").innerHTML = arrayItemObject.stats[5].value;
document.getElementById("goalsPerMatch").innerHTML = CalGoalsPerMatch(arrayItemObject); // takes the same type of player instance arugment for reusable purposes
document.getElementById("passesPerMinute").innerHTML = CalPassesPerMinute(arrayItemObject);  // takes the same type of player instance arugment for reusable purposes

}
 
// For the element with an ID of "myList", onchange use the annonymous function and check conditions. 
document.getElementById("myList").onchange = function() {
 
  // If the "myList" element's currently selected object (option) has a value that matches the conditional logic then run the condition 
  //Ternary conditions were used for concise code. 
    if (this.value === "Toby")      changeData(JSON_OBJ.players[0]), 
      
      //Change class attribute for images depening on condition
    document.getElementById("Container").setAttribute("class", "TobyBG"), 
    document.getElementById("badgeElement").setAttribute("class", "TobyBadge ");
  
    if (this.value === "Yaya")      changeData(JSON_OBJ.players[1]), 
    document.getElementById("Container").setAttribute("class", "YayaBG"),
    document.getElementById("badgeElement").setAttribute("class", "YayaBadge ") ;
  
    if (this.value === "Wayne")   changeData(JSON_OBJ.players[2]), 
    document.getElementById("Container").setAttribute("class", "WayneBG"),
    document.getElementById("badgeElement").setAttribute("class", "WayneBadge ") ;
  
    if (this.value === "Per")       changeData(JSON_OBJ.players[3]),
    document.getElementById("Container").setAttribute("class", "PerBG"),
    document.getElementById("badgeElement").setAttribute("class", "PerBadge ");
  
    if (this.value === "Riyad")     changeData(JSON_OBJ.players[4]), 
    document.getElementById("Container").setAttribute("class", "RiyadBG"),
    document.getElementById("badgeElement").setAttribute("class", "RiyadBadge ");
 
};

