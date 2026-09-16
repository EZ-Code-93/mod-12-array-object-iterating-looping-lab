function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


const numPointsScored = (playerName) => {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }
    else if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
    }
    else {
        return "Player not found";
    }
}

console.log(numPointsScored("Alan Anderson"));
console.log(numPointsScored("Ben Gordon"));



const shoeSize = (playerName) => {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }
    else if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
    }
    else {
        return "Player not found";
    }
}

console.log(shoeSize("Alan Anderson"));
console.log(shoeSize("Ben Gordon"));



const teamColors = (teamName) => {
  const game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  }
   else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  else {
        return "Player not found";
    }
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));



const teamNames = () => {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames());



const playerNumbers = (teamName) => {
  const game = gameObject();
  let targetTeam;
  if (game.home.teamName === teamName) {
    targetTeam = game.home;
  } else if (game.away.teamName === teamName) {
    targetTeam = game.away;
  } else {
    return "Team not found";
  }
   const numbersArray = [];
  for (const playerName in targetTeam.players) {
    const playerObj = targetTeam.players[playerName];
    numbersArray.push(playerObj.number);
  }

  return numbersArray;
};

console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));



const playerStats = (playerName) => {
  const game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName];
  }
  else if (game.away.players[playerName]) {
    return game.away.players[playerName];
  }
  else {
   return "Player not found";
  }
};

console.log(playerStats("Alan Anderson"));



const bigShoeRebounds = () => {
  const game = gameObject();
  
  let largestShoeSize = 0;
  let reboundsForLargestShoe = 0;
  const teams = [game.home, game.away];

  for (const team of teams) {
    for (const playerName in team.players) {
      const player = team.players[playerName];
       if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        reboundsForLargestShoe = player.rebounds;
      }
    }
  }
  return reboundsForLargestShoe;
};

console.log(bigShoeRebounds());