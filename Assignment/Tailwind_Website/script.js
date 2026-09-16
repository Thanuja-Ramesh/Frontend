/**
 * DevAI — Full-Stack & AI Engineering Platform (2026)
 * Enterprise JavaScript Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initRoadmap();
  initFlowSimulator();
  initQuiz();
  initDashboard();
  initModals();
  initHeroParallax();
});

/* ==========================================================================
   1. Navigation & Responsive Menu
   ========================================================================== */
function initNavbar() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      
      const icon = menuBtn.querySelector('svg');
      if (icon) {
        if (!isExpanded) {
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
        } else {
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
          const icon = menuBtn.querySelector('svg');
          if (icon) {
            icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
          }
        }
      });
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('text-cyan-400', 'font-semibold');
          matchingLink.classList.remove('text-slate-300');
        } else {
          matchingLink.classList.remove('text-cyan-400', 'font-semibold');
          matchingLink.classList.add('text-slate-300');
        }
      }
    });
  });
}

/* ==========================================================================
   2. Technical Search & Catalog Indexing
   ========================================================================== */
const searchableItems = [
  { title: "HTML5 Semantic Standards", category: "Web Architecture", section: "#about", desc: "Enterprise semantic structural markup and accessibility patterns." },
  { title: "Tailwind CSS & Design Systems", category: "Interface Engineering", section: "#about", desc: "Utility-first styling, glassmorphism, and responsive layout architectures." },
  { title: "JavaScript ES6+ & Asynchronous Runtime", category: "Core Engineering", section: "#roadmap", desc: "Event loop internals, Promises, and non-blocking asynchronous Fetch." },
  { title: "React & Component State Orchestration", category: "Frontend", section: "#roadmap", desc: "Virtual DOM reconciliation, custom hooks, and state management." },
  { title: "Node.js & Express REST Endpoints", category: "Backend Infrastructure", section: "#roadmap", desc: "Microservices architecture, authentication tokens, and server security." },
  { title: "PostgreSQL & Document Stores", category: "Data Persistence", section: "#roadmap", desc: "Relational schema indexing, ACID transactions, and NoSQL stores." },
  { title: "Generative AI & Transformer Models", category: "AI Systems", section: "#learn-ai", desc: "Large Language Models, vector embeddings, and prompt tuning." },
  { title: "AI Classification: Narrow vs General Systems", category: "AI Theory", section: "#ai-types", desc: "Domain-specific production intelligence compared to theoretical AGI." },
  { title: "AI APIs & Server Orchestration", category: "AI Integration", section: "#ai-concepts", desc: "Integrating enterprise endpoints with streaming token outputs." },
  { title: "AI-Augmented Engineering Workflows", category: "2026 Standards", section: "#trends-2026", desc: "Integrating automated AI pair-programming to optimize velocity." },
  { title: "End-to-End AI Application Architecture", category: "System Design", section: "#architecture", desc: "Full-stack pipeline: UI -> Node Backend -> AI Model -> Database." },
  { title: "Technical AI Evaluation Quiz", category: "Knowledge Verification", section: "#quiz", desc: "Verify core full-stack and machine learning concepts." },
  { title: "Production AI Chat Interface Project", category: "Engineering Labs", section: "#projects", desc: "Build a responsive streaming AI interface with state persistence." }
];

function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const closeSearchBtn = document.getElementById('close-search-btn');

  if (!searchBtn || !searchModal) return;

  function openSearch() {
    searchModal.classList.remove('hidden-modal');
    searchModal.classList.add('active-modal');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 50);
      renderSearchResults('');
    }
  }

  function closeSearch() {
    searchModal.classList.add('hidden-modal');
    searchModal.classList.remove('active-modal');
  }

  searchBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active-modal')) {
      closeSearch();
    }
  });

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const filtered = query === '' 
      ? searchableItems.slice(0, 5) 
      : searchableItems.filter(item => 
          item.title.toLowerCase().includes(query) || 
          item.category.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query)
        );

    if (filtered.length === 0) {
      searchResults.innerHTML = `
        <div class="py-8 text-center text-slate-400">
          <p class="text-sm font-medium">No results found for "<span class="text-cyan-400">${query}</span>"</p>
          <p class="text-xs mt-1 text-slate-500 font-mono">Try searching: 'AI', 'React', 'Database', or 'Backend'</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = filtered.map(item => `
      <a href="${item.section}" class="search-result-item block p-3.5 rounded-xl bg-slate-900/60 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 transition group">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition">${item.title}</span>
          <span class="text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700 font-mono">${item.category}</span>
        </div>
        <p class="text-xs text-slate-400 mt-1">${item.desc}</p>
      </a>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => closeSearch());
    });
  }
}

