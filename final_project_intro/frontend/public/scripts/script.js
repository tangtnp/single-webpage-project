import { makeLeaderboard,handleAddEntry } from "./leaderboard.js";


document.addEventListener("DOMContentLoaded", () => {
    makeLeaderboard();
const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "orange",
    "strawberry", "blueberry", "watermelon", "pineapple", "blackberry", "apricot", "pomegranate", "raspberry",
    "cranberry", "peach", "plum", "pear", "mango", "coconut", "avocado", "guava", "grapefruit", "papaya", "nectarine",
    "lime", "tangerine", "cantaloupe", "dragonfruit", "passionfruit", "lychee", "starfruit", "boysenberry",
    "persimmon", "kumquat", "guanabana", "mulberry", "quince", "tamarind", "currant", "plantain", "rambutan", "kiwifruit",
    "mangosteen", "ackee", "cherimoya", "soursop", "longan", "feijoa", "jabuticaba", "durian", "salak", "pawpaw", "breadfruit",
    "sapodilla", "custardapple", "saskatoonberry", "elderflower", "bilberry", "cloudberry", "loganberry", "boysenberry",
    "lingonberry", "marionberry", "boysenberry", "whortleberry", "gooseberry", "huckleberry", "lingonberry",
    "olallieberry", "strawberry", "blackcurrant", "gooseberry", "redcurrant", "whitecurrant", "yellowcurrant",
    "cloudberries", "lingonberries", "juneberry", "salalberry", "honeyberry", "blue huckleberry", "crowberry",
    "pawpaw", "breadfruit", "sapodilla", "cherimoya", "jackfruit", "guanabana", "rambutan", "longan", "feijoa", "kiwifruit",
    "mangosteen", "sugarapple", "soursop", "custardapple", "saskatoonberry", "elderflower", "bilberry", "cloudberry",
    "loganberry", "whortleberry", "gooseberry", "huckleberry", "lingonberry", "olallieberry", "strawberry",
    "blackcurrant", "redcurrant", "whitecurrant", "yellowcurrant", "cloudberries", "lingonberries", "juneberry",
    "salalberry", "honeyberry", "blue huckleberry", "crowberry", "boysenberry", "passionfruit", "lychee", "starfruit",
    "boysenberry", "persimmon", "kumquat", "rambutan", "soursop", "longan", "feijoa", "jabuticaba", "durian", "salak",
    "pawpaw", "breadfruit", "sapodilla", "custardapple", "saskatoonberry", "elderflower", "bilberry", "cloudberry",
    "loganberry", "boysenberry", "lingonberry", "marionberry", "boysenberry", "whortleberry", "gooseberry",
    "huckleberry", "lingonberry", "olallieberry", "strawberry", "blackcurrant", "gooseberry", "redcurrant",
    "whitecurrant", "yellowcurrant", "cloudberries", "lingonberries", "juneberry", "salalberry", "honeyberry",
    "blue huckleberry", "crowberry",
    "cat", "dog", "rabbit", "fish", "elephant", "giraffe", "lion", "tiger", "zebra", "kangaroo", "penguin", "rhinoceros",
    "ostrich", "hippopotamus", "octopus", "whale", "dolphin", "shark", "crocodile", "jaguar", "panther", "cheetah", "parrot",
    "squirrel", "koala", "hedgehog", "hamster", "guinea pig", "chameleon", "platypus", "salamander", "panda", "sloth", "armadillo",
    "lemur", "cockatoo", "gazelle", "buffalo", "bison", "rhinoceros", "platypus", "salamander", "panda", "sloth", "armadillo",
    "lemur", "cockatoo", "gazelle", "buffalo", "bison", "tapir", "ocelot", "peacock", "walrus", "anteater", "alpaca", "moose",
    "elk", "gibbon", "gorilla", "chimpanzee", "orangutan", "lemur", "cockatoo", "gazelle", "buffalo", "bison", "tapir",
    "ocelot", "peacock", "walrus", "anteater", "alpaca", "moose", "elk", "gibbon", "gorilla", "chimpanzee", "orangutan",
    "rhinoceros", "platypus", "salamander", "panda", "sloth", "armadillo", "lemur", "cockatoo", "gazelle", "buffalo", "bison",
    "tapir", "ocelot", "peacock", "walrus", "anteater", "alpaca", "moose","abandon","abacus","abdomen","abide","ability","abnormal","aboard",
    "abroad","absence","absolute","absorb","abstract","absurd","abundant","academy","accent","accept","access","accident","account",
    "accurate","accuse","achieve","acquire","address","advance","adventure","advice","aerobic","affair","afford","afternoon",
    "against","aggressive","agitate","agonize","agree","airplane","alcohol","algebra","allege","alliance","amazing","ambition",
    "amplify","analyze","ancestor","angelic","annoyance","anonymous","apology","appeal","appetite","approve","arbitrary",
    "architect","argument","arise","aromatic","arrange","artifact","ascend","assertive","assignment","assist","associate",
    "astronomy","athlete","atmosphere","attach","attempt","attractive","automatic","awaken","background","balance","barrier",
    "beautiful","benefit","besiege","between","bicycle","bizarre","blessing","boisterous","boundary","breath","brighten",
    "broadcast","building","bulletin","burden","business","calculate","campaign","candle","captivate","captive","careful",
    "celebrate","challenge","champion","character","charming","chemistry","children","choice","circulate","circumstance",
    "civilize","clarify","classic","climbing","clothing","collaborate","colleague","collect","comfort","command","companion",
    "compare","compassion","compatible","compete","complain","complete","complex","compose","comprehend","conceive","conclude",
    "confidence","congruent","conquer","conscious","consider","constant","construct","consume","contemplate","contribute",
    "convince","cooperate","correction","courage","creature","curious","declaration","dedicate","defend","deficiency","deliberate",
    "deliver","democracy","describe","design","determine","development","different","dignity","dimension","discover","discuss",
    "discovery","discretion","diverse","dividend","division","education","effective","efficient","elegant","eliminate","embrace",
    "emergency","employment","encourage","endurance","enjoy","enlighten","enthusiasm","environment","equality","essential",
    "establish","estimate","evaluate","evidence","evolution","exaggerate","exception","exchange","excitement","exhaust",
    "experience","experiment","expertise","expression","extraordinary","facilitate","faithful","familiar","fantastic","favorite",
    "feasible","fidelity","flexible","fortunate","foundation","frequent","fulfill","generate","genuine","government","graduate",
    "grateful","gymnastics","handicap","happiness","harmonious","heartfelt","heroic","hesitate","homogeneous","horror","hospitality","humanity","hypothesis","identity","illusion","illustrate","imagination","immediately","immigrate","impartial","implement","impose","independence","individual","industry","influence","information","innocent","inquire","inspire","integrate","integrity","intelligence","intention","interpret","intimate","investigate","invisible","invitation","irresistible","judgment","knowledge","laboratory","language","laughter","leadership","leisure","library","lightning","limousine","linguistics","literature","loneliness","machinery","magnificent","maintenance","manage","marriage","material","meditate","memorable","metamorphosis","military","miniature","minimize","miracle","mysterious","necessary","negotiate","neighbor","nonetheless","numerous","observe","obstacle","occasion","official","opportunity","optimistic","organization","originally","overcome","participate","passionate","patriotic","pedestrian","perception","performance","persevere","perspective","photograph","pleasure","population","potential","practical","prejudice","preparation","presentation","preserve","pretend","principle","priority","proclaim","productive","profession","progress","prosperity","proud","psychology","punctual","question","rebellion","recognition","reconsider","recycle","reflection","regenerate","rejection","religion","represent","reputation","rescue","resilience","respect","responsibility","revolution","satisfaction","schedule","secretive","segregate","sensitive","significant","simplify","society","solution","spontaneous","stability","statement","stimulate","structure","subordinate","successful","sufficient","suggestion","superior","support","sympathetic","technology","telecommunication","temptation","termination","tradition","transform","transformation","transition","tremendous","understand","unite","universe",
    "unprecedented","valuable","variation","vegetable","venture","victorious","vigilance","vulnerable","wonderful","absurdity","abundance","accessibility","accompaniment","accomplishment",
    "accountability","adaptation","adversity","affiliation","agriculture","ambitious","announcement","anticipation","appliance","apprehension","articulate","assistance","atmospheric","authentication","availability","benevolence","bewilderment","bureaucracy","cancellation","celebration","certification","characteristic","civilization","collaboration","communication","compassionate","comprehensive","confederation","configuration","congratulate","conjunction","consideration","consistency","constellation","contribution","cooperation","courageous","credibility","culmination","curriculum","declaration","deliberation","demolition","demonstration","denunciation","destruction","determination","development","differentiation","discouragement","disposition","diversification","education","efficiency","elaboration","encouragement","enhancement","enlightenment","entertainment","environmental","equilibrium","establishment","evaluation","exaggeration","examination","excellence","exceptional","exhilaration","expansion","exploration","extraordinary","fascination","foundation","fulfillment","generosity","government","happiness","harmonization","hospitality","identification","illumination","imagination","impartiality","improvement","independence","individuality","industrialization","information","innovation","inspiration","integrity","intentional","interaction","interconnection","interpretation","introduction","investigation","judicious","legislation","legitimacy","manipulation","mediation","modification","motivation","multicultural","negotiation","notification","organization","overwhelming","participation","performance","persuasion","pioneering","possibility","preparation","preservation","principle","productivity","proliferation","prominence","pronunciation","prosperity","psychological","reconciliation","reinforcement","representation","responsibility","revolutionary","satisfaction","significant","specialization","sponsorship","spontaneity","stabilization","standardization","substantial","successful","suggestion","superiority","sustainability","sympathetic","technological","television","transformation","transparency","understanding","unification","unprecedented","validation","vindication","visualization"
];
const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const message = document.getElementById("message");
const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer");

let wordIndex = 0;
let score = 0;
let timer;
let gameStarted = false;

startButton.addEventListener("click", startGame);

function startGame() {
    wordIndex = 0;
    score = 0;
    gameStarted = true;
    startButton.disabled = true;
    wordInput.disabled = false;
    displayWord();
    startTimer();
}

function startTimer() {
    let timeLeft = 45; // Set the countdown time (in seconds)
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

    timer = setInterval(() => {
        if (timeLeft === 0) {
            clearInterval(timer);
            gameOver();
        } else {
            timeLeft--;
            timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
        }
    }, 1000);
}

function displayWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[randomIndex];
    wordInput.value = "";
    wordInput.focus();
}

