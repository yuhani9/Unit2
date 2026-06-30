const vocab = [
  { unit: "2-1", term: "automate", pos: "v.", definition: "to use machines and computers instead of people to do a job or task", forms: ["automated", "automatic"] },
  { unit: "2-1", term: "automatic", pos: "adj.", definition: "(of a machine, device, etc.) having controls that work without needing a person to operate them", base: "automate" },
  { unit: "2-1", term: "benefits", pos: "plural n.", definition: "an advantage that you get from a company in addition to the money that you earn; welfare" },
  { unit: "2-1", term: "discrimination", pos: "n.", definition: "the practice of treating somebody or a particular group in society less fairly than others", forms: ["discriminate"] },
  { unit: "2-1", term: "discriminate", pos: "v.", definition: "to treat one person or group worse or better than another in an unfair way", base: "discrimination" },
  { unit: "2-1", term: "expertise", pos: "n.", definition: "expert knowledge or skill in a particular subject, activity or job" },
  { unit: "2-1", term: "gig", pos: "n.", definition: "a job, especially a temporary one" },
  { unit: "2-1", term: "job security", pos: "n. phr.", definition: "the state of having a job that is secure" },
  { unit: "2-1", term: "labor", pos: "n.", definition: "work, especially physical work" },
  { unit: "2-1", term: "on the margins", pos: "idiom", definition: "the part that is not included in the main part of a group or situation; fringe" },
  { unit: "2-1", term: "substitute", pos: "v.", definition: "to take the place of somebody or something else; to use somebody or something instead of somebody or something else", forms: ["substitution"] },
  { unit: "2-1", term: "substitution", pos: "n.", definition: "an act of using one person or thing in the place of another", base: "substitute" },
  { unit: "2-1", term: "take advantage of", pos: "v. phr.", definition: "to make use of something well; to make use of an opportunity" },
  { unit: "2-1", term: "the other end of the spectrum", pos: "n. phr.", definition: "the opposite extreme in a range of ideas, qualities, or situations" },
  { unit: "2-1", term: "wage", pos: "n.", definition: "a regular amount of money that you earn, usually every week or every month, for work or services" },
  { unit: "2-1", term: "disaggregate", pos: "v.", definition: "to separate", forms: ["aggregate"] },
  { unit: "2-1", term: "aggregate", pos: "v.", definition: "to put together different items, amounts, etc. into a single group or total", base: "disaggregate" },
  { unit: "2-1", term: "garner", pos: "v.", definition: "to obtain or collect" },
  { unit: "2-1", term: "dignity", pos: "n.", definition: "the fact of being given honor or respect by other people", forms: ["dignify"] },
  { unit: "2-1", term: "dignify", pos: "v.", definition: "to make somebody or something seem impressive", base: "dignity" },
  { unit: "2-2", term: "accumulate", pos: "v.", definition: "to gradually increase over time", forms: ["accumulation", "accumulative"] },
  { unit: "2-2", term: "accumulation", pos: "n.", definition: "the process of gradually increasing or getting more of something over time", base: "accumulate" },
  { unit: "2-2", term: "accumulative", pos: "adj.", definition: "growing by increasing gradually", base: "accumulate" },
  { unit: "2-2", term: "algorithm", pos: "n.", definition: "a set of rules that are followed to solve a problem, especially by a computer" },
  { unit: "2-2", term: "at stake", pos: "idiom", definition: "that can be won or lost, depending on the success of a particular action" },
  { unit: "2-2", term: "degree of", pos: "n. phr.", definition: "the amount or level of something" },
  { unit: "2-2", term: "demand", pos: "n.", definition: "the desire or need of customers for goods or services" },
  { unit: "2-2", term: "entry-level", pos: "adj.", definition: "at the lowest rank in a company" },
  { unit: "2-2", term: "freelancer", pos: "n.", definition: "a person who works for many different organizations rather than being employed by them", forms: ["freelance"] },
  { unit: "2-2", term: "freelance", pos: "v. / n.", definition: "to earn money by selling your work to several different organizations; freelance worker", base: "freelancer" },
  { unit: "2-2", term: "hypothetical", pos: "adj.", definition: "based on situations which are possible and imagined rather than real and true", forms: ["hypothesize", "hypothesis", "hypothetically"] },
  { unit: "2-2", term: "hypothesize", pos: "v.", definition: "to suggest a way of explaining something when you do not definitely know about it", base: "hypothetical" },
  { unit: "2-2", term: "hypothesis", pos: "n.", definition: "an idea or explanation of something that is based on a few known facts but that has not yet been proved to be true or correct", base: "hypothetical" },
  { unit: "2-2", term: "hypothetically", pos: "adv.", definition: "in a situation that is possible and imagined rather than real and true", base: "hypothetical" },
  { unit: "2-2", term: "scraps", pos: "pl. n.", definition: "small pieces or amounts of something" },
  { unit: "2-2", term: "supply", pos: "n.", definition: "the amount of something that is provided or available for use" },
  { unit: "2-2", term: "take a cut", pos: "v. phr.", definition: "to keep a share of the money" },
  { unit: "2-2", term: "transaction", pos: "n.", definition: "an act of buying or selling", forms: ["transactional", "transact"] },
  { unit: "2-2", term: "transactional", pos: "adj.", definition: "relating to the process of buying or selling", base: "transaction" },
  { unit: "2-2", term: "transact", pos: "v.", definition: "to do business with a person or an organization", base: "transaction" }
];

