
var user = prompt("Do you seriously want to play this game: YES or NO ").toUpperCase();

var points = 0;
var userPlay = false;

/* QUESTIONS */
var questionOne = "ROUND 1 - QUESTION ONE \n \nA man enters a dark cabin with only one match. He sees an\n oil lamp, a wood stove, and a fireplace, all of them\n prepared and ready to light. Which does he light first?\nTYPE YOUR ANSWER BELOW:";
var questionTwo = "ROUND 1 - QUESTION TWO \n What goes up but never comes down?";
var questionThree = "ROUND 2 - QUESTION ONE \nA bus driver went right past a stop sign without stopping,\n he turned left where there was a 'no left turn' sign\n and he went the wrong way on a one-way street.\n Then went on the left side of the road past a cop car\n & didn't break traffic laws. Why not?";
var questionFour = "ROUND 2 - QUESTION TWO \nHow can you throw a ball as hard as you can and have it come back to you\n even if it doesn't hit anything. There is nothing attached to it and no one else\n catches or throws it?";
var questionFive = "ROUND 3 - QUESTION ONE \nWhat can run but never walks, has a mouth but never talks,\n has a head but never weeps, and has a bed but never sleeps?";
var questionSix = "ROUND 3 - QUESTION 2\nWhat belongs to you but others use it\n more than you do?";

switch(user) {
    case 'YES':
        userPlay = true;
        break;
    case 'NO':
        console.log("Thank God!!! Believe me buddy, you just dodged a bullet.");
        break;
    case 'MAYBE':
        console.log("Maybe wasn't one of the options. I'll just have to assuming you're leaning more towards 'No'.");
        break;
    default:
        console.log("Well I Never!!!! Seriously, that wasn't one of the options...too late, you don't get to play! GOOD DAY SIR/MADAM!.");
        break;
}


while (userPlay === true) {

  if(points === 0) {

    alert("Alright you bastard, lets do the damn thing\nOkay, if you're gonna play let's go over some ground rules:\n \nGROUND RULES\n***************\n- There are 3 round\n- Each round will have 2 riddles\n- You must get BOTH right in order to move \non to the next round.\n- Each round is worth 2 points.");
    var userResponseOne = prompt(questionOne).toUpperCase();

    if(userResponseOne.includes("MATCH")) {
        points++;
    } else {
        alert("So close....not actually you were way off\n check the panel to the right for your final score");
        console.log("GAME OVER\nFINAL SCORE: " + points);
        userPlay = false;
    }

  } else if(points === 1) {

    var userResponseTwo = prompt(questionTwo).toUpperCase();

    if(userResponseTwo.includes("AGE")) {
        points++;
    } else {
        alert("So close....not actually you were way off\n check the panel to the right for your final score");
        console.log("GAME OVER\nFINAL SCORE: " + points);
        userPlay = false;
    }

  } else if(points === 2) {

    alert("Welcome to the 2nd Round: If you are seeing this message you answered both riddles correctly. Click 'Okay' to continue");
    var userResponseThree = prompt(questionThree).toUpperCase();

    if(userResponseThree.includes("WALKING") || userResponseThree.includes("WALK")) {
        points++;
    } else {
        alert("Well at least you passed round one. Actually it doesn't sound that impressive after all.");
        console.log("GAME OVER\nFINAL SCORE: " + points);
        userPlay = false;
    }

  } else if(points === 3) {

    var userResponseFour = prompt(questionFour).toUpperCase();

    if (userResponseFour.includes("AIR") || userResponseFour.includes("STRAIGHT") || userResponseFour.includes("UP") || userResponseFour.includes("SKY")) {
        points++;
    } else {
        alert("Well at least you passed round one. Actually it doesn't sound that impressive after all.");
        console.log("GAME OVER\nFINAL SCORE: " + points);
        userPlay = false;
    }

  } else if(points === 4) {

    alert("Wow, I'm Surprised you made it to round 3. Didn't expect you to get this far. Click 'OK' when ready.");
    var userResponseFive = prompt(questionFive).toUpperCase();

    if(userResponseFive.includes("RIVER")) {
        points++;
    } else {
        alert("Frankly I was surprised you made it past round 2. Better luck next time!");
        console.log("GAME OVER\nFINAL SCORE: " + points);
        userPlay = false;
    }

  } else if(userPlay === true && points === 5) {

      var userResponseSix = prompt(questionSix).toUpperCase();

      if(userResponseSix.includes("PHONE") || userResponseSix.includes("NUMBER")) {
          points++;
      } else {
          alert("Frankly I was surprised you made it past round 2. Better luck next time!");
          console.log("GAME OVER\nFINAL SCORE: " + points);
          userPlay = false;
      }

  } else {
      alert("Congrats! You are a true riddle genius! I'm so proud of you!");
      console.log("GAME OVER\nFINAL SCORE: " + points);
      userPlay = false;
  }

};
