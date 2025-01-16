// Ontologie TFT
const tftOntology = {
  Champions: {
    Origine: {
      Scrap: {
        "Magic caster": {
          "1 cost": ["Powder"],
          "2 cost": ["Ziggs"],
        },

        "Attack fighter": {
          "3 cost": ["Gangplank"],
        },
        "Magic reaper": {
          "4 cost": ["Ekko"],
        },
        "Magic fighter": {
          "5 cost": ["Rumble"],
        },
        "Attack caster": {
          "4 cost": ["Corki"],
        },
        "Attack tank": {
          "1 cost": ["Trundle"],
        },
      },
      Academy: {
        "Magic caster": {
          "1 cost": ["Lux"],
          "4 cost": ["Heimerdinger"],
        },
        "Magic tank": {
          "2 cost": ["Leona"],
        },
        "Attack caster": {
          "3 cost": ["Ezreal"],
        },
        "Attack fighter": {
          "5 cost": ["Jayce"],
        },
      },
      Automata: {
        "Magic tank": {
          "1 cost": ["Amumu"],
          "3 cost": ["Blitzcrank"],
        },
        "Attack reaper": {
          "2 cost": ["Nocturne"],
        },
        "Magic carry": {
          "3 cost": ["Kogmaw"],
        },
        "Magic caster": {
          "5 cost": ["Malzahar"],
        },
      },
      BlackRose: {
        "Magic tank": {
          "2 cost": ["Vladimir"],
          "4 cost": ["Elise"],
        },
        "Magic caster": {
          "1 cost": ["Morgana"],
          "3 cost": ["Cassiopeia"],
          "5 cost": ["Leblanc"],
        },
      },
      ChemBaron: {
        "Magic tank": {
          "1 cost": ["Singed"],
        },
        "Attack tank": {
          "3 cost": ["Renni"],
        },
        "Magic caster": {
          "2 cost": ["Renata"],
          "4 cost": ["Silco"],
        },
        "Attack reaper": {
          "3 cost": ["Smeech"],
        },
        "Attack fighter": {
          "5 cost": ["Sevika"],
        },
      },
      Conqueror: {
        "Attack fighter": {
          "1 cost": ["Darius"],
          "4 cost": ["Ambessa"],
        },
        "Attack carry": {
          "1 cost": ["Draven"],
        },
        "Magic carry": {
          "5 cost": ["Mordekaiser"],
        },
        "Magic tank": {
          "2 cost": ["Rell"],
          "3 cost": ["Swain"],
        },
      },
      Emissary: {
        "Magic caster": {
          "3 cost": ["Nami"],
        },
        "Attack tank": {
          "4 cost": ["Garen"],
        },
        "Attack fighter": {
          "4 cost": ["Ambessa"],
        },
        "Attack caster": {
          "2 cost": ["Tristana"],
        },
      },
      Enforcer: {
        "Attack caster": {
          "1 cost": ["Maddie"],
          "5 cost": ["Caitlyn"],
        },
        "Magic tank": {
          "1 cost": ["Steb"],
          "3 cost": ["Loris"],
        },
        "Attack fighter": {
          "2 cost": ["Camille"],
          "4 cost": ["Vi"],
        },
        "Magic caster": {
          "3 cost": ["Twisted_Fate"],
        },
      },
      Experiment: {
        "Magic tank": {
          "3 cost": ["Nunu_Willump"],
          "4 cost": ["Dr_Mundo"],
        },
        "Attack carry": {
          "4 cost": ["Twitch"],
        },
        "Magic caster": {
          "1 cost": ["Zyra"],
        },
        "Attack fighter": {
          "2 cost": ["Urgot"],
          "6 cost": ["Warwick"],
        },
      },
      Family: {
        "Attack tank": {
          "2 cost": ["Vander"],
        },
        "Attack fighter": {
          "1 cost": ["Violet"],
        },
        "Magic caster": {
          "1 cost": ["Powder"],
        },
      },
      Firelight: {
        "Magic tank": {
          "3 cost": ["Scar"],
        },
        "Attack carry": {
          "2 cost": ["Zeri"],
        },
        "Magic reaper": {
          "4 cost": ["Ekko"],
        },
      },
      Rebel: {
        "Magic tank": {
          "1 cost": ["Irelia"],
          "2 cost": ["Sett"],
          "4 cost": ["Illaoi"],
        },
        "Attack caster": {
          "3 cost": ["Ezreal"],
          "5 cost": ["Jinx"],
        },
        "Magic caster": {
          "1 cost": ["Vex"],
          "4 cost": ["Zoé"],
        },
        "Magic reaper": {
          "2 cost": ["Akali"],
        },
      },
      Ambusher: {
        "Attack reaper": {
          "3 cost": ["Smeech"],
        },
        "Magic reaper": {
          "4 cost": ["Ekko"],
        },
        "Attack fighter": {
          "2 cost": ["Camille"],
        },
        "Magic caster": {
          "1 cost": ["Powder"],
        },
        "Attack caster": {
          "5 cost": ["Jinx"],
        },
      },
      Artillerist: {
        "Attack caster": {
          "2 cost": ["Tristana"],
          "3 cost": ["Ezreal"],
          "4 cost": ["Corki"],
        },
        "Attack fighter": {
          "2 cost": ["Urgot"],
        },
      },
      Bruiser: {
        "Attack tank": {
          "1 cost": ["Trundle"],
          "3 cost": ["Renni"],
        },
        "Magic tank": {
          "1 cost": ["Steb"],
          "2 cost": ["Sett"],
          "3 cost": ["Nunu_Willump"],
          "4 cost": ["Elise"],
        },
      },
      Dominator: {
        "Magic caster": {
          "2 cost": ["Ziggs"],
          "3 cost": ["Cassiopeia"],
          "4 cost": ["Silco"],
        },
        "Magic tank": {
          "3 cost": ["Blitzcrank"],
          "4 cost": ["Dr_Mundo"],
        },
        "Magic fighter": {
          "5 cost": ["Mordekaiser"],
        },
      },
      FormSwapper: {
        "Attack fighter": {
          "3 cost": ["Gangplank"],
          "5 cost": ["Jayce"],
        },
        "Magic tank": {
          "3 cost": ["Swain"],
          "4 cost": ["Elise"],
        },
      },
      PitFighter: {
        "Attack fighter": {
          "1 cost": ["Violet"],
          "2 cost": ["Urgot"],
          "3 cost": ["Gangplank"],
          "4 cost": ["Vi"],
          "5 cost": ["Sevika"],
        },
        "Attack carry": {
          "1 cost": ["Draven"],
        },
      },
      QuickStriker: {
        "Magic reaper": {
          "2 cost": ["Akali"],
        },
        "Attack reaper": {
          "2 cost": ["Nocturne"],
        },
        "Magic caster": {
          "3 cost": ["Twisted_Fate"],
        },
        "Attack fighter": {
          "4 cost": ["Ambessa"],
        },
      },
      Sentinel: {
        "Magic tank": {
          "1 cost": ["Singed", "Irelia"],
          "2 cost": ["Leona", "Rell"],
          "3 cost": ["Loris"],
          "4 cost": ["Illaoi"],
        },
        "Magic fighter": {
          "5 cost": ["Rumble"],
        },
      },
      Sniper: {
        "Attack caster": {
          "1 cost": ["Maddie"],
          "4 cost": ["Twitch"],
          "5 cost": ["Caitlyn"],
        },
        "Attack carry": {
          "2 cost": ["Zeri"],
        },
        "Magic carry": {
          "3 cost": ["Kogmaw"],
        },
      },
      Sorcerer: {
        "Magic caster": {
          "1 cost": ["Zyra", "Lux"],
          "3 cost": ["Nami"],
          "4 cost": ["Zoé"],
          "5 cost": ["Leblanc"],
        },
        "Magic tank": {
          "2 cost": ["Vladimir"],
          "3 cost": ["Swain"],
        },
      },
      Visionary: {
        "Magic caster": {
          "1 cost": ["Morgana", "Vex"],
          "2 cost": ["Renata"],
          "4 cost": ["Heimerdinger"],
          "5 cost": ["Malzahar"],
        },
        "Magic tank": {
          "2 cost": ["Rell"],
          "3 cost": ["Nunu_Willump"],
        },
      },
      Watcher: {
        "Magic tank": {
          "1 cost": ["Amumu"],
          "2 cost": ["Vladimir"],
          "3 cost": ["Scar"],
        },
        "Attack tank": {
          "2 cost": ["Vander"],
          "4 cost": ["Garen"],
        },
        "Attack fighter": {
          "1 cost": ["Darius"],
        },
      },
    },
  },
};