wordInput.addEventListener("input", checkInput);

function checkInput() {
    if (!gameStarted) return; // Don't check input if the game hasn't started yet.

    const typedWord = wordInput.value.toLowerCase();
    const currentWord = wordDisplay.textContent.toLowerCase();

    if (typedWord === currentWord) {
        score++;
        message.textContent = `Correct! Score: ${score}`;
        displayWord();
    }
}

/*function gameOver() {
    clearInterval(timer); // Stop the timer if the game ends
    startButton.disabled = false;
    wordInput.disabled = true;
    wordDisplay.textContent = "Game Over";
    message.textContent = `Your final score: ${score}`;
    timerDisplay.textContent = "";
    gameStarted = false; // Reset the game state
}*/

displayWord();

const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        modeToggle.textContent = "Toggle Light Mode";
    } else {
        body.setAttribute("data-theme", "light");
        modeToggle.textContent = "Toggle Dark Mode";
    }
});

// Check local storage for user's preference (optional)
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (localStorage.getItem("theme") === "dark" || (userPrefersDark && !localStorage.getItem("theme"))) {
    body.setAttribute("data-theme", "dark");
    modeToggle.textContent = "Toggle Light Mode";
} else {
    body.setAttribute("data-theme", "light");
    modeToggle.textContent = "Toggle Dark Mode";
}

