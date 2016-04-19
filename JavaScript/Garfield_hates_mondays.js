// Write your code below!

console.log("Garfield is just waking up from his nap and wants to know what day it is.");

console.log("┈┈┈┈╱▔╲▂▂╱▔╲┈┈┈┈");
console.log("┈┈┈▕╮╱▔╲╱▔╲╭▏┈┈┈");
console.log("┈┈┈╱╋▏┊▕┊┊▕╋╲┈┈┈");
console.log("┈┈▕╋▕━▅━━▅━▏╋▏┈┈");
console.log("┈┈▕╱▔╲▔╭╮▔╱▔╲▏┈┈");
console.log("┈┈▕┊┳┊▔╰╯▔┊┳┊▏┈┈");
console.log("┈┈┈╲╰━━╯╰━━╯╱┈┈┈");
console.log("┈┈┈╱▔╭┈┈┈┈╮▔╲┈┈┈");
console.log("┈┈╱▕┊┊┈┈┈┈┊┊▏╲┈┈");
console.log("┈┈╲╱┊┊┈┈┈┈┊┊╲╱┈┈");
console.log("┈┈┈▏╋┊┈┈┈┈┊╋▕┈┈┈");
console.log("┈┈┈╲╋╰┈┈┈┈╯╋╱┈┈┈");
console.log("╱▔╲┈╲╋╭▂▂╮╋╱┈┈┈┈");
console.log("▏╋▕▂╱▏┊▏▕┊▕┈┈┈┈┈");
console.log("╲▂▂▂╱▏┊▏▕┊▕┈┈┈┈┈");
console.log("┈┈╱▔▔┈╯╲╱╰┈▔▔╲┈┈");
console.log("┈┈╲▂▂▂▂╱╲▂▂▂▂╱┈┈");

var dayOfTheWeek = prompt("GARFIELD: Excuse me sir, what day of the week would it happen to be?");

switch(dayOfTheWeek) {
    case 'Monday':
        console.log("GARFIELD: There is nothing I hate more than Monday's, wake me back up when it's over.")
        console.log("GARFIELD: Zzzzzzzzzzzzzzz")
        break;
    case 'Tuesday' || "tuesday":
        console.log("GARFIELD: The only thing I hate more than Tuesday's are Monday's. I'm going back to bed.")
        break;
    case 'Wednesday' || "wednesday":
        console.log("GARFIELD: Great, Wednesday's mean its Lasanga day! If I'm asleep don't wake me up")
        break;
    case 'Thursday' || "thursday":
        console.log("GARFIELD: I love Thursdays! ...NOT!")
        break;
    case 'Friday' || "friday":
        console.log("GARFIELD: Friday! Now there's a day of the week I can get behind. I'm gonna celebrate by taking a nap.")
        break;
    case 'Saturday' || "saturday":
        console.log("GARFIELD: Perfect, It's the weekend! Now I can finally relax and just lounge around!")
        break;
    case 'Sunday' || "sunday":
        console.log("GARFIELD: Well at least it's not Monday!")
        break;
    default:
        console.log("GARFIELD: Are you sure that's even a day of the week? Never heard of " + "'" + dayOfTheWeek + "'" + " " + "before?")
        break;
};
