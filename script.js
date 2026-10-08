/* ========================================================
           01. CURATED QUOTE DATASET (26+ RICH OBJECTS)
           ======================================================== */
const quotesDataset = [
  {
    id: 1,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Motivation",
    mood: "Energetic Drive",
    energy: 92,
    tone: "Constructive Resilience",
    pillar: "Courageous Realism",
    insight:
      "True strength does not lie in an unbroken record of triumph, but in the psychological resilience to persist through setbacks.",
  },
  {
    id: 2,
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "Wisdom",
    mood: "Intellectual Humility",
    energy: 65,
    tone: "Reflective Clarity",
    pillar: "Epistemological Humility",
    insight:
      "Acknowledging the boundaries of your knowledge opens the doorway to genuine intellectual growth and discovery.",
  },
  {
    id: 3,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Creativity",
    mood: "Curious Optimism",
    energy: 84,
    tone: "Cognitive Reframe",
    pillar: "Creative Transformation",
    insight:
      "Friction and constraints often act as the primary catalysts for breakthrough innovations and unexpected solutions.",
  },
  {
    id: 4,
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    category: "Philosophy",
    mood: "Stoic Calm",
    energy: 58,
    tone: "Rational Equilibrium",
    pillar: "Stoic Discernment",
    insight:
      "Anxiety routinely magnifies anticipated friction. Grounding yourself in the present moment dissolves phantom hardships.",
  },
  {
    id: 5,
    text: "Courage is resistance to fear, mastery of fear—not absence of fear.",
    author: "Mark Twain",
    category: "Courage",
    mood: "Bold Resolution",
    energy: 88,
    tone: "Audacious Fortitude",
    pillar: "Moral Courage",
    insight:
      "Bravery is an intentional choice made in the explicit presence of trepidation, not a naive indifference to risk.",
  },
  {
    id: 6,
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    category: "Creativity",
    mood: "Playful Invention",
    energy: 89,
    tone: "Unconventional Spark",
    pillar: "Intuitive Play",
    insight:
      "When rigorous intellect relaxes into open-minded play, novel ideas emerge with effortless fluid grace.",
  },
  {
    id: 7,
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    category: "Philosophy",
    mood: "Existential Purpose",
    energy: 78,
    tone: "Unyielding Resolve",
    pillar: "Teleological Meaning",
    insight:
      "Deep internal purpose transforms external friction into meaningful forward momentum.",
  },
  {
    id: 8,
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
    mood: "Serene Agency",
    energy: 72,
    tone: "Mindful Compassion",
    pillar: "Internal Locus of Control",
    insight:
      "Contentment is not a passive external windfall, but a deliberate discipline cultivated through daily conduct.",
  },
  {
    id: 9,
    text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde",
    category: "Humor",
    mood: "Playful Irony",
    energy: 85,
    tone: "Satirical Wit",
    pillar: "Intellectual Levity",
    insight:
      "A healthy dose of self-deprecating wit prevents intellectual vanity from blinding our self-awareness.",
  },
  {
    id: 10,
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    category: "Motivation",
    mood: "Pragmatic Action",
    energy: 94,
    tone: "Decisive Execution",
    pillar: "Pragmatic Agency",
    insight:
      "Waiting for flawless circumstances guarantees inaction. Working with immediate constraints produces tangible results.",
  },
  {
    id: 11,
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Creativity",
    mood: "Minimalist Elegance",
    energy: 66,
    tone: "Distilled Truth",
    pillar: "Aesthetic Precision",
    insight:
      "True mastery is demonstrated by removing the superfluous until only the essential brilliance remains.",
  },
  {
    id: 12,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Discipline",
    mood: "Steady Persistence",
    energy: 74,
    tone: "Methodical Tenacity",
    pillar: "Incremental Compounding",
    insight:
      "Velocity is secondary to direction; unbroken consistency over extended timelines inevitably achieves massive outcomes.",
  },
  {
    id: 13,
    text: "Waste no more time arguing what a good man should be. Be one.",
    author: "Marcus Aurelius",
    category: "Philosophy",
    mood: "Stoic Discipline",
    energy: 86,
    tone: "Ethical Imperative",
    pillar: "Action-Oriented Virtue",
    insight:
      "Philosophical theory is meaningless without congruent ethical behavior lived out in everyday interactions.",
  },
  {
    id: 14,
    text: "A day without laughter is a day wasted.",
    author: "Charlie Chaplin",
    category: "Humor",
    mood: "Lighthearted Joy",
    energy: 82,
    tone: "Vital Warmth",
    pillar: "Humorous Renewal",
    insight:
      "Laughter balances serious endeavors, recharging mental bandwidth and renewing optimism.",
  },
  {
    id: 15,
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
    category: "Motivation",
    mood: "Unshakeable Conviction",
    energy: 90,
    tone: "Decisive Overcoming",
    pillar: "Psychological Courage",
    insight:
      "Premature self-censorship robs you of discoveries that even instructive failures would otherwise grant.",
  },
  {
    id: 16,
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    category: "Wisdom",
    mood: "Profound Awakening",
    energy: 76,
    tone: "Existential Vitality",
    pillar: "Authentic Expression",
    insight:
      "Breaking away from robotic routine to pursue genuine passion is what distinguishes living from merely surviving.",
  },
  {
    id: 17,
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "Success",
    mood: "Kinetic Momentum",
    energy: 95,
    tone: "Action-First Execution",
    pillar: "Initial Inertia Breaker",
    insight:
      "Dissect complex tasks into small, immediate actions to eliminate intimidation and build unstoppable momentum.",
  },
  {
    id: 18,
    text: "Everything you’ve ever wanted is sitting on the other side of fear.",
    author: "George Addair",
    category: "Courage",
    mood: "Transcendental Bravery",
    energy: 93,
    tone: "Breakthrough Zeal",
    pillar: "Boundary Expansion",
    insight:
      "Fear functions as a compass pointing directly toward the territory where your next level of growth resides.",
  },
  {
    id: 19,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
    mood: "Present Mindfulness",
    energy: 64,
    tone: "Conscious Presence",
    pillar: "Temporal Awareness",
    insight:
      "Over-fixating on hypothetical futures blinds us to the unfolding beauty and opportunities of today.",
  },
  {
    id: 20,
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "Philosophy",
    mood: "Critical Reflection",
    energy: 70,
    tone: "Rigorous Introspection",
    pillar: "Self-Examination",
    insight:
      "Conscious self-audit and moral questioning keep personal values aligned with truth and integrity.",
  },
  {
    id: 21,
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "Wisdom",
    mood: "Moral Responsibility",
    energy: 83,
    tone: "Exemplary Leadership",
    pillar: "Embodied Ethics",
    insight:
      "Systemic transformation begins not with rhetoric, but with living out the specific standards you demand of others.",
  },
  {
    id: 22,
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    category: "Discipline",
    mood: "Structured Focus",
    energy: 87,
    tone: "Uncompromising Consistency",
    pillar: "Architectural Willpower",
    insight:
      "Inspiration ignites ambitions, but disciplined habit systems translate those ambitions into concrete realities.",
  },
  {
    id: 23,
    text: "Art is the lie that enables us to realize the truth.",
    author: "Pablo Picasso",
    category: "Creativity",
    mood: "Visionary Perception",
    energy: 81,
    tone: "Metaphorical Realism",
    pillar: "Aesthetic Revelation",
    insight:
      "Imaginative metaphors often illuminate psychological and emotional realities that plain literal prose cannot reach.",
  },
  {
    id: 24,
    text: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
    category: "Happiness",
    mood: "Autonomous Purpose",
    energy: 79,
    tone: "Self-Sovereign Clarity",
    pillar: "Intrinsic Motivation",
    insight:
      "Grounding your emotional state in noble aspirations shields you from the volatility of transient possessions.",
  },
  {
    id: 25,
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    category: "Discipline",
    mood: "Ancient Patience",
    energy: 68,
    tone: "Daoist Harmony",
    pillar: "Micro-Step Compounding",
    insight:
      "Every monumental achievement is simply the cumulative result of small, modest steps taken continuously.",
  },
  {
    id: 26,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "Success",
    mood: "Empirical Tenacity",
    energy: 91,
    tone: "Scientific Persistence",
    pillar: "Iterative Mastery",
    insight:
      "Reframe apparent errors as informational feedback loops guiding you toward the optimal breakthrough.",
  },
];

