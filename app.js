const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Futebol",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "ala",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "meio-campista",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Ricardo Bochini",
      position: "meio-campista",
      number: 3,
      isCaptain: false,
      nickname: "A Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "meio-campista",
      number: 4,
      isCaptain: false,
      nickname: "Praia",
    },
    {
      name: "José Luis Brown",
      position: "defensor",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defensor",
      number: 6,
      isCaptain: false,
      nickname: "O Grande Capitão",
    },
    {
      name: "Jorge Burruchaga",
      position: "ala",
      number: 7,
      isCaptain: false,
      nickname: "Manteiga",
    },
    {
      name: "Néstor Clausen",
      position: "defensor",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defensor",
      number: 9,
      isCaptain: false,
      nickname: "O Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "meio-campista",
      number: 10,
      isCaptain: true,
      nickname: "O menino de ouro",
    },
    {
      name: "Jorge Valdano",
      position: "ala",
      number: 11,
      isCaptain: false,
      nickname: "O Filósofo do Futebol",
    },
    {
      name: "Héctor Enrique",
      position: "meio-campista",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defensor",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "meio-campista",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goleiro",
      number: 15,
      isCaptain: false,
      nickname: "O louco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defensor",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "ala",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goleiro",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defensor",
      number: 19,
      isCaptain: false,
      nickname: "A Cabeça Grande",
    },
    {
      name: "Carlos Tapia",
      position: "meio-campista",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "meio-campista",
      number: 21,
      isCaptain: false,
      nickname: "Carrossel",
    },
    {
      name: "Héctor Zelada",
      position: "goleiro",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "ala":
      setPlayerCards(players.filter((player) => player.position === "ala"));
      break;
    case "meio-campista":
      setPlayerCards(
        players.filter((player) => player.position === "meio-campista")
      );
      break;
    case "defensor":
      setPlayerCards(
        players.filter((player) => player.position === "defensor")
      );
      break;
    case "goleiro":
      setPlayerCards(
        players.filter((player) => player.position === "goleiro")
      );
      break;

  default:
      setPlayerCards();

  }
});
