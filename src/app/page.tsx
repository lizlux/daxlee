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
        <Image
          className={styles.mastheadImage}
          src="/Dax_Lee_Portrait_500.jpeg"
          alt="Image of Dax Lee"
          width={500}
          height={333}
          priority
        />
        <span className={styles.tree1}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <nav className={styles.nav}>
          <ul>
            {/* TODO: turn this into actual page navigation with routing */}
            {/*
              Clicking a nav link will auto-scroll the page to a specific y point
              as described by the top y coordinate of the div with the content
            */}
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
              onClick={() => techElemRef.current?.scrollIntoView(scrollOptions)}
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