/* ==========================================================================
   3. Interactive Roadmap Level Details
   ========================================================================== */
const roadmapDetailsData = {
  1: {
    title: "Level 1: Web Fundamentals (Beginner)",
    badge: "Tier 01 — Baseline",
    desc: "The absolute bedrock of the web platform. In 2026, semantic HTML and accessible, responsive styling ensure AI systems, search engines, and enterprise clients can interface with applications reliably.",
    topics: [
      "Semantic HTML5 (structural elements, SEO tags, microdata)",
      "Modern CSS3 (Flexbox, Grid, Custom Properties, Keyframe Animations)",
      "Tailwind CSS (utility-first styling, glassmorphism, responsive design)",
      "Git & GitHub Version Control (branching, commits, pull requests, collaboration)"
    ],
    project: "Build a responsive enterprise developer documentation portal or SaaS landing interface."
  },
  2: {
    title: "Level 2: JavaScript Runtime & Core (Beginner → Intermediate)",
    badge: "Tier 02 — Core Runtime",
    desc: "JavaScript powers interactivity across every browser engine. Mastering asynchronous execution, event loops, and data transformation is mandatory before adopting higher-level UI frameworks.",
    topics: [
      "JavaScript Core (lexical scopes, closures, high-order array transformations)",
      "DOM Manipulation, Event Bubbling & Dynamic Rendering",
      "ES6+ Standards (destructuring, spread operators, modules, classes)",
      "Async/Await, Promises & Fetch API for network communication",
      "Error Handling, Web Storage & Memory Management"
    ],
    project: "Build an interactive Analytics Dashboard with external REST API data streaming."
  },
  3: {
    title: "Level 3: Modern Frontend Architecture (Intermediate)",
    badge: "Tier 03 — UI Frameworks",
    desc: "Component-driven architecture allows developers to build complex, maintainable interfaces with deterministic state flows and high rendering performance.",
    topics: [
      "React.js & Next.js Architecture",
      "Components, Props, Hooks (useState, useEffect, useMemo, custom hooks)",
      "Global State Management (Context API, Zustand, Redux Toolkit)",
      "Consuming REST & GraphQL APIs with caching layers (TanStack Query)",
      "Client-side Routing & Responsive UI Design"
    ],
    project: "Build an AI Prompt Studio interface with real-time markdown token rendering."
  },
  4: {
    title: "Level 4: Backend Engineering & APIs (Intermediate)",
    badge: "Tier 04 — Server Systems",
    desc: "The server-side core. Learn how to engineer secure servers, business logic pipelines, authentication workflows, and high-throughput API endpoints.",
    topics: [
      "Node.js Runtime & Express.js Framework",
      "RESTful API design standards & HTTP status codes",
      "Authentication & Authorization (JWT, OAuth 2.0, Session management)",
      "Middleware architecture, request validation & rate limiting",
      "Server-side security standards (CORS, Helmet, input sanitization)"
    ],
    project: "Build an authenticated microservices REST API for an enterprise task tracking platform."
  },
  5: {
    title: "Level 5: Databases & Data Modeling (Intermediate)",
    badge: "Tier 05 — Persistence",
    desc: "Data persistence is the foundation of full-stack and AI applications. Master relational schemas, document storage, caching layers, and database migrations.",
    topics: [
      "Relational Databases: PostgreSQL, indexing strategies, table relations",
      "NoSQL Databases: MongoDB & document schema design",
      "Object-Relational Mapping (ORM): Prisma & Drizzle ORM",
      "In-Memory Caching: Redis for session management and low-latency cache",
      "Vector Databases: Pinecone, pgvector for semantic search indexing"
    ],
    project: "Design a relational database schema supporting transactional integrity, order pipelines, and vector search."
  },
  6: {
    title: "Level 6: AI Development & Integration (Intermediate)",
    badge: "Tier 06 — Intelligence Layer",
    desc: "Integrate machine intelligence directly into full-stack stacks. Learn how to structure prompts, stream tokens, compute embeddings, and consume LLM APIs.",
    topics: [
      "AI Fundamentals: Supervised/Unsupervised Learning, Neural Nets",
      "Generative AI & LLMs (Tokenization, Context Windows, Latency)",
      "Advanced Prompt Engineering (Few-Shot, Chain-of-Thought, System Personas)",
      "AI APIs Integration (OpenAI API, Anthropic Claude, Google Gemini)",
      "Retrieval-Augmented Generation (RAG) & Vector Embeddings"
    ],
    project: "Build an enterprise Document Q&A system with vector embeddings and streamed token responses."
  },
  7: {
    title: "Level 7: Cloud, DevOps & Deployment (Intermediate)",
    badge: "Tier 07 — Production Delivery",
    desc: "Ship code reliably to global users. Master containerization, infrastructure configuration, continuous integration, and observability.",
    topics: [
      "Docker & Containerization for full-stack environments",
      "Cloud Infrastructure (Vercel, AWS, Cloudflare Workers, Render)",
      "CI/CD Automation with GitHub Actions (test automation & deploy)",
      "Domain DNS, SSL Certificates & Environment Security",
      "Application Observability, Error Tracking (Sentry) & Metrics"
    ],
    project: "Containerize and deploy a full-stack AI application with automated CI/CD pipelines."
  }
};

