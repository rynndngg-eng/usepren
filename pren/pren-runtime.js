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
const bookingUrl = "https://cal.com/ryandeng/30min";
const demoPath = "/contact/?subject=demo";
const routeMetadata = new Map([
  [
    "/cookie-declaration",
    [
      "Cookie Declaration | Pren",
      "Review the cookies and tracking technologies used on the Pren website."
    ]
  ],
  [
    "/legal",
    [
      "Terms & Privacy | Pren",
      "Review Pren’s terms, privacy commitments, and service policies."
    ]
  ],
  [
    "/legal/dpa",
    [
      "Data Processing Agreement | Pren",
      "Review Pren’s data processing terms and privacy commitments."
    ]
  ],
  [
    "/legal/privacy",
    [
      "Privacy Policy | Pren",
      "Review how Pren handles personal information."
    ]
  ],
  [
    "/legal/terms",
    [
      "Terms of Service | Pren",
      "Review Pren’s published software terms. Finance services are governed by your written engagement."
    ]
  ],
  [
    "/legal/cookies",
    [
      "Cookie Policy | Pren",
      "Review how cookies are used on the Pren website."
    ]
  ],
  [
    "/legal/support",
    [
      "Support Terms | Pren",
      "Review Pren’s published software support terms."
    ]
  ],
  [
    "/legal/service-description",
    [
      "Service Description | Pren",
      "Service scope is set out in your written engagement with Pren."
    ]
  ],
  [
    "/",
    [
      "Pren | Accounting and Back Office for Startups",
      "Accounting, taxes, payroll, and financial operations for startups. Intelligent software and expert judgment, so founders can focus on building."
    ]
  ],
  [
    "/about",
    [
      "About Pren | Built for Startup Founders",
      "We’re building the accounting and back-office firm for startups, combining intelligent software and financial expertise to give founders their time back."
    ]
  ],
  [
    "/contact",
    [
      "Contact Pren | Startup Accounting and Back Office",
      "Talk with Pren about accounting, taxes, payroll, and financial operations for your startup. Tell us what you’re building and what you want taken off your plate."
    ]
  ],
  [
    "/services/accounting",
    [
      "Startup Accounting | Pren",
      "Accounting for startups, with books, reconciliations, and financial context kept together as your company grows."
    ]
  ],
  [
    "/services/taxes",
    [
      "Startup Taxes | Pren",
      "Year-round tax preparation for startups. Connect accounting, company changes, and supporting records before filing season."
    ]
  ],
  [
    "/services/payroll",
    [
      "Startup Payroll | Pren",
      "Payroll and financial administration for growing startup teams, connected to accounting and company changes."
    ]
  ],
  [
    "/services/financial-operations",
    [
      "Startup Financial Operations | Pren",
      "A team to carry startup financial work through: bills, documents, requests, and the changes behind your numbers."
    ]
  ],
  [
    "/services/fundraising-readiness",
    [
      "Startup Fundraising Readiness | Pren",
      "Keep financial records, supporting documents, and reporting connected as your startup prepares for funding and diligence."
    ]
  ]
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
  "/services/taxes",
  "/services/fundraising-readiness",
  "/services/financial-operations",
  "/services/payroll",
  "/services/accounting",
]);
const faqQuestions = new Set([
  "What is Pren?",
  "How does onboarding work?",
  "What will I need to approve?",
  "Do I need to change my systems?",
  "How do you handle sensitive data?",
  "How is Pren priced?"
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
  [
    "LWciQDs2HSYMOqmf3HLdZvk06c.webp",
    "Illustrative Pren finance overview with cash, runway, reconciled transactions and completed work for Meridian Labs, a demo company."
  ],
  [
    "hotel-lobby.webp",
    "ASCII-inspired San Francisco cityscape with fine burgundy and sage connections on ivory."
  ],
  [
    "Ww9LkYSQAjxEExdqEAsfzDTIA0.webp",
    "Concept preview of Pren completing monthly books, reconciliation, payroll matching, and tax workpapers for a demo company."
  ],
  [
    "fWp9FKS85PU5vtVRYVAY8ADH0uA.png",
    "Concept preview of Pren asking one final accounting question with month choices and a voice response option."
  ],
  [
    "dC5dMS42UXlHYGRD9KyKsNbGrw.png",
    "Demo monthly close calendar showing reconciled accounts, reviewed books, and completed reporting."
  ],
  [
    "mCUOZqVUTUKsNa7OlHF3cJuLGU.webp",
    "Demo reconciled transaction ledger with source accounts, matched records, and clear transaction amounts."
  ],
  [
    "V54DaVSxovypi2LjFdicj3SFW0E.webp",
    "Illustrative Pren tax workspace showing year-round preparation for a demo startup."
  ],
  [
    "rKVQbzNt0rRY6xA3AgOx69hnnWk.webp",
    "Concept preview of Pren coordinating financial work after a new hire, a funding round, and customer revenue."
  ],
  [
    "QLvbVlBnGT9ntr01Cm54TD7yk.webp",
    "Concept preview of Pren accounting showing reconciled books, cash, burn, and runway for a demo company."
  ],
  [
    "DGOVFpht4IqhBz3HRXktXc0U.png",
    "Demo accounting expert review queue showing funding, revenue, and payroll issues resolved."
  ],
  [
    "4YpZ1YfWJPmjwAFFEpmR9PrJAo.png",
    "Demo payroll tax filing review with employee withholding and employer tax deposits reconciled."
  ],
  [
    "Rr3k2PXdBPO5sHi3BttPInFarI.webp",
    "Illustrative Pren operations workspace with a prepared invoice approval for a demo startup."
  ],
  [
    "vn9HeULEJp3lucqM0Q5vrsL2zc.webp",
    "Illustrative Pren investor workspace with financial records for a demo startup."
  ],
  [
    "lupgq0BeZV6tgxwWUi3z3UMXOc.webp",
    "Illustrative Pren payroll workspace showing payroll review and connected records for a demo startup."
  ],
  [
    "gDm70WXMWcIuEY0N6CM0rQFU1g.jpg",
    "ASCII illustration of founders working beside a large studio window overlooking a city."
  ],
  [
    "loq5tkwhJVMwjgpMM3UNtJupW8s.png",
    "Concept preview of a founder asking Pren about a new hire and receiving confirmation that the financial follow-through is handled."
  ],
  [
    "GgngolLn2Hb2Ewb0JvHi05vEQs.webp",
    "Concept preview of a founder asking Pren about a new hire and receiving confirmation that the financial follow-through is handled."
  ],
  [
    "3pvA4LbOKtcpetJKZdJ4HZDX4.png",
    "Demo payroll cash movement chart showing net pay, tax deposits, benefits, and total company cost."
  ],
  [
    "4bxwGwXtm4SxLF8OIY2jhlkXA.png",
    "Demo tax preparation context showing company, state, payroll, and research records collected."
  ],
  [
    "iXKOCKIXAWtpopGyOkxipzyHS8.webp",
    "Demo funding round record showing a closed two million dollar SAFE and its supporting documents."
  ],
  [
    "n523GLZincajiNF1etm8ItFM8.webp",
    "Demo fundraising company financial profile with cash, burn, runway, and connected financial records."
  ],
  [
    "wF7rKm0VDM2QEsv055PsfCYen8.png",
    "Concept preview of a prepared payroll showing gross pay, employee withholding, net pay, and total company cost with an approval button."
  ],
  [
    "4pdANzgBsr6sC61JYNWg6KX92UU.png",
    "Concept preview of a prepared payroll showing gross pay, employee withholding, net pay, and total company cost with an approval button."
  ],
  [
    "vOjIBI6wK4JPl2NTAQQNwPEKtV4.png",
    "Concept preview of Pren fundraising readiness with financial statements, cash reporting, funding history, and supporting records prepared."
  ],
  [
    "nH2I2tCCtA8Hnz0k9unHthLQ3Rk.webp",
    "Demo company document vault with organized accounting, payroll, tax, and funding records."
  ],
  [
    "7aZtmBBEAZPvqEkyKgHbRll3Lao.png",
    "Concept preview of Pren tax preparation continuing throughout the year, with completed work leading to a final review."
  ],
  [
    "Rpqs93qsm0RFSJLkBfejwwnQAfg.webp",
    "Concept preview of Pren connecting bank activity, contracts, payroll, and funding records into one company context."
  ]
]);

