function main() {
	//declaring global variables
	var name;
	var isHaunted;
	var choice1;
	var choice2;
	var choice3;

	//get name and print intro statement
	name = prompt("What is your name? ");
	console.log(`\nHappy Halloween, ${name}. You have found your way into a haunted house.\n\nAs you enter, you see an ancient tome. Do you touch it?\n`)

	//choice1 - touch the book
	//if the user enters something that is neither
	choice1 = prompt("Enter yes or no. ");
	if (choice1 == "yes") {
		isHaunted = true;
    		console.log("\nYou hear a spooky laugh and feel a cold presence. You are haunted!\n")
	} else if (choice1 == "no") {
    		isHaunted = false;
    		console.log("\nProbably a good choice.\n");
	} else {
		isHaunted = true;
    		console.log("\nThe door slams behind you. You do not know if you are haunted or not.\nYour inability to follow directions may be your demise.\n");
	}

	//choice2 - going into the basement
	console.log("You walk down the hallway and see a staircase that goes to the basement.\n\nDo you go downstairs?\n");
	choice2 = prompt("Enter yes or no: ");
	if (choice2 == "yes") {
		console.log("\nYou walk into the basement and the sight in front of you is shocking.\n");
	} else {
		console.log("\nAn unseen force shoves you, sending you falling down the stairs.\n\nLike it or not, you're in the basement now.\n\nYou get up and look around and see something that chills you to the bone.\n");
}

	//choice 3 - do you get to leave?
	console.log("A hulking werewolf lies before you.\n\nYou decide your best options are to tame the werewolf or run for safety.\n\nWhat do you think?\n");
	choice3 = prompt("Enter tame or run: ");
	if (choice3 == "tame") {
		console.log("\nHe just straight up kills you.\n\nThe end!")
	} else if (choice3 == "run" && isHaunted == true) {
		console.log("\nYou sprint up the stairs, but the spooky ghost has locked the door!\n\nI sure hope you like dogs.\n\nThe end!")
	} else if (choice3 == "run" && isHaunted == false) {
		console.log("\nYou sprint up the stairs and run out of the house! You made it out safely!\n\nThe end.")
	} else {
		console.log("\nYou blankly stare at the werewolf.\n\nUnfortunately, looking it in the eyes has enraged it, making you its supper.\n\nThe end!")
	}
}