const exactSentences = [
  { answer: "expertise", source: "p.37 B", text: "The job requires expertise in coding and website design." },
  { answer: "on the margins", source: "p.37 B", text: "People without a high school education often live on the margins of society." },
  { answer: "take advantage of", source: "p.37 B", text: "You can take advantage of this new opportunity by visiting our website today!" },
  { answer: "job security", source: "p.37 B", text: "I don't have job security, so I can be fired at any time." },
  { answer: "benefits", source: "p.37 B", text: "The job includes benefits such as health insurance and vacation time." },
  { answer: "automated", source: "p.37 B", text: "If your work can be automated, you might be replaced by a robot." },
  { answer: "wage", source: "p.37 B", text: "Many countries have a minimum wage, which is the lowest amount you can be paid for an hour of work." },
  { answer: "the other end of the spectrum", source: "p.37 B", text: "On one sharing website, you can rent a small room in someone's house or, on the other end of the spectrum, you can rent an entire luxury house." },
  { answer: "discrimination", source: "p.37 B", text: "Older people may suffer discrimination when they apply for a new job because some companies prefer to hire young workers." },
  { answer: "labor", source: "p.37 B", text: "The labor market refers to the number of people who are available for work in relation to the number of jobs available." },
  { answer: "substitute", source: "p.37 B", text: "Fast-food restaurants are starting to substitute employees for touch screens to take your order." },
  { answer: "gig", source: "p.37 B", text: "In the gig economy, workers may have many small jobs instead of one full-time job." },
  { answer: "job security", source: "Practice 1", text: "Many older people in today's economy are worried about job security." },
  { answer: "wages", source: "Practice 1", text: "One way that businesses respond to loss in profits is to cut the positions of employees who have high wages." },
  { answer: "labor", source: "Practice 1", text: "This often means that older members of staff who have been in the labor market for longer and have more experience are let go." },
  { answer: "discrimination", source: "Practice 1", text: "While age discrimination is against the law in several countries, the higher pay of older adults can make it hard for them to compete with younger people." },
  { answer: "automated", source: "Practice 1", text: "Many employees lose their job prospects as more and more jobs are automated." },
  { answer: "expertise", source: "Practice 1", text: "Their years of expertise is lost in the workplace." },
  { answer: "spectrum", source: "Practice 1", text: "Without experienced co-workers, younger employees at the other end of the career spectrum lose out because they can't take advantage of the knowledge that these professionals have gained through long careers." },
  { answer: "take advantage of", source: "Practice 1", text: "Companies are taking advantage of more experienced professionals to help grow their business and train new employees." },
  { answer: "gig", source: "Practice 1", text: "Older people seeking jobs are encouraged now to join the gig economy." },
  { answer: "algorithm", source: "p.44 B", text: "The website uses a complex algorithm to decide how many people will want a ride at each hour during the week." },
  { answer: "at stake", source: "p.44 B", text: "It is important to check your resume carefully for errors as there is a lot at stake when you submit a job application." },
  { answer: "takes a cut", source: "p.44 B", text: "When you rent a room on an online website, the software company takes a cut of the money, usually about 1-5%." },
  { answer: "entry-level", source: "p.44 B", text: "Many teenagers work entry-level jobs in supermarkets or fast-food restaurants." },
  { answer: "freelancer", source: "p.44 B", text: "Ahmed quit his job at a newspaper and became a freelancer, so now he writes for many different publications." },
  { answer: "accumulated", source: "p.44 B", text: "After working a number of different gigs, Jing only accumulated a small amount of money in her savings account." },
  { answer: "demand", source: "p.44 B", text: "The demand for hotel rooms has dropped because so many travelers are renting rooms and apartments online." },
  { answer: "supply", source: "p.44 B", text: "House prices go down when there is an increase in the supply of new homes." },
  { answer: "degree of", source: "p.44 B", text: "The degree of risk with a new business depends on the number of competitors in the market." },
  { answer: "hypothetical", source: "p.44 B", text: "Let me ask a hypothetical question: what would you do if you could have any job in the world?" },
  { answer: "scraps", source: "p.44 B", text: "At the end of the meal, he removed the last scraps of food from his plate." },
  { answer: "transactions", source: "p.44 B", text: "Websites need strong safety measures to keep financial transactions secure." },
  { answer: "entry-level", source: "Practice 2", text: "I was offered a(n) entry-level position at the company I interned with." },
  { answer: "transaction", source: "Practice 2", text: "I save my receipts from my business trips and check them against every transaction on my bank card." },
  { answer: "demand", source: "Practice 2", text: "Not enough people are going into healthcare, so there is a real demand for qualified nurses and other healthcare workers." },
  { answer: "at stake", source: "Practice 2", text: "Interviews are stressful. There is so much at stake and often only one opportunity to show who you are." },
  { answer: "supply", source: "Practice 2", text: "While there is a need for talented writers in TV and entertainment, there is also a large supply of professionals, so those fields can be very competitive." },
  { answer: "scraps", source: "Practice 2", text: "As a way of making a living, some people collect scraps of metal from construction sites and sell them." },
  { answer: "accumulating", source: "Practice 2", text: "One of the goals of middle-aged people should be of accumulating wealth for their retirement and later years." },
  { answer: "hypothetical", source: "Practice 2", text: "Our professors talk about a lot of hypothetical situations, but there is no substitute for practical experience in an actual workplace." },
  { answer: "takes a cut", source: "Practice 2", text: "Every time you place an online order, the supplier only receives part of the price because the platform takes a cut." },
  { answer: "freelancer", source: "Practice 2", text: "After losing my full-time position, I had to work as a freelancer for a few years. Some people like that lifestyle but I was happy to go back into regular employment again." }
];

