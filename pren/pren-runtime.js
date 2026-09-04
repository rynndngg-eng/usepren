const hiddenSelectors = [
  ".framer-bv63yr",
  ".framer-13r2gtp",
  ".framer-nlo83a",
  ".framer-l5gbs7",
  ".framer-1qwup6h",
  ".framer-12xu0tj",
  ".framer-9B55h .framer-ekueln",
  ".framer-9B55h .framer-1vgtr6d",
  ".framer-zVvLJ .framer-km6f9",
  'a[href="/blog"]',
  'a[href="./blog"]',
  'a[href^="/blog/"]',
  'a[href*="__removed-pren-journal"]',
  'a[href="/press"]',
  'a[href="./press"]',
  'a[href*="__removed-pren-press"]',
  'a[href*="__removed-pren-social"]',
].join(",");

const contactEmail = "rynndngg@gmail.com";
const demoPath = "/contact/?subject=demo";
const evidenceSourceUrl =
  "https://resdiary.com/industry-insights/ai-in-hospitality-2025-report?region=GB";
const routeMetadata = new Map([
  ["/", ["Pren | Hotel Operations, Unified", "Pren unifies property management, booking, point of sale, messaging, and guest intelligence in one hotel operating system."]],
  ["/about", ["About Pren | Hotel Operations Software", "Learn why Pren is building one modern operating system for hotel teams."]],
  ["/contact", ["Contact Pren | Hotel Software", "Talk with Pren about pricing, integrations, onboarding, or a tailored demo for your hotel or hotel group."]],
  ["/cookie-declaration", ["Cookie Declaration | Pren", "Review the cookies and tracking technologies used on the Pren website."]],
  ["/legal", ["Terms & Privacy | Pren", "Review Pren’s terms, privacy commitments, and service policies."]],
  ["/legal/dpa", ["Data Processing Agreement | Pren", "Review Pren’s data processing terms and privacy commitments."]],
  ["/legal/privacy", ["Privacy Policy | Pren", "Review how Pren handles and protects personal information."]],
  ["/legal/terms", ["Terms of Service | Pren", "Review the terms governing use of Pren services."]],
  ["/legal/cookies", ["Cookie Policy | Pren", "Review how cookies are used on the Pren website."]],
  ["/legal/support", ["Support Terms | Pren", "Review Pren’s support hours, response targets, and service process."]],
  ["/legal/service-description", ["Service Description | Pren", "Review the scope and operation of Pren’s hotel software services."]],
  ["/services/property-management-system", ["Hotel Property Management System (PMS) | Pren", "Keep front desk, housekeeping, reservations, billing, and hotel operations in sync with Pren PMS."]],
  ["/services/booking-engine", ["Commission-Free Hotel Booking Engine | Pren", "Turn hotel website visitors into direct reservations with secure checkout, packages, add-ons, and live availability."]],
  ["/services/point-of-sale", ["Hospitality Point of Sale (POS) | Pren", "Connect hotel restaurants, bars, spas, and retail to guest profiles, room charges, and operations."]],
  ["/services/messaging", ["Hotel Guest Messaging Platform | Pren", "Bring hotel email and OTA conversations into one multilingual guest messaging inbox."]],
  ["/services/guest-intelligence", ["Hotel Guest Intelligence Platform | Pren", "Unify guest history, preferences, and spend so hotel teams can deliver more personal service."]],
]);
const enhancedForms = new WeakSet();
const enhancedFaqs = new WeakSet();
const internalPagePaths = new Set([
  "/about",
  "/contact",
  "/cookie-declaration",
  "/legal",
  "/legal/cookies",
  "/legal/dpa",
  "/legal/privacy",
  "/legal/service-description",
  "/legal/support",
  "/legal/terms",
  "/services/booking-engine",
  "/services/guest-intelligence",
  "/services/messaging",
  "/services/point-of-sale",
  "/services/property-management-system",
]);
const faqQuestions = new Set([
  "What is Pren?",
  "How long does onboarding take?",
  "Does the AI act without my approval?",
  "Does Pren replace my existing systems?",
  "Is my data secure?",
  "How is Pren priced?",
]);

