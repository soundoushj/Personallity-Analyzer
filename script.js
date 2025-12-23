const questions = [
    {
        question: "Your phone dies in public. How do you react?",
        answers: [
            { text: "No big deal, I'll charge it later", points: 0 },
            { text: "A bit annoying, but I'll survive", points: 1 },
            { text: "Panic slightly, then find a solution", points: 2 },
            { text: "EXISTENTIAL CRISIS MODE ACTIVATED", points: 3 }
        ]
    },
    {
        question: "Someone doesn't text you back for 2 hours. You think:",
        answers: [
            { text: "They're probably busy", points: 0 },
            { text: "Maybe I should check in later", points: 1 },
            { text: "Did I say something wrong?", points: 2 },
            { text: "They hate me, I'm alone forever", points: 3 }
        ]
    },
    {
        question: "You have free time this weekend. What do you do?",
        answers: [
            { text: "Relax at home, maybe read a book", points: 0 },
            { text: "Hang out with a friend or two", points: 1 },
            { text: "Plan something exciting and memorable", points: 2 },
            { text: "Create chaos, start 5 projects at once", points: 3 }
        ]
    },
    {
        question: "Your favorite song comes on in public. You:",
        answers: [
            { text: "Smile quietly and enjoy it", points: 0 },
            { text: "Nod along subtly", points: 1 },
            { text: "Sing along under my breath", points: 2 },
            { text: "FULL CONCERT MODE, don't care who's watching", points: 3 }
        ]
    },
    {
        question: "You make a minor mistake at work/school. Your reaction:",
        answers: [
            { text: "Note it and move on", points: 0 },
            { text: "Fix it quickly, no stress", points: 1 },
            { text: "Overthink it for the rest of the day", points: 2 },
            { text: "Convince myself I'm a failure", points: 3 }
        ]
    },
    {
        question: "Someone cancels plans last minute. You feel:",
        answers: [
            { text: "Relieved, more time to relax", points: 0 },
            { text: "Slightly disappointed but okay", points: 1 },
            { text: "Hurt but I hide it", points: 2 },
            { text: "BETRAYED. TRUST ISSUES UNLOCKED.", points: 3 }
        ]
    },
    {
        question: "You're at a party. Where are you?",
        answers: [
            { text: "Probably left early, I'm at home", points: 0 },
            { text: "Talking to one or two close friends", points: 1 },
            { text: "Mingling, meeting new people", points: 2 },
            { text: "I AM the party. Everyone knows me.", points: 3 }
        ]
    },
    {
        question: "You see your crush in public unexpectedly. You:",
        answers: [
            { text: "Wave casually if we make eye contact", points: 0 },
            { text: "Say hi and have a normal conversation", points: 1 },
            { text: "Get nervous but try to act cool", points: 2 },
            { text: "ABORT MISSION. Hide immediately.", points: 3 }
        ]
    },
    {
        question: "How do you handle stress?",
        answers: [
            { text: "Take deep breaths and solve problems calmly", points: 0 },
            { text: "Talk it out with someone I trust", points: 1 },
            { text: "Stress eat and overthink everything", points: 2 },
            { text: "Spiral into chaos, cry, then rise like a phoenix", points: 3 }
        ]
    },
    {
        question: "Someone insults you. Your response:",
        answers: [
            { text: "Ignore it, not worth my energy", points: 0 },
            { text: "Calmly defend myself if needed", points: 1 },
            { text: "Feel hurt but don't show it", points: 2 },
            { text: "Unleash a devastating comeback", points: 3 }
        ]
    },
    {
        question: "You're running late. How do you feel?",
        answers: [
            { text: "No stress, I'll get there when I get there", points: 0 },
            { text: "A little rushed but I stay calm", points: 1 },
            { text: "Anxious and moving fast", points: 2 },
            { text: "FULL PANIC MODE. Life is over.", points: 3 }
        ]
    },
    {
        question: "How often do you daydream?",
        answers: [
            { text: "Rarely, I'm pretty grounded", points: 0 },
            { text: "Sometimes when I'm bored", points: 1 },
            { text: "Pretty often, I have a vivid imagination", points: 2 },
            { text: "Constantly. I live in multiple realities.", points: 3 }
        ]
    },
    {
        question: "You find $20 on the street. What do you think?",
        answers: [
            { text: "Cool, free money", points: 0 },
            { text: "Nice surprise, I'll use it wisely", points: 1 },
            { text: "Is this a sign from the universe?", points: 2 },
            { text: "This is my main character moment!", points: 3 }
        ]
    },
    {
        question: "How do you feel about being the center of attention?",
        answers: [
            { text: "I avoid it at all costs", points: 0 },
            { text: "I'm okay with it occasionally", points: 1 },
            { text: "I secretly enjoy it", points: 2 },
            { text: "I THRIVE in the spotlight", points: 3 }
        ]
    },
    {
        question: "Your reaction to a minor inconvenience:",
        answers: [
            { text: "Shrug it off, life happens", points: 0 },
            { text: "Mildly annoyed but I move on", points: 1 },
            { text: "Frustrated and need to vent", points: 2 },
            { text: "WHY IS THE UNIVERSE AGAINST ME?!", points: 3 }
        ]
    },
    {
        question: "You're watching a sad movie. You:",
        answers: [
            { text: "Feel a bit emotional but stay composed", points: 0 },
            { text: "Tear up a little", points: 1 },
            { text: "Cry and get fully immersed", points: 2 },
            { text: "SOB UNCONTROLLABLY. I AM the character.", points: 3 }
        ]
    },
    {
        question: "How often do you change your mind about things?",
        answers: [
            { text: "Rarely, I'm pretty consistent", points: 0 },
            { text: "Sometimes, but I think it through", points: 1 },
            { text: "Often, I explore different perspectives", points: 2 },
            { text: "Every 5 minutes. I contain multitudes.", points: 3 }
        ]
    },
    {
        question: "You get a compliment. How do you take it?",
        answers: [
            { text: "Thank them simply and move on", points: 0 },
            { text: "Feel good and express appreciation", points: 1 },
            { text: "Get flustered but secretly love it", points: 2 },
            { text: "I KNEW IT. Tell me more.", points: 3 }
        ]
    },
    {
        question: "How do you make decisions?",
        answers: [
            { text: "Logically and carefully", points: 0 },
            { text: "Mix of logic and intuition", points: 1 },
            { text: "Based on feelings and vibes", points: 2 },
            { text: "Impulsively. YOLO.", points: 3 }
        ]
    },
    {
        question: "What's your energy level on a typical day?",
        answers: [
            { text: "Calm and steady", points: 0 },
            { text: "Balanced with occasional bursts", points: 1 },
            { text: "High energy with emotional waves", points: 2 },
            { text: "CHAOTIC. I run on pure chaos.", points: 3 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function startQuiz() {
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer.points);
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(points) {
    totalScore += points;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    
    let resultData;
    
    if (totalScore <= 15) {
        resultData = {
            emoji: "🟢",
            title: "Calm Human",
            description: "You are emotionally stable, grounded, and peaceful. You rarely panic, handle life's challenges with grace, and bring balance wherever you go. People appreciate your calming presence and rational approach to problems.",
            traits: [
                "Rarely stressed or anxious",
                "Thinks before reacting",
                "Brings peace to chaotic situations",
                "Emotionally balanced and stable",
                "The friend everyone calls in a crisis"
            ]
        };
    } else if (totalScore <= 30) {
        resultData = {
            emoji: "🟡",
            title: "Slightly Unhinged",
            description: "You're mostly stable but prone to overthinking and occasional emotional spirals. You feel things deeply but still manage to function normally in society. Your friends love your passionate nature, even if it sometimes leads to dramatic moments.",
            traits: [
                "Overthinks simple situations",
                "Feels emotions intensely",
                "Occasionally dramatic but lovable",
                "Functions well despite inner chaos",
                "Relates deeply to main characters in movies"
            ]
        };
    } else if (totalScore <= 45) {
        resultData = {
            emoji: "🟠",
            title: "Main Character",
            description: "Life feels cinematic for you. Every experience has meaning, and you're constantly on a journey of personal growth. You're charismatic, expressive, and memorable. People are drawn to your energy and the way you turn ordinary moments into something special.",
            traits: [
                "Everything feels like a movie scene",
                "Highly expressive and dramatic",
                "People remember you",
                "Constantly evolving and growing",
                "Makes ordinary moments extraordinary"
            ]
        };
    } else {
        resultData = {
            emoji: "🔴",
            title: "Final Boss",
            description: "You are pure chaos energy incarnate. Your emotions are intense, your reactions are dramatic, and your presence is absolutely unforgettable. You don't just survive chaos—you create it, thrive in it, and emerge victorious. You're the final boss everyone must face.",
            traits: [
                "Maximum chaos energy at all times",
                "Intense emotional reactions",
                "Unforgettable and powerful presence",
                "Lives life at 200% intensity",
                "The most dramatic person in any room"
            ]
        };
    }
    
    document.getElementById('resultEmoji').textContent = resultData.emoji;
    document.getElementById('resultTitle').textContent = resultData.title;
    document.getElementById('resultScore').textContent = `Your Chaos Score: ${totalScore} / 60`;
    document.getElementById('resultDescription').textContent = resultData.description;
    
    const traitsHTML = `
        <h3>Your Key Traits:</h3>
        <ul>
            ${resultData.traits.map(trait => `<li>${trait}</li>`).join('')}
        </ul>
    `;
    document.getElementById('resultTraits').innerHTML = traitsHTML;
}

function restartQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.start-screen').classList.add('active');
}