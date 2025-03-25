import { RefObject } from "react";
import styles from "./BackToTop.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BackToTop({
  scrollToElementRef,
  scrollOptions,
}: {
  scrollToElementRef: RefObject<null | HTMLDivElement>;
  scrollOptions: ScrollOptions;
}) {
  return (
    <Link
      href="#"
      className={styles.backToTop}
      onClick={(e) => {
        e.preventDefault();
        scrollToElementRef?.current?.scrollIntoView(scrollOptions);
      }}
    >
      Back to top
      <Image
        className={styles.caret}
        src="/caret.svg"
        width={20}
        height={20}
        alt="up arrow"
      ></Image>
    </Link>
  );
}