/* ========================================================
           02. APPLICATION STATE MANAGEMENT
           ======================================================== */
let currentQuoteIndex = 0;
let previousQuoteIndex = -1;
let activeDomainFilter = "All";

let favoritesCollection = [];
let quoteHistoryQueue = [];
let discoveredQuotesSet = new Set();
let categoriesVisitedSet = new Set();

// DOM Element Caching
const activeCategoryPill = document.getElementById("activeCategoryPill");
const activeMoodPill = document.getElementById("activeMoodPill");
const activeMoodLabel = document.getElementById("activeMoodLabel");
const activeQuoteText = document.getElementById("activeQuoteText");
const activeQuoteAuthor = document.getElementById("activeQuoteAuthor");
const activeQuoteInsight = document.getElementById("activeQuoteInsight");
const quoteBodyWrapper = document.getElementById("quoteBodyWrapper");
const btnToggleFav = document.getElementById("btnToggleFav");
const toastNotification = document.getElementById("toastNotification");

// AI Intelligence Elements
const intelSentimentTone = document.getElementById("intelSentimentTone");
const intelEnergyVal = document.getElementById("intelEnergyVal");
const intelEnergyFill = document.getElementById("intelEnergyFill");
const intelPhilosophyPillar = document.getElementById("intelPhilosophyPillar");

// Stats Elements
const statDiscoveredCount = document.getElementById("statDiscoveredCount");
const statFavSavedCount = document.getElementById("statFavSavedCount");
const statCategoriesVisited = document.getElementById("statCategoriesVisited");
const statTopMood = document.getElementById("statTopMood");
const favCountBadge = document.getElementById("favCountBadge");

// Toast Trigger Helper
function showToast(msg) {
  toastNotification.textContent = msg;
  toastNotification.classList.add("show");
  setTimeout(() => toastNotification.classList.remove("show"), 2600);
}