const editorialCopy = new Map([
  [
    "LEGAL",
    "TERMS & PRIVACY"
  ],
  [
    "Legal",
    "Terms & privacy"
  ],
  [
    "Find Pren’s agreements, policies, and notices. Select a document to review the current version.",
    "Review Pren’s published policies and the terms that apply to your engagement."
  ],
  [
    "hello@pren.com",
    "rynndngg@gmail.com"
  ],
  [
    "support@pren.com",
    "rynndngg@gmail.com"
  ],
  [
    "Stockholm, Sweden",
    "San Francisco, CA"
  ],
  [
    "[Tap to discover]",
    "Explore service →"
  ],
  [
    "Send your message",
    "Continue to email"
  ],
  [
    "Lost in space",
    "Page not found"
  ],
  [
    "Back to Home",
    "Back to home"
  ],
  [
    "Built for exceptional hoteliers",
    "Built for exceptional founders"
  ],
  [
    "Helping exceptional hoteliers do their best work.",
    "Helping exceptional founders do their best work."
  ],
  [
    "We believe great hospitality is about being present with the guest, not spending time in front of a screen.",
    "Your time belongs to the company you’re building. The back office belongs with Pren."
  ],
  [
    "One operating system for the modern hotel. Helping exceptional hoteliers do their best work.",
    "The accounting and back-office firm for startups. Helping founders do their best work."
  ],
  [
    "The agentic operating system for hotels. Helping exceptional hoteliers do their best work.",
    "The accounting and back-office firm for startups. Helping founders do their best work."
  ],
  [
    "Property Management System (PMS)",
    "Accounting"
  ],
  [
    "The operating core that runs your entire property.",
    "Clear books that keep pace with your company."
  ],
  [
    "Turn your website into your best-converting sales channel.",
    "Year-round preparation for your next tax filing."
  ],
  [
    "Charge food, drinks, and retail straight to the room.",
    "The financial work behind a growing team."
  ],
  [
    "Timely, multilingual guest messaging across the journey.",
    "One team to keep the financial work moving."
  ],
  [
    "Pren is one operating system for the modern hotel. It coordinates routine operational work in the background and gives your team clear control over what runs automatically. The result is less administration and more time with guests.",
    "Pren is the accounting and back-office firm for startups. We bring intelligent software and financial expertise together across accounting, taxes, payroll, and financial operations, so founders can focus on building."
  ],
  [
    "How long does onboarding take?",
    "How does onboarding work?"
  ],
  [
    "Days, not months. We map your property, configure the core workflows, and work alongside your team through launch, with forward-deployed engineering support at no additional implementation charge.",
    "Connect your financial accounts, share your company records, and tell us what is already in motion. Pren brings it together, works through the open items, and takes over the ongoing financial work. We guide the setup and handle the follow-through."
  ],
  [
    "Does the AI act without my approval?",
    "What will I need to approve?"
  ],
  [
    "You decide. Routine work runs autonomously in the background, and anything that needs judgment is surfaced as a suggested action for your team to approve. Every action is visible, reviewable, and adjustable.",
    "The decisions that need you, with the work already prepared. Pren handles the recurring tasks, gathers the context, and works through routine questions. When your input is needed, review it in a short conversation and keep moving."
  ],
  [
    "Does Pren replace my existing systems?",
    "Do I need to change my systems?"
  ],
  [
    "Pren can replace your software stack or work alongside the systems you already use, integrating with leading hotel software. Over time it can take on more of your operation at the pace you choose.",
    "Pren is built around the financial tools startups already use, from Mercury and Rho to Stripe. We bring your financial activity together with company records and expert attention, so you have one team responsible for the work."
  ],
  [
    "Security is foundational to how Pren is built. Data is encrypted in transit and at rest, with strict role-based access controls and a full audit trail of every action the system takes. Your data always stays yours.",
    "Your financial information needs careful handling. Before connecting accounts, we walk through the information needed, who needs access, and the controls available for your company."
  ],
  [
    "Pricing is tailored to your property. Get in touch and we'll put together a proposal that fits how you operate.",
    "Pricing reflects your company’s stage, complexity, and the work you want us to own. Talk with us for a clear proposal covering the scope, onboarding, and ongoing service."
  ],
  [
    "Built to for enterprises. Your data will always be secure.",
    "Intelligent software does the recurring work. Financial experts bring judgment where it matters."
  ],
  [
    "See what Pren is doing and why, nothing happens without a clear trail.",
    "Know where things stand, what is complete, and what needs your decision."
  ],
  [
    "The system works ahead of you. Every action reviewable, every decision yours.",
    "The work has an owner, from the first document to the final filing or follow-up."
  ],
  [
    "The agentic operating system for hotels. Helping exceptional hoteliers do their best work.",
    "The accounting and back-office firm for startups. Helping founders do their best work."
  ],
  [
    "The system knows who your guests are prepares suggestions to make their stay truly personal.",
    "Keep financial records, supporting documents, and the story behind your numbers ready for your next round."
  ],
  [
    "One system for all your payments. Select from a wide variety of configurations for your need.",
    "Bring payroll, employee changes, and the books together, so growing your team creates less work for you."
  ],
  [
    "Create a bespoke booking experience for any type of booking to drive upsell and direct bookings.",
    "Keep tax preparation moving through the year, with the records and context already connected when it is time to file."
  ],
  [
    "From bookings to getting quotes from external vendors to book an event, Pren handles everything.",
    "From everyday transactions to a new hire or funding round, Pren connects the work and takes responsibility for seeing it through."
  ],
  [
    "Thanks to Spatial Reasoning, Pren can reason about the physical properties of a hotel.",
    "Every transaction has a story. Pren connects your accounts, contracts, payroll, and funding history, so the work starts with the context it needs."
  ],
  [
    "Pren is joining Entrepreneurs First  ·  Read the announcement →",
    "Accounting and back office for startups  ·  Meet Pren →"
  ],
  [
    "Pren is joining Entrepreneurs First  ·  Read the announcement →",
    "Accounting and back office for startups  ·  Meet Pren →"
  ]
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

const financeVisualFiles = new Set(["LWciQDs2HSYMOqmf3HLdZvk06c.webp", "Ww9LkYSQAjxEExdqEAsfzDTIA0.webp", "fWp9FKS85PU5vtVRYVAY8ADH0uA.png", "dC5dMS42UXlHYGRD9KyKsNbGrw.png", "mCUOZqVUTUKsNa7OlHF3cJuLGU.webp", "V54DaVSxovypi2LjFdicj3SFW0E.webp", "rKVQbzNt0rRY6xA3AgOx69hnnWk.webp", "QLvbVlBnGT9ntr01Cm54TD7yk.webp", "DGOVFpht4IqhBz3HRXktXc0U.png", "4YpZ1YfWJPmjwAFFEpmR9PrJAo.png", "Rr3k2PXdBPO5sHi3BttPInFarI.webp", "vn9HeULEJp3lucqM0Q5vrsL2zc.webp", "lupgq0BeZV6tgxwWUi3z3UMXOc.webp", "loq5tkwhJVMwjgpMM3UNtJupW8s.png", "GgngolLn2Hb2Ewb0JvHi05vEQs.webp", "3pvA4LbOKtcpetJKZdJ4HZDX4.png", "4bxwGwXtm4SxLF8OIY2jhlkXA.png", "iXKOCKIXAWtpopGyOkxipzyHS8.webp", "n523GLZincajiNF1etm8ItFM8.webp", "wF7rKm0VDM2QEsv055PsfCYen8.png", "4pdANzgBsr6sC61JYNWg6KX92UU.png", "vOjIBI6wK4JPl2NTAQQNwPEKtV4.png", "nH2I2tCCtA8Hnz0k9unHthLQ3Rk.webp", "7aZtmBBEAZPvqEkyKgHbRll3Lao.png", "Rpqs93qsm0RFSJLkBfejwwnQAfg.webp"]);

const financeAssetVersion = "pren-finance-20260909";

function versionedImageAsset(value) {
  const url = new URL(value, location.origin);
  url.searchParams.set("v", financeAssetVersion);
  return value.startsWith("/") ? `${url.pathname}${url.search}${url.hash}` : url.href;
}

function versionedImageSet(value) {
  return value.split(",").map((candidate) => {
    const [url, ...descriptor] = candidate.trim().split(/\s+/);
    return [versionedImageAsset(url), ...descriptor].join(" ");
  }).join(", ");
}

function rewriteImage(image) {
  const currentValue = image.currentSrc || image.src || image.srcset;
  if ([...imageAltMap.keys()].some((name) => currentValue?.includes(name))) {
    const source = image.getAttribute("src");
    const sourceSet = image.getAttribute("srcset");
    if (source && new URL(source, location.origin).searchParams.get("v") !== financeAssetVersion) {
      image.src = versionedImageAsset(source);
    }
    if (sourceSet && !sourceSet.includes(`v=${financeAssetVersion}`)) image.srcset = versionedImageSet(sourceSet);
  }
  if ([...financeVisualFiles].some((name) => currentValue?.includes(name))) image.style.objectFit = "contain";
  for (const [source, alt] of imageAltMap) {
    if (currentValue?.includes(source)) image.alt = alt;
  }
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
    image.setAttribute("srcset", versionedImageSet(candidates.join(", ")));
  }
  image.src = versionedImageAsset(replacement);
  if (replacement === "/pren/images/hero-city.webp") {
    // Cover fills a tall mobile hero from a wide photograph; choose enough pixels for its height.
    image.sizes = "(max-aspect-ratio: 3/2) 150vh, 100vw";
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

  const isDemoBooking = new URLSearchParams(location.search).get("subject") === "demo";
  enhancedForms.add(form);
  form.id = "contact-form";
  form.dataset.prenDelivery = isDemoBooking ? "calendar" : "email-draft";

  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = submit?.querySelector("p");
  if (submitLabel) submitLabel.textContent = isDemoBooking ? "Continue to booking" : "Continue to email";

  if (!form.querySelector(".pren-form-note")) {
    const note = document.createElement("p");
    note.className = "pren-form-note";
    note.id = "pren-form-note";
    note.textContent = isDemoBooking
      ? "Next, choose a time on Ryan's calendar."
      : "Opens your email app with these details ready to send.";
    submit?.parentElement?.insertAdjacentElement("afterend", note);
  }

  if (isDemoBooking) {
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
      if (isDemoBooking) {
        const booking = new URL(bookingUrl);
        booking.searchParams.set("name", String(data.get("Name") || "").trim());
        booking.searchParams.set("email", String(data.get("Email") || "").trim());
        booking.searchParams.set(
          "notes",
          [
            ...(company ? [`Company: ${company}`] : []),
            `Request: ${selectedSubject}`,
            "",
            String(data.get("Message") || "").trim(),
          ].join("\n"),
        );
        window.location.assign(booking.href);
        return;
      }
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
  const variant = element.getAttribute("data-framer-name");
  const isExpanded = variant === "Open" || variant === "Opened"
    || (variant !== "Closed" && lines.length > 1);
  element.setAttribute("aria-expanded", String(isExpanded));
  if (enhancedFaqs.has(element)) return;
  enhancedFaqs.add(element);
  // Framer's tap gesture supports Enter. Give Space the same keyboard path.
  element.addEventListener("keydown", (event) => {
    if (event.key !== " ") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.repeat) return;
    const keyboard = { key: "Enter", code: "Enter", keyCode: 13, bubbles: true, cancelable: true };
    element.dispatchEvent(new KeyboardEvent("keydown", keyboard));
    element.dispatchEvent(new KeyboardEvent("keyup", keyboard));
  }, true);
  element.addEventListener("keyup", (event) => {
    if (event.key !== " ") return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
}

function ensureServiceContext() {
  const problem = document.querySelector('[data-framer-name="Problem"]');
  if (!problem || problem.querySelector(".pren-evidence-source")) return;
  const context = document.createElement("p");
  context.className = "pren-evidence-source";
  context.textContent = "Accounting, taxes, payroll, and financial operations. Built around your startup.";
  problem.append(context);
}

function updateServiceStats() {
  const stats = [
  [
    "Stat Card 1",
    "1",
    "finance relationship for the entire back office"
  ],
  [
    "Stat Card 2",
    "12",
    "months of preparation, so tax season starts long before the deadline"
  ],
  [
    "Stat Card 3",
    "5",
    "connected services, from accounting and taxes to fundraising readiness"
  ],
  [
    "Stat Card 4",
    "One",
    "place to see the work, ask a question, and review what is ready"
  ]
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
      link.setAttribute("href", demoPath);
      const text = [...link.querySelectorAll("p,a")].find((element) => element.textContent.trim() === "Spatial");
      if (text) text.textContent = "Company context";
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
  for (const faq of queryIncludingRoot('[data-framer-name="Closed"], [data-framer-name="Open"], [data-framer-name="Opened"], [role="button"]')) {
    enhanceFaq(faq);
  }

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

  ensureServiceContext();
  updateServiceStats();
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
const pendingMutations = [];
const observer = new MutationObserver((mutations) => {
  pendingMutations.push(...mutations);
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    const batch = pendingMutations.splice(0);
    for (const mutation of batch) {
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
    attributes: true,
    attributeFilter: ["data-framer-name"],
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
