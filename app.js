const cards = [
  { unit: "2-1", term: "Automate", pos: "v.", definition: "to use machines and computers instead of people to do a job or task" },
  { unit: "2-1", term: "Automatic", pos: "adj.", definition: "(of a machine, device, etc.) having controls that work without needing a person to operate them" },
  { unit: "2-1", term: "Benefits", pos: "plural n.", definition: "an advantage that you get from a company in addition to the money that you earn; welfare" },
  { unit: "2-1", term: "Discrimination", pos: "n.", definition: "the practice of treating somebody or a particular group in society less fairly than others" },
  { unit: "2-1", term: "Discriminate", pos: "v.", definition: "to treat one person or group worse or better than another in an unfair way" },
  { unit: "2-1", term: "Expertise", pos: "n.", definition: "expert knowledge or skill in a particular subject, activity or job" },
  { unit: "2-1", term: "Gig", pos: "n.", definition: "a job, especially a temporary one" },
  { unit: "2-1", term: "Job security", pos: "n. phr.", definition: "the state of having a job that is secure" },
  { unit: "2-1", term: "Labor", pos: "n.", definition: "work, especially physical work" },
  { unit: "2-1", term: "On the margins", pos: "idiom", definition: "the part that is not included in the main part of a group or situation; fringe" },
  { unit: "2-1", term: "Substitute", pos: "v.", definition: "to take the place of somebody or something else; to use somebody or something instead of somebody or something else" },
  { unit: "2-1", term: "Substitution", pos: "n.", definition: "an act of using one person or thing in the place of another" },
  { unit: "2-1", term: "Take advantage of", pos: "v. phr.", definition: "to make use of something well; to make use of an opportunity" },
  { unit: "2-1", term: "The other end of the spectrum", pos: "n. phr.", definition: "the opposite extreme in a range of ideas, qualities, or situations" },
  { unit: "2-1", term: "Wage", pos: "n.", definition: "a regular amount of money that you earn, usually every week or every month, for work or services" },
  { unit: "2-1", term: "Disaggregate", pos: "v.", definition: "to separate" },
  { unit: "2-1", term: "Aggregate", pos: "v.", definition: "to put together different items, amounts, etc. into a single group or total" },
  { unit: "2-1", term: "Garner", pos: "v.", definition: "to obtain or collect" },
  { unit: "2-1", term: "Dignity", pos: "n.", definition: "the fact of being given honor or respect by other people" },
  { unit: "2-1", term: "Dignify", pos: "v.", definition: "to make somebody or something seem impressive" },
  { unit: "2-2", term: "Accumulate", pos: "v.", definition: "to gradually increase over time" },
  { unit: "2-2", term: "Accumulation", pos: "n.", definition: "the process of gradually increasing or getting more of something over time" },
  { unit: "2-2", term: "Accumulative", pos: "adj.", definition: "growing by increasing gradually" },
  { unit: "2-2", term: "Algorithm", pos: "n.", definition: "a set of rules that are followed to solve a problem, especially by a computer" },
  { unit: "2-2", term: "At stake", pos: "idiom", definition: "that can be won or lost, depending on the success of a particular action" },
  { unit: "2-2", term: "Degree of", pos: "n. phr.", definition: "the amount or level of something" },
  { unit: "2-2", term: "Demand", pos: "n.", definition: "the desire or need of customers for goods or services" },
  { unit: "2-2", term: "Entry-level", pos: "adj.", definition: "at the lowest rank in a company" },
  { unit: "2-2", term: "Freelancer", pos: "n.", definition: "a person who works for many different organizations rather than being employed by them" },
  { unit: "2-2", term: "Freelance", pos: "v. / n.", definition: "to earn money by selling your work to several different organizations; freelance worker" },
  { unit: "2-2", term: "Hypothetical", pos: "adj.", definition: "based on situations which are possible and imagined rather than real and true" },
  { unit: "2-2", term: "Hypothesize", pos: "v.", definition: "to suggest a way of explaining something when you do not definitely know about it" },
  { unit: "2-2", term: "Hypothesis", pos: "n.", definition: "an idea or explanation of something that is based on a few known facts but that has not yet been proved to be true or correct" },
  { unit: "2-2", term: "Hypothetically", pos: "adv.", definition: "in a situation that is possible and imagined rather than real and true" },
  { unit: "2-2", term: "Scraps", pos: "pl. n.", definition: "small pieces or amounts of something" },
  { unit: "2-2", term: "Supply", pos: "n.", definition: "the amount of something that is provided or available for use" },
  { unit: "2-2", term: "Take a cut", pos: "v. phr.", definition: "to keep a share of the money" },
  { unit: "2-2", term: "Transaction", pos: "n.", definition: "an act of buying or selling" },
  { unit: "2-2", term: "Transactional", pos: "adj.", definition: "relating to the process of buying or selling" },
  { unit: "2-2", term: "Transact", pos: "v.", definition: "to do business with a person or an organization" }
];

const state = {
  mode: "type",
  filter: "all",
  index: 0,
  selectedChoice: "",
  revealed: false,
  correct: 0,
  attempts: 0,
  missed: new Set(JSON.parse(localStorage.getItem("unit2-missed") || "[]")),
  answered: new Set()
};

