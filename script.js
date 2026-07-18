/*==================================
 Proposal Website V2.0
 Premium Script.js
==================================*/

// ===== Elements =====

const pages = document.querySelectorAll(".page");
const loader = document.getElementById("loader");
const bgMusic = document.getElementById("bgMusic");

// ===== Loader =====

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000);

});

// ===== Background Music =====

document.body.addEventListener("click", () => {

    bgMusic.play().catch(() => {});

}, { once: true });

// ===== Page Navigation =====

function showPage(id){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

// ===== Love Timer =====

let timerStarted = false;

function startLoveTimer(){

    if(timerStarted) return;

    timerStarted = true;

    const start = new Date("2022-02-16T00:00:00");

    setInterval(() => {

        const now = new Date();

        const diff = now - start;

        const days = Math.floor(diff / 86400000);

        const hours = Math.floor((diff / 3600000) % 24);

        const minutes = Math.floor((diff / 60000) % 60);

        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("loveTimer").innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

    },1000);

}

// Timer Page Open

const oldShow = showPage;

showPage = function(id){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

    if(id==="timer"){

        startLoveTimer();

    }

    if(id==="letter"){

        typeLetter();

    }

};

// ===== Gallery =====

const photos=[

"images/1.jpg",

"images/2.jpg",

"images/3.jpg",

"images/4.jpg"

];

let current=0;

setInterval(()=>{

const img=document.getElementById("slider");

if(img){

current++;

if(current>=photos.length){

current=0;

}

img.src=photos[current];

}

},3000);

// ===== Typing Letter =====

const message=`Dear Malaika ❤️

Since the day you came into my life...

Everything became beautiful.

You are my happiness.

You are my smile.

You are my forever.

I Love You ❤️

Forever Yours,

Atif Rajput ❤️`;

let typed=false;

function typeLetter(){

if(typed) return;

typed=true;

const area=document.getElementById("typing");

let i=0;

const typing=setInterval(()=>{

area.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);

}

},35);

}

// ===== YES Button =====

document.getElementById("yes").onclick=()=>{

document.getElementById("finalMessage").innerHTML=

"❤️ Thank You Malaika ❤️<br>Forever Yours ❤️<br>Atif Rajput";

};

// ===== NO Button =====

const no=document.getElementById("no");

no.addEventListener("mouseenter",()=>{

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-100);

no.style.position="fixed";

no.style.left=x+"px";

no.style.top=y+"px";

});

// ===== Floating Hearts =====

const hearts=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.transition="8s linear";

hearts.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

},500);/*==================================
 Premium Effects
==================================*/

// ==========================
// Falling Roses
// ==========================

setInterval(() => {

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";

    rose.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    },9000);

},700);


// ==========================
// Twinkling Stars
// ==========================

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}


// ==========================
// Fireworks
// ==========================

function fireworks(){

    for(let i=0;i<120;i++){

        const spark=document.createElement("div");

        spark.innerHTML="✨";

        spark.style.position="fixed";

        spark.style.left=Math.random()*100+"vw";

        spark.style.top=Math.random()*100+"vh";

        spark.style.fontSize="24px";

        spark.style.pointerEvents="none";

        spark.style.transition="2s";

        spark.style.zIndex="99999";

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.style.transform="scale(3)";

            spark.style.opacity="0";

        },50);

        setTimeout(()=>{

            spark.remove();

        },2000);

    }

}


// ==========================
// YES Button Animation
// ==========================

document.getElementById("yes").addEventListener("click",()=>{

    fireworks();

    document.getElementById("finalMessage").innerHTML=`

❤️ I LOVE YOU MALAIKA ❤️

<br><br>

Thank You For Coming Into My Life

<br><br>

💖 Forever Together 💖

<br><br>

— Atif Rajput ❤️

`;

});


// ==========================
// Floating Love Quotes
// ==========================

const quotes=[

"❤️ I Love You",

"💕 Forever Together",

"🌹 My Queen",

"💍 You Are My World",

"🥰 My Happiness",

"❤️ Always Yours"

];

setInterval(()=>{

const q=document.createElement("div");

q.className="loveQuote";

q.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

q.style.left=Math.random()*90+"vw";

document.body.appendChild(q);

setTimeout(()=>{

q.remove();

},9000);

},3000);/*==================================
 Part 5 Final Premium
==================================*/

// ===== Floating Balloons =====

setInterval(() => {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const balloons = ["🎈","🎈","💖","❤️"];

    balloon.innerHTML = balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.left = Math.random()*100 + "vw";

    balloon.style.animationDuration = (6 + Math.random()*4) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    },10000);

},1200);


// ===== Music Button =====

const musicBtn=document.createElement("div");

musicBtn.id="musicBtn";

musicBtn.innerHTML="🎵";

document.body.appendChild(musicBtn);

musicBtn.onclick=()=>{

if(bgMusic.paused){

bgMusic.play();

musicBtn.innerHTML="🔊";

}else{

bgMusic.pause();

musicBtn.innerHTML="🔇";

}

};


// ===== YES Celebration =====

document.getElementById("yes").addEventListener("click",()=>{

for(let i=0;i<80;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize="30px";

heart.style.pointerEvents="none";

heart.style.transition="2s";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="scale(3)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},2000);

}

});


// ===== Birthday Message =====

const today=new Date();

if(today.getDate()==2 && today.getMonth()==10){

alert("🎂 Happy Birthday Malaika Javed ❤️");

}

if(today.getDate()==14 && today.getMonth()==9){

alert("🎂 Happy Birthday Atif Rajput ❤️");

}