const synergies = {
  Conqueror: [2, 4, 6, 9],
  Academy: [3, 4, 5, 6, 7],
  Family: [3, 4, 5],
  Scrap: [2, 4, 6, 9],
  Enforcer: [2, 4, 6, 8, 10],
  Rebel: [3, 5, 7, 10],
  Emissary: [1, 4],
  Firelight: [2, 3, 4],
  Sniper: [2, 4, 6],
  ChemBaron: [3, 4, 5, 6, 7],
  BlackRose: [3, 4, 5, 7],
  Sentinel: [2, 4, 6],
  Watcher: [2, 4, 6],
  Bruiser: [2, 4, 6],
  Visionary: [2, 4, 6, 8],
  Sorcerer: [2, 4, 6, 8],
  FormSwapper: [2, 4],
  Ambusher: [2, 3, 4, 5],
  Automata: [2, 4, 6],
  Experiment: [3, 5, 7],
  Dominator: [2, 4, 6],
  PitFighter: [2, 4, 6, 8],
  Artillerist: [2, 4, 6],
  QuickStriker: [2, 3, 4],
};

// Références aux éléments HTML
const originsDiv = document.getElementById("origins");
const typesDiv = document.getElementById("types");
const costsDiv = document.getElementById("costs");
const resultsDiv = document.getElementById("results");
const selectedChampionsDiv = document.getElementById("selectedChampions");
const teamSuggestionsDiv = document.getElementById("teamSuggestions");

