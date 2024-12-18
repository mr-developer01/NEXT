"use client";
import Link from "next/link";
import React from "react";
import style from "./about.module.css";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/about" ? (
        <header className={style.navbar}>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/about">About</Link>
          <Link href="/about/aboutStudent">aboutStudent</Link>
          <Link href="/about/aboutTeacher">aboutTeacher</Link>
        </header>
      ) : (
        <header className={style.navbar}>
          <Link href="/">Home</Link>
          {/* <Link href="/about">About</Link> */}
          <Link href="/students">Students</Link>
        </header>
      )}

      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default layout;