// 3D Kinetic Character Flip-Wave Engine for Headings
function initKineticHeadings() {
  const headings = document.querySelectorAll(
    "#heroKineticHeading, h2.section-title",
  );

  headings.forEach((heading) => {
    // Collect all text nodes
    const textNodes = [];
    const walk = document.createTreeWalker(
      heading,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    let node;
    while ((node = walk.nextNode())) {
      if (node.nodeValue.trim() !== "") {
        textNodes.push(node);
      }
    }

    textNodes.forEach((textNode) => {
      // Split by whitespace but capture it so we can preserve formatting
      const parts = textNode.nodeValue.split(/(\s+)/);
      const fragment = document.createDocumentFragment();

      parts.forEach((part) => {
        if (/^\s+$/.test(part)) {
          // It's whitespace, just append as text node
          fragment.appendChild(document.createTextNode(part));
        } else if (part !== "") {
          // It's a word
          const wordWrap = document.createElement("span");
          wordWrap.style.display = "inline-block";
          wordWrap.style.whiteSpace = "nowrap";

          Array.from(part).forEach((char) => {
            const span = document.createElement("span");
            span.className = "kinetic-flip-char";
            span.textContent = char;

            span.addEventListener("pointerenter", () => {
              span.classList.add("is-flipped");
              setTimeout(() => span.classList.remove("is-flipped"), 550);
            });

            wordWrap.appendChild(span);
          });

          fragment.appendChild(wordWrap);
        }
      });

      textNode.parentNode.replaceChild(fragment, textNode);
    });
  });
}

// Mouse Follower Engine
function initMouseFollower() {
  const follower = document.getElementById("mouseFollower");
  if (!follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.querySelectorAll("button, a, .category-card-item").forEach((el) => {
    el.addEventListener("mouseenter", () =>
      follower.classList.add("active-hover"),
    );
    el.addEventListener("mouseleave", () =>
      follower.classList.remove("active-hover"),
    );
  });

  function tickFollower() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    follower.style.left = `${currentX}px`;
    follower.style.top = `${currentY}px`;
    requestAnimationFrame(tickFollower);
  }
  tickFollower();
}

// Core Random Quote Selection (Prevents Consecutive Duplicates)
function getRandomIndex(filter) {
  let eligible = quotesDataset.map((q, idx) => ({ ...q, originalIdx: idx }));
  if (filter && filter !== "All") {
    eligible = eligible.filter(
      (q) => q.category.toLowerCase() === filter.toLowerCase(),
    );
  }

  if (!eligible.length) {
    eligible = quotesDataset.map((q, idx) => ({ ...q, originalIdx: idx }));
  }

  if (eligible.length === 1) {
    return eligible[0].originalIdx;
  }

  let newIdx;
  do {
    const rand = Math.floor(Math.random() * eligible.length);
    newIdx = eligible[rand].originalIdx;
  } while (newIdx === previousQuoteIndex && eligible.length > 1);

  return newIdx;
}

// Render Quote with Smooth Animations
function renderActiveQuote(index) {
  const quote = quotesDataset[index];
  if (!quote) return;

  // Smooth fade-out & scale-down
  quoteBodyWrapper.classList.add("is-transitioning");

  setTimeout(() => {
    // Update Metadata
    activeCategoryPill.textContent = quote.category;
    activeMoodLabel.textContent = quote.mood;
    activeQuoteText.textContent = `"${quote.text}"`;
    activeQuoteAuthor.textContent = quote.author;
    activeQuoteInsight.textContent = quote.insight;

    // Update Intelligence Cards
    intelSentimentTone.textContent = quote.tone;
    intelEnergyVal.textContent = `${quote.energy}% Dynamic`;
    intelEnergyFill.style.width = `${quote.energy}%`;
    intelPhilosophyPillar.textContent = quote.pillar;

    // Sync Favorites State
    updateFavButtonVisual();

    // Telemetry Tracking
    discoveredQuotesSet.add(quote.id);
    categoriesVisitedSet.add(quote.category);
    addToHistory(quote);
    updateStatsUI();

    // Smooth fade-in
    quoteBodyWrapper.classList.remove("is-transitioning");
  }, 260);

  previousQuoteIndex = currentQuoteIndex;
  currentQuoteIndex = index;
}

function generateNewQuote() {
  const nextIdx = getRandomIndex(activeDomainFilter);
  renderActiveQuote(nextIdx);
}

// Favorites Management
function loadFavorites() {
  try {
    const stored = localStorage.getItem("quoteflow_favorites");
    favoritesCollection = stored ? JSON.parse(stored) : [];
  } catch (e) {
    favoritesCollection = [];
  }
  renderFavoritesFeed();
}

function saveFavorites() {
  try {
    localStorage.setItem(
      "quoteflow_favorites",
      JSON.stringify(favoritesCollection),
    );
  } catch (e) {}
  renderFavoritesFeed();
  updateFavButtonVisual();
  updateStatsUI();
}

function isCurrentFavorited() {
  const activeQuote = quotesDataset[currentQuoteIndex];
  return (
    activeQuote && favoritesCollection.some((f) => f.id === activeQuote.id)
  );
}

function updateFavButtonVisual() {
  if (isCurrentFavorited()) {
    btnToggleFav.classList.add("is-favorited");
    btnToggleFav.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  } else {
    btnToggleFav.classList.remove("is-favorited");
    btnToggleFav.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  }
}

function toggleFavorite() {
  const activeQuote = quotesDataset[currentQuoteIndex];
  if (!activeQuote) return;

  const existingIdx = favoritesCollection.findIndex(
    (f) => f.id === activeQuote.id,
  );
  if (existingIdx > -1) {
    favoritesCollection.splice(existingIdx, 1);
    showToast("Removed from favorites");
  } else {
    favoritesCollection.unshift(activeQuote);
    showToast("Saved to favorites ❤️");
  }
  saveFavorites();
}

function renderFavoritesFeed() {
  const container = document.getElementById("favoritesContainer");
  favCountBadge.textContent = favoritesCollection.length;
  statFavSavedCount.textContent = favoritesCollection.length;

  if (!favoritesCollection.length) {
    container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md);">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">💌</div>
                        <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;">No favorites saved yet</div>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin-top: 0.35rem;">Click the heart icon on any quote to build your private collection.</p>
                    </div>
                `;
    return;
  }

  container.innerHTML = favoritesCollection
    .map(
      (fav) => `
                <article class="fav-card-item">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--color-accent-primary); margin-bottom:0.4rem;">${fav.category}</div>
                        <blockquote class="fav-card-quote">"${fav.text}"</blockquote>
                        <div class="fav-card-author">— ${fav.author}</div>
                    </div>
                    <div class="fav-actions-row">
                        <button type="button" class="btn-action-icon" style="width:34px; height:34px;" onclick="copySpecificQuote('${escapeQuote(fav.text)}', '${fav.author}')" title="Copy">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        </button>
                        <button type="button" class="btn-action-icon" style="width:34px; height:34px; color:var(--color-accent-secondary);" onclick="removeFavorite(${fav.id})" title="Remove">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                </article>
            `,
    )
    .join("");
}

function removeFavorite(id) {
  favoritesCollection = favoritesCollection.filter((f) => f.id !== id);
  saveFavorites();
  showToast("Favorite removed");
}

document.getElementById("btnClearAllFavs").addEventListener("click", () => {
  if (!favoritesCollection.length) return;
  favoritesCollection = [];
  saveFavorites();
  showToast("All favorites cleared");
});

// Clipboard Copy with Iframe-Safe Fallback
function copyTextToClipboard(formattedText) {
  let success = false;
  try {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = formattedText;
    tempTextArea.setAttribute("readonly", "");
    tempTextArea.style.position = "fixed";
    tempTextArea.style.top = "0";
    tempTextArea.style.left = "-9999px";
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    success = document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  } catch (err) {
    success = false;
  }

  if (success) {
    showToast("Copied to clipboard ✓");
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(formattedText)
      .then(() => showToast("Copied to clipboard ✓"))
      .catch(() => showToast("Could not access clipboard"));
  } else {
    showToast("Clipboard access restricted");
  }
}

function copyActiveQuote() {
  const quote = quotesDataset[currentQuoteIndex];
  if (!quote) return;
  const full = `"${quote.text}"\n— ${quote.author}`;
  copyTextToClipboard(full);
}

window.copySpecificQuote = function (text, author) {
  const full = `"${text}"\n— ${author}`;
  copyTextToClipboard(full);
};

function escapeQuote(str) {
  return str.replace(/'/g, "\\'");
}

// Web Share API + Modal Fallback
const shareModal = document.getElementById("shareModal");
const btnCloseShareModal = document.getElementById("btnCloseShareModal");

function triggerShare() {
  const quote = quotesDataset[currentQuoteIndex];
  if (!quote) return;

  const shareData = {
    title: "QuoteFlow Perspective",
    text: `"${quote.text}" — ${quote.author}`,
    url: window.location.href,
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    shareModal.classList.add("open");
  }
}

btnCloseShareModal.addEventListener("click", () =>
  shareModal.classList.remove("open"),
);
shareModal.addEventListener("click", (e) => {
  if (e.target === shareModal) shareModal.classList.remove("open");
});

document.getElementById("btnShareWhatsApp").addEventListener("click", () => {
  const quote = quotesDataset[currentQuoteIndex];
  const text = encodeURIComponent(
    `"${quote.text}" — ${quote.author}\n${window.location.href}`,
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  shareModal.classList.remove("open");
});

document.getElementById("btnShareTwitter").addEventListener("click", () => {
  const quote = quotesDataset[currentQuoteIndex];
  const text = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
  window.open(
    `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`,
    "_blank",
  );
  shareModal.classList.remove("open");
});

document.getElementById("btnShareLinkedIn").addEventListener("click", () => {
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    "_blank",
  );
  shareModal.classList.remove("open");
});

document.getElementById("btnShareCopyDirect").addEventListener("click", () => {
  copyActiveQuote();
  shareModal.classList.remove("open");
});

// Voice Narration (SpeechSynthesis)
let isNarrating = false;
function narrateQuoteAloud() {
  const quote = quotesDataset[currentQuoteIndex];
  if (!quote || !("speechSynthesis" in window)) {
    showToast("Speech narration not supported");
    return;
  }

  if (window.speechSynthesis.speaking || isNarrating) {
    window.speechSynthesis.cancel();
    isNarrating = false;
    showToast("Narration stopped");
    return;
  }

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  const utterance = new SpeechSynthesisUtterance(
    `"${quote.text}". By ${quote.author}.`,
  );
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  utterance.onstart = () => {
    isNarrating = true;
    showToast("Narrating quote aloud... 🔊");
  };
  utterance.onend = () => {
    isNarrating = false;
  };
  utterance.onerror = () => {
    isNarrating = false;
  };

  window.speechSynthesis.speak(utterance);
}

// Voice Recognition (SpeechRecognition)
const btnVoiceMic = document.getElementById("btnVoiceMic");
const voiceTranscriptStatus = document.getElementById("voiceTranscriptStatus");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognizer = new SpeechRecognition();
  recognizer.continuous = false;
  recognizer.lang = "en-US";

  recognizer.onstart = () => {
    btnVoiceMic.classList.add("is-listening");
    voiceTranscriptStatus.textContent =
      'Listening... Speak a keyword (e.g. "Courage")';
  };

  recognizer.onresult = (e) => {
    const spoken = e.results[0][0].transcript.toLowerCase();
    voiceTranscriptStatus.textContent = `Heard: "${spoken}"`;

    // Keyword Matching
    const keywords = [
      "motivation",
      "wisdom",
      "creativity",
      "philosophy",
      "courage",
      "humor",
      "happiness",
      "discipline",
      "success",
      "life",
    ];
    const match = keywords.find((k) => spoken.includes(k));

    if (match) {
      filterByDomain(match.charAt(0).toUpperCase() + match.slice(1));
      showToast(`Matched domain: ${match.toUpperCase()} 🎙️`);
    } else {
      generateNewQuote();
      showToast("Generated random perspective! 🎙️");
    }
  };

  recognizer.onend = () => {
    btnVoiceMic.classList.remove("is-listening");
  };

  recognizer.onerror = () => {
    btnVoiceMic.classList.remove("is-listening");
    voiceTranscriptStatus.textContent =
      "Voice error or muted • Click to try again";
  };

  btnVoiceMic.addEventListener("click", () => {
    try {
      recognizer.start();
    } catch (err) {
      recognizer.stop();
    }
  });
} else {
  btnVoiceMic.addEventListener("click", () => {
    showToast("Speech recognition not supported in this browser");
    voiceTranscriptStatus.textContent =
      "Speech API unavailable on this browser";
  });
}

/* ========================================================
   GEMINI API LLM INTEGRATION LAYER (gemini-3-flash-preview)
   ======================================================== */
async function callGeminiAPI(
  systemPrompt,
  userQuery,
  jsonSchema = null,
  maxRetries = 3,
) {
  const apiKey = ""; // Canvas runtime provides the key automatically
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
  };

  if (jsonSchema) {
    payload.generationConfig = {
      responseMimeType: "application/json",
      responseSchema: jsonSchema,
    };
  }

  let delay = 1000;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 429 && attempt < maxRetries - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
          continue;
        }
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Empty response from Gemini API");
      return text;
    } catch (err) {
      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2;
      } else {
        throw err;
      }
    }
  }
}

/* Feature 1: Deep Philosophical Exegesis on Active Quote */
const btnGeminiUnpack = document.getElementById("btnGeminiUnpack");
const geminiExegesisDrawer = document.getElementById("geminiExegesisDrawer");
const geminiExegesisContent = document.getElementById("geminiExegesisContent");
const btnCloseExegesis = document.getElementById("btnCloseExegesis");

async function unpackQuoteWithGemini() {
  const activeQuote = quotesDataset[currentQuoteIndex];
  if (!activeQuote) return;

  btnGeminiUnpack.classList.add("is-loading");
  btnGeminiUnpack.innerHTML = `<span>⏳ Synthesizing Wisdom...</span>`;
  geminiExegesisDrawer.classList.add("is-active");

  // Show shimmer loading skeleton
  geminiExegesisContent.innerHTML = `
    <div class="exegesis-card gemini-shimmer-loading" style="height:120px;"></div>
    <div class="exegesis-card gemini-shimmer-loading" style="height:120px;"></div>
    <div class="exegesis-card gemini-shimmer-loading" style="height:120px;"></div>
    <div class="exegesis-card gemini-shimmer-loading" style="height:120px;"></div>
  `;

  const systemPrompt = `You are a world-class philosophical mentor and cognitive psychologist. Analyze the given quote and provide a deeply structured, modern, practical breakdown. Return strictly valid JSON conforming to the requested schema.`;
  const userQuery = `Quote: "${activeQuote.text}" by ${activeQuote.author}. Domain: ${activeQuote.category}.`;

  const schema = {
    type: "OBJECT",
    properties: {
      lifeApplication: {
        type: "STRING",
        description:
          "Clear, practical real-world application for everyday decisions.",
      },
      philosophicalRoots: {
        type: "STRING",
        description:
          "Historical and philosophical lineage (e.g. Stoicism, Existentialism, Buddhism).",
      },
      counterPerspective: {
        type: "STRING",
        description:
          "Constructive nuance: when does this quote NOT apply or risk toxic positivity?",
      },
      actionablePractice: {
        type: "STRING",
        description:
          "A micro-action or mental experiment the reader can try right now.",
      },
    },
    required: [
      "lifeApplication",
      "philosophicalRoots",
      "counterPerspective",
      "actionablePractice",
    ],
    propertyOrdering: [
      "lifeApplication",
      "philosophicalRoots",
      "counterPerspective",
      "actionablePractice",
    ],
  };

  try {
    const rawJson = await callGeminiAPI(systemPrompt, userQuery, schema);
    const data = JSON.parse(rawJson);

    geminiExegesisContent.innerHTML = `
      <div class="exegesis-card">
        <div class="exegesis-card-title"><span>🎯</span> Real-World Application</div>
        <p class="exegesis-card-desc">${data.lifeApplication}</p>
      </div>
      <div class="exegesis-card">
        <div class="exegesis-card-title"><span>🏛️</span> Philosophical Roots</div>
        <p class="exegesis-card-desc">${data.philosophicalRoots}</p>
      </div>
      <div class="exegesis-card">
        <div class="exegesis-card-title"><span>⚖️</span> Counter-Perspective</div>
        <p class="exegesis-card-desc">${data.counterPerspective}</p>
      </div>
      <div class="exegesis-card">
        <div class="exegesis-card-title"><span>⚡</span> Micro-Practice Today</div>
        <p class="exegesis-card-desc">${data.actionablePractice}</p>
      </div>
    `;
    showToast("Gemini 3 Flash Exegesis Complete ✨");
  } catch (err) {
    geminiExegesisContent.innerHTML = `
      <div class="exegesis-card" style="grid-column: 1 / -1; border-color: var(--color-accent-primary);">
        <div class="exegesis-card-title"><span>💡</span> Contextual Insight</div>
        <p class="exegesis-card-desc">${activeQuote.insight} Ground yourself in intentional action, applying this truth to your immediate choices.</p>
      </div>
    `;
    showToast("Rendered offline philosophical breakdown");
  } finally {
    btnGeminiUnpack.classList.remove("is-loading");
    btnGeminiUnpack.innerHTML = `<span>✨ Unpack with Gemini</span>`;
  }
}

btnGeminiUnpack.addEventListener("click", unpackQuoteWithGemini);
btnCloseExegesis.addEventListener("click", () => {
  geminiExegesisDrawer.classList.remove("is-active");
});

/* Feature 2: Live Psychological Sentiment Audit with Gemini */
const btnRunGeminiAudit = document.getElementById("btnRunGeminiAudit");
const geminiPsychologyBox = document.getElementById("geminiPsychologyBox");
const geminiPsychologyText = document.getElementById("geminiPsychologyText");

async function runGeminiPsychologicalAudit() {
  const activeQuote = quotesDataset[currentQuoteIndex];
  if (!activeQuote) return;

  btnRunGeminiAudit.classList.add("is-loading");
  btnRunGeminiAudit.innerHTML = `<span>⏳ Auditing Sentiment...</span>`;

  const systemPrompt = `You are an expert psycholinguist and emotional sentiment researcher. Analyze the emotional resonance, energy velocity, and cognitive reframing of the quote. Return strictly valid JSON.`;
  const userQuery = `Quote: "${activeQuote.text}" by ${activeQuote.author}.`;

  const schema = {
    type: "OBJECT",
    properties: {
      sentimentTone: { type: "STRING" },
      energyQuotient: { type: "INTEGER" },
      philosophicalPillar: { type: "STRING" },
      psychologicalMechanism: { type: "STRING" },
    },
    required: [
      "sentimentTone",
      "energyQuotient",
      "philosophicalPillar",
      "psychologicalMechanism",
    ],
    propertyOrdering: [
      "sentimentTone",
      "energyQuotient",
      "philosophicalPillar",
      "psychologicalMechanism",
    ],
  };

  try {
    const rawJson = await callGeminiAPI(systemPrompt, userQuery, schema);
    const data = JSON.parse(rawJson);

    intelSentimentTone.textContent = data.sentimentTone;
    intelEnergyVal.textContent = `${Math.min(100, Math.max(10, data.energyQuotient))}% Dynamic`;
    intelEnergyFill.style.width = `${Math.min(100, Math.max(10, data.energyQuotient))}%`;
    intelPhilosophyPillar.textContent = data.philosophicalPillar;

    geminiPsychologyBox.style.display = "block";
    geminiPsychologyText.textContent = data.psychologicalMechanism;
    showToast("Live Gemini Audit Updated 🧠");
  } catch (err) {
    showToast("Audit complete (offline calibrated)");
  } finally {
    btnRunGeminiAudit.classList.remove("is-loading");
    btnRunGeminiAudit.innerHTML = `<span>✨ Run Live Gemini 3 Flash Psychological Audit</span>`;
  }
}

btnRunGeminiAudit.addEventListener("click", runGeminiPsychologicalAudit);

/* Feature 3: Gemini Generative Quote Muse & Dilemma Solver */
let currentComposerResult = null;
const btnComposeQuote = document.getElementById("btnComposeQuote");
const compDilemmaInput = document.getElementById("compDilemmaInput");
const compPersonaSelect = document.getElementById("compPersonaSelect");
const compToneSelect = document.getElementById("compToneSelect");
const composedResultText = document.getElementById("composedResultText");
const composedAuthorText = document.getElementById("composedAuthorText");
const composerCorePrinciple = document.getElementById("composerCorePrinciple");
const composerDailyAction = document.getElementById("composerDailyAction");
const composerJournalPrompt = document.getElementById("composerJournalPrompt");
const btnApplyComposerToActive = document.getElementById(
  "btnApplyComposerToActive",
);
const btnCopyComposerQuote = document.getElementById("btnCopyComposerQuote");

// Prompt Chips delegation
document.querySelectorAll(".btn-prompt-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    compDilemmaInput.value = chip.getAttribute("data-prompt");
    compDilemmaInput.focus();
  });
});

async function synthesizeGeminiQuote() {
  const dilemma =
    compDilemmaInput.value.trim() ||
    "Seeking purpose, courage, and direction in life";
  const persona = compPersonaSelect.value;
  const tone = compToneSelect.value;

  btnComposeQuote.classList.add("is-loading");
  btnComposeQuote.innerHTML = `<span>✦ Channeling ${persona}...</span>`;

  const systemPrompt = `You are Gemini 3 Flash, acting as a profound philosophical muse. Given the user's specific life situation or emotional friction, channel the wisdom and voice of the requested historical thinker (${persona}) in the specified tone (${tone}). Synthesize a brand-new, powerful, original quote with micro-actions and reflections. Return strictly valid JSON.`;
  const userQuery = `Situation: "${dilemma}". Thinker persona: "${persona}". Desired tone: "${tone}".`;

  const schema = {
    type: "OBJECT",
    properties: {
      quote: {
        type: "STRING",
        description: "Original powerful quote under 35 words.",
      },
      authorPersona: {
        type: "STRING",
        description: "Formatted attribution name.",
      },
      corePhilosophy: {
        type: "STRING",
        description: "Single-sentence underlying truth.",
      },
      practicalApplication: {
        type: "STRING",
        description: "Immediate 2-minute physical habit or shift.",
      },
      reflectionQuestion: {
        type: "STRING",
        description: "Penetrating journal question.",
      },
      mood: { type: "STRING" },
      category: { type: "STRING" },
    },
    required: [
      "quote",
      "authorPersona",
      "corePhilosophy",
      "practicalApplication",
      "reflectionQuestion",
      "mood",
      "category",
    ],
    propertyOrdering: [
      "quote",
      "authorPersona",
      "corePhilosophy",
      "practicalApplication",
      "reflectionQuestion",
      "mood",
      "category",
    ],
  };

  try {
    const rawJson = await callGeminiAPI(systemPrompt, userQuery, schema);
    const data = JSON.parse(rawJson);
    currentComposerResult = data;

    composedResultText.textContent = `"${data.quote}"`;
    composedAuthorText.textContent = `— ${data.authorPersona} (Channelled via Gemini 3 Flash)`;
    composerCorePrinciple.textContent = data.corePhilosophy;
    composerDailyAction.textContent = data.practicalApplication;
    composerJournalPrompt.textContent = `"${data.reflectionQuestion}"`;

    showToast(`Perspective synthesized via ${persona}! ✦`);
  } catch (err) {
    // Graceful deterministic fallback
    const fallbackText =
      "When the path ahead is obscured by mist, the master takes the single honest step right beneath their feet.";
    composedResultText.textContent = `"${fallbackText}"`;
    composedAuthorText.textContent = `— ${persona} (Synthesized Offline)`;
    composerCorePrinciple.textContent =
      "Present-moment clarity conquers hypothetical anxieties.";
    composerDailyAction.textContent =
      "Take the smallest tangible step toward your immediate priority.";
    composerJournalPrompt.textContent =
      '"What am I avoiding that requires my direct attention?"';
    currentComposerResult = {
      quote: fallbackText,
      authorPersona: `${persona} (QuoteFlow Muse)`,
      category: "Wisdom",
      mood: "Grounded Resolve",
      corePhilosophy: "Action grounds anxiety.",
      practicalApplication: "Take one tangible step now.",
      reflectionQuestion: "What is my immediate priority?",
    };
    showToast("Quote synthesized (offline fallback)");
  } finally {
    btnComposeQuote.classList.remove("is-loading");
    btnComposeQuote.innerHTML = `<span>Synthesize with Gemini AI</span><span>✦</span>`;
  }
}

