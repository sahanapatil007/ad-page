(function () {
  const SITE = "https://buildabo.in/";
  const MAP =
    "https://www.google.com/maps/search/?api=1&query=3rd+Floor+244+Kallumantapa+Horamavu+Bengaluru+560113";
  const MENU_ICON =
    '<svg width="23" height="13" viewBox="0 0 23 13" fill="none"><path d="M4.16 0H17.76V1H4.16V0Z" fill="black"/><path d="M0 6H22.13V7H0V6Z" fill="black"/><path d="M4.16 12H17.76V13H4.16V12Z" fill="black"/></svg>';

  function page(file) {
    return SITE + file;
  }

  function logo() {
    return (
      '<a href="' +
      SITE +
      '" class="logo" aria-label="buildabo — interior designers and home construction in Bangalore">' +
      '<img class="logo-mark" src="assets/logo-mark.png" alt="" />' +
      '<img class="logo-word" src="assets/buildabo.svg" alt="buildabo" />' +
      "</a>"
    );
  }

  function startBtn(extraClass) {
    return (
      '<a href="#enquiry" class="btn ' +
      extraClass +
      '"><span class="dot"></span><span>Start a Project</span><span class="dot"></span></a>'
    );
  }

  function desktopNav() {
    return (
      '<a href="' +
      page("index.html") +
      '">Home</a>' +
      '<a href="' +
      page("about.html") +
      '">About</a>' +
      '<a href="' +
      page("services.html") +
      '">Service</a>' +
      '<a href="' +
      page("portfolio.html") +
      '">Portfolio</a>' +
      '<a href="' +
      page("contact.html") +
      '">Contact us</a>'
    );
  }

  function stickyHTML() {
    return (
      '<header class="sticky-header">' +
      logo() +
      '<nav class="sticky-nav">' +
      desktopNav() +
      "</nav>" +
      '<div class="header-actions">' +
      startBtn("hidden sm:inline-flex") +
      '<button class="icon-btn lg:hidden" data-open-menu aria-label="Menu">' +
      MENU_ICON +
      "</button></div></header>"
    );
  }

  function mobileHTML() {
    return (
      '<div class="mobile-menu" aria-hidden="true">' +
      '<div class="mobile-menu-overlay" data-close-menu></div>' +
      '<nav class="mobile-menu-panel" aria-label="Menu">' +
      '<div class="mobile-menu-heading"><h2>Menu</h2></div>' +
      '<ul class="mobile-nav">' +
      "<li><a href=\"" +
      page("index.html") +
      '">Home</a></li>' +
      "<li><a href=\"" +
      page("about.html") +
      '">About</a></li>' +
      "<li><a href=\"" +
      page("services.html") +
      '">Service</a></li>' +
      "<li><a href=\"" +
      page("portfolio.html") +
      '">Portfolio</a></li>' +
      "<li><a href=\"" +
      page("contact.html") +
      '">Contact us</a></li>' +
      "</ul></nav></div>"
    );
  }

  function topHTML() {
    return (
      '<header class="site-header">' +
      '<div class="header-meta">' +
      '<a href="tel:+919663635559"><span></span>9663635559</a>' +
      '<a href="tel:+919663656669"><span></span>9663656669</a>' +
      '<a href="mailto:info@buildabo.in"><span></span>info@buildabo.in</a>' +
      "</div>" +
      logo() +
      '<div class="header-actions">' +
      startBtn("hidden md:inline-flex") +
      '<button class="icon-btn" data-open-menu aria-label="Menu">' +
      MENU_ICON +
      "</button></div></header>"
    );
  }

  function footerHTML() {
    return (
      '<footer class="site-footer" id="contact">' +
      '<div class="container-site">' +
      '<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-10">' +
      '<div class="max-w-xl">' +
      logo() +
      '<p class="mt-5 font-serif text-[22px] leading-snug text-[var(--plaster)]">Crafting homes and spaces that stand the test of time.</p>' +
      '<p class="mt-3 max-w-md">buildabo is a residential construction company in Bangalore. We offer home construction and work as home interior designers, from foundation to final finish.</p>' +
      "</div></div>" +
      '<div class="h-px bg-white/20 my-12"></div>' +
      '<div class="foot-grid">' +
      "<div>" +
      '<h6 class="!normal-case !tracking-normal !text-[22px] !mb-6 font-serif">interested in our projects<br />and design approach?</h6>' +
      startBtn("btn-white") +
      "</div>" +
      "<div><h6>NAVIGATION</h6><ul class=\"foot-list\">" +
      "<li><a href=\"" +
      page("index.html") +
      '">Home</a></li>' +
      "<li><a href=\"" +
      page("about.html") +
      '">About</a></li>' +
      "<li><a href=\"" +
      page("services.html") +
      '">Services</a></li>' +
      "<li><a href=\"" +
      page("portfolio.html") +
      '">Projects</a></li>' +
      "<li><a href=\"" +
      page("contact.html") +
      '">Contact</a></li>' +
      "</ul></div>" +
      "<div><h6>CONTACT</h6>" +
      '<p class="mb-1">Company Address</p>' +
      '<p class="mb-4"><a href="' +
      MAP +
      '">3rd Floor, 244,<br />Kallumantapa, Horamavu,<br />Bengaluru, Karnataka 560113</a></p>' +
      '<p class="mb-1">Email Us:</p>' +
      '<p class="mb-4"><a href="mailto:info@buildabo.in">info@buildabo.in</a></p>' +
      '<p class="mb-1">Call Us:</p>' +
      '<p><a href="tel:+919663635559">9663635559</a> / <a href="tel:+919663656669">9663656669</a></p>' +
      "</div></div>" +
      '<div class="foot-bottom">' +
      "<p>© 2026 buildabo. All rights reserved.</p>" +
      '<p><a href="' +
      page("privacy.html") +
      '">Privacy Policy</a></p>' +
      "</div></div></footer>"
    );
  }

  function mount(selector, html, fallbackSelector) {
    const slot = document.querySelector(selector);
    if (slot) {
      slot.outerHTML = html;
      return;
    }
    const existing = fallbackSelector ? document.querySelector(fallbackSelector) : null;
    if (existing) existing.outerHTML = html;
  }

  function init() {
    mount('[data-chrome="sticky"]', stickyHTML(), ".sticky-header");
    mount('[data-chrome="mobile"]', mobileHTML(), ".mobile-menu");
    mount('[data-chrome="top"]', topHTML(), ".site-header");
    mount('[data-chrome="footer"]', footerHTML(), ".site-footer");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
