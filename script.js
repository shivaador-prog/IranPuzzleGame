const startBtn = document.getElementById("startBtn");
const narrator = document.getElementById("narrator");
const bgMusic = document.getElementById("bgMusic");
const playerName = document.getElementById("playerName");

const hero = document.getElementById("hero");
const heroVoice = document.getElementById("heroVoice");

const questionBox = document.getElementById("questionBox");
const question = document.getElementById("question");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const cheerSound = document.getElementById("cheerSound");
const nationalAnthem = document.getElementById("nationalAnthem");

const heroName = document.getElementById("heroName");

const answers = document.querySelectorAll(".answer");
const cells = document.querySelectorAll(".progressItem .cell");

let stage = 0;
let progressStep = 0;

const mapPositions = [

    {left:"30%", top:"33%"},
    {left:"65%", top:"22%"},
    {left:"58%", top:"36%"},
    {left:"24%", top:"48%"},
    {left:"47%", top:"28%"},
    {left:"72%", top:"46%"},
    {left:"18%", top:"60%"},
    {left:"63%", top:"10%"},
    {left:"30%", top:"10%"},
    {left:"51%", top:"90%"}

];
const heroes = [

{
    name:"آریوبرزن",
    image:"images/02_ariobarzan.png",
    voice:"audio/02_ariobarzan.mp3",
    answers:[
        "کوروش بزرگ",
        "داریوش",
        "رستم",
        "آریوبرزن"
    ],
    correct:3
},

{
    name:"فردوسی",
    image:"images/03_ferdowsi.png",
    voice:"audio/03_ferdowsi.mp3",
    answers:[
        "زکریای رازی",
        "ابن سینا",
        "خواجه نصیر",
        "فردوسی"
    ],
    correct:3
},

{
    name:"ابوعلی سینا",
    image:"images/05_avicenna.png",
    voice:"audio/05_avicenna.mp3",
    answers:[
        "ابوریحان بیرونی",
        "ابوعلی سینا",
        "زکریای رازی",
        "خواجه نصیرالدین طوسی"
    ],
    correct:1
},

{
    name:"زکریای رازی",
    image:"images/04_razi.png",
    voice:"audio/04_razi.mp3",
    answers:[
        "خواجه نصیرالدین طوسی",
        "ابوعلی سینا",
        "زکریای رازی",
        "پروین اعتصامی"
    ],
    correct:2
},

{
    name:"خواجه نصیرالدین طوسی",
    image:"images/06_tusi.png",
    voice:"audio/06_tusi.mp3",
    answers:[
        "فردوسی",
        "خواجه نصیرالدین طوسی",
        "ابوریحان بیرونی",
        "زکریای رازی"
    ],
    correct:1
},
{
    name:"پروین اعتصامی",
    image:"images/07_parvin.png",
    voice:"audio/07_parvin.mp3",
    answers:[
        "فروغ فرخزاد",
        "پروین اعتصامی",
        "سیمین دانشور",
        "طاهره صفارزاده"
    ],
    correct:1
},

{
    name:"استاد محمود فرشچیان",
    image:"images/08_farshchian.png",
    voice:"audio/08_farshchian.mp3",
    answers:[
        "کمال‌الملک",
        "میرمصور",
        "استاد محمود فرشچیان",
        "بهزاد"
    ],
    correct:2
},

{
    name:"شهید مصطفی احمدی روشن",
    image:"images/09_ahmadi_roshan.png",
    voice:"audio/09_ahmadi_roshan.mp3",
    answers:[
        "شهید ستاری",
        "شهید احمدی روشن",
        "شهید چمران",
        "شهید صیاد شیرازی"
    ],
    correct:1
},

{
    name:"شهید حاج قاسم سلیمانی",
    image:"images/10_soleimani.png",
    voice:"audio/10_soleimani.mp3",
    answers:[
        "شهید همت",
        "شهید باکری",
        "شهید حاج قاسم سلیمانی",
        "شهید کاظمی"
    ],
    correct:2
},

{
    name:"آینده‌ساز فردا",
    image:"images/11_future_builders.png",
    voice:"audio/11_final.mp3",
    answers:[
        "نسل فردا",
        "من",
        "آینده‌ساز ایران",
        "همه موارد"
    ],
    correct:3
}

];
startBtn.onclick = function () {

    if (playerName.value.trim() == "") {
        alert("ابتدا نام خود را وارد کنید.");
        return;
    }

    bgMusic.volume = 0.18;
    bgMusic.play();

    startBtn.disabled = true;
    playerName.disabled = true;

    narrator.currentTime = 0;
    narrator.play();

};

