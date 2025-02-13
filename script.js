// Quiz Data (quizzes.json)
const quizzes = {
  planes: [
    { question: "What is the fastest fighter jet in the world?", options: ["F-22 Raptor", "MiG-25 Foxbat", "SR-71 Blackbird", "Eurofighter Typhoon"], answer: "MiG-25 Foxbat" },
    { question: "Which company manufactures the Boeing 747?", options: ["Airbus", "Boeing", "Lockheed Martin", "Dassault"], answer: "Boeing" },
    { question: "What is the nickname of the Lockheed SR-71?", options: ["Blackbird", "Thunderbird", "Night Hawk", "Phantom"], answer: "Blackbird" },
    { question: "Which plane dropped the first atomic bomb?", options: ["Spirit of St. Louis", "Enola Gay", "Memphis Belle", "Bockscar"], answer: "Enola Gay" },
    { question: "Which of these is a commercial supersonic jet?", options: ["Concorde", "Boeing 777", "Airbus A380", "Gulfstream G650"], answer: "Concorde" },
    { question: "What is the largest passenger plane in the world?", options: ["Boeing 747", "Airbus A380", "Boeing 787 Dreamliner", "Concorde"], answer: "Airbus A380" },
    { question: "Which country developed the Sukhoi Su-57 stealth fighter?", options: ["China", "USA", "Russia", "France"], answer: "Russia" },
    { question: "What is the primary role of the C-130 Hercules?", options: ["Fighter jet", "Cargo transport", "Reconnaissance", "Bomber"], answer: "Cargo transport" },
    { question: "Which famous plane is known as “The Flying Fortress”?", options: ["B-17", "B-52", "F-35", "C-5 Galaxy"], answer: "B-17" },
    { question: "What is the world's first successful powered aircraft?", options: ["Spirit of St. Louis", "Wright Flyer", "Spitfire", "Concorde"], answer: "Wright Flyer" },
    { question: "What is the top speed of the SR-71 Blackbird?", options: ["Mach 1.5", "Mach 2.5", "Mach 3.2", "Mach 4.0"], answer: "Mach 3.2" },
    { question: "Which plane is known as the 'Jumbo Jet'?", options: ["Boeing 747", "Airbus A380", "Concorde", "Boeing 787"], answer: "Boeing 747" },
    { question: "What is the primary material used in stealth aircraft?", options: ["Aluminum", "Titanium", "Carbon Fiber", "Radar-absorbent materials"], answer: "Radar-absorbent materials" },
    { question: "Which aircraft is known for its V-shaped tail?", options: ["F-16", "B-2 Spirit", "Beechcraft Bonanza", "Cessna 172"], answer: "Beechcraft Bonanza" },
    { question: "What is the name of the first operational stealth aircraft?", options: ["F-117 Nighthawk", "B-2 Spirit", "F-22 Raptor", "F-35 Lightning II"], answer: "F-117 Nighthawk" }
  ],
  science: [
    { question: "What is the process by which plants make food using sunlight called?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], answer: "Photosynthesis" },
    { question: "Which gas do humans need to breathe to survive?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], answer: "Oxygen" },
    { question: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Mars" },
    { question: "How many bones are in the adult human body?", options: ["206", "208", "210", "212"], answer: "206" },
    { question: "What is the most abundant gas in Earth’s atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" },
    { question: "What type of blood cells help fight infections in the human body?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], answer: "White Blood Cells" },
    { question: "What is the study of rocks called?", options: ["Meteorology", "Geology", "Paleontology", "Mineralogy"], answer: "Geology" },
    { question: "Which animal is known as the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Orca"], answer: "Blue Whale" },
    { question: "What force keeps us grounded on Earth?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], answer: "Gravity" },
    { question: "What part of the plant conducts photosynthesis?", options: ["Stem", "Root", "Leaf", "Flower"], answer: "Leaf" },
    { question: "What is the smallest unit of life?", options: ["Atom", "Cell", "Molecule", "Organelle"], answer: "Cell" },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Quartz"], answer: "Diamond" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], answer: "300,000 km/s" },
    { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Brain"], answer: "Skin" }
  ],
  history: [
    { question: "Who was the first President of the United States?", options: ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln"], answer: "George Washington" },
    { question: "What year did the Titanic sink?", options: ["1908", "1912", "1916", "1920"], answer: "1912" },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Jonas Salk"], answer: "Alexander Fleming" },
    { question: "What ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Mesopotamians"], answer: "Egyptians" },
    { question: "What year did man first land on the Moon?", options: ["1965", "1969", "1972", "1975"], answer: "1969" },
    { question: "Who was the leader of Germany during World War II?", options: ["Otto von Bismarck", "Adolf Hitler", "Kaiser Wilhelm II", "Hermann Göring"], answer: "Adolf Hitler" },
    { question: "What event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Bombing of Pearl Harbor", "Russian Revolution"], answer: "Assassination of Archduke Franz Ferdinand" },
    { question: "Who was known as the 'Iron Lady'?", options: ["Margaret Thatcher", "Angela Merkel", "Golda Meir", "Indira Gandhi"], answer: "Margaret Thatcher" },
    { question: "What empire was ruled by Julius Caesar?", options: ["Persian Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"], answer: "Roman Empire" },
    { question: "Which famous explorer is credited with discovering America?", options: ["Ferdinand Magellan", "Christopher Columbus", "Marco Polo", "Vasco da Gama"], answer: "Christopher Columbus" },
    { question: "What was the name of the ship that carried the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Endeavour", "Bounty"], answer: "Mayflower" },
    { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], answer: "Thomas Jefferson" },
    { question: "What was the main cause of the Cold War?", options: ["Economic differences", "Ideological differences", "Territorial disputes", "Religious conflicts"], answer: "Ideological differences" },
    { question: "Who was the first female Prime Minister of the UK?", options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"], answer: "Margaret Thatcher" },
    { question: "What year did the Berlin Wall fall?", options: ["1985", "1989", "1991", "1995"], answer: "1989" }
  ],
  popCulture: [
    { question: "Who played the role of Iron Man in the Marvel movies?", options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"], answer: "Robert Downey Jr." },
    { question: "What is the highest-grossing film of all time?", options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: "Avatar" },
    { question: "What band was Beyoncé originally part of?", options: ["TLC", "Destiny’s Child", "Spice Girls", "Fifth Harmony"], answer: "Destiny’s Child" },
    { question: "Who won the Grammy for Album of the Year in 2023?", options: ["Harry Styles", "Adele", "Beyoncé", "Taylor Swift"], answer: "Harry Styles" },
    { question: "What is the name of Harry Potter’s owl?", options: ["Hedwig", "Scabbers", "Fawkes", "Crookshanks"], answer: "Hedwig" },
    { question: "What social media platform is known for 15-60 second video content?", options: ["Instagram", "TikTok", "Snapchat", "Twitter"], answer: "TikTok" },
    { question: "Who is the author of the *Game of Thrones* book series?", options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Suzanne Collins"], answer: "George R.R. Martin" },
    { question: "What is the name of the fictional country in *Black Panther*?", options: ["Wakanda", "Zamunda", "Genovia", "Latveria"], answer: "Wakanda" },
    { question: "Which singer released the album *1989*?", options: ["Taylor Swift", "Katy Perry", "Adele", "Lady Gaga"], answer: "Taylor Swift" },
    { question: "What video game franchise includes characters like Mario and Luigi?", options: ["Pokémon", "The Legend of Zelda", "Super Mario Bros.", "Sonic the Hedgehog"], answer: "Super Mario Bros." },
    { question: "Who is the main character in *The Matrix*?", options: ["Neo", "Morpheus", "Trinity", "Agent Smith"], answer: "Neo" },
    { question: "What is the name of the fictional wizarding school in *Harry Potter*?", options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"], answer: "Hogwarts" },
    { question: "Who is the creator of *Star Wars*?", options: ["George Lucas", "Steven Spielberg", "James Cameron", "J.J. Abrams"], answer: "George Lucas" },
    { question: "What is the name of the dragon in *Game of Thrones*?", options: ["Drogon", "Viserion", "Rhaegal", "Smaug"], answer: "Drogon" },
    { question: "Who is the lead singer of the band Queen?", options: ["Freddie Mercury", "David Bowie", "Elton John", "Mick Jagger"], answer: "Freddie Mercury" }
  ]
};

// Navigation Logic
document.getElementById("start-button")?.addEventListener("click", () => {
  window.location.href = "quiz-selector.html";
});

// Fix Back Button Logic for Quiz Selector Page
document.getElementById("back-button")?.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Fix Back Button Logic for You Win and You Lose Pages
document.getElementById("go-back-button")?.addEventListener("click", () => {
  window.location.href = "quiz-selector.html";
});

// Quiz Logic
const quizButtons = document.querySelectorAll(".quiz-button");
quizButtons.forEach(button => {
  button.addEventListener("click", () => {
    const quizName = button.getAttribute("data-quiz");
    localStorage.setItem("selectedQuiz", quizName);
    window.location.href = "quiz.html";
  });
});

// Load Quiz
const selectedQuiz = localStorage.getItem("selectedQuiz");
if (selectedQuiz) {
  const quizData = quizzes[selectedQuiz];
  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
      <p id="question">${question.question}</p>
      <div id="options-container">
        ${question.options.map(option => `<button>${option}</button>`).join("")}
      </div>
    `;

    const options = document.querySelectorAll("#options-container button");
    options.forEach(option => {
      option.addEventListener("click", () => {
        if (option.textContent === question.answer) {
          score++; // Increment score for correct answer
          currentQuestionIndex++;
          if (currentQuestionIndex < quizData.length) {
            loadQuestion(); // Load the next question
          } else {
            localStorage.setItem("quizScore", score); // Save score
            window.location.href = "win.html"; // Go to You Win page
          }
        } else {
          window.location.href = "lose.html"; // Go to You Lose page
        }
      });
    });
  }

  loadQuestion(); // Load the first question
}