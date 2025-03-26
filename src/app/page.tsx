"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import Link from "next/link";
import BackToTop from "./components/BackToTop";

export default function Home() {
  // elem refs for each div
  const techElemRef = useRef<HTMLDivElement | null>(null);
  const musicElemRef = useRef<HTMLDivElement | null>(null);
  const contactElemRef = useRef<HTMLDivElement | null>(null);
  const mastHeadElemRef = useRef<HTMLDivElement | null>(null);

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div ref={mastHeadElemRef} className={styles.mastheadContainer}>
          <Image
            className={styles.mastheadImage}
            src="/Dax_Lee_Portrait_500.jpeg"
            alt="Image of Dax Lee"
            width={500}
            height={333}
            priority
          />
          <nav className={styles.nav}>
            <ul>
              <li
                className={styles.navLink}
                onClick={() =>
                  musicElemRef.current?.scrollIntoView(scrollOptions)
                }
              >
                Music
              </li>
              <li
                className={styles.navLink}
                onClick={() =>
                  techElemRef.current?.scrollIntoView(scrollOptions)
                }
              >
                Tech
              </li>
              <li
                className={styles.navLink}
                onClick={() =>
                  contactElemRef.current?.scrollIntoView(scrollOptions)
                }
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div ref={musicElemRef} className={styles.feature}>
          <div className={styles.musicContainer}>
            <p>
              <b>Dax Lee</b> is a DJ and producer based in San Francisco. A
              regular at festivals like Glastonbury, Symbiosis, Rainbow Serpent,
              Love International, and Secret Garden Party, he&apos;s also played
              in clubs from Detroit to Ibiza.
            </p>
            <p>
              His global reach extends across the Pacific Rim, with performances
              in Tokyo, Tulum, and Sydney—including a massive New Year&apos;s
              Eve set on a boat in front of the Sydney Opera House and a
              headline slot at the official Field Day after-party.
            </p>
            <div className={styles.contactLinks}>
              <p>
                <Link target="_blank" href="https://soundcloud.com/daxleemusic">
                  soundcloud.com/daxleemusic
                </Link>
              </p>
            </div>
            <BackToTop scrollToElementRef={mastHeadElemRef}></BackToTop>
          </div>
        </div>
        <div ref={techElemRef} className={styles.feature}>
          <div className={styles.techContainer}>
            <p>
              <b>Dax Lee</b> is a seasoned software engineering leader with over
              20 years of experience building and scaling consumer and
              enterprise products. As CTO of Winning Group—one of Australia’s
              largest online retailers—he successfully doubled revenue within
              his first five years.
            </p>
            <p>
              Dax has led web, mobile, social, and VR development for top-tier
              brands including Disney, Intel, Facebook, and the United Nations.
              He is a proven technology leader and strategic advisor with a
              strong track record of driving growth through innovation, product
              management, and team leadership.
            </p>
            <div className={styles.contactLinks}>
              <p>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/daxlee/"
                >
                  linkedin.com/in/daxlee
                </Link>
              </p>
            </div>
            <BackToTop scrollToElementRef={mastHeadElemRef}></BackToTop>
          </div>
        </div>
        <div ref={contactElemRef} className={styles.feature}>
          <div className={styles.contactContainer}>
            <h1>Dax Lee</h1>
            <p>Let&apos;s create.</p>
            <br />
            <div className={styles.contactLinks}>
              <p>
                <Link
                  href="https://www.instagram.com/daxleemusic/"
                  target="_blank"
                >
                  @daxleemusic
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/daxlee/"
                >
                  linkedin.com/in/daxlee
                </Link>
              </p>
            </div>
            <BackToTop scrollToElementRef={mastHeadElemRef}></BackToTop>
          </div>
        </div>
      </main>
    </div>
  );
}
