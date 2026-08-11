'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function GsapScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger after initial DOM render
    const ctx = gsap.context(() => {
      // 1. Hero Section Parallax & Scroll Fade
      const heroBg = document.querySelector('.hero-bg-img');
      const heroContent = document.querySelector('.hero-content-box');
      const heroScrollIndicator = document.querySelector('.hero-scroll-indicator');

      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 25,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroBg.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (heroContent) {
        gsap.to(heroContent, {
          y: -60,
          opacity: 0.2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: heroContent,
            start: 'center 40%',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (heroScrollIndicator) {
        gsap.to(heroScrollIndicator, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: heroScrollIndicator,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          },
        });
      }

      // 2. Reveal Articles & Cards on Scroll Down
      // `.slide` is excluded: the A-05 slider frames are <article> elements whose
      // transform is driven directly by scroll position. GSAP tweening y/opacity
      // on them overwrites that transform and parks every frame off-screen.
      const articles = gsap.utils.toArray('article:not(.slide), .gsap-reveal');
      articles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 3. Stagger Image Frames
      const imageFrames = gsap.utils.toArray('.img-cad-frame');
      imageFrames.forEach((frame) => {
        gsap.fromTo(
          frame,
          { scale: 0.95, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 3.5. Image Zoom & Color Reveal
      const zoomImages = gsap.utils.toArray('.scroll-zoom-img');
      zoomImages.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.25, filter: 'grayscale(100%)' },
          {
            scale: 1,
            filter: 'grayscale(0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top 95%',
              end: 'center 40%',
              scrub: true,
            },
          }
        );
      });

      // 4. Section Titles & Drawing Labels Reveal
      // The fixed header's nav links, logo wordmark and social icons are all
      // `.font-technical-label` too — without this exclusion they'd get the same
      // scroll-triggered opacity tween and fade out as you scroll back up past
      // the trigger point (toggleActions ends in "reverse").
      const titles = gsap.utils
        .toArray('h2, .font-technical-label')
        .filter((el) => !el.closest('header'));
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