const imageMap = new Map([
  ["zotBiJiUMLdDBGGKpqtjOcrd0II.webp", "/pren/images/hero-city.webp"],
  ["ASyg2DNk0wvCbgR9NofZISno6g.webp", "/pren/images/hotel-lobby.webp"],
  ["9P3mMsYFQrl3Ugl4UNc6cw6WF48.webp", "/pren/images/coastal-arrival.webp"],
  ["HdMeZhvLZr0pCQfrHCWRPSEGgQQ.webp", "/pren/images/hotel-lobby.webp"],
  ["midUol0v4FWELMu3jVmRI3B5c.png", "/pren/images/city-terrace.webp"],
]);

const responsiveImageVariants = new Map([
  ["/pren/images/hero-city.webp", { widths: [512, 1024, 1440, 2048, 2560, 3840] }],
  ["/pren/images/hotel-lobby.webp", { widths: [512, 1024, 1440], fullWidth: 1636 }],
  ["/pren/images/coastal-arrival.webp", { widths: [512, 1024, 1440], fullWidth: 1540 }],
  ["/pren/images/city-terrace.webp", { widths: [512, 1024, 1440], fullWidth: 1448 }],
]);

const imageAltMap = new Map([
  ["QLvbVlBnGT9ntr01Cm54TD7yk.webp", "Pren property management schedule"],
  ["loq5tkwhJVMwjgpMM3UNtJupW8s.png", "Pren unified guest messaging inbox"],
  ["7aZtmBBEAZPvqEkyKgHbRll3Lao.png", "Pren direct booking experience"],
  ["wF7rKm0VDM2QEsv055PsfCYen8.png", "Pren point-of-sale interface"],
  ["vOjIBI6wK4JPl2NTAQQNwPEKtV4.png", "Pren guest intelligence profile"],
  ["Rpqs93qsm0RFSJLkBfejwwnQAfg.webp", "Pren spatial operations view"],
  ["V54DaVSxovypi2LjFdicj3SFW0E.webp", "Pren booking engine"],
  ["lupgq0BeZV6tgxwWUi3z3UMXOc.webp", "Pren point-of-sale interface"],
  ["Rr3k2PXdBPO5sHi3BttPInFarI.webp", "Pren guest messaging interface"],
]);

const editorialCopy = new Map([
  ["LEGAL", "TERMS & PRIVACY"],
  ["Legal", "Terms & privacy"],
  [
    "Find Pren’s agreements, policies, and notices. Select a document to review the current version.",
    "Review the terms, privacy commitments, and service policies that protect every Pren partnership.",
  ],
  ["hello@pren.com", "rynndngg@gmail.com"],
  ["support@pren.com", "rynndngg@gmail.com"],
  ["Stockholm, Sweden", "San Francisco, CA"],
  ["[Tap to discover]", "Explore service →"],
  ["Send your message", "Continue to email"],
  ["Lost in space", "Page not found"],
  ["Back to Home", "Back to home"],
  ["Built to for enterprises. Your data will always be secure.", "Built for enterprise operations, with security and data protection designed into the platform."],
  ["See what Pren is doing and why, nothing happens without a clear trail.", "See what Pren is doing and why—every action has a clear trail."],
  ["The system works ahead of you. Every action reviewable, every decision yours.", "The system works ahead of you. Every action is reviewable; every approval remains yours."],
  ["The agentic operating system for hotels. Helping exceptional hoteliers do their best work.", "One operating system for the modern hotel. Helping exceptional hoteliers do their best work."],
  ["The system knows who your guests are prepares suggestions to make their stay truly personal.", "Pren brings guest history, preferences, and spend into one profile, then suggests thoughtful ways to personalize each stay."],
  ["One system for all your payments. Select from a wide variety of configurations for your need.", "Run payments for rooms, restaurants, spas, and retail in one system, with workflows tailored to each outlet."],
  ["Create a bespoke booking experience for any type of booking to drive upsell and direct bookings.", "Create a tailored booking experience that makes direct reservations and relevant upgrades easy."],
  ["From bookings to getting quotes from external vendors to book an event, Pren handles everything.", "From reservations and guest requests to vendor quotes for events, Pren coordinates the work from start to finish."],
  ["Thanks to Spatial Reasoning, Pren can reason about the physical properties of a hotel.", "Pren models how rooms, venues, equipment, and staff relate across the property, so decisions account for the physical hotel."],
  [
    "2.1 The help desk team can be reached at +46(0)7355524 or support@pren.com and is available during the Agreed Hours of Service.",
    "2.1 The help desk team can be reached at rynndngg@gmail.com and is available during the Agreed Hours of Service.",
  ],
]);

