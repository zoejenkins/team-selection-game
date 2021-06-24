//Team selection program version1
//Zoe Jenkins
//22/06/2021

//list of players waiting to be added to team
players = ['Bill', 'Jill', 'Lilly', 'Ella', 'Bella', 'Holly', 'Molly', 'Milly', 'Will', 'Kelly', 'Ally', 'Sally', 'Bell']

//empty teams waiting for players to be added
let team1 = [];
let team2 = [];

//set beginning number for the variable: round
let round = 1;
//set beginning number for the variable: length
let length = 13;

//start loop
do{
//pick random player
let player1 = Math.floor(Math.random() * length + 0);
//sets player's name to their variable number
let player1Name = players[player1];
//shows the players name on screen
  console.log(player1Name);
//removes player1 from the rest of the players
players.splice(player1, 1);
//shows the rest of the players on screen
  console.log(players);
//shows the players name and the team they are in on screen
console.log('Team 1: ' + player1Name)
//puts player into the new list 'team1'
team1.push(player1Name)

    round++
    length--
//repeat the steps above for team 2
let player2 = Math.floor(Math.random() * length + 0);
let player2Name = players[player2];
  console.log(player2Name);
players.splice(player2, 1);
  console.log(players);
  console.log('Team 2: ' + player2Name)
team2.push(player2Name)
    round++
    length-- 
//end loop and
} while (round <= 12)
//show final teams on screen
console.log('Team 1 is ' + team1)
console.log('Team 2 is ' + team2)