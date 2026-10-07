"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Direction = "up" | "left" | "right" | "card" | "scale";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const root = document.documentElement;
    let stop = () => {};

    const start = () => {
      stop();
      if (!media.matches || !("IntersectionObserver" in window)) return;

      const main = document.querySelector("main");
      if (!main) return;

      const targets = new Set<HTMLElement>();
      const add = (element: Element | null, direction: Direction, delay = 0) => {
        if (!(element instanceof HTMLElement) || targets.has(element)) return;
        element.dataset.motion = direction;
        element.style.setProperty("--motion-delay", `${Math.min(delay, 420)}ms`);
        targets.add(element);
      };

      main.querySelectorAll("section:not(.hero):not(.page-hero)").forEach((section) => {
        section.querySelectorAll(".section-label, h2, .center-intro, .advantages-subtitle, .heading-row > p").forEach((element, index) => {
          add(element, "up", index * 100);
        });
      });

      const reveal = (selector: string, direction: Direction, step = 0) => {
        document.querySelectorAll(selector).forEach((element, index) => add(element, direction, index * step));
      };

      reveal("main .spotlight-visual, main .story-image, main .about-image, main .applications-image, main .company-profile-visual", "left");
      reveal("main .quality-image, main .sustainability-leaves, main .contact-details", "right");
      reveal("main .section-copy > p, main .section-copy > .button-row, main .about-copy > p, main .about-copy > a, main .sustainability-copy > p, main .sustainability-copy > a, main .company-profile-heading > p, main .company-profile-strengths-heading, main .contact-card, main .founders-commitment", "up", 45);
      reveal("main .section-copy .check-list > *, main .story-badges > *, main .company-profile-strengths > *", "left", 70);

      const grids = [
        ".featured-pads-grid", ".advantages-grid", ".feature-cards",
        ".category-grid", ".specs-grid", ".company-profile-principles",
        ".process-grid", ".applications-list", ".contact-steps",
        ".about-values", ".commitments", ".founders-grid", ".faq-list",
      ];

      grids.forEach((selector) => {
        document.querySelectorAll(selector).forEach((grid) => {
          Array.from(grid.children).forEach((element, index) => {
            add(element, selector === ".advantages-grid" ? "scale" : "card", index * 100);
          });
        });
      });

      document.querySelectorAll(".focus-grid, .cta-band .page-container, .principle-band .page-container, .site-footer .footer-main").forEach((group) => {
        Array.from(group.children).forEach((element, index) => {
          add(element, index % 2 === 0 ? "left" : "right", index * 90);
        });
      });

      // Keep content already on screen visible while later sections wait to enter.
      targets.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight * 0.88) {
          element.classList.add("is-visible", "motion-skip");
        }
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      targets.forEach((element) => {
        if (!element.classList.contains("is-visible")) observer.observe(element);
      });
      root.classList.add("motion-ready");

      stop = () => {
        observer.disconnect();
        root.classList.remove("motion-ready");
        targets.forEach((element) => {
          delete element.dataset.motion;
          element.style.removeProperty("--motion-delay");
          element.classList.remove("is-visible", "motion-skip");
        });
      };
    };

    start();
    media.addEventListener("change", start);
    return () => {
      media.removeEventListener("change", start);
      stop();
    };
  }, [pathname]);

  return null;
}
