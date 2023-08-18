const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const SELECTIONS = [
  { name: "ROCK", beats: "SCISSORS" },
  { name: "PAPER", beats: "ROCK" },
  { name: "SCISSORS", beats: "PAPER" },
];
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.name;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}
