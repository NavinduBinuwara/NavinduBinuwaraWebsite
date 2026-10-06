/* ==========================================================
   Navindu Binuwara - Portfolio  |  js/main.js
   ========================================================== */

/* ===== EDIT YOUR DETAILS HERE ===== */
const CFG = {
  email: "gpn.binuwara@gmail.com",
  phone: "94765832784",          // digits only, with country code
  born:  "2000-09-09",           // used to calculate your age automatically
  li: "https://www.linkedin.com/in/YOUR-NAME",
  gh: "https://github.com/YOUR-NAME",
  in: "https://instagram.com/YOUR-NAME",
  fb: "https://facebook.com/YOUR-NAME",
  yt: "https://youtube.com/@YOUR-NAME",
  tt: "https://tiktok.com/@YOUR-NAME",
  tw: "https://x.com/YOUR-NAME"
};
/* ================================== */

const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- Inline SVG icons (no external library) ---------- */
const P = {
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 11.8a29 29 0 0 0 .4 5.3 2.8 2.8 0 0 0 2 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.8 2.8 0 0 0 2-1.9 29 29 0 0 0 .4-5.3 29 29 0 0 0-.5-5.4z"/><path d="M9.8 15l5.7-3.2L9.8 8.5z"/>',
  tiktok: '<path d="M9 12a4 4 0 1 0 4 4V3c.5 2.5 2.5 4 5 4"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  whatsapp: '<path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.6z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 .8c-1-.4-1.8-1.2-2.2-2.2L11 10l-1-2z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  left: '<path d="M15 18l-6-6 6-6"/>',
  right: '<path d="M9 18l6-6-6-6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  film: '<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>',
  trend: '<path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6"/>',
  plane: '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  headset: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3zM3 19a2 2 0 0 0 2 2h1v-7H3z"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v3h20v-3a3 3 0 0 1 0-6V6H2z"/><path d="M13 6v12"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  pen: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${P[n] || ""}</svg>`;
const paint = root => (root || document).querySelectorAll("i[data-ic]").forEach(e => { e.innerHTML = svg(e.dataset.ic); });

/* ---------- Social + contact icon bars ---------- */
const soc = [["in","instagram","Instagram"],["fb","facebook","Facebook"],["yt","youtube","YouTube"],["tt","tiktok","TikTok"],["tw","x","X (Twitter)"]];
const link = (icon, label, href, cls = "") =>
  `<a href="${href}" class="${cls}" aria-label="${label}" target="_blank" rel="noopener"><i data-ic="${icon}"></i></a>`;
const wa = link("whatsapp", "WhatsApp", "https://wa.me/" + CFG.phone);

$("#float").innerHTML = soc.map(([k, i, l]) => link(i, l, CFG[k], k)).join("");
const allSocial = soc.map(([k, i, l]) => link(i, l, CFG[k])).join("");

$("#topic").innerHTML = wa +
  `<a href="tel:+${CFG.phone}" aria-label="Call me"><i data-ic="phone"></i></a>` +
  `<a href="mailto:${CFG.email}" aria-label="Email"><i data-ic="mail"></i></a>` +
  link("linkedin", "LinkedIn", CFG.li) + link("github", "GitHub", CFG.gh);

$("#footic").innerHTML = wa + link("linkedin", "LinkedIn", CFG.li) + link("github", "GitHub", CFG.gh) + allSocial +
  `<a href="mailto:${CFG.email}" aria-label="Email"><i data-ic="mail"></i></a>`;

$("#navic").innerHTML = $("#topic").innerHTML;
paint();
$("#yr").textContent = new Date().getFullYear();

/* ---------- Age updates itself every year ---------- */
const b = new Date(CFG.born), n = new Date();
let age = n.getFullYear() - b.getFullYear();
if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) age--;
$("#age").textContent = age;

/* ---------- Preloader + scroll reveal ---------- */
addEventListener("load", () => setTimeout(() => {
  $("#pre").classList.add("off");
  $$(".hero .fi").forEach(e => e.classList.add("v"));
}, 900));
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add("v")), { threshold: .12 });
$$(".fi").forEach(e => io.observe(e));

/* ---------- Count-up numbers in the About stats ---------- */
const counters = new IntersectionObserver(es => es.forEach(x => {
  if (!x.isIntersecting) return;
  const el = x.target, end = +el.dataset.n, sfx = el.dataset.sfx || "";
  counters.unobserve(el);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let v = 0; const t = setInterval(() => { v++; el.textContent = v + (v === end ? sfx : ""); if (v >= end) clearInterval(t); }, 260);
}), { threshold: .6 });
$$("[data-n]").forEach(e => counters.observe(e));

/* ---------- Parallax ---------- */
const layers = $$(".px");
addEventListener("scroll", () => {
  const y = scrollY;
  layers.forEach(p => p.style.transform = `translateY(${y * p.dataset.s}px)`);
}, { passive: true });

/* ---------- Light / dark mode ---------- */
const setTheme = t => {
  document.documentElement.dataset.theme = t;
  $("#theme i").dataset.ic = t === "dark" ? "sun" : "moon";
  paint($("#theme"));
  try { localStorage.setItem("th", t); } catch (e) {}
};
let saved = null; try { saved = localStorage.getItem("th"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"));
$("#theme").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

/* ---------- Skills carousel ---------- */
const tr = $("#tr"), step = () => tr.clientWidth * .6;
$("#nx").onclick = () => tr.scrollBy({ left: step(), behavior: "smooth" });
$("#pv").onclick = () => tr.scrollBy({ left: -step(), behavior: "smooth" });
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) setInterval(() => {
  if (document.activeElement === tr) return;
  tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 4 ? tr.scrollTo({ left: 0, behavior: "smooth" }) : tr.scrollBy({ left: step(), behavior: "smooth" });
}, 5000);

/* ---------- Typing effect ---------- */
const roles = ["Travel Consultant", "Airline Ticketing Executive", "Customer Care Professional", "Web Developer"];
let ri = 0, ci = 0, del = false;
const ty = $("#ty");
(function type() {
  const w = roles[ri];
  ty.textContent = w.slice(0, ci);
  if (!del && ci === w.length) { del = true; return setTimeout(type, 1500); }
  if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  ci += del ? -1 : 1;
  setTimeout(type, del ? 40 : 80);
})();

/* ---------- Hamburger menu (tablet portrait + phones) ---------- */
const nav = $("#nav"), menu = $("#menu");
const closeMenu = () => { nav.classList.remove("on"); menu.setAttribute("aria-expanded", "false"); };
menu.onclick = () => menu.setAttribute("aria-expanded", nav.classList.toggle("on"));
$$("#nav li a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("click", e => { if (!e.target.closest("header")) closeMenu(); });
addEventListener("keydown", e => e.key === "Escape" && closeMenu());
addEventListener("resize", () => innerWidth > 1024 && closeMenu());

/* ---------- Contact form (sent to your email via FormSubmit) ---------- */
$("#ct").action = "https://formsubmit.co/ajax/" + CFG.email;
$("#ct").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, s = f.querySelector(".st");
  s.textContent = "Sending...";
  try {
    const r = await fetch(f.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(f) });
    if (!r.ok) throw 0;
    s.textContent = "Thank you! Your message was sent.";
    f.reset();
  } catch (x) {
    s.textContent = "Could not send. Please email " + CFG.email;
  }
});

/* ---------- "Call me" links use the number from CFG ---------- */
$$("[data-call]").forEach(a => a.href = "tel:+" + CFG.phone);
