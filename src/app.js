const PLAYERS = [
    "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman", 
    "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish", 
    "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader", 
    "Slingo"
];

// Initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-" + (i + 1) + ".png",
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
};

// Getting random strength
const getRandomStrength = () => {
    // Return a random integer (1,100]
    return Math.ceil(Math.random() * 100);
};

// Build HTML for players
const buildPlayersHTML = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player">
                    <img src="${players[i].image}" alt="${players[i].name}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">Strength: ${players[i].strength}</div>
                </div>
            `;
        }
    }
    return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
    const heroesHTML = buildPlayersHTML(players, 'hero');
    const villainsHTML = buildPlayersHTML(players, 'villain');

    document.getElementById('heroes').innerHTML = heroesHTML;
    document.getElementById('villains').innerHTML = villainsHTML;
};

window.onload = () => {
    const players = initPlayers(PLAYERS);
    viewPlayers(players);
};