function rebrandText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script,style,noscript")) return NodeFilter.FILTER_REJECT;
      const text = node.data.trim();
      return editorialCopy.has(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const exactReplacement = editorialCopy.get(node.data.trim());
    if (exactReplacement) {
      node.data = node.data.replace(node.data.trim(), exactReplacement);
    }
  }
}

function replacementFor(value) {
  if (!value) return null;
  for (const [source, replacement] of imageMap) {
    if (value.includes(source)) return replacement;
  }
  return null;
}

function responsiveReplacementFor(value) {
  if (!value) return null;
  for (const source of responsiveImageVariants.keys()) {
    const stem = source.slice(0, -".webp".length);
    if (value.includes(stem)) return source;
  }
  return null;
}

function rewriteImage(image) {
  const currentValue = image.currentSrc || image.src || image.srcset;
  const replacement = replacementFor(currentValue) || responsiveReplacementFor(currentValue);
  if (!replacement) {
    for (const [source, alt] of imageAltMap) {
      if (currentValue?.includes(source)) image.alt = alt;
    }
    return;
  }
  const variants = responsiveImageVariants.get(replacement);
  if (variants) {
    const stem = replacement.slice(0, -".webp".length);
    const candidates = [
      ...variants.widths.map((width) => `${stem}-${width}.webp ${width}w`),
      ...(variants.fullWidth ? [`${replacement} ${variants.fullWidth}w`] : []),
    ];
    image.setAttribute("srcset", candidates.join(", "));
  }
  image.src = replacement;
  if (replacement === "/pren/images/hero-city.webp") {
    image.loading = "eager";
    image.fetchPriority = "high";
  }
}

function normalizedInternalHref(link) {
  const rawHref = link.getAttribute("href");
  if (!rawHref) return null;
  let candidate = rawHref;
  if (candidate === "." || candidate === "./") candidate = "/";
  else if (candidate.startsWith("./")) candidate = `/${candidate.slice(2)}`;
  else if (!candidate.startsWith("/")) return null;

  const url = new URL(candidate, location.origin);
  const routePath = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
  if (internalPagePaths.has(routePath)) url.pathname = `${routePath}/`;
  const normalized = `${url.pathname}${url.search}${url.hash}`;
  return normalized === rawHref ? null : normalized;
}

function normalizeInternalLink(link) {
  const normalized = normalizedInternalHref(link);
  if (normalized) link.setAttribute("href", normalized);
}

