
"use strict";

// ========================================
// ТАЗА ҚАЗАҚСТАН
// АШЫҚ ТӘРБИЕ САҒАТЫ
// 1-26 ТОБЫ | 45 МИНУТ
// BY DARKHAN
// ========================================

const app = document.getElementById("app");

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

// ========================================
// САБАҚТЫҢ МАҚСАТЫ
// ========================================

const goals = [
  "«Таза Қазақстан» бастамасының маңызын түсіндіру.",
  "Табиғатты қорғауға және қоршаған ортаны таза ұстауға тәрбиелеу.",
  "Экологиялық мәдениет пен азаматтық жауапкершілікті қалыптастыру.",
  "Туған жерге сүйіспеншілік пен жанашырлық сезімін арттыру."
];

// ========================================
// 15 ТҮСІНДІРМЕ
// ========================================

const slides = [
  {
    title: "Таза Қазақстан дегеніміз не?",
    text: "«Таза Қазақстан» — қоршаған ортаны қорғауға, елді мекендердің тазалығын сақтауға және халықтың экологиялық мәдениетін арттыруға бағытталған бастама. Оның негізгі мақсаты — әр азаматтың табиғатқа жауапкершілікпен қарауын қалыптастыру. Тазалық бір күндік жұмыс емес, күнделікті пайдалы әдет.",
    question: "«Таза Қазақстан» бастамасының маңызы неде?",
    answer: "Қоршаған ортаны қорғауға, қоғамдық тазалықты сақтауға және экологиялық мәдениетті дамытуға көмектеседі."
  },
  {
    title: "Табиғат — ортақ үйіміз",
    text: "Табиғат адамға ауа, су, азық-түлік және тіршілікке қажетті ресурстар береді. Адам, өсімдіктер және жануарлар табиғи ортада өзара байланысты. Табиғатты қорғау — адамзаттың болашағын қорғау.",
    question: "Неліктен табиғатты ортақ үйіміз деп атаймыз?",
    answer: "Өйткені барлық тіршілік иелері табиғатқа тәуелді және бір ортада өмір сүреді."
  },
  {
    title: "Экологиялық мәдениет",
    text: "Экологиялық мәдениет — адамның қоршаған ортаға жауапкершілікпен қарауы. Қоқысты дұрыс тастау, суды үнемдеу және табиғатты бүлдірмеу осы мәдениеттің белгілері болып саналады.",
    question: "Экологиялық мәдениеттің үш белгісін ата.",
    answer: "Қоқысты дұрыс жинау, суды үнемдеу және өсімдіктерді қорғау."
  },
  {
    title: "Қоршаған ортаның ластануы",
    text: "Өндіріс, көлік шығарындылары және тұрмыстық қалдықтар қоршаған ортаны ластауы мүмкін. Ластану ауа, су және топырақ сапасына әсер етеді. Сондықтан ластанудың алдын алу маңызды.",
    question: "Қоршаған ортаның ластануына не себеп болады?",
    answer: "Көлік шығарындылары, өндіріс және тұрмыстық қалдықтар."
  },
  {
    title: "Ауаның тазалығы",
    text: "Таза ауа адам денсаулығы үшін қажет. Қоғамдық көлікті қолдану, энергияны үнемдеу және шығарындыларды азайту ауаның сапасын жақсартуға көмектеседі.",
    question: "Ауаның ластануын қалай азайтуға болады?",
    answer: "Қоғамдық көлікті пайдалану, энергияны үнемдеу және зиянды шығарындыларды азайту арқылы."
  },
  {
    title: "Су — тіршілік көзі",
    text: "Су адамға, жануарларға және өсімдіктерге қажет. Суды үнемдеу, су көздерін ластамау және су құбырларындағы ақауларды жөндеу — табиғатты қорғаудың маңызды жолдары.",
    question: "Суды үнемдеудің қандай жолдарын білесің?",
    answer: "Кранды жабу, су ағатын құбырларды жөндеу және суды қажетіне қарай пайдалану."
  },
  {
    title: "Қалдықтарды сұрыптау",
    text: "Қағазды, пластикті, шыныны және металды бөлек жинау оларды қайта өңдеуге көмектеседі. Бұл табиғи ресурстарды үнемдеуге және қалдықтардың қоршаған ортаға әсерін азайтуға ықпал етеді.",
    question: "Қалдықтарды сұрыптау не үшін қажет?",
    answer: "Оларды қайта өңдеуді жеңілдету және табиғи ресурстарды үнемдеу үшін."
  },
  {
    title: "Ағаш отырғызу",
    text: "Ағаштар көлеңке береді, тіршілік иелеріне мекен болады және табиғи ортаны жақсартуға көмектеседі. Отырғызылған көшеттерді уақытында суарып, күтіп-баптау қажет.",
    question: "Ағаш отырғызғаннан кейін не істеу керек?",
    answer: "Оны суарып, қорғап, дұрыс күту қажет."
  },
  {
    title: "Жасыл энергия",
    text: "Күн, жел және су энергиясы жаңартылатын энергия көздері болып саналады. Мұндай энергия көздерін пайдалану қазба отынға тәуелділікті азайтуға көмектеседі.",
    question: "Жаңартылатын энергия көздерін ата.",
    answer: "Күн, жел және су энергиясы."
  },
  {
    title: "Колледждегі тазалық",
    text: "Колледж — студенттердің ортақ білім алу ортасы. Кабинеттерді таза ұстау, қоқысты арнайы орындарға тастау және оқу құралдарын күту — мәдениетті студенттің міндеті.",
    question: "Колледжімізді таза ұстау үшін не істеуге болады?",
    answer: "Қоқысты дұрыс жинау, ортақ мүлікті күту және тазалық шараларына қатысу."
  },
  {
    title: "Қоғамдық орындардың тазалығы",
    text: "Саябақтар, аялдамалар, көшелер және демалыс орындары барлығымызға ортақ. Бұл жерлерді таза ұстау — басқа адамдарға құрмет көрсетудің бір жолы.",
    question: "Қоғамдық орындарды неге таза ұстау керек?",
    answer: "Адамдарға қауіпсіз, таза және қолайлы орта қалыптастыру үшін."
  },
  {
    title: "Пластик қалдықтары",
    text: "Кейбір пластик қалдықтары табиғатта ұзақ сақталады. Қайта пайдаланылатын сөмке, ыдыс және бөтелке қолдану бірреттік қалдықтарды азайтуға көмектеседі.",
    question: "Пластик қалдықтарын қалай азайтуға болады?",
    answer: "Қайта пайдаланылатын сөмкелер мен бөтелкелер қолдану арқылы."
  },
  {
    title: "Экологиялық жауапкершілік",
    text: "Экологиялық жауапкершілік — өз әрекетіңнің табиғатқа әсерін түсіну. Суды үнемдеу, қоршаған ортаны ластамау және табиғатты қорғау — жауапты азаматтың әдеттері.",
    question: "Экологиялық жауапкершілік дегеніміз не?",
    answer: "Қоршаған ортаға саналы қарау және өз әрекетінің табиғатқа әсерін түсіну."
  },
  {
    title: "Жастардың экологиядағы рөлі",
    text: "Жастар тазалық акцияларына қатыса алады, экологиялық жобалар ұйымдастырып, өз ортасына пайдалы бастамалар ұсына алады. Әрбір студент табиғатты қорғауға үлес қоса алады.",
    question: "Жастар қандай экологиялық шаралар ұйымдастыра алады?",
    answer: "Тазалық акцияларын, көгалдандыру және қалдықтарды сұрыптау жобаларын."
  },
  {
    title: "Таза болашақ — өз қолымызда",
    text: "Таза Қазақстан әр адамның күнделікті әрекетінен басталады. Табиғатты қорғау, ресурстарды үнемдеу және қоғамдық тазалық сақтау — ортақ болашағымызға қосқан үлес.",
    question: "Таза Қазақстанды қалыптастыру неден басталады?",
    answer: "Әр адамның саналы және жауапты әрекетінен басталады."
  }
];

