<script>
function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  const msg = userText.toLowerCase();
  if (!msg) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user">${userText}</div>`;

  let reply = "🤖 Mujhe thoda aur detail chahiye, phir main better jawab de sakta hoon 🙂";

  // Greetings
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("assalam")) {
    reply = "👋 Assalamu Alaikum! Main **NomanX AI** hoon. Bataiye main aapki kis tarah madad kar sakta hoon?";
  }

  // About NomanX AI
  else if (msg.includes("nomanx") || msg.includes("about")) {
    reply = "🚀 **NomanX AI** ek professional AI platform hai jo chat, content, design aur business help ke liye bana hai.";
  }

  // Features
  else if (msg.includes("feature")) {
    reply = "✨ Features: AI Chat Assistant, Content Writing, Design Help, Business Ideas, Study Support aur future me aur powerful tools.";
  }

  // Owner
  else if (msg.includes("owner") || msg.includes("creator")) {
    reply = "👑 **NomanX AI** ke owner aur developer hain **Noman Ali**.";
  }

  // Study
  else if (msg.includes("study") || msg.includes("exam")) {
    reply = "📚 Main study help kar sakta hoon — concepts, notes, tips aur exam preparation guidance.";
  }

  // Business
  else if (msg.includes("business") || msg.includes("startup") || msg.includes("earn")) {
    reply = "💼 Main business ideas, online earning tips aur startup planning me madad karta hoon.";
  }

  // AI / Technology
  else if (msg.includes("ai") || msg.includes("artificial")) {
    reply = "🧠 AI ka matlab Artificial Intelligence — jo machines ko sochne aur madad karne layak banata hai.";
  }

  // Website / App
  else if (msg.includes("website") || msg.includes("app")) {
    reply = "🌐 Main website aur app planning, features aur improvement ideas de sakta hoon.";
  }

  // Help
  else if (msg.includes("help") || msg.includes("support")) {
    reply = "🆘 Aap mujhse padhai, business, AI, content, website ya ideas ke baare me kuch bhi puch sakte ho.";
  }

  // Default intelligent fallback
  else {
    reply = "🤖 Interesting question! Main AI, study, business, content aur technology me madad karta hoon. Thoda clear likhiye 🙂";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div class="ai">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}
</script>
<script>
  if (!canSendMessage()) return;
function sendMessage() {sendMessage();
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  const msg = userText.toLowerCase();
  if (!msg) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="user">${userText}</div>`;

  let reply = "🤖 Aapka sawal interesting hai. Thoda detail me likhiye taaki main best jawab de sakoon 🙂";

  const rules = [
    // Greetings
    { k: ["hi","hello","assalam","salam"], r: "👋 Assalamu Alaikum! Main **NomanX AI** hoon. Aap kis topic par madad chahte ho?" },

    // About
    { k: ["nomanx","about","platform"], r: "🚀 **NomanX AI** ek all-in-one AI platform hai jo chat, content, design, study aur business help deta hai." },

    // Owner
    { k: ["owner","creator","developer"], r: "👑 **NomanX AI** ke owner aur developer hain **Noman Ali**." },

    // Features
    { k: ["features","tools","kya kar sakta"], r: "✨ AI Chat, Content Writing, Design Ideas, Business Help, Study Support, Website Planning aur future AI tools." },

    // Study
    { k: ["study","exam","notes","padhai"], r: "📚 Main concepts samjha sakta hoon, notes bana sakta hoon aur exam tips de sakta hoon." },

    // Business
    { k: ["business","startup","earning","pais"], r: "💼 Main business ideas, online earning methods aur startup planning me madad karta hoon." },

    // Content
    { k: ["content","youtube","reel","script"], r: "🎬 Main YouTube scripts, reel ideas, captions aur content plans bana sakta hoon." },

    // Design
    { k: ["design","poster","logo","thumbnail"], r: "🎨 Main design ideas, color suggestions aur layout guidance de sakta hoon." },

    // Website
    { k: ["website","web","landing","seo"], r: "🌐 Main website structure, landing page ideas aur SEO basics samjha sakta hoon." },

    // App
    { k: ["app","android","ios"], r: "📱 Main app features planning aur UI ideas me madad karta hoon." },

    // AI
    { k: ["ai","artificial","machine"], r: "🧠 AI ka matlab Artificial Intelligence — jo machines ko smart banata hai taaki wo humans ki madad kar saken." },

    // Help
    { k: ["help","support","madad"], r: "🆘 Aap mujhse AI, study, business, content, website ya ideas ke baare me kuch bhi puch sakte ho." },

    // Pricing
    { k: ["free","price","subscription"], r: "💳 Abhi NomanX AI free hai. Future me Pro features subscription ke sath aayenge." },

    // Future
    { k: ["future","roadmap","plan"], r: "🚀 Future me real AI brain, login system, premium tools aur mobile app aayenge." },

    // Thanks
    { k: ["thanks","thank you","shukriya"], r: "😊 Aapka shukriya! Main yahin hoon madad ke liye." }
  ];

  for (let rule of rules) {
    if (rule.k.some(word => msg.includes(word))) {
      reply = rule.r;
      break;
    }
  }

  setTimeout(() => {
    const userName = localStorage.getItem("nomanxUser") || "Guest";
chatBox.innerHTML += `<div class="user"><b>${userName}:</b> ${userText}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
  <script>
let currentUser = localStorage.getItem("nomanxUser");

window.onload = () => {
  if (currentUser) {
    document.getElementById("welcome").innerText = "Welcome, " + currentUser + " 👋";
    document.getElementById("welcome").style.display = "block";
    document.getElementById("logoutBtn").style.display = "inline-block";
  }
};

function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Please enter your name");

  localStorage.setItem("nomanxUser", name);
  location.reload();
}

function logout() {
  localStorage.removeItem("nomanxUser");
  location.reload();
}
</script>
</script>
<script>
function setPlan(plan) {
  localStorage.setItem("nomanxPlan", plan);
  updatePlan();
}

function updatePlan() {
  const plan = localStorage.getItem("nomanxPlan") || "FREE";
  document.getElementById("currentPlan").innerText =
    "💼 Current Plan: " + plan;
}

window.onload = () => {
  updatePlan();
};
</script>
function canSendMessage() {
  const plan = localStorage.getItem("nomanxPlan") || "FREE";

  if (plan === "PRO") return true;

  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("nomanxDate");

  if (savedDate !== today) {
    localStorage.setItem("nomanxDate", today);
    localStorage.setItem("nomanxCount", "0");
  }

  let count = parseInt(localStorage.getItem("nomanxCount") || "0");

  if (count >= FREE_LIMIT) {
    alert("❌ Free limit reached. Upgrade to PRO 🚀");
    return false;
  }

  localStorage.setItem("nomanxCount", count + 1);
  return true;
}
<p id="limitInfo"></p>
function updateLimitInfo() {
  const plan = localStorage.getItem("nomanxPlan") || "FREE";

  if (plan === "PRO") {
    document.getElementById("limitInfo").innerText =
      "🔥 PRO USER — Unlimited Messages";
    return;
  }

  const used = localStorage.getItem("nomanxCount") || 0;
  document.getElementById("limitInfo").innerText =
    `Free Plan: ${used}/${FREE_LIMIT} messages used today`;
}

setInterval(updateLimitInfo, 1000);