// Save user's preference to local storage
modeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
const toggleLeaderboardButton = document.getElementById("toggle-leaderboard");
const leaderboardContainer = document.getElementById("leaderboard-container");

// Function to toggle the visibility of the leaderboard
function toggleLeaderboard() {
    if (leaderboardContainer.style.display === "none") {
        leaderboardContainer.style.display = "block";
        toggleLeaderboardButton.textContent = "Hide Leaderboard";
    } else {
        leaderboardContainer.style.display = "none";
        toggleLeaderboardButton.textContent = "Show Leaderboard";
    }
}

// Add a click event listener to the button
toggleLeaderboardButton.addEventListener("click", toggleLeaderboard);

// Function to handle the game over logic
function gameOver() {
    clearInterval(timer); // Stop the timer if the game ends
    startButton.disabled = false;
    wordInput.disabled = true;
    wordDisplay.textContent = "Game Over";
    timerDisplay.textContent = "";

    // Collect the final score
    /** @type {number} */
    const finalScore = score;

    // Ask for the player's name
    /** @type {string} */
    const Nameplayer = prompt("Enter your name:");

    if (Nameplayer) {
        // Add the player's score to the leaderboard
        handleAddEntry(Nameplayer,finalScore);
    }
}

let sortByScoreDescending = false; // Initially ascending

// Function to toggle the sorting order and update the leaderboard
function toggleSortOrder() {
    sortByScoreDescending = !sortByScoreDescending;
    const sortButtonText = sortByScoreDescending ? "Sort by Score (Descending)" : "Sort by Score (Ascending)";
    sortButton.textContent = sortButtonText;
    updateLeaderboard();
}

// Function to update the leaderboard based on the sorting order
function updateLeaderboard() {
    const leaderboardList = document.getElementById("leaderboard-list");
    const entries = Array.from(leaderboardList.children);

    // Sort the entries by score based on the current sorting order
    entries.sort((a, b) => {
        const scoreA = parseInt(a.textContent.split(":")[1]);
        const scoreB = parseInt(b.textContent.split(":")[1]);
        return sortByScoreDescending ? scoreB - scoreA : scoreA - scoreB;
    });

    // Clear the leaderboard
    leaderboardList.innerHTML = "";

    // Append the sorted entries to the leaderboard
    entries.forEach((entry) => {
        leaderboardList.appendChild(entry);
    });
}

// Event listener for the sort button
const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", toggleSortOrder);

// Initially, update the leaderboard to reflect the current sorting order
updateLeaderboard();
});