const oddGroups = [
  { choices: ["automate", "mechanize", "do manually"], answer: "do manually" },
  { choices: ["benefits", "welfare", "salary only"], answer: "salary only" },
  { choices: ["discriminate", "treat unfairly", "treat equally"], answer: "treat equally" },
  { choices: ["gig", "temporary job", "permanent career"], answer: "permanent career" },
  { choices: ["substitute", "replace", "preserve"], answer: "preserve" },
  { choices: ["aggregate", "combine", "separate"], answer: "separate" },
  { choices: ["accumulate", "increase gradually", "decrease quickly"], answer: "decrease quickly" },
  { choices: ["demand", "need", "supply"], answer: "supply" },
  { choices: ["at stake", "at risk", "certain"], answer: "certain" },
  { choices: ["hypothetical", "imagined", "real and proven"], answer: "real and proven" },
  { choices: ["transaction", "buying or selling", "conversation only"], answer: "conversation only" },
  { choices: ["scraps", "small pieces", "whole object"], answer: "whole object" }
];

const reusable = [
  {
    prompt: "Reusable: What is the prefix of disaggregate, and what is the meaning of the prefix? Answer the meaning in Japanese.",
    answers: ["dis 離れて", "dis 分離", "dis 反対", "dis"]
  },
  {
    prompt: "Reusable: What is the suffix of accumulation, and what part of speech is it?",
    answers: ["-ation noun", "ation noun", "-ation n", "ation n"]
  },
  {
    prompt: "Reusable: What is the suffix of hypothetical, and what part of speech is it?",
    answers: ["-al adjective", "al adjective", "-al adj", "al adj"]
  },
  {
    prompt: "Reusable: What is the suffix of freelancer, and what does it mean?",
    answers: ["-er person", "er person", "-er a person", "er a person"]
  },
  {
    prompt: "Reusable: Write the noun, adjective, and verb forms from the transaction word family.",
    answers: ["transaction transactional transact", "transaction transactional transacts"]
  }
];

const quizEl = document.querySelector("#quiz");
const scoreEl = document.querySelector("#score");
let currentQuestions = [];

