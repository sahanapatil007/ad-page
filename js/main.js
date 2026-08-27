document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);

  const lenis = new Lenis({
    autoRaf: false,
    smoothWheel: true,
    lerp: 0.1,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  const resumeScroll = () => {
    if (document.body.classList.contains("lead-open") || document.body.classList.contains("menu-open")) return;
    lenis.start();
    lenis.resize();
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") resumeScroll();
  });
  window.addEventListener("focus", resumeScroll);
  window.addEventListener("pageshow", resumeScroll);

  const sticky = document.querySelector(".sticky-header");
  lenis.on("scroll", ({ scroll }) => {
    if (!sticky) return;
    sticky.classList.toggle("is-visible", scroll > 80);
  });

  const menuBtns = document.querySelectorAll("[data-open-menu]");
  const closeBtns = document.querySelectorAll("[data-close-menu]");
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    lenis.stop();
  };
  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    if (!document.body.classList.contains("lead-open")) lenis.start();
  };
  menuBtns.forEach((btn) => btn.addEventListener("click", openMenu));
  closeBtns.forEach((btn) => btn.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (document.querySelector(".lead-popup.is-open")) return;
    if (mobileMenu && mobileMenu.classList.contains("is-open")) closeMenu();
  });
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (a.getAttribute("href") && a.getAttribute("href") !== "#") closeMenu();
      });
    });
  }

  const reviewEl = document.querySelector(".review-video-swiper");
  let reviewSwiper = null;
  if (reviewEl) {
    const wrapper = reviewEl.querySelector(".swiper-wrapper");
    const originals = [...wrapper.querySelectorAll(".swiper-slide")];
    for (let i = 0; i < 5; i += 1) {
      originals.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        wrapper.appendChild(clone);
      });
    }
    reviewSwiper = new Swiper(reviewEl, {
        slidesPerView: "auto",
        spaceBetween: 28,
        loop: true,
      loopAdditionalSlides: 8,
      speed: 7000,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
    });
    reviewSwiper.autoplay?.start();
  }

  document.querySelectorAll(".review-video-card").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    const toggle = () => {
      if (video.paused) {
        document.querySelectorAll(".review-video-card video").forEach((other) => {
          if (other !== video) other.pause();
        });
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    card.addEventListener("click", (e) => {
      e.preventDefault();
      toggle();
    });
    video.addEventListener("play", () => {
      card.classList.add("is-playing");
      reviewSwiper?.autoplay?.stop();
    });
    video.addEventListener("pause", () => {
      card.classList.remove("is-playing");
      const anyPlaying = [...document.querySelectorAll(".review-video-card video")].some((v) => !v.paused);
      if (!anyPlaying) reviewSwiper?.autoplay?.start();
    });
    video.addEventListener("ended", () => {
      card.classList.remove("is-playing");
      reviewSwiper?.autoplay?.start();
    });
  });

  const testimonialEl = document.querySelector(".testimonial-swiper");
  if (testimonialEl) {
    const originals = [...testimonialEl.querySelectorAll(".swiper-slide")];
    originals.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      testimonialEl.querySelector(".swiper-wrapper").appendChild(clone);
    });
    new Swiper(".testimonial-swiper", {
      slidesPerView: "auto",
      spaceBetween: 28,
      loop: true,
      speed: 8000,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
    });
  }

  document.querySelectorAll("[data-counter]").forEach((el) => {
    const end = Number(el.dataset.counter);
    const decimals = (String(el.dataset.counter).split(".")[1] || "").length;
    const obj = { val: decimals ? 0 : 1 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = decimals ? obj.val.toFixed(decimals) : String(Math.floor(obj.val));
          },
        });
      },
    });
  });

  gsap.utils.toArray(".js-fade").forEach((el) => {
    const y = Number(el.dataset.y || 50);
    const delay = Number(el.dataset.delay || 0);
    gsap.from(el, {
      y,
      opacity: 0,
      duration: Number(el.dataset.dur || 0.75),
      delay,
      ease: el.dataset.ease || "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  const leadPopup = document.querySelector(".lead-popup");
  const openLeadPopup = () => {
    if (!leadPopup || sessionStorage.getItem("buildabo-lead-dismissed") === "1") return;
    if (mobileMenu && mobileMenu.classList.contains("is-open")) closeMenu();
    document.querySelectorAll(".review-video-card video").forEach((video) => video.pause());
    leadPopup.classList.add("is-open");
    leadPopup.setAttribute("aria-hidden", "false");
    document.body.classList.add("lead-open");
    lenis.stop();
    window.setTimeout(() => leadPopup.querySelector("input, select, textarea")?.focus(), 50);
  };
  const closeLeadPopup = (dismiss) => {
    if (!leadPopup) return;
    leadPopup.classList.remove("is-open");
    leadPopup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lead-open");
    if (!document.body.classList.contains("menu-open")) lenis.start();
    if (dismiss) sessionStorage.setItem("buildabo-lead-dismissed", "1");
  };
  if (leadPopup) {
    leadPopup.querySelectorAll("[data-close-lead]").forEach((el) => {
      el.addEventListener("click", () => closeLeadPopup(true));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && leadPopup.classList.contains("is-open")) closeLeadPopup(true);
    });
    if (sessionStorage.getItem("buildabo-lead-dismissed") !== "1") {
      window.setTimeout(openLeadPopup, 10000);
    }
  }

  document.querySelectorAll(".contact-form").forEach((form) => {
    const status = form.querySelector(".contact-form-status");
    const submit = form.querySelector(".contact-submit");
    const isPopup = Boolean(form.closest(".lead-popup"));

    function setStatus(message, isError, asHtml) {
      if (!status) return;
      status.hidden = false;
      status.classList.toggle("is-error", Boolean(isError));
      if (asHtml) status.innerHTML = message;
      else status.textContent = message;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      data.set("form-name", "enquiry");
      data.set("subject", `${isPopup ? "Popup enquiry from" : "Ad landing enquiry from"} ${name || "the website"}`);
      ["_subject", "_replyto", "_template", "_captcha", "_honey"].forEach((key) => data.delete(key));

      if (submit) submit.disabled = true;
      setStatus("Sending your enquiry…", false);

      try {
        const body = new URLSearchParams(data).toString();
        const headers = { "Content-Type": "application/x-www-form-urlencoded" };
        let sent = false;
        let needsActivation = false;

        try {
          const phpRes = await fetch("send-enquiry.php", { method: "POST", headers, body });
          if (phpRes.ok) {
            const result = await phpRes.json().catch(() => ({}));
            sent = result.success === true;
          }
        } catch (err) {}

        if (!sent) {
          try {
            const netlifyRes = await fetch("/", { method: "POST", headers, body });
            sent = netlifyRes.ok;
          } catch (err) {}
        }

        if (!sent) {
          const fsRes = await fetch("https://formsubmit.co/ajax/info@buildabo.in", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name,
              phone,
              email,
              "Project type": String(data.get("interest") || ""),
              Budget: String(data.get("budget") || ""),
              Location: String(data.get("location") || ""),
              message: String(data.get("message") || ""),
              _subject: String(data.get("subject") || `Project enquiry from ${name}`),
              _template: "table",
              _captcha: "false",
            }),
          });
          const fsResult = await fsRes.json().catch(() => ({}));
          if (fsResult.success === true || fsResult.success === "true") sent = true;
          else needsActivation = /activ/i.test(String(fsResult.message || ""));
        }

        if (!sent) throw new Error(needsActivation ? "ACTIVATE" : "Could not send");
        form.reset();
        setStatus("Thanks. Your enquiry has been sent. We’ll reply within 24 hours.", false);
        if (isPopup) {
          sessionStorage.setItem("buildabo-lead-dismissed", "1");
          window.setTimeout(() => closeLeadPopup(true), 1400);
        }
      } catch (err) {
        const waText = encodeURIComponent(
          `Hi buildabo, I'm ${name || "a website visitor"}. ${phone ? "Phone: " + phone + ". " : ""}${email ? "Email: " + email + ". " : ""}I'd like to talk about a project.`
        );
        const fallback =
          'Email <a href="mailto:info@buildabo.in">info@buildabo.in</a>, WhatsApp <a href="https://wa.me/919663635559?text=' +
          waText +
          '">9663635559</a>, or call <a href="tel:+919663635559">9663635559</a>.';
        if (err && err.message === "ACTIVATE") {
          setStatus(
            "Open the inbox for <a href=\"mailto:info@buildabo.in\">info@buildabo.in</a> and click FormSubmit’s <strong>Activate Form</strong> link (check spam). Then submit this form again. Until then, " +
              fallback,
            true,
            true
          );
        } else {
          setStatus("We couldn’t send that just now. " + fallback, true, true);
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });

  ScrollTrigger.addEventListener("refresh", () => lenis.resize());
  ScrollTrigger.refresh();
  window.addEventListener("load", () => {
    lenis.resize();
    ScrollTrigger.refresh();
  });
});
