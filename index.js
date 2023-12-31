const BINGO_CARDS = [
  "Dean Kamen goes on a random STEM tangent",
  "Water Game Teased",
  "Dean Kamen repeatedly hits table with hand",
  "We’re about to reveal it but first",
  "Dozer in the game animation",
  "Space Force commercial",
  "Graphics that have nothing to do with the theme of the game",
  "Some pun on the name crescendo is made",
  "Technical difficulties",
  "HAAS advertisement",
  'Dean Kamen is "excited to see" something happen this year',
  "Game has seemingly no connection to the name Crescendo",
  "Game Animation shows illegal robots",
  "Spot light on a FIRST employee",
  "Shout out to FLL and FTC",
  "Shooting game",
  "Pick and place game",
  "Game has no endgame",
  "Game has crowd interaction",
  "Game is great for swerve",
  "The game is played with balls",
  "Frisbee game",
  'Endgame is on a "Stage"',
  "FIRST opportunity for everyone",
  "FREE SPACE",
  "Game code leaked early",
  "Hardest fun you can have",
  "We are so excited",
  "Student interviews",
  "Twitch chat goes quite for woodie flowers tribute",
  "Woodie flowers tribute",
  "Random sponsor commercial",
  "Game reveal video features dozer abuse",
  "Robots building children",
];

const pickedCards = [];
for (let i = 0; i < 25; i++) {
    let card = BINGO_CARDS[Math.floor(Math.random() * BINGO_CARDS.length)];
    while (pickedCards.includes(card)) {
        card = BINGO_CARDS[Math.floor(Math.random() * BINGO_CARDS.length)];
    }
    pickedCards.push(card);
}

// sort the cards into rows
const rows = [];
for (let i = 0; i < 5; i++) {
    rows.push(pickedCards.slice(i * 5, i * 5 + 5));
}
const rowList = [...document.querySelectorAll(".row")];
for (const [i, row] of rowList.entries()) {
    // create the cells
    const cells = [];
    for (let j = 0; j < 5; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cells.push(cell);
        row.appendChild(cell);
        cell.innerHTML = rows[i][j];
        cell.addEventListener("click", () => {
            cell.toggleAttribute("selected");
        });
    }

}