narrator.onended = function () {

    document.getElementById("startBox").style.display = "none";

    showHero(0);

};

function showHero(index) {

    stage = index;

    hero.src = heroes[index].image;

    hero.style.display = "block";
    hero.style.opacity = "1";

    if (stage == 7) {
        hero.style.width = "250px";
        hero.style.left = "34%";
        hero.style.top = "-8%";
    }
    else if (stage == 8) {
        hero.style.width = "250px";
        hero.style.left = "34%";
        hero.style.top = "-3%";
    }
    else {
        hero.style.width = "360px";
        hero.style.left = "34%";
        hero.style.top = "-2%";
    }

    heroName.innerHTML = heroes[index].name;
    heroName.style.display = "none";

    heroVoice.src = heroes[index].voice;
    heroVoice.currentTime = 0;
    heroVoice.volume = 1;

    questionBox.style.display = "none";

    heroVoice.play();

}
heroVoice.onended = function () {

    question.innerHTML = "من چه کسی هستم؟";

    const h = heroes[stage];

    answers.forEach((btn, i) => {

        btn.innerHTML = h.answers[i];

        if (i == h.correct) {
            btn.dataset.correct = "true";
        } else {
            btn.dataset.correct = "false";
        }

        btn.style.background = "#ececec";

    });

    questionBox.style.display = "block";

};

answers.forEach(btn => {

    btn.onclick = function () {

        if (btn.dataset.correct == "true") {

            questionBox.style.display = "none";

            hero.classList.add("heroDone");

            correctSound.currentTime = 0;
            correctSound.play();

        } else {

            wrongSound.currentTime = 0;
            wrongSound.play();

            btn.style.background = "#d9534f";

        }

    };

});
correctSound.onended = function () {

    createConfetti();

    document.getElementById("label" + stage).style.display = "block";
    document.getElementById("label" + stage).innerHTML = heroes[stage].name;
    document.getElementById("label" + stage).style.fontWeight = "bold";
    document.getElementById("label" + stage).style.color = "#000";

    cheerSound.currentTime = 0;
    cheerSound.play();

    if (progressStep < 3) {

        cells[progressStep].classList.add("doneGreen");

    } else if (progressStep < 7) {

        cells[progressStep].classList.add("doneWhite");

    } else {

        cells[progressStep].classList.add("doneRed");

    }

    progressStep++;

};

function createConfetti() {

    const game = document.getElementById("game");

    const confetti = document.createElement("div");
    confetti.className = "confetti";

    for (let i = 0; i < 60; i++) {

        const p = document.createElement("span");

        p.style.left = Math.random() * 100 + "%";

        p.style.background = [
            "#2ecc71",
            "#ffffff",
            "#e74c3c",
            "#f1c40f",
            "#3498db"
        ][Math.floor(Math.random() * 5)];

        p.style.animationDelay = Math.random() * 0.5 + "s";

        confetti.appendChild(p);

    }

    game.appendChild(confetti);

    setTimeout(function () {
        confetti.remove();
    }, 1800);

}
cheerSound.onended = function () {

    hero.classList.remove("heroDone");
    hero.style.display = "none";

    if (stage + 1 < heroes.length) {

        setTimeout(function () {

            showHero(stage + 1);

        }, 700);

    } else {

        questionBox.style.display = "none";

        bgMusic.pause();
        bgMusic.currentTime = 0;

        const cert = document.getElementById("certificate");
        cert.style.display = "block";

        document.getElementById("certName").innerHTML = playerName.value;

        nationalAnthem.currentTime = 0;
        nationalAnthem.play();

    }

};
cheerSound.onended = function () {

    hero.classList.remove("heroDone");
    hero.style.display = "none";

    if (stage + 1 < heroes.length) {

        setTimeout(function () {
            showHero(stage + 1);
        }, 700);

    } else {

        // پایان بازی
        questionBox.style.display = "none";

        bgMusic.pause();
        bgMusic.currentTime = 0;

        const cert = document.getElementById("certificate");
        cert.style.display = "block";

        document.getElementById("certName").innerHTML = playerName.value;

        nationalAnthem.currentTime = 0;
        nationalAnthem.play();

        nationalAnthem.onended = function () {

            const msg = document.getElementById("finalMessage");

            msg.style.display = "block";
            msg.style.opacity = "0";
            msg.style.transition = "opacity 1.5s";

            setTimeout(function () {
                msg.style.opacity = "1";
            }, 100);

        };

    }

};