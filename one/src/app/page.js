'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
    window.scrollTo(0, 0); // Scroll to the top of the page when navigating
  }
  return (
    <div className={styles.hero}>
      <h1>Hello</h1>
      <Link href="/login">Login</Link>
      <div>
        <button onClick={() => navigate("/login")}>Navigate to Login</button>
        <button onClick={() => navigate("/about")}>Navigate to About</button>
        <br />
        <br />
        <Link href="/about/aboutStudent">About Student</Link>
      </div>
    </div>
  );
}
