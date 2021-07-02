//Team selection program version1
//Zoe Jenkins
//22/06/2021

//list of players waiting to be picked
players = ['Bill', 'Jill', 'Lilly', 'Ella', 'Bella', 'Holly', 'Molly', 'Milly', 'Will', 'Kelly', 'Ally', 'Sally', 'Bell']

//asks user how many players they want in each team
 let teams = prompt('How many players do you want in each team?')

//sets the value limits and gets the user to pick a valid value if they pick an invalid value
    while (teams > (players.length/2)||isNaN(teams)||teams == ' '||teams == null){
      console.log('This number is not at option. Please enter a number between 1-6')
      teams = prompt('How many players do you want in each team?')  }

//makes an empty list called team1
let team1 = [];
//makes an empty list called team2
let team2 = [];

//sets starting length of variable round
let round = 1;
//sets starting length of variable length
let length = (teams * 2);

//starts loop
do{
//random pick
//picks random player from list for team 1
let player1 = Math.floor(Math.random() * length + 0);
//changes the chosen players name from a number variable to a name
let player1Name = players[player1];
//takes the player out of the players list
players.splice(player1, 1);
//puts the player into the list team1
team1.push(player1Name)

//adds one to the round
    round++
//taking one from the length
    length--

//does the same random pick for team 2
let player2 = Math.floor(Math.random() * length + 0);
let player2Name = players[player2];
players.splice(player2, 1);
team2.push(player2Name)
    round++
    length-- 

//setting the conditions the loop will run for
} while (round <= teams * 2)
 //printing the complete list of members in the team
console.log('Team 1 is: ' + team1)
console.log('Team 2 is: ' + team2)