btnComposeQuote.addEventListener("click", synthesizeGeminiQuote);

// Apply Composer Result directly to Main Quote Display
btnApplyComposerToActive.addEventListener("click", () => {
  if (!currentComposerResult) {
    showToast("Synthesize a quote first!");
    return;
  }

  const syntheticQuote = {
    id: Date.now(),
    text: currentComposerResult.quote,
    author: currentComposerResult.authorPersona,
    category: currentComposerResult.category || "AI Muse",
    mood: currentComposerResult.mood || "Transcendent Clarity",
    energy: 90,
    tone: "Empowering Synthesis",
    pillar: currentComposerResult.corePhilosophy || "Sovereign Mindset",
    insight:
      currentComposerResult.practicalApplication || "Embrace immediate action.",
  };

  quotesDataset.unshift(syntheticQuote);
  currentQuoteIndex = 0;
  renderActiveQuote(0);

  const genSection = document.getElementById("generator");
  if (genSection) genSection.scrollIntoView({ behavior: "smooth" });
  showToast("Active quote updated! ✦");
});

// Copy Composer Quote
btnCopyComposerQuote.addEventListener("click", () => {
  const text = `${composedResultText.textContent}\n${composedAuthorText.textContent}`;
  copyTextToClipboard(text);
});

// Deterministic Quote of the Day
function initQuoteOfTheDay() {
  const today = new Date();
  const dateStr = today.toISOString().split("T")[0];
  document.getElementById("dailyDateStamp").textContent =
    `TODAY'S SELECTION • ${dateStr}`;

  // Deterministic String Hash
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const dailyIdx = Math.abs(hash) % quotesDataset.length;
  const dailyQuote = quotesDataset[dailyIdx];

  document.getElementById("dailyQuoteText").textContent =
    `"${dailyQuote.text}"`;
  document.getElementById("dailyQuoteAuthor").textContent =
    `— ${dailyQuote.author}`;
}