// ========================================
// 3 YOUTUBE ВИДЕО
// ========================================

const videos = [
  {
    after: 3,
    title: "Таза Қазақстан — жастар белсенділігі",
    id: "9fAOrIKAyXA",
    url: "https://www.youtube.com/watch?v=9fAOrIKAyXA",
    question: "Жастар табиғатты қорғауға қалай үлес қосып жатыр?"
  },
  {
    after: 8,
    title: "Таза Қазақстан — оқушылардың үлесі",
    id: "hK52kmLBPDc",
    url: "https://www.youtube.com/watch?v=hK52kmLBPDc",
    question: "Видеодан қандай пайдалы әрекеттерді байқадыңдар?"
  },
  {
    after: 12,
    title: "Қоқысты сұрыптау",
    id: "v7hIijVb8sQ",
    url: "https://www.youtube.com/watch?v=v7hIijVb8sQ",
    question: "Қалдықтарды сұрыптау не үшін маңызды?"
  }
];

// ========================================
// 15 АУЫЗША СҰРАҚ
// ========================================

const questions = [
  {
    q: "«Таза Қазақстан» бастамасының негізгі мақсаты қандай?",
    a: "Қоршаған ортаны қорғау, қоғамдық тазалық сақтау және экологиялық мәдениетті қалыптастыру."
  },
  {
    q: "Табиғатты қорғау неліктен әр азаматтың міндеті?",
    a: "Өйткені барлық адам табиғат ресурстарын пайдаланады және таза ортаға мұқтаж."
  },
  {
    q: "Экологиялық мәдениет дегеніміз не?",
    a: "Адамның табиғатқа саналы, ұқыпты және жауапкершілікпен қарауы."
  },
  {
    q: "Ауаның ластануына қандай факторлар әсер етеді?",
    a: "Көлік шығарындылары, өндіріс орындары және отын жағу сияқты факторлар."
  },
  {
    q: "Суды үнемдеудің үш жолын ата.",
    a: "Кранды уақытында жабу, құбыр ақауларын жөндеу, суды қажетіне қарай пайдалану."
  },
  {
    q: "Қалдықтарды сұрыптау не үшін қажет?",
    a: "Қайта өңдеуге көмектесу, қалдық көлемін азайту және ресурстарды үнемдеу үшін."
  },
  {
    q: "Ағаш отырғызудың қоршаған ортаға қандай пайдасы бар?",
    a: "Табиғи мекендерді сақтауға, көгалдандыруға және қолайлы орта қалыптастыруға көмектеседі."
  },
  {
    q: "Жаңартылатын энергия көздерін ата.",
    a: "Күн, жел және су энергиясы."
  },
  {
    q: "Колледжіміздің тазалығын жақсарту үшін қандай ұсыныс айтар едің?",
    a: "Қалдықтарды сұрыптау, кабинеттерді таза ұстау, студенттер арасында экологиялық акция ұйымдастыру."
  },
  {
    q: "Қоғамдық орындарды таза сақтау неліктен маңызды?",
    a: "Барлық адамға таза, қауіпсіз және жайлы орта қалыптастыру үшін."
  },
  {
    q: "Пластик қалдықтарының көлемін қалай азайтуға болады?",
    a: "Қайта пайдаланылатын заттарды қолдану және бірреттік пластикті азайту арқылы."
  },
  {
    q: "Экологиялық жауапкершілікке үш мысал келтір.",
    a: "Суды үнемдеу, қоқысты дұрыс тастау және электр қуатын қажетсіз пайдаланбау."
  },
  {
    q: "Жастар табиғатты қорғауға қалай үлес қоса алады?",
    a: "Тазалық акцияларына қатысу, көгалдандыру және экологиялық жобалар ұйымдастыру арқылы."
  },
  {
    q: "Табиғатты қорғау мен адам денсаулығының арасында қандай байланыс бар?",
    a: "Таза ауа, қауіпсіз су және ластанбаған орта адам денсаулығын сақтауға көмектеседі."
  },
  {
    q: "Қазақстанды таза елге айналдыру үшін әр адам не істеуі керек?",
    a: "Өз ортасын таза ұстау, табиғатты қорғау, ресурстарды үнемдеу және өзгелерге үлгі болу."
  }
];

