"use client";
import Header from "@components/Header";
import Posts from "@components/Posts";
import Products from "@components/Products";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      console.log('serviceWorker supported in browser')
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => console.log('serviceWorker registration', reg));
    }
  }, []);

  return (
    <main className="">
      <Header />
      <Posts />
      <Products />
    </main>
  );
}