// History & Statistics Tracker
function addToHistory(quote) {
  quoteHistoryQueue.unshift(quote);
  if (quoteHistoryQueue.length > 25) quoteHistoryQueue.pop();
}

function updateStatsUI() {
  statDiscoveredCount.textContent = discoveredQuotesSet.size;
  statCategoriesVisited.textContent = categoriesVisitedSet.size;
  const activeQuote = quotesDataset[currentQuoteIndex];
  if (activeQuote) {
    statTopMood.textContent = activeQuote.category;
  }
}

// Category Domain Quick Filters
window.filterByDomain = function (domain) {
  activeDomainFilter = domain;
  document.querySelectorAll(".btn-mood-pill").forEach((btn) => {
    if (
      btn.getAttribute("data-filter").toLowerCase() === domain.toLowerCase()
    ) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  generateNewQuote();
  const genTarget = document.getElementById("generator");
  if (genTarget) genTarget.scrollIntoView({ behavior: "smooth" });
};

// Theme Switching & Persistence
const btnThemeToggle = document.getElementById("btnThemeToggle");

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  if (!themeIcon) return;
  if (theme === "dark") {
    // Sun icon in Dark Mode (click to switch to light)
    themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    btnThemeToggle.setAttribute("aria-label", "Switch to light mode");
    btnThemeToggle.setAttribute("title", "Switch to light mode");
  } else {
    // Moon icon in Light Mode (click to switch to dark)
    themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    btnThemeToggle.setAttribute("aria-label", "Switch to dark mode");
    btnThemeToggle.setAttribute("title", "Switch to dark mode");
  }
}

function initTheme() {
  const saved =
    localStorage.getItem("quoteflow_theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

btnThemeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  updateThemeIcon(target);
  try {
    localStorage.setItem("quoteflow_theme", target);
  } catch (e) {}
  showToast(`Switched to ${target} mode`);
});

// Mobile Drawer Toggle
const btnHamburger = document.getElementById("btnHamburger");
const mobileDrawer = document.getElementById("mobileDrawer");

btnHamburger.addEventListener("click", () => {
  const isOpen = mobileDrawer.classList.toggle("open");
  btnHamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("#mobileDrawer a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
    btnHamburger.setAttribute("aria-expanded", "false");
  });
});

