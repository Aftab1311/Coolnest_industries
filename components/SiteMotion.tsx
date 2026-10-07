"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type MotionDirection = "up" | "left" | "right" | "scale";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!main || reduceMotion.matches || !window.IntersectionObserver) {
      root.classList.remove("motion-ready");
      return;
    }

    const targets = new Set<HTMLElement>();
    const add = (element: Element | null, direction: MotionDirection, delay = 0, card = false) => {
      if (!(element instanceof HTMLElement) || targets.has(element)) return;
      element.dataset.motion = direction;
      if (card) element.dataset.motionCard = "";
      element.style.setProperty("--motion-delay", `${delay}ms`);
      targets.add(element);
    };

    const addAll = (selector: string, direction: MotionDirection, step = 0, card = false) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        add(element, direction, Math.min(index * step, 320), card);
      });
    };

    // Lead each page in from the side, then let the remaining sections reveal as they enter view.
    addAll("main .hero-eyebrow, main .page-hero h1, main .hero h1", "left", 90);
    addAll("main .hero-description, main .hero-actions, main .hero-proof, main .page-hero-inner > div:first-child > p:last-child", "left", 110);
    addAll("main .hero-visual-note, main .page-hero-art", "right", 110);

    addAll("main section:not(.hero):not(.page-hero) .section-label, main section:not(.hero):not(.page-hero) h2", "up", 55);
    addAll("main .center-intro, main .advantages-subtitle, main .heading-row > p, main .section-copy > p, main .sustainability-copy > p:not(.commitment-label), main .company-profile-heading > p, main .company-profile-strengths-heading", "up", 35);
    addAll("main .spotlight-visual, main .story-image, main .about-image, main .applications-image, main .company-profile-visual", "left");
    addAll("main .quality-image, main .sustainability-leaves, main .contact-card, main .contact-details", "right");

    const cardGrids = [
      ".featured-pads-grid",
      ".advantages-grid",
      ".feature-cards",
      ".category-grid",
      ".specs-grid",
      ".company-profile-principles",
      ".company-profile-strengths",
      ".founders-grid",
      ".story-badges",
      ".process-grid",
      ".applications-list",
      ".contact-steps",
      ".about-values",
      ".commitments",
      ".faq-list",
    ];

    cardGrids.forEach((selector) => {
      document.querySelectorAll(selector).forEach((grid) => {
        Array.from(grid.children).forEach((item, index) => {
          add(item, index % 2 === 0 ? "up" : "scale", Math.min(index * 65, 300), true);
        });
      });
    });

    addAll("main .cta-band .page-container > *, main .focus-grid > *, main .founders-commitment, .site-footer .footer-main > div", "up", 75);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            element.classList.add("has-revealed");
          } else {
            const bounds = entry.boundingClientRect;
            if (bounds.bottom < window.innerHeight * 0.08 || bounds.top > window.innerHeight * 0.92) {
              element.classList.remove("is-visible");
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((element) => observer.observe(element));
    const frame = requestAnimationFrame(() => root.classList.add("motion-ready"));

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.classList.remove("motion-ready");
      targets.forEach((element) => {
        delete element.dataset.motion;
        delete element.dataset.motionCard;
        element.style.removeProperty("--motion-delay");
        element.classList.remove("is-visible");
        element.classList.remove("has-revealed");
      });
    };
  }, [pathname]);

  return null;
}
