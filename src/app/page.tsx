"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {
  // elem refs for each div
  const techElemRef = useRef<HTMLDivElement | null>(null);
  const musicElemRef = useRef<HTMLDivElement | null>(null);
  const createElemRef = useRef<HTMLDivElement | null>(null);

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mastheadContainer}>
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
                  createElemRef.current?.scrollIntoView(scrollOptions)
                }
              >
                Create
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.featureContainer}>
          <div ref={musicElemRef} className={styles.musicContainer}>
            Music Music Music Music Music Music Music Music Music Music Music
            Music Music Music Music Music Music Music Music Music Music Music
            Music Music Music Music Music Music
          </div>
          <div ref={techElemRef} className={styles.techContainer}>
            Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech
            Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech
            Tech Tech Tech Tech Tech Tech
          </div>
          <div ref={createElemRef} className={styles.createContainer}>
            Create Create Create Create Create Create Create Create Create
            Create Create Create Create Create Create Create Create Create
            Create Create Create Create Create Create Create
          </div>
        </div>
      </main>
    </div>
  );
}