function initRoadmap() {
  const levelCards = document.querySelectorAll('.roadmap-card');
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.getAttribute('data-level');
      if (level && roadmapDetailsData[level]) {
        openRoadmapModal(roadmapDetailsData[level]);
      }
    });
  });
}

function openRoadmapModal(data) {
  const modal = document.getElementById('details-modal');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const content = document.getElementById('modal-content');

  if (!modal || !title || !content) return;

  title.textContent = data.title;
  badge.textContent = data.badge;
  badge.className = "text-xs px-3 py-1 rounded font-mono font-medium glow-badge-cyan text-cyan-300";

  content.innerHTML = `
    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">${data.desc}</p>
    <div class="mb-5">
      <h4 class="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2 font-mono">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Curriculum Objectives
      </h4>
      <ul class="space-y-2">
        ${data.topics.map(t => `
          <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
            <span class="text-cyan-400 font-mono mt-0.5">/</span>
            <span>${t}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-700">
      <h5 class="text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono mb-1">Recommended Milestone Project:</h5>
      <p class="text-xs sm:text-sm text-slate-200">${data.project}</p>
    </div>
  `;

  modal.classList.remove('hidden-modal');
  modal.classList.add('active-modal');
}

/* ==========================================================================
   4. AI Architecture Pipeline Simulator
   ========================================================================== */
function initFlowSimulator() {
  const simulateBtn = document.getElementById('simulate-flow-btn');
  const nodes = document.querySelectorAll('.flow-node');
  const stepDesc = document.getElementById('flow-step-desc');
  const statusBadge = document.getElementById('flow-status-badge');

  if (!simulateBtn) return;

  const flowSteps = [
    { index: 0, title: "Step 1: Frontend Client", text: "Client captures user query: 'Generate API schema validation' and transmits HTTP POST payload." },
    { index: 1, title: "Step 2: Backend Application", text: "Node server authenticates JWT session, validates request rate limit, and sanitizes parameter payload." },
    { index: 2, title: "Step 3: Secure API Gateway", text: "Gateway dispatches HTTPS request with enterprise credentials to the designated AI inference service." },
    { index: 3, title: "Step 4: AI Model Inference", text: "Large Language Model generates completions via Server-Sent Events (SSE) token stream." },
    { index: 4, title: "Step 5: Database & Cache Layer", text: "Backend logs token usage metrics to PostgreSQL and writes response tokens to Redis cache." },
    { index: 5, title: "Step 6: Client Render Engine", text: "Streamed markdown payload arrives at client UI and updates the virtual DOM in real-time." }
  ];

  let isRunning = false;

  simulateBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    simulateBtn.disabled = true;
    simulateBtn.classList.add('opacity-50', 'cursor-not-allowed');

    if (statusBadge) {
      statusBadge.textContent = "Pipeline Active (Processing)";
      statusBadge.className = "text-xs px-2.5 py-1 rounded glow-badge-cyan text-cyan-300 font-mono animate-pulse";
    }

    let currentStep = 0;

    function activateStep() {
      nodes.forEach((n, idx) => {
        if (idx === currentStep) {
          n.classList.add('border-cyan-400', 'bg-cyan-950/60', 'scale-105', 'shadow-[0_0_20px_rgba(56,189,248,0.4)]');
          n.classList.remove('border-slate-800', 'bg-slate-900/60');
        } else {
          n.classList.remove('border-cyan-400', 'bg-cyan-950/60', 'scale-105', 'shadow-[0_0_20px_rgba(56,189,248,0.4)]');
          n.classList.add('border-slate-800', 'bg-slate-900/60');
        }
      });

      const current = flowSteps[currentStep];
      if (stepDesc) {
        stepDesc.innerHTML = `
          <div class="animate-fadeIn">
            <span class="text-cyan-400 font-bold font-mono">[${current.title}]:</span> 
            <span class="text-slate-200">${current.text}</span>
          </div>
        `;
      }

      currentStep++;
      if (currentStep < flowSteps.length) {
        setTimeout(activateStep, 1300);
      } else {
        setTimeout(() => {
          nodes.forEach(n => {
            n.classList.remove('border-cyan-400', 'bg-cyan-950/60', 'scale-105', 'shadow-[0_0_20px_rgba(56,189,248,0.4)]');
            n.classList.add('border-slate-800', 'bg-slate-900/60');
          });
          if (statusBadge) {
            statusBadge.textContent = "Pipeline Verified (200 OK)";
            statusBadge.className = "text-xs px-2.5 py-1 rounded glow-badge-emerald text-emerald-300 font-mono";
          }
          if (stepDesc) {
            stepDesc.innerHTML = `<span class="text-emerald-400 font-mono font-semibold">[Status: 200 OK]</span> Request-response cycle executed across 6 system layers with 124ms round-trip latency.`;
          }
          isRunning = false;
          simulateBtn.disabled = false;
          simulateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }, 1400);
      }
    }

    activateStep();
  });
}

/* ==========================================================================
   5. Technical Evaluation Quiz Engine
   ========================================================================== */
const quizQuestions = [
  {
    id: 1,
    question: "Which technology allows computers to learn patterns from data?",
    options: [
      { id: "A", text: "HTML", isCorrect: false },
      { id: "B", text: "CSS", isCorrect: false },
      { id: "C", text: "Machine Learning", isCorrect: true },
      { id: "D", text: "SQL", isCorrect: false }
    ],
    correctExplanation: "Correct: Machine Learning allows systems to extract patterns from data and make predictions without being explicitly hardcoded with static rules.",
    wrongExplanation: "Incorrect: HTML defines document structure, CSS handles presentation, and SQL queries relational databases. Machine Learning allows systems to learn patterns from data."
  },
  {
    id: 2,
    question: "What does LLM stand for in modern AI engineering?",
    options: [
      { id: "A", text: "Linear Logic Machine", isCorrect: false },
      { id: "B", text: "Large Language Model", isCorrect: true },
      { id: "C", text: "Layered Link Module", isCorrect: false },
      { id: "D", text: "Local Learning Mechanism", isCorrect: false }
    ],
    correctExplanation: "Correct: Large Language Models (LLMs) are deep learning architectures trained on vast textual corpora to process and synthesize human language.",
    wrongExplanation: "Incorrect: LLM stands for Large Language Model (e.g., GPT-4, Claude, Gemini)."
  },
  {
    id: 3,
    question: "Which category does current production AI (like automated code assistants and recommendation engines) belong to?",
    options: [
      { id: "A", text: "Narrow AI (Task-Specific)", isCorrect: true },
      { id: "B", text: "General AI (AGI)", isCorrect: false },
      { id: "C", text: "Super AI (ASI)", isCorrect: false },
      { id: "D", text: "Quantum Neural Network", isCorrect: false }
    ],
    correctExplanation: "Correct: All active commercial AI systems belong to Narrow AI (ANI), engineered for specific, well-defined domains.",
    wrongExplanation: "Incorrect: Current production technology is Narrow AI. General AI and Super AI are theoretical future concepts."
  }
];

function initQuiz() {
  let currentQuestionIndex = 0;
  let selectedOption = null;
  let score = 0;

  const qText = document.getElementById('quiz-question-text');
  const qOptionsContainer = document.getElementById('quiz-options');
  const checkBtn = document.getElementById('quiz-check-btn');
  const nextBtn = document.getElementById('quiz-next-btn');
  const feedbackBox = document.getElementById('quiz-feedback');
  const qProgress = document.getElementById('quiz-progress-text');
  const qScore = document.getElementById('quiz-score-badge');

  if (!qText || !qOptionsContainer || !checkBtn) return;

  function loadQuestion(index) {
    const q = quizQuestions[index];
    selectedOption = null;
    checkBtn.disabled = true;
    checkBtn.classList.add('opacity-50', 'cursor-not-allowed');
    checkBtn.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    feedbackBox.className = "hidden p-4 rounded-xl text-xs sm:text-sm font-medium transition-all";
    feedbackBox.innerHTML = "";

    if (qProgress) {
      qProgress.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    }

    qText.textContent = q.question;
    qOptionsContainer.innerHTML = q.options.map(opt => `
      <div data-opt-id="${opt.id}" class="quiz-opt flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-cyan-400 font-mono">${opt.id}</span>
          <span class="font-medium text-xs sm:text-sm">${opt.text}</span>
        </div>
        <div class="opt-indicator w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center"></div>
      </div>
    `).join('');

    const optEls = qOptionsContainer.querySelectorAll('.quiz-opt');
    optEls.forEach(el => {
      el.addEventListener('click', () => {
        optEls.forEach(item => item.classList.remove('selected'));
        el.classList.add('selected');
        selectedOption = el.getAttribute('data-opt-id');
        checkBtn.disabled = false;
        checkBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      });
    });
  }

  checkBtn.addEventListener('click', () => {
    if (!selectedOption) return;

    const q = quizQuestions[currentQuestionIndex];
    const chosen = q.options.find(o => o.id === selectedOption);
    const optEls = qOptionsContainer.querySelectorAll('.quiz-opt');

    optEls.forEach(el => {
      const optId = el.getAttribute('data-opt-id');
      const optData = q.options.find(o => o.id === optId);
      if (optData.isCorrect) {
        el.classList.add('correct');
      } else if (optId === selectedOption && !optData.isCorrect) {
        el.classList.add('incorrect');
      }
      el.style.pointerEvents = 'none';
    });

    feedbackBox.classList.remove('hidden');
    if (chosen.isCorrect) {
      score++;
      if (qScore) qScore.textContent = `Score: ${score}/${quizQuestions.length}`;
      feedbackBox.className = "p-4 rounded-xl text-xs sm:text-sm bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 animate-fadeIn";
      feedbackBox.innerHTML = `<div><strong class="font-mono">[Validated]</strong> ${q.correctExplanation}</div>`;
      showToast("Answer validated successfully.", "emerald");
    } else {
      feedbackBox.className = "p-4 rounded-xl text-xs sm:text-sm bg-rose-950/60 border border-rose-500/50 text-rose-200 animate-fadeIn";
      feedbackBox.innerHTML = `<div><strong class="font-mono">[Incorrect]</strong> ${q.wrongExplanation}</div>`;
      showToast("Evaluation failed. Review explanation.", "rose");
    }

    checkBtn.classList.add('hidden');
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = "Restart Evaluation";
      } else {
        nextBtn.textContent = "Next Question →";
      }
    }
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentQuestionIndex === quizQuestions.length - 1) {
        currentQuestionIndex = 0;
        score = 0;
        if (qScore) qScore.textContent = `Score: 0/${quizQuestions.length}`;
      } else {
        currentQuestionIndex++;
      }
      loadQuestion(currentQuestionIndex);
    });
  }

  loadQuestion(0);
}

/* ==========================================================================
   6. Developer Competency Dashboard
   ========================================================================== */
function initDashboard() {
  const trackButtons = document.querySelectorAll('.practice-btn');
  const overallBar = document.getElementById('overall-progress-bar');
  const overallPercentText = document.getElementById('overall-progress-text');

  if (!overallBar) return;

  function calculateOverall() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    let total = 0;
    bars.forEach(b => {
      const val = parseInt(b.getAttribute('data-val') || '0', 10);
      total += val;
    });
    const avg = Math.round(total / bars.length);
    overallBar.style.width = `${avg}%`;
    if (overallPercentText) overallPercentText.textContent = `${avg}% Verified`;
  }

  calculateOverall();

  trackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const skill = btn.getAttribute('data-skill');
      const targetBar = document.getElementById(`bar-${skill}`);
      const targetLabel = document.getElementById(`label-${skill}`);

      if (targetBar) {
        let current = parseInt(targetBar.getAttribute('data-val') || '0', 10);
        if (current < 100) {
          current = Math.min(100, current + 10);
          targetBar.setAttribute('data-val', current);
          targetBar.style.width = `${current}%`;
          if (targetLabel) targetLabel.textContent = `${current}%`;
          calculateOverall();
          showToast(`Logged +10% competency in ${skill.toUpperCase()}.`, "cyan");
        } else {
          showToast(`Competency in ${skill.toUpperCase()} is at 100% maximum.`, "purple");
        }
      }
    });
  });
}

/* ==========================================================================
   7. Modal Handlers: Courses, Projects, AI Concepts
   ========================================================================== */
const courseData = {
  "ai-fundamentals": {
    title: "AI Fundamentals",
    level: "Beginner",
    duration: "4 Weeks (12 Modules)",
    topics: ["What is AI?", "History and Milestones of Artificial Intelligence", "Narrow vs General vs Super AI", "Real-world AI applications & Ethics", "AI Terminology: Weights, Bias, Tokens"],
    desc: "A rigorous foundation explaining artificial intelligence architectures, mathematical intuition, and foundational concepts for software engineers."
  },
  "ml-basics": {
    title: "Machine Learning Basics",
    level: "Beginner → Intermediate",
    duration: "6 Weeks (18 Modules)",
    topics: ["What is Machine Learning?", "Supervised vs Unsupervised Learning", "Training Data, Testing Data & Overfitting", "Classification, Regression & Clustering", "Model Evaluation & Loss Functions"],
    desc: "Learn how algorithmic models extract patterns from structured data and how to evaluate loss metrics and model accuracy."
  },
  "gen-ai": {
    title: "Generative AI & LLMs",
    level: "Intermediate",
    duration: "6 Weeks (20 Modules)",
    topics: ["Generative AI Architecture & Diffusion", "Transformer Models & Attention Mechanisms", "Large Language Models & Token Streaming", "Prompt Engineering: Zero-Shot, Few-Shot, CoT", "AI APIs & Real-world Applications"],
    desc: "Examine modern generative models, attention mechanisms, token streaming latency, and integration within web clients."
  },
  "ai-fullstack": {
    title: "AI for Full-Stack Developers",
    level: "Intermediate",
    duration: "8 Weeks (24 Modules)",
    topics: ["Connecting Frontend to AI Endpoints", "Backend API Orchestration & Token Caching", "Building AI-Powered Web Applications", "Designing Conversational Chatbot UIs", "Full-Stack AI Architecture & RAG Pipelines"],
    desc: "The enterprise masterclass on building end-to-end full-stack architectures with embedded intelligence, vector stores, and resilient authentication."
  }
};

const projectData = {
  "ai-landing-page": {
    title: "AI Landing Page",
    level: "Beginner",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "Antigravity UI"],
    desc: "Craft a modern, responsive developer-focused product landing page with glassmorphism components, dark theme, and floating system elements.",
    deliverables: ["Semantic structural header and responsive navigation", "Hero layout with antigravity floating cards", "Component feature comparison matrix", "Production deploy configuration"]
  },
  "ai-chatbot-ui": {
    title: "AI Chatbot UI",
    level: "Beginner → Intermediate",
    stack: ["JavaScript ES6+", "Fetch API", "Markdown Parser", "CSS"],
    desc: "Build an interactive chatbot interface featuring token streaming simulation, message history persistence, and syntax-highlighted code rendering.",
    deliverables: ["Auto-scrolling message container", "Simulated token stream effect", "Copy code block utilities", "Local storage state management"]
  },
  "ai-resume-analyzer": {
    title: "AI Resume Analyzer",
    level: "Intermediate",
    stack: ["React", "Node.js Express", "AI API", "PostgreSQL"],
    desc: "An intelligent web application parsing PDF resumes and scoring technical skill competencies against job descriptions via LLM endpoints.",
    deliverables: ["PDF document upload & text parser", "AI scoring & keyword matching", "User authentication & JWT security", "Exportable technical audit report"]
  },
  "ai-learning-assistant": {
    title: "AI Learning Assistant",
    level: "Intermediate",
    stack: ["Full-Stack", "Vector DB (pgvector)", "LLM APIs", "Auth"],
    desc: "A personalized AI engineering tutor generating structured roadmaps, verifying technical competencies, and tracking daily progress.",
    deliverables: ["Dynamic knowledge assessment engine", "Semantic search across documentation", "Interactive skill dashboard", "JWT session authentication"]
  }
};

const conceptData = {
  "ml-basics": {
    title: "Machine Learning Basics",
    difficulty: "Beginner",
    desc: "Machine Learning algorithms build mathematical models based on sample training data in order to make predictions without explicit programmatic instructions.",
    points: ["Supervised Learning: Training on input-output pairs with ground-truth labels.", "Unsupervised Learning: Discovering structural patterns within unlabeled datasets.", "Reinforcement Learning: Optimization based on environmental reward functions."]
  },
  "neural-networks": {
    title: "Neural Networks",
    difficulty: "Beginner → Intermediate",
    desc: "Layered computational architectures inspired by biological neurons, composed of input, hidden, and output nodes.",
    points: ["Deep Neural Networks: Multiple hidden layers executing hierarchical feature extraction.", "Activation Functions: Introducing non-linear transformations (ReLU, GELU).", "Backpropagation: Gradient descent weight optimization minimizing error loss."]
  },
  "nlp": {
    title: "Natural Language Processing (NLP)",
    difficulty: "Intermediate",
    desc: "Methods and algorithms enabling computer systems to analyze, understand, and generate human linguistic data.",
    points: ["Tokenization: Deconstructing strings into discrete token units.", "Vector Embeddings: Mapping semantic relationships into high-dimensional vector space.", "Named Entity Recognition: Extracting entities, metrics, and structured values from text."]
  },
  "computer-vision": {
    title: "Computer Vision",
    difficulty: "Intermediate",
    desc: "Automated extraction and understanding of structured information from digital images and video streams.",
    points: ["Image Classification: Categorizing visual inputs into predefined taxonomic classes.", "Object Detection: Localizing specific entities with spatial bounding coordinates.", "OCR: Optical Character Recognition extracting textual strings from bitmaps."]
  },
  "generative-ai": {
    title: "Generative AI",
    difficulty: "Intermediate",
    desc: "Machine learning models capable of generating synthetic text, code, images, audio, and structured schemas.",
    points: ["Diffusion Models: Iterative denoising architectures for synthetic generation.", "Transformer Architectures: Self-attention mechanisms tracking sequence context.", "Multi-modal Models: Unified representations processing cross-domain inputs."]
  },
  "llms": {
    title: "Large Language Models (LLMs)",
    difficulty: "Intermediate",
    desc: "Massive parameter neural networks pre-trained on expansive datasets to execute zero-shot and few-shot language tasks.",
    points: ["Context Windows: Total token count maintained within active memory per inference call.", "Temperature Hyperparameters: Controlling output probability distribution and variance.", "Retrieval-Augmented Generation: Augmenting prompts with indexed database context."]
  },
  "prompt-engineering": {
    title: "Prompt Engineering",
    difficulty: "Beginner → Intermediate",
    desc: "Systematic structuring and refinement of natural language instructions to guide LLMs toward deterministic, high-accuracy outputs.",
    points: ["System Framing: Establishing strict operational rules and persona parameters.", "Few-Shot Prompting: Providing explicit input/output structural exemplars.", "Chain-of-Thought: Directing step-by-step intermediate reasoning steps."]
  },
  "ai-apis": {
    title: "AI APIs & Backend Integration",
    difficulty: "Intermediate",
    desc: "Interfacing application servers with hosted AI models via REST endpoints and Server-Sent Events (SSE).",
    points: ["Credential Security: Safe handling of API credentials via environment variables.", "Streaming Protocol: Low-latency token delivery over HTTP SSE streams.", "Rate Limiting & Retries: Handling concurrency limits and implementing exponential backoff."]
  }
};

function initModals() {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const content = document.getElementById('modal-content');

  if (!modal) return;

  function closeModal() {
    modal.classList.add('hidden-modal');
    modal.classList.remove('active-modal');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.querySelectorAll('.course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course');
      const data = courseData[courseId];
      if (!data) return;

      title.textContent = data.title;
      badge.textContent = `${data.level} • ${data.duration}`;
      badge.className = "text-xs px-3 py-1 rounded font-mono font-medium glow-badge-purple text-purple-300";

      content.innerHTML = `
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${data.desc}</p>
        <div class="mb-5">
          <h4 class="text-xs uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2.5">Syllabus Breakdown:</h4>
          <ul class="space-y-2">
            ${data.topics.map(t => `
              <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/70 p-2 rounded border border-slate-800">
                <span class="text-cyan-400 font-mono">/</span>
                <span>${t}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button id="enroll-modal-btn" class="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-neon-primary text-white font-semibold text-xs sm:text-sm transition">
            Enroll in Course →
          </button>
        </div>
      `;

      modal.classList.remove('hidden-modal');
      modal.classList.add('active-modal');

      const enrollBtn = document.getElementById('enroll-modal-btn');
      if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
          closeModal();
          showToast(`Enrolled in curriculum: "${data.title}".`, "cyan");
        });
      }
    });
  });

  document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      const data = projectData[projId];
      if (!data) return;

      title.textContent = data.title;
      badge.textContent = data.level;
      badge.className = "text-xs px-3 py-1 rounded font-mono font-medium glow-badge-emerald text-emerald-300";

      content.innerHTML = `
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${data.desc}</p>
        <div class="mb-4">
          <h4 class="text-xs uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2">Technology Stack:</h4>
          <div class="flex flex-wrap gap-2">
            ${data.stack.map(s => `<span class="text-xs px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700 font-mono">${s}</span>`).join('')}
          </div>
        </div>
        <div class="mb-5">
          <h4 class="text-xs uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2.5">Project Deliverables:</h4>
          <ul class="space-y-1.5">
            ${data.deliverables.map(d => `
              <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span class="text-cyan-400 font-mono">/</span> ${d}
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button id="start-project-btn" class="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-neon-primary text-white font-semibold text-xs sm:text-sm transition">
            Initialize Lab Repository →
          </button>
        </div>
      `;

      modal.classList.remove('hidden-modal');
      modal.classList.add('active-modal');

      const startProjBtn = document.getElementById('start-project-btn');
      if (startProjBtn) {
        startProjBtn.addEventListener('click', () => {
          closeModal();
          showToast(`Repository initialized for "${data.title}".`, "emerald");
        });
      }
    });
  });

  document.querySelectorAll('.concept-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const conceptId = btn.getAttribute('data-concept');
      const data = conceptData[conceptId];
      if (!data) return;

      title.textContent = data.title;
      badge.textContent = data.difficulty;
      badge.className = "text-xs px-3 py-1 rounded font-mono font-medium glow-badge-cyan text-cyan-300";

      content.innerHTML = `
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${data.desc}</p>
        <div class="mb-4">
          <h4 class="text-xs uppercase tracking-wider text-cyan-400 font-mono font-bold mb-2.5">Key Technical Concepts:</h4>
          <ul class="space-y-2">
            ${data.points.map(p => `
              <li class="text-xs sm:text-sm text-slate-300 bg-slate-900/70 p-2.5 rounded border border-slate-800 flex items-start gap-2">
                <span class="text-cyan-400 font-mono mt-0.5">/</span>
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;

      modal.classList.remove('hidden-modal');
      modal.classList.add('active-modal');
    });
  });
}

/* ==========================================================================
   8. Antigravity Hero Mouse Parallax
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const floatingCards = document.querySelectorAll('.hero-float-card');

  if (!heroSection || floatingCards.length === 0) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    floatingCards.forEach((card, index) => {
      const factor = (index % 3 + 1) * 10;
      const moveX = x * factor;
      const moveY = y * factor;
      card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  heroSection.addEventListener('mouseleave', () => {
    floatingCards.forEach(card => {
      card.style.transform = `translate(0px, 0px)`;
    });
  });
}

/* ==========================================================================
   9. Toast Notification System
   ========================================================================== */
function showToast(message, color = "cyan") {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-box';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const borderColors = {
    cyan: "border-cyan-500/50 text-cyan-200 bg-slate-950/95 shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    emerald: "border-emerald-500/50 text-emerald-200 bg-slate-950/95 shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    purple: "border-purple-500/50 text-purple-200 bg-slate-950/95 shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    rose: "border-rose-500/50 text-rose-200 bg-slate-950/95 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
  };

  const styleClass = borderColors[color] || borderColors.cyan;

  toast.className = `toast-item px-4 py-3 rounded-xl border backdrop-blur-xl text-xs sm:text-sm font-mono flex items-center gap-3 ${styleClass}`;
  toast.innerHTML = `<span>[System] ${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
