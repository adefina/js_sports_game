let teamoneshootButton = document.querySelector("#teamone-shoot-button");
let teamtwoshootButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");
let numresets = document.querySelector("#num-resets");
let teamonenumshots = document.querySelector("#teamone-numshots");
let teamtwonumshots = document.querySelector("#teamtwo-numshots");
let teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamtwonumgoals = document.querySelector("#teamtwo-numgoals");

teamoneshootButton.addEventListener("click",function(){
    console.log("teamone shoot Button clicked");
    let newteamonenumshotsValue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newteamonenumshotsValue;
if (Math.random() < 0.32) {
    let newteamonenumgoalsValue = Number(teamonenumgoals.innerHTML) +1; 
    teamonenumgoals.innerHTML = newteamonenumgoalsValue;
}})

teamtwoshootButton.addEventListener("click",function(){
    console.log("teamtwo shoot Button clicked");
    let newteamtwonumshotsValue = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = newteamtwonumshotsValue;
if (Math.random() > 0.4) {
    let newteamtwonumgoalsValue = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = newteamtwonumgoalsValue;
}
})

resetButton.addEventListener("click",function(){
    console.log("all points have been reset");
    let newnumresetsValue = Number(numresets.innerHTML)+1;
    numresets.innerHTML = newnumresetsValue;
    if (teamonenumgoals.innerHTML > teamtwonumgoals.innerHTML) { 
        alert("Team 1 Wins!");
    }else if(teamonenumgoals.innerHTML < teamtwonumgoals.innerHTML) {
        alert("Team 2 Wins!");
    }else {
        alert("Tie!");
    }
        let newteamtwonumshotsValue = Number(teamtwonumshots.innerHTML) - Number(teamtwonumshots.innerHTML);
        teamtwonumshots.innerHTML = newteamtwonumshotsValue;
        let newteamonenumshotsValue = Number(teamonenumshots.innerHTML) - Number(teamonenumshots.innerHTML);
        teamonenumshots.innerHTML = newteamonenumshotsValue;
        let newteamonenumgoalsValue = Number(teamonenumgoals.innerHTML) - Number(teamonenumgoals.innerHTML);
        teamonenumgoals.innerHTML = newteamonenumgoalsValue;
        let newteamtwonumgoalsValue = Number(teamtwonumgoals.innerHTML) - Number(teamtwonumgoals.innerHTML);
        teamtwonumgoals.innerHTML = newteamtwonumgoalsValue;
})