// ========================================
// САБАҚ БЕТТЕРІН ҚҰРУ
// ========================================

const sequence = [];

slides.forEach((slide, index) => {
  sequence.push({
    type: "slide",
    index: index
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

// ========================================
// НЕГІЗГІ АЙНЫМАЛЫЛАР
// ========================================

let view = "home";
let slideIndex = 0;
let gameIndex = 0;

const scores = [0, 0, 0];

// Әр сұрақтың өз таңдалған тобы болады.
const selectedTeams = {};

// Әр сұрақтың жауабы ашылғанын сақтау.
const revealedAnswers = {};

// Әр сұрақтың бағасын сақтау.
const gradedAnswers = {};

const revealedSlideAnswers = {};

// 45 МИНУТТЫҚ ТАЙМЕР

let timeLeft = 45 * 60;
let running = false;
let timerInterval = null;
let timerEnd = null;

// ========================================
// ТАЙМЕР
// ========================================

function updateClock() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("clock").textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

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

// ========================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ========================================

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

function photoError(img) {
  img.style.display = "none";
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  } else {
    document.documentElement.requestFullscreen?.();
  }
}

function updateRail() {
  document.getElementById("backButton").disabled =
    view === "home";

  document.getElementById("nextButton").disabled =
    view === "goodbye";

  const labels = {
    home: "БАСТЫ БЕТ",
    lesson: "ТҮСІНДІРМЕ",
    game: "КОМАНДАЛЫҚ ОЙЫН",
    final: "ҚОРЫТЫНДЫ",
    goodbye: "АЯҚТАЛДЫ"
  };

  document.getElementById("phaseLabel").textContent =
    labels[view] || "САБАҚ";
}

// ========================================
// БІРІНШІ БЕТ — САБАҚТЫҢ МАҚСАТЫ
// ========================================

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
          Бірінші курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
        </p>

        <p>
          <strong>Топ: 1-26</strong><br>
          <strong>Жауапты оқытушы:</strong><br>
          Байжанова Айсұлу Жақсылыковна
        </p>

        <div class="lesson-goal">
          <h2>🎯 Сабақтың мақсаты</h2>

          <p>
            Білім алушыларға «Таза Қазақстан»
            бастамасының маңызын түсіндіру,
            қоршаған ортаны қорғауға және
            табиғатты аялауға тәрбиелеу.
          </p>

          <ul>
            ${goals.map(goal => `
              <li>${goal}</li>
            `).join("")}
          </ul>
        </div>

        <div class="actions">
          <button class="btn"
                  onclick="showGame(0)">
            Командалық ойын
          </button>

          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>
        </div>

        <div class="stats">
          <div><b>15</b><small>Слайд</small></div>
          <div><b>3</b><small>Бейнебөлім</small></div>
          <div><b>15</b><small>Сұрақ</small></div>
          <div><b>3</b><small>Команда</small></div>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="${natureImage}"
          alt="Табиғат көрінісі"
          onerror="photoError(this)"
        >

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

// ========================================
// ТҮСІНДІРМЕ БӨЛІМІ
// ========================================

function showSlide(index) {
  slideIndex = Math.max(
    0,
    Math.min(index, sequence.length - 1)
  );

  view = "lesson";
  renderSlide();

  if (!running && timeLeft === 45 * 60) {
    startTimer();
  }
}

function renderSlide() {
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
        onerror="photoError(this)"
      >

      ${card(
        "📖 Тақырыпты түсіндіру",
        `<p>${slide.text}</p>`
      )}

      ${card(
        "🎤 Ауызша сұрақ",
        `
          <p>${slide.question}</p>

          <div class="actions">
            <button
              class="btn primary"
              onclick="toggleSlideAnswer(${item.index})">
              ${
                revealedSlideAnswers[item.index]
                  ? "Жауапты жасыру"
                  : "👁 Жауапты көрсету"
              }
            </button>
          </div>

          ${
            revealedSlideAnswers[item.index]
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
  revealedSlideAnswers[index] =
    !revealedSlideAnswers[index];

  renderSlide();
}

// ========================================
// ВИДЕОЛАР
// ========================================

function renderVideo(index) {
  const video = videos[index];

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
        "▶ Қазақша бейнематериал",
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
              href="${video.url}"
              target="_blank"
              rel="noopener noreferrer">
              ▶ YouTube-та ашу
            </a>
          </div>

          <p>
            Егер бейне сайт ішінде ашылмаса,
            YouTube батырмасын басыңдар.
          </p>
        `
      )}

      ${card(
        "🎤 Видеодан кейінгі сұрақ",
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

// ========================================
// КОМАНДАЛАРДЫҢ ҰПАЙЫ
// ========================================

function teamCards() {
  const currentTeam = selectedTeams[gameIndex];

  return `
    <div class="teams">
      ${scores.map((score, index) => `
        <div class="team ${
          view === "game" && currentTeam === index
            ? "selected"
            : ""
        }">
          <h3>${index + 1}-топ</h3>

          <div class="score">
            ${score}
          </div>

          <small>ұпай</small>
        </div>
      `).join("")}
    </div>
  `;
}

// ========================================
// ТОПТЫ РАНДОМ ТАҢДАУ
// ========================================

function randomTeam() {
  return Math.floor(Math.random() * 3);
}

// Әр жаңа сұраққа топ тек бір рет таңдалады.
// Артқа өтіп қайта келгенде топ өзгермейді.

function getTeamForQuestion(index) {
  if (selectedTeams[index] === undefined) {
    // Бір топ қатарынан тым жиі шықпау үшін
    // алдыңғы топты есепке аламыз.
    const previousTeam = selectedTeams[index - 1];

    const choices = [0, 1, 2];

    const available = previousTeam === undefined
      ? choices
      : choices.filter(t => t !== previousTeam);

    selectedTeams[index] =
      available[Math.floor(Math.random() * available.length)];
  }

  return selectedTeams[index];
}

// ========================================
// ОЙЫНДЫ БАСТАУ
// ========================================

function showGame(index) {
  gameIndex = Math.max(
    0,
    Math.min(index, questions.length - 1)
  );

  getTeamForQuestion(gameIndex);

  view = "game";
  renderGame();

  if (!running && timeLeft === 45 * 60) {
    startTimer();
  }
}

// ========================================
// СҰРАҚ-ЖАУАП ОЙЫНЫ
// ========================================

function renderGame() {
  const question = questions[gameIndex];

  const team = getTeamForQuestion(gameIndex);

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
          🎲 АВТОМАТТЫ ТАҢДАЛҒАН ТОП
        </small>

        <strong>
          ${team + 1}-ТОП
        </strong>

        <p>
          Бұл сұраққа осы топ жауап береді.
        </p>
      </div>

      ${card(
        `🧠 ${gameIndex + 1}-сұрақ`,
        `
          <p class="question-text">
            ${question.q}
          </p>

          <p>
            Оқушылар жауабын ауызша айтады.
            Содан кейін дұрыс жауапты ашыңдар.
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
                   <strong>✅ Дұрыс жауап:</strong>
                   <p>${question.a}</p>
                 </div>`
              : ""
          }
        `
      )}

      ${
        isRevealed && !isGraded
          ? card(
              "🎯 Топтың жауабын бағалау",
              `
                <p>
                  ${team + 1}-топтың жауабы
                  дұрыс болды ма?
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
                    ? `✅ ${team + 1}-топқа автоматты түрде +1 ұпай берілді!`
                    : `❌ ${team + 1}-топқа ұпай берілмеді.`
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

// ========================================
// ЖАУАПТЫ КӨРСЕТУ
// ========================================

function revealGameAnswer() {
  revealedAnswers[gameIndex] = true;
  renderGame();
}

// ========================================
// ДҰРЫС / ҚАТЕ БАҒАЛАУ
// ========================================

function markAnswer(isCorrect) {
  // Бір сұраққа екі рет ұпай берілмейді.
  if (gradedAnswers[gameIndex] !== undefined) {
    return;
  }

  // Алдымен жауапты ашу керек.
  if (!revealedAnswers[gameIndex]) {
    return;
  }

  const team = getTeamForQuestion(gameIndex);

  gradedAnswers[gameIndex] = {
    team: team,
    correct: isCorrect
  };

  if (isCorrect) {
    scores[team] += 1;
  }

  // Қате жауап болса ұпай қосылмайды.
  renderGame();
}

// ========================================
// КЕЛЕСІ СҰРАҚ
// ========================================

function nextGame() {
  // Бағаланбаған сұрақты өткізіп жібермейміз.
  if (gradedAnswers[gameIndex] === undefined) {
    return;
  }

  if (gameIndex < questions.length - 1) {
    showGame(gameIndex + 1);
  } else {
    showFinal();
  }
}

// ========================================
// АРТҚА ӨТУ
// ========================================

function previousGame() {
  if (gameIndex > 0) {
    showGame(gameIndex - 1);
  } else {
    showSlide(sequence.length - 1);
  }
}

// ========================================
// ҚОРЫТЫНДЫ ҰПАЙЛАР
// ========================================

function showFinal() {
  pauseTimer();
  view = "final";

  const maxScore = Math.max(...scores);

  const winners = scores
    .map((score, index) => ({
      team: index + 1,
      score: score
    }))
    .filter(item => item.score === maxScore);

  let winnerText = "Әзірге ұпай берілген жоқ";

  if (maxScore > 0) {
    if (winners.length === 1) {
      winnerText =
        `${winners[0].team}-топ жеңімпаз!`;
    } else {
      winnerText =
        "Тең нәтиже: " +
        winners.map(w => `${w.team}-топ`).join(", ");
    }
  }

  const correctCount = Object.values(gradedAnswers)
    .filter(result => result.correct).length;

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
        `<div class="winner">
          ${winnerText}
        </div>`
      )}

      ${card(
        "Ойын статистикасы",
        `
          <p>
            Сұрақтар саны: ${questions.length}
          </p>
          <p>
            Дұрыс жауаптар: ${correctCount}
          </p>
          <p>
            Қате жауаптар:
            ${Object.keys(gradedAnswers).length - correctCount}
          </p>
        `
      )}

      ${card(
        "Сабақты қорытындылау",
        `
          <p>
            Бүгін біз «Таза Қазақстан»
            бастамасының маңызын,
            табиғатты қорғау және
            экологиялық жауапкершілік
            туралы талқыладық.
          </p>

          <p>
            Әр топ табиғатты қорғау
            үшін қандай іс жасай алатынын
            ауызша айтып берсін.
          </p>
        `
      )}

      <div class="actions">
        <button
          class="btn primary"
          onclick="showGoodbye()">
          Сабақты аяқтау →
        </button>
      </div>
    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ========================================
// СОҢҒЫ БЕТ
// ========================================

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
        <button
          class="btn primary"
          onclick="showHome()">
          Басты бетке оралу
        </button>
      </div>
    </section>
  `;

  updateRail();
  scrollTopPage();
}

// ========================================
// ОҢ ЖАҚТАҒЫ БАТЫРМАЛАР
// ========================================

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

// ========================================
// САЙТТЫ ІСКЕ ҚОСУ
// ========================================

updateClock();
showHome();