// Variables pour stocker les sélections
let selectedOrigin = null;
let selectedType = null;
let selectedCost = null;
let selectedChampions = [];
let team = [];

// Fonction pour créer des boutons dynamiques
function createButtons(parentDiv, items, onClickHandler) {
  parentDiv.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.textContent = item;
    button.classList.toggle(
      "active",
      item === selectedOrigin || item === selectedType || item === selectedCost
    );
    button.addEventListener("click", () => {
      const isActive = button.classList.contains("active");
      Array.from(parentDiv.children).forEach((btn) =>
        btn.classList.remove("active")
      );
      button.classList.toggle("active", !isActive);
      onClickHandler(isActive ? null : item);
    });
    parentDiv.appendChild(button);
  });
}

// Mise à jour des résultats
function updateResults() {
  let champions = new Set();

  Object.entries(tftOntology.Champions.Origine).forEach(([origin, types]) => {
    if (selectedOrigin && origin !== selectedOrigin) return;
    Object.entries(types).forEach(([type, costs]) => {
      if (selectedType && type !== selectedType) return;
      Object.entries(costs).forEach(([cost, champs]) => {
        if (selectedCost && cost !== selectedCost) return;
        champs.forEach((champ) => champions.add(champ));
      });
    });
  });

  // Convertir le Set en tableau
  champions = Array.from(champions);

  resultsDiv.innerHTML = champions.length
    ? `<p></p><div class="champion-grid">
              ${champions
                .map(
                  (champ) => `
                      <div class="champion-item" onclick="addToTeam('${champ}')">
                          <img src="champions/${champ
                            .toLowerCase()
                            .replace(/ /g, "-")}.png" alt="${champ}">
                          <p>${champ}</p>
                      </div>
                  `
                )
                .join("")}
          </div>`
    : `<p>Aucun champion trouvé.</p>`;
}

function addToTeam(champion) {
  if (team.includes(champion)) {
    alert(`${champion} est déjà dans votre équipe.`);
    return;
  }

  if (team.length >= 8) {
    alert("Votre équipe ne peut pas contenir plus de 8 champions.");
    return;
  }

  team.push(champion);
  updateTeam();
}