function enhanceContactForm(form) {
  if (enhancedForms.has(form)) return;
  const name = form.elements.namedItem("Name");
  const email = form.elements.namedItem("Email");
  const subject = form.elements.namedItem("Subject");
  const message = form.elements.namedItem("Message");
  if (!name || !email || !subject || !message) return;

  enhancedForms.add(form);
  form.id = "contact-form";
  form.dataset.prenDelivery = "email-draft";

  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = submit?.querySelector("p");
  if (submitLabel) submitLabel.textContent = "Continue to email";

  if (!form.querySelector(".pren-form-note")) {
    const note = document.createElement("p");
    note.className = "pren-form-note";
    note.id = "pren-form-note";
    note.textContent = "Opens your email app with these details ready to send.";
    submit?.parentElement?.insertAdjacentElement("afterend", note);
  }

  if (new URLSearchParams(location.search).get("subject") === "demo") {
    subject.value = "Demo request";
    subject.dispatchEvent(new Event("input", { bubbles: true }));
    subject.dispatchEvent(new Event("change", { bubbles: true }));
  }

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const data = new FormData(form);
      const selectedSubject = String(data.get("Subject") || "General inquiry");
      const company = String(data.get("Company") || "").trim();
      const body = [
        `Name: ${String(data.get("Name") || "").trim()}`,
        `Email: ${String(data.get("Email") || "").trim()}`,
        ...(company ? [`Company: ${company}`] : []),
        `Request: ${selectedSubject}`,
        "",
        String(data.get("Message") || "").trim(),
      ].join("\n");
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(`Pren — ${selectedSubject}`)}&body=${encodeURIComponent(body)}`;
      form.dataset.prenMailtoHref = mailto;
      window.location.href = mailto;
    },
    true,
  );
}

function enhanceFaq(element) {
  const lines = element.innerText.split("\n").map((line) => line.trim()).filter(Boolean);
  const question = lines[0];
  if (!faqQuestions.has(question)) return;
  element.setAttribute("role", "button");
  const isExpanded = element.getAttribute("data-framer-name") === "Open"
    || (element.getAttribute("data-framer-name") !== "Closed" && lines.length > 1);
  element.setAttribute("aria-expanded", String(isExpanded));
  if (enhancedFaqs.has(element)) return;
  enhancedFaqs.add(element);
  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    element.click();
  });
}

function ensureEvidenceSource() {
  const problem = document.querySelector('[data-framer-name="Problem"]');
  if (!problem || problem.querySelector(".pren-evidence-source")) return;
  const source = document.createElement("p");
  source.className = "pren-evidence-source";
  source.append("Source: ");
  const link = document.createElement("a");
  link.href = evidenceSourceUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Access Hospitality, AI in Hospitality 2025";
  source.append(link, ". UK & Ireland figures.");
  problem.append(source);
}

function updateEvidenceStats() {
  const stats = [
    ["Stat Card 1", "286 hrs", "lost per manager each year switching between disconnected systems"],
    ["Stat Card 2", "13%", "of operating costs lost to inefficiencies from unconnected software"],
    ["Stat Card 3", "60%", "of operators report incomplete or unreliable data"],
    ["Stat Card 4", "56%", "of operators miss upsell opportunities because of stock shortages"],
  ];
  for (const [name, metric, detail] of stats) {
    const card = document.querySelector(`[data-framer-name="${name}"]`);
    if (!card) continue;
    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");
    if (heading && heading.textContent.trim() !== metric) heading.textContent = metric;
    if (paragraph && paragraph.textContent.trim() !== detail) paragraph.textContent = detail;
  }
}

function updateMetadata() {
  const routePath = location.pathname.length > 1 ? location.pathname.replace(/\/$/, "") : location.pathname;
  const metadata = routeMetadata.get(routePath);
  if (!metadata) return;
  const [title, description] = metadata;
  document.title = title;
  const values = [
    ['meta[name="description"]', description],
    ['meta[property="og:title"]', title],
    ['meta[property="og:description"]', description],
    ['meta[name="twitter:title"]', title],
    ['meta[name="twitter:description"]', description],
  ];
  for (const [selector, content] of values) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", content);
  }
}

function markMainLandmark() {
  if (document.querySelector("main,[role=main]")) return;
  const layout = document.querySelector("#main [data-layout-template]");
  const page = [...(layout?.children || [])].find(
    (element) => element.querySelector?.("h1") && element.getAttribute("data-framer-name") !== "FinalCTA",
  );
  if (page) page.setAttribute("role", "main");
}

function refine(root = document) {
  rebrandText(root);

  const elementRoot = root.nodeType === Node.ELEMENT_NODE ? root : document;
  const queryIncludingRoot = (selector) => {
    const matches = elementRoot.matches?.(selector) ? [elementRoot] : [];
    return [...matches, ...(elementRoot.querySelectorAll?.(selector) || [])];
  };

  for (const element of queryIncludingRoot(hiddenSelectors)) {
    element.hidden = true;
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("tabindex", "-1");
  }

  for (const image of queryIncludingRoot("img")) rewriteImage(image);

  for (const option of queryIncludingRoot('option[value="Press inquiry"]')) option.remove();

  for (const link of queryIncludingRoot('#contact a[href^="mailto:"], a[href="mailto:hello@pren.com"], a[href="mailto:support@pren.com"]')) {
    link.setAttribute("href", `mailto:${contactEmail}`);
  }

  for (const link of queryIncludingRoot("a[href]")) {
    normalizeInternalLink(link);
    if (link.innerText.trim() === "Book a demo") {
      link.setAttribute("href", demoPath);
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
    if (link.getAttribute("href")?.includes("/services/spatial-reasoning")) {
      link.setAttribute("href", "/services/booking-engine");
      const text = [...link.querySelectorAll("p,a")].find((element) => element.textContent.trim() === "Spatial");
      if (text) text.textContent = "Booking engine";
    }
  }

  for (const element of queryIncludingRoot("a [tabindex], button [tabindex]")) {
    element.removeAttribute("tabindex");
  }

  for (const logo of queryIncludingRoot('[data-framer-name^="Pren-logo"]')) {
    logo.setAttribute("role", "img");
    logo.setAttribute("aria-label", "Pren");
    logo.closest("a")?.setAttribute("aria-label", "Pren home");
  }

  for (const footer of queryIncludingRoot("footer")) {
    const logo = footer.querySelector("a.framer-1043yku");
    if (logo) {
      logo.classList.add("pren-footer-wordmark");
      logo.setAttribute("aria-label", "Pren home");
    }
  }

  for (const form of queryIncludingRoot("form")) enhanceContactForm(form);
  for (const faq of queryIncludingRoot('[data-framer-name="Closed"], [data-framer-name="Open"], [role="button"]')) {
    enhanceFaq(faq);
  }

  const spatialHeading = [...queryIncludingRoot("h2")].find(
    (heading) => heading.textContent.trim() === "Pren Spatial",
  );
  const spatialSection = spatialHeading?.closest("section");
  const spatialLabel = [...(spatialSection?.querySelectorAll("p") || [])].find(
    (paragraph) => paragraph.textContent.trim() === "POS",
  );
  if (spatialLabel) spatialLabel.textContent = "SPATIAL";

  for (const link of queryIncludingRoot("nav a[href], footer a[href]")) {
    const url = new URL(link.href, location.href);
    const linkPath = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    const pagePath = location.pathname.length > 1 ? location.pathname.replace(/\/$/, "") : location.pathname;
    if (url.origin === location.origin && linkPath === pagePath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }

  ensureEvidenceSource();
  updateEvidenceStats();
  updateMetadata();
  markMainLandmark();
}

document.addEventListener(
  "click",
  (event) => {
    if (event.defaultPrevented) return;
    if (event instanceof MouseEvent && (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
      return;
    }
    const link = event.target.closest?.("a[href]");
    if (!link || link.hasAttribute("download") || link.target === "_blank") return;
    const url = new URL(normalizedInternalHref(link) || link.href, location.href);
    if (url.protocol !== "http:" && url.protocol !== "https:") return;
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(url.href);
  },
  true,
);

let scheduled = false;
const observer = new MutationObserver((mutations) => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    for (const mutation of mutations) {
      const mutationElement = mutation.target.nodeType === Node.ELEMENT_NODE
        ? mutation.target
        : mutation.target.parentElement;
      const faq = mutationElement?.closest?.('[role="button"]');
      if (faq) enhanceFaq(faq);
      if (mutation.type === "characterData") refine(mutation.target.parentElement || document);
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) refine(node);
        else if (node.nodeType === Node.TEXT_NODE && node.parentElement) refine(node.parentElement);
      }
    }
  });
});

function startRefinement() {
  refine();
  observer.observe(document.documentElement, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}

// Framer hydrates asynchronously after window.load. Refining the DOM before that
// boundary creates recoverable React mismatches, so enhancement starts once the
// initial motion tree has settled.
const refinementDelay = 200;
if (document.readyState === "complete") {
  setTimeout(startRefinement, refinementDelay);
} else {
  window.addEventListener("load", () => setTimeout(startRefinement, refinementDelay), { once: true });
}
