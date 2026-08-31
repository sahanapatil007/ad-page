(function () {
  const SITE = "https://tiny-cucurucho-17c5bd.netlify.app/";
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
      '<div class="foot-social">' +
      '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>' +
      '<a href="https://www.instagram.com/buildabo/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></a>' +
      '<a href="#" aria-label="Facebook"><svg viewBox="0 0 320 512" fill="currentColor" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>' +
      "</div>" +
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

    const heroNav = document.querySelector('[data-chrome="hero-nav"]') || document.querySelector(".hero-nav");
    if (heroNav) {
      heroNav.setAttribute("aria-label", "Primary");
      heroNav.innerHTML = desktopNav();
    }

    mount('[data-chrome="footer"]', footerHTML(), ".site-footer");
    injectWidgets();
    document.querySelectorAll('.foot-social a[href="#"]').forEach((a) => {
      a.addEventListener("click", (e) => e.preventDefault());
    });
  }

  const WA_HREF =
    "https://wa.me/919663635559?text=" +
    encodeURIComponent("Hi buildabo, I’d like to talk about a project in Bangalore.");

  function whatsappHTML() {
    return (
      '<a class="whatsapp-fab" href="' +
      WA_HREF +
      '" target="_blank" rel="noopener noreferrer" aria-label="Chat with buildabo on WhatsApp">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
      "</a>"
    );
  }

  function popupHTML() {
    return (
      '<div class="lead-popup" id="lead-popup" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="lead-popup-title">' +
      '<div class="lead-popup-backdrop" data-close-lead></div>' +
      '<div class="lead-popup-panel">' +
      '<button type="button" class="lead-popup-close" data-close-lead aria-label="Close">' +
      '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.6"/></svg>' +
      "</button>" +
      '<p class="lead-popup-kicker">Free consultation</p>' +
      '<h2 id="lead-popup-title">Tell us about your project</h2>' +
      "<p class=\"lead-popup-copy\">Share a few details and we’ll get back within 24 hours.</p>" +
      '<form class="contact-form" name="enquiry" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field">' +
      '<input type="hidden" name="form-name" value="enquiry" />' +
      '<input type="hidden" name="subject" value="New popup enquiry from buildabo.in" />' +
      '<p class="contact-honeypot" aria-hidden="true"><label>Leave blank <input type="text" name="bot-field" tabindex="-1" autocomplete="off" /></label></p>' +
      '<div class="contact-form-row">' +
      '<div class="contact-field"><label for="popup-name">Name</label><input id="popup-name" type="text" name="name" required maxlength="120" /></div>' +
      '<div class="contact-field"><label for="popup-phone">Phone</label><input id="popup-phone" type="tel" name="phone" required maxlength="20" /></div>' +
      "</div>" +
      '<div class="contact-field"><label for="popup-email">Email</label><input id="popup-email" type="email" name="email" required maxlength="120" /></div>' +
      '<div class="contact-field"><label for="popup-interest">Project type</label>' +
      '<select id="popup-interest" name="interest" required>' +
      '<option value="">Select...</option>' +
      '<option value="Residential build">Residential build</option>' +
      '<option value="Interior design">Interior design</option>' +
      '<option value="Renovation">Renovation</option>' +
      '<option value="Commercial fit-out">Commercial fit-out</option>' +
      '<option value="Other">Other</option>' +
      "</select></div>" +
      '<button type="submit" class="contact-submit">Request a callback</button>' +
      '<p class="contact-form-note">Or message us on WhatsApp — 9663635559.</p>' +
      '<p class="contact-form-status" role="status" aria-live="polite" hidden></p>' +
      "</form></div></div>"
    );
  }

  function injectWidgets() {
    if (document.querySelector(".whatsapp-fab")) return;
    document.body.insertAdjacentHTML("beforeend", whatsappHTML() + popupHTML());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
