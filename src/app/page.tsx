import Image from "next/image";
import styles from "./page.module.css";
import BookList from "./Containers/BooksList";

export default function Home() {
  return (
    <main className={styles.main}>
       <section>
        <h1>Books</h1>
        <BookList />
       </section>
    </main>
  );
}
