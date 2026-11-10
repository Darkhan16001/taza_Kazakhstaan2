
"use strict";

// ====================================
// ТАЗА ҚАЗАҚСТАН
// 25 МИНУТ
// BY DARKHAN
// ====================================

const app = document.getElementById("app");

const teamNames = [
  "🌱 Жасыл әлем",
  "🌍 Эко ұрпақ",
  "🍃 Таза болашақ"
];

const scores = [0, 0, 0];

const natureImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85";

const photoIds = [
  "photo-1500534623283-312aade485b7",
  "photo-1441974231531-c6227db76b6e",
  "photo-1464822759023-fed622ff2c3b",
  "photo-1490750967868-88aa4486c946",
  "photo-1501854140801-50d01698950b",
  "photo-1470071459604-3b5ec3a7fe05",
  "photo-1472396961693-142e6e269027",
  "photo-1433086966358-54859d0ed716",
  "photo-1416879595882-3373a0480b5b",
  "photo-1501785888041-af3ef285b470",
  "photo-1469474968028-56623f02e42e"
];

const photos = photoIds.map(id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`
);

// ====================================
// САБАҚТЫҢ МАҚСАТЫ
// ====================================

const goals = [
  "«Таза Қазақстан» бастамасының маңызын түсіндіру.",
  "Қоршаған ортаны қорғауға және табиғатты аялауға тәрбиелеу.",
  "Экологиялық мәдениетті қалыптастыру.",
  "Тазалық сақтауға және туған жерге жауапкершілікпен қарауға баулу."
];

// ====================================
// 15 ТҮСІНДІРМЕ
// ====================================

const slides = [
  {
    title: "Таза Қазақстан дегеніміз не?",
    text: "«Таза Қазақстан» — қоршаған ортаны қорғауға, елді мекендердің тазалығын сақтауға және экологиялық мәдениетті дамытуға бағытталған бастама. Оның маңызы — әр азаматтың табиғатқа жауапкершілікпен қарауын қалыптастыру.",
    question: "«Таза Қазақстан» бастамасының негізгі мақсаты қандай?",
    answer: "Қоршаған ортаны қорғау, тазалық сақтау және экологиялық мәдениетті дамыту."
  },
  {
    title: "Табиғат — ортақ үйіміз",
    text: "Табиғат адамға ауа, су, азық-түлік және өмір сүруге қажетті ресурстар береді. Адам, өсімдік және жануарлар табиғи ортада өзара байланысты. Табиғатты сақтау — болашақты сақтау.",
    question: "Табиғатты неге ортақ үйіміз дейміз?",
    answer: "Өйткені барлық тіршілік иелері табиғи ортаға тәуелді."
  },
  {
    title: "Экологиялық мәдениет",
    text: "Экологиялық мәдениет дегеніміз — табиғатқа жауапкершілікпен қарау. Суды үнемдеу, қоқысты арнайы орынға тастау және өсімдіктерді қорғау осы мәдениеттің күнделікті көріністері.",
    question: "Экологиялық мәдениетке үш мысал келтір.",
    answer: "Суды үнемдеу, қоқысты дұрыс тастау және ағаштарды қорғау."
  },
  {
    title: "Қоршаған ортаның ластануы",
    text: "Көлік шығарындылары, өндіріс және тұрмыстық қалдықтар ауаны, суды және топырақты ластауы мүмкін. Ластану адам денсаулығына және табиғи тіршілік ортасына зиян келтіреді.",
    question: "Қоршаған ортаны ластайтын факторларды ата.",
    answer: "Көлік шығарындылары, өндіріс және тұрмыстық қалдықтар."
  },
  {
    title: "Таза ауа — денсаулық кепілі",
    text: "Ауа сапасы адам денсаулығы үшін маңызды. Қоғамдық көлікті пайдалану, энергияны үнемдеу және зиянды шығарындыларды азайту ауаның ластануын төмендетуге көмектеседі.",
    question: "Ауаның тазалығын қалай сақтауға болады?",
    answer: "Шығарындыларды азайту, қоғамдық көлікті пайдалану және энергияны үнемдеу арқылы."
  },
  {
    title: "Су — тіршілік көзі",
    text: "Су — барлық тіршілік иелеріне қажетті ресурс. Суды үнемдеу, өзен-көлдерді ластамау және су құбырларындағы ақауларды уақытында жөндеу табиғатты қорғауға көмектеседі.",
    question: "Суды үнемдеудің екі жолын ата.",
    answer: "Кранды жабу және су ағатын құбырларды жөндеу."
  },
  {
    title: "Қалдықтарды сұрыптау",
    text: "Қағаз, пластик, шыны және металды бөлек жинау оларды қайта өңдеуге мүмкіндік береді. Қайта өңдеу табиғи ресурстарды үнемдеуге және қалдық көлемін азайтуға ықпал етеді.",
    question: "Қалдықтарды сұрыптаудың пайдасы қандай?",
    answer: "Қайта өңдеуді жеңілдетеді және ресурстарды үнемдеуге көмектеседі."
  },
  {
    title: "Ағаш отырғызу",
    text: "Ағаштар көлеңке береді, тіршілік иелеріне мекен болады және қоршаған ортаны жақсартады. Көшет отырғызумен қатар оны уақытында суарып, күтіп-баптау маңызды.",
    question: "Ағаш отырғызғаннан кейін не істеу керек?",
    answer: "Оны суару, қорғау және күтіп-баптау керек."
  },
  {
    title: "Жасыл энергия",
    text: "Күн, жел және су энергиясы жаңартылатын энергия көздеріне жатады. Оларды қолдану қазба отынға тәуелділікті азайтуға көмектеседі. Электр қуатын үнемдеу де маңызды.",
    question: "Жаңартылатын энергия көздерін ата.",
    answer: "Күн, жел және су энергиясы."
  },
  {
    title: "Оқу орнындағы тазалық",
    text: "Кабинеттерді, дәліздерді және ортақ орындарды таза ұстау — барлығымыздың міндетіміз. Қоқысты арнайы жәшікке тастау, оқу мүлкін күту және тазалық шараларына қатысу мәдениеттілікті көрсетеді.",
    question: "Оқу орнын таза ұстауға қалай үлес қосуға болады?",
    answer: "Қоқысты дұрыс тастау, ортақ мүлікті күту және тазалық шараларына қатысу арқылы."
  },
  {
    title: "Қоғамдық орындардың тазалығы",
    text: "Саябақтар, көшелер, аялдамалар және демалыс орындары барлық азаматтарға ортақ. Қоғамдық орындарды таза ұстау — өзгелерді құрметтеудің бір белгісі.",
    question: "Қоғамдық орындарды неге таза сақтауымыз керек?",
    answer: "Барлық адам үшін таза әрі жайлы орта қалыптастыру үшін."
  },
  {
    title: "Пластик қалдықтары",
    text: "Пластиктің кейбір түрлері табиғатта ұзақ уақыт сақталады. Қайта пайдаланылатын сөмке, бөтелке және ыдыстар бірреттік қалдықтарды азайтуға көмектеседі.",
    question: "Пластик қалдықтарын азайтудың жолдарын ата.",
    answer: "Қайта пайдаланылатын сөмкелер мен бөтелкелер қолдану."
  },
  {
    title: "Экологиялық жауапкершілік",
    text: "Экологиялық жауапкершілік — адамның өз әрекетінің табиғатқа әсерін түсінуі. Суды және электр қуатын үнемдеу, қоршаған ортаны ластамау — жауапты азаматтың әдеттері.",
    question: "Экологиялық жауапкершілік нені білдіреді?",
    answer: "Табиғатқа саналы қарау және өз әрекетіне жауап беру."
  },
  {
    title: "Жастардың экологиядағы рөлі",
    text: "Жастар тазалық акцияларын ұйымдастырып, ағаш отырғызып, қалдықтарды сұрыптау жобаларына қатыса алады. Әрбір пайдалы бастама қоршаған ортаны жақсартуға ықпал етеді.",
    question: "Жастар қандай экологиялық жоба ұйымдастыра алады?",
    answer: "Тазалық акциясы, көгалдандыру немесе қалдықтарды сұрыптау жобасы."
  },
  {
    title: "Таза болашақ — өз қолымызда",
    text: "Таза Қазақстан әр адамның күнделікті әрекетінен басталады. Табиғатты қорғау бір күндік жұмыс емес, тұрақты өмірлік ұстаным болуы қажет.",
    question: "Таза Қазақстанды қалыптастыру неден басталады?",
    answer: "Әр адамның жауапты әрекетінен және күнделікті тазалық сақтауынан."
  }
];

// ====================================
// БЕЙНЕМАТЕРИАЛДАР
// ====================================

// Егер YouTube видеосы ендіруге рұқсат
// бермесе, сыртқы батырма арқылы ашылады.
// Бейне ID-лерін сабақ алдында тексеріңіз.

const videos = [
  {
    after: 3,
    title: "Таза Қазақстан — жастар белсенділігі",
    id: "9fAOrIKAyXA",
    question: "Жастардың экологиялық бастамаларға қатысуы не үшін маңызды?"
  },
  {
    after: 8,
    title: "Таза Қазақстан — оқушылардың үлесі",
    id: "hK52kmLBPDc",
    question: "Тазалықты сақтауда оқушылардың қандай рөлі бар?"
  },
  {
    after: 12,
    title: "Қоқысты сұрыптау",
    id: "v7hIijVb8sQ",
    question: "Қалдықтарды бөлек жинаудың артықшылығы неде?"
  }
];

// ====================================
// 15 АУЫЗША ОЙЫН СҰРАҒЫ
// ====================================

const questions = [
  {
    q: "«Таза Қазақстан» бастамасының негізгі мақсаты қандай?",
    a: "Қоршаған ортаны қорғау, тазалық сақтау және экологиялық мәдениетті дамыту."
  },
  {
    q: "Табиғатты қорғау неге әр адамның міндеті?",
    a: "Өйткені барлық адам таза табиғи ортаға және оның ресурстарына тәуелді."
  },
  {
    q: "Экологиялық мәдениет дегеніміз не?",
    a: "Табиғатқа саналы әрі жауапкершілікпен қарау."
  },
  {
    q: "Қоршаған ортаның ластануына не себеп болады?",
    a: "Көлік шығарындылары, өндіріс және тұрмыстық қалдықтар."
  },
  {
    q: "Суды үнемдеудің үш жолын ата.",
    a: "Кранды жабу, құбыр ақауларын жөндеу және суды қажетіне қарай пайдалану."
  },
  {
    q: "Қалдықтарды сұрыптау не үшін қажет?",
    a: "Қайта өңдеуді жеңілдету және табиғи ресурстарды үнемдеу үшін."
  },
  {
    q: "Ағаш отырғызудың қандай пайдасы бар?",
    a: "Көгалдандыруға, табиғи мекендерді сақтауға және қолайлы орта қалыптастыруға көмектеседі."
  },
  {
    q: "Жаңартылатын энергия көздерінің үш түрін ата.",
    a: "Күн, жел және су энергиясы."
  },
  {
    q: "Оқу орнын таза ұстау үшін не істеу керек?",
    a: "Қоқысты арнайы жәшікке тастау, ортақ мүлікті күту және тазалық сақтау."
  },
  {
    q: "Қоғамдық орындарды таза сақтау неге маңызды?",
    a: "Барлық адамға таза, қауіпсіз және жайлы орта қалыптастыру үшін."
  },
  {
    q: "Пластик қалдықтарын қалай азайтуға болады?",
    a: "Қайта пайдаланылатын сөмкелер, бөтелкелер және ыдыстар қолдану арқылы."
  },
  {
    q: "Экологиялық жауапкершілікке үш мысал келтір.",
    a: "Суды үнемдеу, қоқысты дұрыс тастау және электр қуатын үнемдеу."
  },
  {
    q: "Жастар табиғатты қорғауға қалай үлес қоса алады?",
    a: "Тазалық акцияларына, көгалдандыруға және экологиялық жобаларға қатысу арқылы."
  },
  {
    q: "Таза табиғи орта адам денсаулығына қалай әсер етеді?",
    a: "Таза ауа мен қауіпсіз су денсаулықты сақтауға көмектеседі."
  },
  {
    q: "Қазақстанды таза елге айналдыру үшін әр адам не істеуі керек?",
    a: "Табиғатты қорғау, ресурстарды үнемдеу және айналасын таза ұстау."
  }
];

// ====================================
// БЕТТЕРДІҢ РЕТІ
// ====================================

const sequence = [];

slides.forEach((slide, index) => {
  sequence.push({
    type: "slide",
    index
  });

  videos.forEach((video, videoIndex) => {
    if (video.after === index) {
      sequence.push({
        type: "video",
        index: videoIndex
      });
    }
  });
});

// ====================================
// САЙТ КҮЙІ
// ====================================

let view = "home";
let slideIndex = 0;
let gameIndex = 0;

// Топтар әр сұраққа бір рет таңдалады.
const selectedTeams = {};

// Түсіндірмедегі ашылған жауаптар.
const slideAnswers = {};

// Ойындағы ашылған жауаптар.
const revealedAnswers = {};

// Бағаланған сұрақтар.
const gradedAnswers = {};

// ====================================
// 25 МИНУТТЫҚ ТАЙМЕР
// ====================================

let timeLeft = 25 * 60;
let running = false;
let timerInterval = null;
let timerEnd = null;

function updateClock() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;

  document.getElementById("clock").textContent =
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0");

  document.getElementById("timerButton").textContent =
    running ? "Ⅱ" : "▶";
}

function tickTimer() {
  if (!running || timerEnd === null) return;

  timeLeft = Math.max(
    0,
    Math.ceil((timerEnd - Date.now()) / 1000)
  );

  if (timeLeft === 0) {
    running = false;
    clearInterval(timerInterval);
    timerInterval = null;
    timerEnd = null;
  }

  updateClock();
}

function startTimer() {
  if (running || timeLeft === 0) return;

  running = true;
  timerEnd = Date.now() + timeLeft * 1000;

  timerInterval = setInterval(tickTimer, 250);

  updateClock();
}

function pauseTimer() {
  if (running) tickTimer();

  running = false;
  clearInterval(timerInterval);
  timerInterval = null;
  timerEnd = null;

  updateClock();
}

function toggleTimer() {
  if (running) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// ====================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ====================================

function card(title, content) {
  return `
    <div class="card">
      <h2>${title}</h2>
      ${content}
    </div>
  `;
}

function progress(current, total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${current / total * 100}%">
      </div>
    </div>
  `;
}