const elements = {
  unitFilter: document.querySelector("#unitFilter"),
  modeButtons: document.querySelectorAll(".mode-button"),
  scoreText: document.querySelector("#scoreText"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  cardCount: document.querySelector("#cardCount"),
  missCount: document.querySelector("#missCount"),
  unitBadge: document.querySelector("#unitBadge"),
  posBadge: document.querySelector("#posBadge"),
  definition: document.querySelector("#definition"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  checkButton: document.querySelector("#checkButton"),
  showButton: document.querySelector("#showButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  resetButton: document.querySelector("#resetButton")
};

let deck = [...cards];

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function cardId(card) {
  return `${card.unit}:${card.term}`;
}

function getDeck() {
  if (state.filter === "missed") {
    return cards.filter((card) => state.missed.has(cardId(card)));
  }

  if (state.filter === "all") {
    return [...cards];
  }

  return cards.filter((card) => card.unit === state.filter);
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function saveMissed() {
  localStorage.setItem("unit2-missed", JSON.stringify([...state.missed]));
}

function resetCardState() {
  state.selectedChoice = "";
  state.revealed = false;
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
}

function currentCard() {
  return deck[state.index];
}

function render() {
  if (!deck.length) {
    renderEmpty();
    return;
  }

  const card = currentCard();
  elements.unitBadge.textContent = `Unit ${card.unit}`;
  elements.posBadge.textContent = card.pos;
  elements.definition.textContent = card.definition;
  elements.checkButton.disabled = false;
  elements.showButton.disabled = false;

  renderAnswerArea(card);
  renderStats();
}

function renderEmpty() {
  elements.unitBadge.textContent = "Unit 2";
  elements.posBadge.textContent = "0 cards";
  elements.definition.textContent = "No missed cards yet.";
  elements.answerArea.innerHTML = "";
  elements.feedback.textContent = "";
  elements.checkButton.disabled = true;
  elements.showButton.disabled = true;
  renderStats();
}

function renderAnswerArea(card) {
  if (state.mode === "choice") {
    const choices = buildChoices(card);
    elements.answerArea.innerHTML = `<div class="choice-grid">${choices
      .map((choice) => `<button class="choice-button" type="button" data-choice="${choice}">${choice}</button>`)
      .join("")}</div>`;

    elements.answerArea.querySelectorAll(".choice-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedChoice = button.dataset.choice;
        elements.answerArea.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
    return;
  }

  if (state.mode === "flash") {
    const answerText = state.revealed ? card.term : "Answer hidden";
    const revealedClass = state.revealed ? " revealed" : "";
    elements.answerArea.innerHTML = `<div class="flash-answer${revealedClass}">${answerText}</div>`;
    return;
  }

  elements.answerArea.innerHTML = `<input id="textAnswer" class="text-answer" type="text" autocomplete="off" spellcheck="false" placeholder="Type the word">`;
  const input = document.querySelector("#textAnswer");
  input.focus();
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
}

function buildChoices(card) {
  const others = cards.filter((item) => item.term !== card.term);
  const options = shuffle(others).slice(0, 3).map((item) => item.term);
  return shuffle([card.term, ...options]);
}

function renderStats() {
  const progress = deck.length ? Math.round(((state.index + 1) / deck.length) * 100) : 0;
  elements.scoreText.textContent = `${state.correct} / ${state.attempts}`;
  elements.progressText.textContent = `${progress}%`;
  elements.progressBar.style.width = `${progress}%`;
  elements.cardCount.textContent = deck.length;
  elements.missCount.textContent = state.missed.size;
}

function checkAnswer() {
  if (!deck.length) return;

  const card = currentCard();
  const expected = normalize(card.term);
  let answer = "";

  if (state.mode === "choice") {
    answer = state.selectedChoice;
  } else if (state.mode === "flash") {
    state.revealed = true;
    renderAnswerArea(card);
    setFeedback(`Answer: ${card.term}`, "good");
    return;
  } else {
    answer = document.querySelector("#textAnswer")?.value || "";
  }

  if (!answer.trim()) {
    setFeedback("Enter or choose an answer.", "bad");
    return;
  }

  const id = cardId(card);
  const firstTry = !state.answered.has(`${id}:${state.index}`);
  const isCorrect = normalize(answer) === expected;

  if (firstTry) {
    state.attempts += 1;
    state.answered.add(`${id}:${state.index}`);
    if (isCorrect) state.correct += 1;
  }

  if (isCorrect) {
    state.missed.delete(id);
    setFeedback(`Correct: ${card.term}`, "good");
  } else {
    state.missed.add(id);
    setFeedback(`Not quite. Answer: ${card.term}`, "bad");
  }

  saveMissed();
  renderStats();
}

function setFeedback(message, status) {
  elements.feedback.textContent = message;
  elements.feedback.className = `feedback ${status}`;
}

function showAnswer() {
  if (!deck.length) return;
  state.revealed = true;
  const card = currentCard();
  state.missed.add(cardId(card));
  saveMissed();
  if (state.mode === "flash") {
    renderAnswerArea(card);
  }
  setFeedback(`Answer: ${card.term}`, "bad");
  renderStats();
}

function move(delta) {
  if (!deck.length) return;
  state.index = (state.index + delta + deck.length) % deck.length;
  resetCardState();
  render();
}

function setDeck(nextDeck, keepOrder = false) {
  deck = keepOrder ? nextDeck : shuffle(nextDeck);
  state.index = 0;
  state.answered.clear();
  resetCardState();
  render();
}

elements.unitFilter.addEventListener("change", () => {
  state.filter = elements.unitFilter.value;
  setDeck(getDeck());
});

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    elements.modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    resetCardState();
    render();
  });
});

elements.prevButton.addEventListener("click", () => move(-1));
elements.nextButton.addEventListener("click", () => move(1));
elements.checkButton.addEventListener("click", checkAnswer);
elements.showButton.addEventListener("click", showAnswer);
elements.shuffleButton.addEventListener("click", () => setDeck(deck));
elements.resetButton.addEventListener("click", () => {
  state.correct = 0;
  state.attempts = 0;
  state.missed.clear();
  state.answered.clear();
  saveMissed();
  setDeck(getDeck(), true);
});

setDeck(deck);