function updateTeam() {
  const teamDiv = document.getElementById("team");
  const score = calculateScore();
  const synergies = calculateSynergies();

  const synergiesHTML = Object.entries(synergies)
    .map(
      ([origin, { count, level }]) =>
        `<p><strong>${origin} :</strong> ${count} champions (Palier ${level})</p>`
    )
    .join("");

  teamDiv.innerHTML = `
        <div>
            <div class="team-container">
                <div class="champions-section">
                    <p><strong>${team.length}/8</strong></p>
                    ${
                      team.length
                        ? `<div class="champion-grid">
                        ${team
                          .map(
                            (champ) => `
                            <div class="champion-item">
                                <img src="champions/${champ
                                  .toLowerCase()
                                  .replace(/ /g, "-")}.png" alt="${champ}">
                                <p>${champ}</p>
                                <button onclick="removeFromTeam('${champ}')">❌</button>
                            </div>
                        `
                          )
                          .join("")}
                </div>`
                        : `<p>Aucun champion dans l'équipe.</p>`
                    }
            </div>
            <div class="score-section">
                <p><strong>Score de l'équipe : ${score}</strong></p>
            </div>
        </div>
        <div class="synergies-section">
                <h3>Synergies Actives</h3>
                ${synergiesHTML || "<p>Aucune synergie active.</p>"}
            </div>
        </div>
        
        `;
}

function removeFromTeam(champion) {
  team = team.filter((champ) => champ !== champion);
  updateTeam();
}

function calculateScore() {
  if (team.length === 0) return 0;

  let originCounts = {};
  let typeCounts = new Set(); // Utiliser un Set pour stocker les types uniques
  let totalCost = 0;

  // Compter les origines et collecter les types des champions dans l'équipe
  team.forEach((champion) => {
    for (const [origin, types] of Object.entries(
      tftOntology.Champions.Origine
    )) {
      for (const [type, costs] of Object.entries(types)) {
        for (const champs of Object.values(costs)) {
          if (champs.includes(champion)) {
            originCounts[origin] = (originCounts[origin] || 0) + 1;
            typeCounts.add(type); // Ajouter le type au Set
            totalCost += parseInt(costs["cost"]?.split(" ")[0]) || 0;
          }
        }
      }
    }
  });

  // Calculer le score des synergies activées
  let synergyScore = 0;
  Object.entries(originCounts).forEach(([origin, count]) => {
    const levels = synergies[origin];
    if (levels) {
      const maxLevel = levels.filter((level) => count >= level).pop(); // Palier maximal atteint
      if (maxLevel) {
        // Ajouter des points proportionnels au niveau maximal atteint
        synergyScore += Math.pow(levels.indexOf(maxLevel) + 1, 2) * 10;
      }
    }
  });

  // Calculer le score de diversité des types
  let diversityScore = typeCounts.size * 5; // Par exemple, 5 points par type unique

  // Calculer le score total
  let originSynergyScore = Object.values(originCounts).reduce(
    (sum, count) => sum + count * count,
    0
  );
  let costScore = totalCost * 2; // Chaque coût ajoute 2 points

  return originSynergyScore + synergyScore + diversityScore + costScore;
}

function calculateSynergies() {
  let originCounts = {};

  team.forEach((champion) => {
    for (const [origin, types] of Object.entries(
      tftOntology.Champions.Origine
    )) {
      for (const champs of Object.values(types)) {
        for (const [_, champions] of Object.entries(champs)) {
          if (champions.includes(champion)) {
            originCounts[origin] = (originCounts[origin] || 0) + 1;
          }
        }
      }
    }
  });

  // Déterminer les synergies atteintes
  let activeSynergies = {};
  Object.entries(originCounts).forEach(([origin, count]) => {
    if (synergies[origin]) {
      const levels = synergies[origin];
      const maxAchieved = levels.filter((level) => count >= level).pop() || 0;
      if (maxAchieved > 0) {
        activeSynergies[origin] = { count, level: maxAchieved };
      }
    }
  });

  return activeSynergies;
}

function handleOriginClick(origin) {
  selectedOrigin = origin;
  updateResults();
}

function handleTypeClick(type) {
  selectedType = type;
  updateResults();
}

function handleCostClick(cost) {
  selectedCost = cost;
  updateResults();
}

// Initialiser les filtres
function initializeFilters() {
  const origins = Object.keys(tftOntology.Champions.Origine);
  createButtons(originsDiv, origins, handleOriginClick);

  const allTypes = new Set();
  const allCosts = new Set();
  Object.values(tftOntology.Champions.Origine).forEach((types) => {
    Object.keys(types).forEach((type) => allTypes.add(type));
  });
  allCosts.add("1 cost");
  allCosts.add("2 cost");
  allCosts.add("3 cost");
  allCosts.add("4 cost");
  allCosts.add("5 cost");
  allCosts.add("6 cost");

  createButtons(typesDiv, Array.from(allTypes), handleTypeClick);
  createButtons(costsDiv, Array.from(allCosts), handleCostClick);

  updateResults();
  updateTeam();
}

// Initialisation de l'application
initializeFilters();