function scrollTopPage() {
  window.scrollTo(0, 0);
}

function photoError(image) {
  image.style.display = "none";
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.();
  }
}

function updateRail() {
  const labels = {
    home: "БАСТЫ БЕТ",
    lesson: "ТҮСІНДІРМЕ",
    game: "КОМАНДАЛЫҚ ОЙЫН",
    final: "ҚОРЫТЫНДЫ",
    goodbye: "АЯҚТАЛДЫ"
  };

  document.getElementById("phaseLabel").textContent =
    labels[view];

  document.getElementById("backButton").disabled =
    view === "home";

  const nextButton =
    document.getElementById("nextButton");

  nextButton.disabled =
    view === "goodbye" ||
    (
      view === "game" &&
      gradedAnswers[gameIndex] === undefined
    );
}

// ====================================
// БІРІНШІ БЕТ
// ====================================

function showHome() {
  view = "home";

  app.innerHTML = `
    <section class="hero page-enter">

      <div>
        <div class="eyebrow">
          ТАБИҒАТ · ТАЗАЛЫҚ · ЖАУАПКЕРШІЛІК
        </div>

        <h1>
          ТАЗА<br>
          <span>ҚАЗАҚСТАН</span>
        </h1>

        <p>
          Жасыл табиғат — жарқын болашақ!
          Интерактивті ашық тәрбие сағаты.
        </p>

        <div class="lesson-goal">
          <h2>🎯 Сабақтың мақсаты</h2>

          <p>
            Табиғатты қорғау,
            қоршаған ортаны таза ұстау
            және экологиялық мәдениетті
            дамыту.
          </p>

          <ul>
            ${goals.map(goal =>
              `<li>${goal}</li>`
            ).join("")}
          </ul>
        </div>

        <div class="actions">
          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>
        </div>

        <div class="stats">
          <div>
            <b>25</b>
            <small>Минут</small>
          </div>

          <div>
            <b>15</b>
            <small>Түсіндірме</small>
          </div>

          <div>
            <b>3</b>
            <small>Видео</small>
          </div>

          <div>
            <b>3</b>
            <small>Команда</small>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="${natureImage}"
          alt="Жасыл табиғат"
          onerror="photoError(this)">

        <div class="hero-quote">
          Табиғатты қорғайық!<br>
          Болашақты сақтайық!
        </div>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ====================================
// ТҮСІНДІРМЕЛЕР
// ====================================

function showSlide(index) {
  slideIndex = Math.max(
    0,
    Math.min(index, sequence.length - 1)
  );

  view = "lesson";
  renderLesson();

  if (!running && timeLeft === 25 * 60) {
    startTimer();
  }
}

function renderLesson() {
  const item = sequence[slideIndex];

  if (item.type === "video") {
    renderVideo(item.index);
    return;
  }

  const slide = slides[item.index];
  const image = photos[item.index % photos.length];

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        ТҮСІНДІРМЕ · ${item.index + 1}/15
      </div>

      <h1 class="section-title">
        ${slide.title}
      </h1>

      ${progress(slideIndex + 1, sequence.length)}

      <img
        class="slide-image"
        src="${image}"
        alt="${slide.title}"
        loading="lazy"
        onerror="photoError(this)">

      ${card(
        "📖 Тақырыпты түсіндіру",
        `<p>${slide.text}</p>`
      )}

      ${card(
        "🎤 Ауызша сұрақ",
        `
          <p>${slide.question}</p>

          <div class="actions">
            <button class="btn primary"
                    onclick="toggleSlideAnswer(${item.index})">
              ${
                slideAnswers[item.index]
                  ? "Жауапты жасыру"
                  : "👁 Жауапты көрсету"
              }
            </button>
          </div>

          ${
            slideAnswers[item.index]
              ? `<div class="answer-box">
                   <strong>Үлгі жауап:</strong>
                   <p>${slide.answer}</p>
                 </div>`
              : ""
          }
        `
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="nextSlide()">
          Келесі бет →
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

function toggleSlideAnswer(index) {
  slideAnswers[index] = !slideAnswers[index];
  renderLesson();
}

// ====================================
// ВИДЕОЛАР
// ====================================

function renderVideo(index) {
  const video = videos[index];

  const url =
    `https://www.youtube.com/watch?v=${video.id}`;

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        БЕЙНЕМАТЕРИАЛ · ${index + 1}/3
      </div>

      <h1 class="section-title">
        🎬 ${video.title}
      </h1>

      ${progress(slideIndex + 1, sequence.length)}

      ${card(
        "▶ Бейнематериал",
        `
          <iframe
            class="video-frame"
            src="https://www.youtube-nocookie.com/embed/${video.id}"
            title="${video.title}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>

          <div class="actions">
            <a
              class="btn primary"
              href="${url}"
              target="_blank"
              rel="noopener noreferrer">
              ▶ YouTube-та ашу
            </a>
          </div>

          <p>
            Егер видео сайт ішінде
            ашылмаса, YouTube батырмасын
            пайдаланыңдар.
          </p>
        `
      )}

      ${card(
        "🎤 Талқылау сұрағы",
        `<p>${video.question}</p>`
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="nextSlide()">
          Келесі бет →
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

function nextSlide() {
  if (slideIndex < sequence.length - 1) {
    showSlide(slideIndex + 1);
  } else {
    showGame(0);
  }
}

function previousSlide() {
  if (slideIndex > 0) {
    showSlide(slideIndex - 1);
  } else {
    showHome();
  }
}

// ====================================
// АВТОМАТТЫ ТОП ТАҢДАУ
// ====================================

// Топтарды кездейсоқ ретпен таңдаймыз.
// Әр үш сұрақ сайын үш команданың
// әрқайсысына бір мүмкіндік беріледі.

function shuffledTeams() {
  const teams = [0, 1, 2];

  for (let i = teams.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [teams[i], teams[j]] =
      [teams[j], teams[i]];
  }

  return teams;
}

const teamOrder = [];

for (let i = 0; i < 5; i++) {
  teamOrder.push(...shuffledTeams());
}

function getTeamForQuestion(index) {
  return teamOrder[index];
}

// ====================================
// ҰПАЙЛАРДЫ КӨРСЕТУ
// ====================================

function teamCards() {
  const selected =
    view === "game"
      ? getTeamForQuestion(gameIndex)
      : -1;

  return `
    <div class="teams">
      ${teamNames.map((name, index) => `
        <div class="team ${
          selected === index ? "selected" : ""
        }">

          <h3>${name}</h3>

          <div class="score">
            ${scores[index]}
          </div>

          <small>ұпай</small>

        </div>
      `).join("")}
    </div>
  `;
}

// ====================================
// КОМАНДАЛЫҚ ОЙЫНДЫ БАСТАУ
// ====================================

function showGame(index) {
  gameIndex = Math.max(
    0,
    Math.min(index, questions.length - 1)
  );

  view = "game";
  renderGame();

  if (!running && timeLeft === 25 * 60) {
    startTimer();
  }
}

// ====================================
// АУЫЗША СҰРАҚ-ЖАУАП ОЙЫНЫ
// ====================================

function renderGame() {
  const question = questions[gameIndex];

  const team = getTeamForQuestion(gameIndex);
  const teamName = teamNames[team];

  const isRevealed =
    revealedAnswers[gameIndex] === true;

  const result = gradedAnswers[gameIndex];

  const isGraded = result !== undefined;

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН · ${gameIndex + 1}/15
      </div>

      <h1 class="section-title">
        🏆 Экологиялық сайыс
      </h1>

      ${progress(gameIndex + 1, questions.length)}

      <div class="random-team">
        <small>
          🎲 АВТОМАТТЫ ТАҢДАЛҒАН КОМАНДА
        </small>

        <strong>
          ${teamName}
        </strong>

        <p>
          Сұраққа осы команда жауап береді.
        </p>
      </div>

      ${card(
        `🧠 ${gameIndex + 1}-сұрақ`,
        `
          <p class="question-text">
            ${question.q}
          </p>

          <p>
            Команда сұраққа ауызша
            жауап береді.
          </p>

          <div class="actions">
            <button
              class="btn primary"
              onclick="revealGameAnswer()"
              ${isRevealed ? "disabled" : ""}>
              👁 Жауапты көрсету
            </button>
          </div>

          ${
            isRevealed
              ? `<div class="answer-box">
                   <strong>
                     ✅ Дұрыс жауап:
                   </strong>
                   <p>${question.a}</p>
                 </div>`
              : ""
          }
        `
      )}

      ${
        isRevealed && !isGraded
          ? card(
              "🎯 Команданың жауабын бағалау",
              `
                <p>
                  <strong>${teamName}</strong>
                  командасының жауабы дұрыс па?
                </p>

                <div class="answer-actions">

                  <button
                    class="btn primary"
                    onclick="markAnswer(true)">
                    ✅ Жауап дұрыс
                  </button>

                  <button
                    class="btn danger"
                    onclick="markAnswer(false)">
                    ❌ Жауап қате
                  </button>

                </div>
              `
            )
          : ""
      }

      ${
        isGraded
          ? `<div class="feedback ${
                result.correct ? "" : "wrong"
              }">

                ${
                  result.correct
                    ? `✅ ${teamName} командасына +1 ұпай берілді!`
                    : `❌ ${teamName} командасына ұпай берілмеді.`
                }

             </div>`
          : ""
      }

      ${card(
        "🏅 Командалардың ұпайлары",
        teamCards()
      )}

      <div class="actions">
        <button
          class="btn primary"
          onclick="nextGame()"
          ${!isGraded ? "disabled" : ""}>

          ${
            gameIndex === questions.length - 1
              ? "Қорытынды нәтижелер →"
              : "Келесі сұрақ →"
          }

        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ====================================
// ЖАУАПТЫ КӨРСЕТУ
// ====================================

function revealGameAnswer() {
  revealedAnswers[gameIndex] = true;
  renderGame();
}

// ====================================
// АВТОМАТТЫ ҰПАЙ БЕРУ
// ====================================

function markAnswer(isCorrect) {
  // Екі рет ұпай берілмейді.
  if (gradedAnswers[gameIndex] !== undefined) {
    return;
  }

  // Алдымен дұрыс жауапты ашу қажет.
  if (!revealedAnswers[gameIndex]) {
    return;
  }

  const team = getTeamForQuestion(gameIndex);

  gradedAnswers[gameIndex] = {
    team: team,
    correct: isCorrect
  };

  if (isCorrect) {
    // Дұрыс жауап: +1 ұпай.
    scores[team] += 1;
  }

  // Қате жауап: 0 ұпай.
  renderGame();
}

// ====================================
// КЕЛЕСІ СҰРАҚ
// ====================================

function nextGame() {
  if (gradedAnswers[gameIndex] === undefined) {
    return;
  }

  if (gameIndex < questions.length - 1) {
    showGame(gameIndex + 1);
  } else {
    showFinal();
  }
}

function previousGame() {
  if (gameIndex > 0) {
    showGame(gameIndex - 1);
  } else {
    showSlide(sequence.length - 1);
  }
}

// ====================================
// ҚОРЫТЫНДЫ
// ====================================

function showFinal() {
  pauseTimer();

  view = "final";

  const maxScore = Math.max(...scores);

  const winners = scores
    .map((score, index) => ({
      name: teamNames[index],
      score
    }))
    .filter(item => item.score === maxScore);

  let winnerText = "Ұпай берілген жоқ";

  if (maxScore > 0) {
    winnerText = winners.length === 1
      ? `${winners[0].name} — жеңімпаз!`
      : "Тең нәтиже: " +
        winners.map(item => item.name).join(", ");
  }

  const graded = Object.values(gradedAnswers);

  const correctCount = graded.filter(
    item => item.correct
  ).length;

  const wrongCount = graded.length - correctCount;

  app.innerHTML = `
    <section class="page-enter">

      <div class="eyebrow">
        САБАҚТЫҢ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="section-title">
        🏆 Қорытынды нәтижелер
      </h1>

      ${card(
        "Командалардың ұпайлары",
        teamCards()
      )}

      ${card(
        "🎉 Жеңімпаз",
        `<div class="winner">${winnerText}</div>`
      )}

      ${card(
        "Ойын статистикасы",
        `
          <p>
            Барлық сұрақтар: ${questions.length}
          </p>

          <p>
            Дұрыс жауаптар: ${correctCount}
          </p>

          <p>
            Қате жауаптар: ${wrongCount}
          </p>

          <p>
            Жауап берілген сұрақтар:
            ${graded.length}
          </p>
        `
      )}

      ${card(
        "🌿 Сабақты қорытындылау",
        `
          <p>
            Біз табиғатты қорғаудың,
            қоршаған ортаны таза ұстаудың
            және экологиялық мәдениеттің
            маңызын талқыладық.
          </p>

          <p>
            Әр команда «Таза Қазақстанға
            қандай үлес қоса аламыз?»
            деген сұраққа өз ойын
            ауызша айтып берсін.
          </p>
        `
      )}

      <div class="actions">
        <button class="btn primary"
                onclick="showGoodbye()">
          Сабақты аяқтау →
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ====================================
// СОҢҒЫ БЕТ
// ====================================

function showGoodbye() {
  pauseTimer();

  view = "goodbye";

  app.innerHTML = `
    <section
      class="page-enter"
      style="text-align:center;padding:60px 0">

      <div style="font-size:75px">
        🌿🇰🇿
      </div>

      <h1 class="section-title">
        Назарларыңызға рақмет!
      </h1>

      <p style="
        font-size:24px;
        line-height:1.8;
      ">
        Табиғатты қорғайық!<br>
        Қазақстанымызды таза ұстайық!
      </p>

      <h2 style="color:var(--green)">
        Сау болыңыздар!
      </h2>

      <p>BY DARKHAN</p>

      <div class="actions">
        <button class="btn primary"
                onclick="showHome()">
          Басты бетке оралу
        </button>
      </div>

    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ====================================
// ОҢ ЖАҚТАҒЫ БАТЫРМАЛАР
// ====================================

function goNext() {
  if (view === "home") {
    showSlide(0);
  }

  else if (view === "lesson") {
    nextSlide();
  }

  else if (view === "game") {
    nextGame();
  }

  else if (view === "final") {
    showGoodbye();
  }
}

function goBack() {
  if (view === "lesson") {
    previousSlide();
  }

  else if (view === "game") {
    previousGame();
  }

  else if (view === "final") {
    showGame(questions.length - 1);
  }

  else if (view === "goodbye") {
    showFinal();
  }
}

// ====================================
// САЙТТЫ ІСКЕ ҚОСУ
// ====================================

updateClock();
showHome();