function norm(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function blankSentence(item) {
  const escaped = item.answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return item.text.replace(new RegExp(escaped, "i"), '<span class="blank"></span>');
}

function accepts(value, answers) {
  const cleaned = norm(value);
  return answers.some((answer) => cleaned === norm(answer));
}

function buildQuiz() {
  const definitions = shuffle(vocab).slice(0, 6).map((item, index) => ({
    type: "text",
    section: "I. Here are the definitions of the words from Reading 1 and Reading 2. Write the word that matches each definition.",
    prompt: item.definition,
    meta: `(${item.pos})`,
    answers: [item.term],
    number: index + 1
  }));

  if (definitions[1]) {
    const base = vocab.find((item) => item.forms?.length);
    definitions[1] = {
      type: "text",
      section: definitions[0].section,
      prompt: `What is another word form of ${base.term}?`,
      meta: "(word form)",
      answers: base.forms,
      number: 2
    };
  }

  const odd = shuffle(oddGroups).slice(0, 4).map((item, index) => ({
    type: "choice",
    section: "II. Circle the word or phrase that has a different meaning from the others in each group.",
    choices: shuffle(item.choices),
    answers: [item.answer],
    number: index + 7
  }));

  const sentences = shuffle(exactSentences).slice(0, 9).map((item, index) => ({
    type: "text",
    section: "III. Complete the sentences with the correct words from the Reading 1 and Reading 2 new words.",
    prompt: blankSentence(item),
    meta: item.source,
    answers: [item.answer],
    number: index + 11,
    sentence: true
  }));

  const reusableQuestion = shuffle(reusable)[0];
  const q20 = {
    type: "text",
    section: "IV. Reusable",
    prompt: reusableQuestion.prompt,
    meta: "1 point for all correct answers",
    answers: reusableQuestion.answers,
    number: 20
  };

  currentQuestions = [...definitions, ...odd, ...sentences, q20];
  renderQuiz();
  scoreEl.textContent = "-- / 20";
}

function renderQuiz() {
  quizEl.innerHTML = "";
  const groups = new Map();
  currentQuestions.forEach((question) => {
    if (!groups.has(question.section)) groups.set(question.section, []);
    groups.get(question.section).push(question);
  });

  groups.forEach((questions, sectionTitle) => {
    const section = document.createElement("section");
    section.className = "section";
    section.innerHTML = `<h2>${sectionTitle}</h2>`;

    questions.forEach((question) => {
      const row = document.createElement("div");
      row.className = "question";
      row.dataset.number = question.number;
      const inputName = `q${question.number}`;
      const body = question.type === "choice"
        ? `<div class="choices">${question.choices.map((choice) => `<label><input type="radio" name="${inputName}" value="${choice}"> ${choice}</label>`).join("")}</div>`
        : `<input class="answer-line" name="${inputName}" type="text">`;
      row.innerHTML = `
        <div class="num">${question.number}.</div>
        <div>
          <div class="prompt ${question.sentence ? "sentence" : ""}">${question.prompt}</div>
          <div class="meta">${question.meta || ""}</div>
          ${body}
          <div class="result"></div>
        </div>
      `;
      section.appendChild(row);
    });

    quizEl.appendChild(section);
  });
}

function gradeQuiz(showOnly = false) {
  let correct = 0;

  currentQuestions.forEach((question) => {
    const row = quizEl.querySelector(`[data-number="${question.number}"]`);
    const result = row.querySelector(".result");
    let value = "";

    if (question.type === "choice") {
      value = row.querySelector(`input[name="q${question.number}"]:checked`)?.value || "";
    } else {
      value = row.querySelector(`[name="q${question.number}"]`)?.value || "";
    }

    const ok = accepts(value, question.answers);
    if (ok) correct += 1;

    const answerText = question.answers[0];
    result.className = `result ${ok ? "correct" : "wrong"}`;
    result.textContent = showOnly ? `Answer: ${answerText}` : ok ? `Correct: ${answerText}` : `Answer: ${answerText}`;
  });

  scoreEl.textContent = `${correct} / 20`;
}

document.querySelector("#newQuiz").addEventListener("click", buildQuiz);
document.querySelector("#gradeQuiz").addEventListener("click", () => gradeQuiz(false));
document.querySelector("#showAnswers").addEventListener("click", () => gradeQuiz(true));
document.querySelector("#printQuiz").addEventListener("click", () => window.print());

buildQuiz();
