import { createItem, getItems } from "./api.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

const leaderboardList = document.getElementById("leaderboard-list");

// Function to add a new entry to the leaderboard
/**
 * @param {Item[]} items
 */
function addLeaderboardEntry(items) {
  leaderboardList.innerHTML = "";

  for (const item of items) {
    const entry = document.createElement("li");
    entry.textContent = `${item.playerName}: ${item.score}`;
  leaderboardList.appendChild(entry);
  }
}

export async function makeLeaderboard() {
  const items = await getItems();

  addLeaderboardEntry(items);
}

export async function handleAddEntry(Nameplayer,score) {

  /** @type {string} */
  const nameToAdd = Nameplayer;

  /** @type {number} */
  const scoreToAdd = score;

  const payload = {
    playerName: nameToAdd,
    score: scoreToAdd,
  };

  await createItem(payload);
  await makeLeaderboard();

}