// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(studentName){
  roster.push(studentName);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(studentName){
  console.log("goes here")
  var index = roster.indexOf(studentName);
  console.log(index);
  if(index !== -1){
    roster.splice(index, 1);
  } else {
    console.log("Name not found, please check with display and know that remove is case sensitive.")
  }
}
// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
  console.log(roster);
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var start = prompt("would you like to use this web app? (y/n)");
if(start === "y"){
  var response = "";
  while(true){
    response = prompt("What action would you like to perform? (add, remove, display, or quit)");
    if(response === "add"){
      var studentName = prompt("Who would you like to add?");
      addNew(studentName);
    }
    if(response === "remove"){
      var studentName = prompt("Who would you like to remove?");
      remove(studentName);
    }
    if(response === "display"){
      display();
    }
    if(response === "quit"){
      alert("Thank you for using this web app. Please refresh to page to restart.");
      break;
    }
  }
}