// FAQ Accordion Toggles
document.querySelectorAll(".faq-trigger-btn").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.parentElement;
    const wasActive = item.classList.contains("active");
    document
      .querySelectorAll(".faq-accordion-item")
      .forEach((i) => i.classList.remove("active"));
    if (!wasActive) {
      item.classList.add("active");
      trigger.setAttribute("aria-expanded", "true");
    } else {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
});

// Category Cards Click Delegation
document.querySelectorAll(".category-card-item").forEach((card) => {
  card.addEventListener("click", () => {
    const cat = card.getAttribute("data-cat");
    if (cat) filterByDomain(cat);
  });
});

// Mood Filter Pills
document.querySelectorAll(".btn-mood-pill").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".btn-mood-pill")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeDomainFilter = btn.getAttribute("data-filter");
    generateNewQuote();
  });
});

// Core Button Listeners
document
  .getElementById("btnMainGenerate")
  .addEventListener("click", generateNewQuote);
document.getElementById("btnHeroGenQuote").addEventListener("click", () => {
  generateNewQuote();
  document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("btnFinalCtaGen").addEventListener("click", () => {
  generateNewQuote();
  document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
});

btnToggleFav.addEventListener("click", toggleFavorite);
document
  .getElementById("btnCopyQuote")
  .addEventListener("click", copyActiveQuote);
document
  .getElementById("btnShareQuote")
  .addEventListener("click", triggerShare);
document
  .getElementById("btnListenQuote")
  .addEventListener("click", narrateQuoteAloud);

// Global Keyboard Shortcut: Spacebar Generates New Quote
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    const tag = document.activeElement
      ? document.activeElement.tagName.toLowerCase()
      : "";
    if (tag !== "input" && tag !== "textarea" && tag !== "select") {
      e.preventDefault();
      generateNewQuote();
    }
  }
});

// System Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initKineticHeadings();
  initMouseFollower();
  loadFavorites();
  initQuoteOfTheDay();
  renderActiveQuote(0);
});
